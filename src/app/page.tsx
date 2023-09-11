"use client";

import {
  DailyResponse,
  HourlyResponse,
  OpenAPI,
  WeatherForecastApIsService,
} from "@/client";
import { ClearDay, Rain, Snow, Sunrise, Sunset } from "@/icons/meteocons/all";
import {
  DayToDayWeather,
  WeatherCodeSVG,
  WeatherIconForDay,
  parseResponse,
} from "@/util/weather";
import { useEffect, useMemo, useState } from "react";
import { useGeolocation } from "react-use";
import usePromise from "react-use-promise";
import Qty from "js-quantities";
import Collapsible from "react-collapsible";

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

function HourlyInfo(props: { hourly: DayToDayWeather["hourly"] }): JSX.Element {
  const bgCss = isDateToday(props.hourly.time[0])
    ? "bg-base-100"
    : "bg-base-200";
  return (
    <div
      className={`flex mx-auto max-w-screen-lg items-center rounded-xl p-4 shadow-lg collapse border border-base-300 ${bgCss}`}
    >
      <div className="overflow-x-auto mx-auto w-full">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Time</th>
              <th>Feels</th>
              <th>Precipitation %</th>
              <th>Precipitation Amt</th>
              <th>Humidity</th>
              <th>Cloud Cover</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {[...Array(24).keys()].map((i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <WeatherCodeSVG
                          isDay={props.hourly.is_day[i]}
                          weatherCode={props.hourly.weathercode[i]}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">
                      {timeOfDay(props.hourly.time[i])}
                    </div>
                  </div>
                </td>
                <td>
                  {props.hourly.apparent_temperature[i]
                    .to("tempF")
                    .scalar.toFixed(0)}
                </td>
                <td>{props.hourly.precipitation_probability[i]}%</td>
                <td>
                  {props.hourly.precipitation[i].to("in").scalar.toFixed(2)}
                  &quot;
                </td>
                <td>{props.hourly.relativehumidity_2m[i]}%</td>
                <td>{props.hourly.cloudcover[i]}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DailyCard(props: DayToDayWeather): JSX.Element {
  const bgCss = isDateToday(props.time) ? "bg-base-100" : "bg-base-200";
  const precipitationSum = props.rainSum
    .add(props.showersSum)
    .add(props.snowfallSum);

  return (
    <Collapsible
      trigger={
        <div
          className={`flex mx-auto max-w-screen-lg items-center rounded-xl p-4 shadow-lg collapse border border-base-300 mt-4 ${bgCss}`}
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
                  {precipitationSum.to("in").scalar.toFixed(1)}&quot; over{" "}
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
      }
    >
      <HourlyInfo hourly={props.hourly} />
    </Collapsible>
  );
}

function DailySummaryCards(props: {
  numCards: number;
  parsedResponse: DayToDayWeather[];
}): JSX.Element {
  return (
    <div className="flex flex-col">
      {[...Array(props.numCards).keys()].map((i) => (
        <DailyCard key={i} {...props.parsedResponse[i]} />
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
        hourly: [
          "temperature_2m",
          "relativehumidity_2m",
          "dewpoint_2m",
          "apparent_temperature",
          "pressure_msl",
          "cloudcover",
          "cloudcover_low",
          "cloudcover_mid",
          "cloudcover_high",
          "windspeed_10m",
          "windspeed_80m",
          "windspeed_120m",
          "windspeed_180m",
          "winddirection_10m",
          "winddirection_80m",
          "winddirection_120m",
          "winddirection_180m",
          "windgusts_10m",
          "shortwave_radiation",
          "direct_radiation",
          "direct_normal_irradiance",
          "diffuse_radiation",
          "vapor_pressure_deficit",
          "evapotranspiration",
          "precipitation",
          "snowfall",
          "precipitation_probability",
          "rain",
          "showers",
          "snow_height",
          "visibility",
          "snow_depth",
          "is_day",
          "weathercode",
          "freezinglevel_height",
          "soil_temperature_0cm",
          "soil_temperature_6cm",
          "soil_temperature_18cm",
          "soil_temperature_54cm",
          "soil_moisture_0_1cm",
          "soil_moisture_1_3cm",
          "soil_moisture_3_9cm",
          "soil_moisture_9_27cm",
          "soil_moisture_27_81cm",
        ],
        timeformat: "unixtime",
        temperatureUnit: "fahrenheit",
        windspeedUnit: "mph",
        timezone: "auto",
      }),
    [geo.loading]
  );

  console.log(maybeWeather);
  return (
    <div>
      {maybeWeather != undefined && (
        <>
          <DailySummaryCards
            numCards={maybeWeather.daily!.time.length}
            parsedResponse={parseResponse(
              maybeWeather.daily!,
              maybeWeather.hourly!,
              maybeWeather.daily_units!,
              maybeWeather.hourly_units!
            )}
          />
        </>
      )}
    </div>
  );
}
