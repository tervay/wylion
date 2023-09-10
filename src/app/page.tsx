"use client";

import { DailyResponse, OpenAPI, WeatherForecastApIsService } from "@/client";
import { ClearDay, Rain, Sunrise, Sunset } from "@/icons/meteocons/all";
import { DayToDayWeather, WeatherIconForDay } from "@/util/weather";
import { useEffect, useMemo, useState } from "react";
import { useGeolocation } from "react-use";
import usePromise from "react-use-promise";
import Qty from "js-quantities";

OpenAPI.BASE = "https://api.open-meteo.com";

function isDateToday(date: Date): boolean {
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function timeOfDay(d: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(d);
}

function DailyCard(props: DayToDayWeather): JSX.Element {
  const bgCss = isDateToday(props.time) ? "bg-base-100" : "bg-base-200";
  const precipitationSum = props.rainSum
    .add(props.showersSum)
    .add(props.snowfallSum);

  return (
    <div
      className={`flex mx-auto max-w-screen-lg items-center rounded-xl p-4 shadow-lg collapse collapse-arrow border border-base-300 mb-4 ${bgCss}`}
      tabIndex={0}
    >
      <div className="flex-none h-12 w-12 items-center justify-center">
        <WeatherIconForDay {...props} />
      </div>

      <div className="flex-none pl-4 basis-1/4">
        <h2 className="font-semibold">{daysOfWeek[props.time.getDay()]}</h2>
        <p className="mt-2 text-sm text-gray-500">
          {new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
          }).format(props.time)}
        </p>
      </div>

      <div className="flex-none pl-4 basis-1/4">
        <h2 className="font-semibold">
          {props.feelsMax.to("tempF").scalar.toFixed(0)}
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          {props.feelsMin.to("tempF").scalar.toFixed(0)}
        </p>
      </div>

      <div className="flex-none pl-4 basis-1/4">
        <h2 className="font-semibold">{props.precipitation_prob_mean}%</h2>
        <p className="mt-2 text-sm text-gray-500">
          {props.precipitationHours.lte(new Qty(0.25, "hr")) ? (
            ""
          ) : (
            <>
              {precipitationSum.to("in").scalar.toFixed(1)}" over{" "}
              {props.precipitationHours.to("h").scalar}hr
            </>
          )}
        </p>
      </div>

      <div className="flex-none basis-1/4">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="w-1/2 h-full">
              <Sunrise />
            </div>
            <div className="w-1/2 h-full pl-1">
              <div className="flex items-center h-full">
                <span className="h-full flex items-center whitespace-nowrap">
                  {timeOfDay(props.sunrise)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/2 h-full">
              <Sunset />
            </div>
            <div className="w-1/2 h-full pl-1">
              <div className="flex items-center h-full">
                <span className="h-full flex items-center whitespace-nowrap">
                  {timeOfDay(props.sunset)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DailySummaryCards(props: {
  numCards: number;
  daily: DailyResponse;
  units: Record<string, string>;
}): JSX.Element {
  return (
    <div className="flex flex-col">
      {[...Array(props.numCards).keys()].map((i) => (
        <DailyCard
          key={i}
          sunrise={new Date(props.daily.sunrise![i] * 1000)}
          sunset={new Date(props.daily.sunset![i] * 1000)}
          feelsMax={
            new Qty(
              props.daily.apparent_temperature_max![i],
              props.units.apparent_temperature_max.replace("°", "temp")
            )
          }
          feelsMin={
            new Qty(
              props.daily.apparent_temperature_min![i],
              props.units.apparent_temperature_min.replace("°", "temp")
            )
          }
          precipitationHours={
            new Qty(
              props.daily.precipitation_hours![i],
              props.units.precipitation_hours
            )
          }
          precipitation_prob_max={props.daily.precipitation_probability_max![i]}
          precipitation_prob_mean={
            props.daily.precipitation_probability_mean![i]
          }
          precipitation_prob_min={props.daily.precipitation_probability_min![i]}
          rainSum={new Qty(props.daily.rain_sum![i], props.units.rain_sum)}
          showersSum={
            new Qty(props.daily.showers_sum![i], props.units.showers_sum)
          }
          snowfallSum={
            new Qty(props.daily.snowfall_sum![i], props.units.snowfall_sum)
          }
          tempMax={
            new Qty(
              props.daily.temperature_2m_max![i],
              props.units.temperature_2m_max.replace("°", "temp")
            )
          }
          tempMin={
            new Qty(
              props.daily.temperature_2m_min![i],
              props.units.temperature_2m_min.replace("°", "temp")
            )
          }
          weathercode={props.daily.weathercode![i]}
          windDirection={
            new Qty(
              props.daily.winddirection_10m_dominant![i],
              props.units.winddirection_10m_dominant.replace("°", "deg")
            )
          }
          windGusts={
            new Qty(
              props.daily.windgusts_10m_max![i],
              props.units.windgusts_10m_max.replace("mp/h", "mph")
            )
          }
          windSpeed={
            new Qty(
              props.daily.windspeed_10m_max![i],
              props.units.windspeed_10m_max.replace("mp/h", "mph")
            )
          }
          time={new Date(Number(props.daily.time![i]) * 1000)}
        />
      ))}
    </div>
  );
}

export default function Page({ params }: { params: { zip: string } }) {
  const geo = useGeolocation();

  const [maybeWeather, err, status] = usePromise(
    () =>
      WeatherForecastApIsService.getV1Forecast({
        latitude: geo.latitude || 0,
        longitude: geo.longitude || 0,
        currentWeather: true,
        daily: [
          "apparent_temperature_max",
          "apparent_temperature_min",
          "precipitation_hours",
          "shortwave_radiation_sum",
          "sunrise",
          "sunset",
          "temperature_2m_max",
          "temperature_2m_min",
          "uv_index_clear_sky_max",
          "uv_index_max",
          "weathercode",
          "winddirection_10m_dominant",
          "windgusts_10m_max",
          "windspeed_10m_max",
          "precipitation_probability_max",
          "precipitation_probability_mean",
          "precipitation_probability_min",
          "snowfall_sum",
          "rain_sum",
          "showers_sum",
        ],
        timeformat: "unixtime",
        temperatureUnit: "fahrenheit",
        windspeedUnit: "mph",
        timezone: "auto",
      }),
    [geo.loading]
  );

  return (
    <div>
      {maybeWeather != undefined && (
        <>
          <DailySummaryCards
            numCards={maybeWeather.daily!.time.length}
            daily={maybeWeather.daily!}
            units={maybeWeather.daily_units!}
          />
        </>

        // <pre>{JSON.stringify(maybeWeather, undefined, 4)}</pre>
      )}
    </div>
  );
}
