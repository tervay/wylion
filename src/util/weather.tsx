import { DailyResponse, HourlyResponse } from "@/client";
import {
  ClearDay,
  ClearNight,
  Cloudy,
  Drizzle,
  Fog,
  Haze,
  Overcast,
  PartlyCloudyDay,
  Rain,
  Sleet,
  Snow,
  Thunderstorms,
} from "@/icons/meteocons/all";
import Qty from "js-quantities";
import { GeoLocationSensorState } from "react-use/lib/useGeolocation";
import { useFetch } from "use-http";

export interface DayToDayWeather {
  sunrise: Date;
  sunset: Date;
  tempMax: Qty;
  tempMin: Qty;
  feelsMax: Qty;
  feelsMin: Qty;
  rainSum: Qty;
  showersSum: Qty;
  snowfallSum: Qty;
  precipitationHours: Qty;
  precipitation_prob_max: number;
  precipitation_prob_min: number;
  precipitation_prob_mean: number;
  weathercode: number;
  windSpeed: Qty;
  windGusts: Qty;
  time: Date;
  windDirection: Qty;
  hourly: {
    time: Array<Date>;
    temperature_2m: Array<Qty>;
    relativehumidity_2m: Array<number>;
    dewpoint_2m: Array<Qty>;
    apparent_temperature: Array<Qty>;
    pressure_msl: Array<Qty>;
    cloudcover: Array<number>;
    cloudcover_low: Array<number>;
    cloudcover_mid: Array<number>;
    cloudcover_high: Array<number>;
    windspeed_10m: Array<Qty>;
    windspeed_80m: Array<Qty>;
    windspeed_120m: Array<Qty>;
    windspeed_180m: Array<Qty>;
    winddirection_10m: Array<Qty>;
    winddirection_80m: Array<Qty>;
    winddirection_120m: Array<Qty>;
    winddirection_180m: Array<Qty>;
    windgusts_10m: Array<Qty>;
    shortwave_radiation: Array<Qty>;
    direct_radiation: Array<Qty>;
    direct_normal_irradiance: Array<Qty>;
    diffuse_radiation: Array<Qty>;
    vapor_pressure_deficit: Array<Qty>;
    evapotranspiration: Array<Qty>;
    precipitation: Array<Qty>;
    weathercode: Array<number>;
    snowfall: Array<Qty>;
    precipitation_probability: Array<number>;
    rain: Array<Qty>;
    showers: Array<Qty>;
    visibility: Array<Qty>;
    snow_depth: Array<Qty>;
    is_day: Array<boolean>;
    snow_height: Array<Qty>;
    freezinglevel_height: Array<Qty>;
    soil_temperature_0cm: Array<Qty>;
    soil_temperature_6cm: Array<Qty>;
    soil_temperature_18cm: Array<Qty>;
    soil_temperature_54cm: Array<Qty>;
    soil_moisture_0_1cm: Array<Qty>;
    soil_moisture_1_3cm: Array<Qty>;
    soil_moisture_3_9cm: Array<Qty>;
    soil_moisture_9_27cm: Array<Qty>;
    soil_moisture_27_81cm: Array<Qty>;
  };
}

function getHourRangeForDay<T>(dayIndex: number, data: T[]): T[] {
  const hoursPerDay = 24;
  const startHour = dayIndex * hoursPerDay;
  const endHour = startHour + hoursPerDay - 1;

  if (startHour >= data.length) {
    return [];
  }

  return data.slice(startHour, endHour + 1);
}

export function parseResponse(
  daily: DailyResponse,
  hourly: HourlyResponse,
  daily_units: Record<string, string>,
  hourly_units: Record<string, string>
): DayToDayWeather[] {
  return [...Array(daily.apparent_temperature_max?.length).keys()].map((i) => ({
    key: i,
    sunrise: new Date(daily.sunrise![i] * 1000),
    sunset: new Date(daily.sunset![i] * 1000),
    feelsMax: new Qty(
      daily.apparent_temperature_max![i],
      daily_units.apparent_temperature_max.replace("°", "temp")
    ),
    feelsMin: new Qty(
      daily.apparent_temperature_min![i],
      daily_units.apparent_temperature_min.replace("°", "temp")
    ),
    precipitationHours: new Qty(
      daily.precipitation_hours![i],
      daily_units.precipitation_hours
    ),
    precipitation_prob_max: daily.precipitation_probability_max![i],
    precipitation_prob_mean: daily.precipitation_probability_mean![i],
    precipitation_prob_min: daily.precipitation_probability_min![i],
    rainSum: new Qty(daily.rain_sum![i], daily_units.rain_sum),
    showersSum: new Qty(daily.showers_sum![i], daily_units.showers_sum),
    snowfallSum: new Qty(daily.snowfall_sum![i], daily_units.snowfall_sum),
    tempMax: new Qty(
      daily.temperature_2m_max![i],
      daily_units.temperature_2m_max.replace("°", "temp")
    ),
    tempMin: new Qty(
      daily.temperature_2m_min![i],
      daily_units.temperature_2m_min.replace("°", "temp")
    ),
    weathercode: daily.weathercode![i],
    windDirection: new Qty(
      daily.winddirection_10m_dominant![i],
      daily_units.winddirection_10m_dominant.replace("°", "deg")
    ),
    windGusts: new Qty(
      daily.windgusts_10m_max![i],
      daily_units.windgusts_10m_max.replace("mp/h", "mph")
    ),
    windSpeed: new Qty(
      daily.windspeed_10m_max![i],
      daily_units.windspeed_10m_max.replace("mp/h", "mph")
    ),
    time: new Date(Number(daily.time![i]) * 1000),
    hourly: {
      time: getHourRangeForDay(i, hourly.time!).map(
        (ts) => new Date(Number(ts) * 1000)
      ),
      is_day: getHourRangeForDay(i, hourly.is_day!),
      temperature_2m: getHourRangeForDay(i, hourly.temperature_2m!).map(
        (n) => new Qty(n, hourly_units["temperature_2m"].replace("°", "temp"))
      ),
      relativehumidity_2m: getHourRangeForDay(i, hourly.relativehumidity_2m!),
      dewpoint_2m: getHourRangeForDay(i, hourly.dewpoint_2m!).map(
        (n) => new Qty(n, hourly_units["dewpoint_2m"].replace("°", "temp"))
      ),
      apparent_temperature: getHourRangeForDay(
        i,
        hourly.apparent_temperature!
      ).map(
        (n) =>
          new Qty(n, hourly_units["apparent_temperature"].replace("°", "temp"))
      ),
      pressure_msl: getHourRangeForDay(i, hourly.pressure_msl!).map(
        (n) => new Qty(n, hourly_units["pressure_msl"])
      ),
      cloudcover: getHourRangeForDay(i, hourly.cloudcover!),
      cloudcover_low: getHourRangeForDay(i, hourly.cloudcover_low!),
      cloudcover_mid: getHourRangeForDay(i, hourly.cloudcover_mid!),
      cloudcover_high: getHourRangeForDay(i, hourly.cloudcover_high!),
      windspeed_10m: getHourRangeForDay(i, hourly.windspeed_10m!).map(
        (n) => new Qty(n, hourly_units["windspeed_10m"].replace("mp/h", "mph"))
      ),
      windspeed_80m: getHourRangeForDay(i, hourly.windspeed_80m!).map(
        (n) => new Qty(n, hourly_units["windspeed_80m"].replace("mp/h", "mph"))
      ),
      windspeed_120m: getHourRangeForDay(i, hourly.windspeed_120m!).map(
        (n) => new Qty(n, hourly_units["windspeed_120m"].replace("mp/h", "mph"))
      ),
      windspeed_180m: getHourRangeForDay(i, hourly.windspeed_180m!).map(
        (n) => new Qty(n, hourly_units["windspeed_180m"].replace("mp/h", "mph"))
      ),
      winddirection_10m: getHourRangeForDay(i, hourly.winddirection_10m!).map(
        (n) => new Qty(n, hourly_units["winddirection_10m"].replace("°", "deg"))
      ),
      winddirection_80m: getHourRangeForDay(i, hourly.winddirection_80m!).map(
        (n) => new Qty(n, hourly_units["winddirection_80m"].replace("°", "deg"))
      ),
      winddirection_120m: getHourRangeForDay(i, hourly.winddirection_120m!).map(
        (n) =>
          new Qty(n, hourly_units["winddirection_120m"].replace("°", "deg"))
      ),
      winddirection_180m: getHourRangeForDay(i, hourly.winddirection_180m!).map(
        (n) =>
          new Qty(n, hourly_units["winddirection_180m"].replace("°", "deg"))
      ),
      windgusts_10m: getHourRangeForDay(i, hourly.windgusts_10m!).map(
        (n) => new Qty(n, hourly_units["windgusts_10m"].replace("mp/h", "mph"))
      ),
      shortwave_radiation: getHourRangeForDay(
        i,
        hourly.shortwave_radiation!
      ).map(
        (n) => new Qty(n, hourly_units["shortwave_radiation"].replace("²", "2"))
      ),
      direct_radiation: getHourRangeForDay(i, hourly.direct_radiation!).map(
        (n) => new Qty(n, hourly_units["direct_radiation"].replace("²", "2"))
      ),
      direct_normal_irradiance: getHourRangeForDay(
        i,
        hourly.direct_normal_irradiance!
      ).map(
        (n) =>
          new Qty(n, hourly_units["direct_normal_irradiance"].replace("²", "2"))
      ),
      diffuse_radiation: getHourRangeForDay(i, hourly.diffuse_radiation!).map(
        (n) => new Qty(n, hourly_units["diffuse_radiation"].replace("²", "2"))
      ),
      vapor_pressure_deficit: getHourRangeForDay(
        i,
        hourly.vapor_pressure_deficit!
      ).map((n) => new Qty(n, hourly_units["vapor_pressure_deficit"])),
      evapotranspiration: getHourRangeForDay(i, hourly.evapotranspiration!).map(
        (n) => new Qty(n, hourly_units["evapotranspiration"])
      ),
      precipitation: getHourRangeForDay(i, hourly.precipitation!).map(
        (n) => new Qty(n, hourly_units["precipitation"])
      ),
      weathercode: getHourRangeForDay(i, hourly.weathercode!),
      snowfall: getHourRangeForDay(i, hourly.snowfall!).map(
        (n) => new Qty(n, hourly_units["snowfall"])
      ),
      precipitation_probability: getHourRangeForDay(
        i,
        hourly.precipitation_probability!
      ),
      rain: getHourRangeForDay(i, hourly.rain!).map(
        (n) => new Qty(n, hourly_units["rain"])
      ),
      showers: getHourRangeForDay(i, hourly.showers!).map(
        (n) => new Qty(n, hourly_units["showers"])
      ),
      visibility: getHourRangeForDay(i, hourly.visibility!).map(
        (n) => new Qty(n, hourly_units["visibility"])
      ),
      snow_depth: getHourRangeForDay(i, hourly.snow_depth!).map(
        (n) => new Qty(n, hourly_units["snow_depth"])
      ),
      snow_height: getHourRangeForDay(i, hourly.snow_height!).map(
        (n) => new Qty(n, hourly_units["snow_height"])
      ),
      freezinglevel_height: getHourRangeForDay(
        i,
        hourly.freezinglevel_height!
      ).map((n) => new Qty(n, hourly_units["freezinglevel_height"])),
      soil_temperature_0cm: getHourRangeForDay(
        i,
        hourly.soil_temperature_0cm!
      ).map(
        (n) =>
          new Qty(n, hourly_units["soil_temperature_0cm"].replace("°", "temp"))
      ),
      soil_temperature_6cm: getHourRangeForDay(
        i,
        hourly.soil_temperature_6cm!
      ).map(
        (n) =>
          new Qty(n, hourly_units["soil_temperature_6cm"].replace("°", "temp"))
      ),
      soil_temperature_18cm: getHourRangeForDay(
        i,
        hourly.soil_temperature_18cm!
      ).map(
        (n) =>
          new Qty(n, hourly_units["soil_temperature_18cm"].replace("°", "temp"))
      ),
      soil_temperature_54cm: getHourRangeForDay(
        i,
        hourly.soil_temperature_54cm!
      ).map(
        (n) =>
          new Qty(n, hourly_units["soil_temperature_54cm"].replace("°", "temp"))
      ),
      soil_moisture_0_1cm: getHourRangeForDay(
        i,
        hourly.soil_moisture_0_1cm!
      ).map(
        (n) =>
          new Qty(n, hourly_units["soil_moisture_0_1cm"].replaceAll("³", "3"))
      ),
      soil_moisture_1_3cm: getHourRangeForDay(
        i,
        hourly.soil_moisture_1_3cm!
      ).map(
        (n) =>
          new Qty(n, hourly_units["soil_moisture_1_3cm"].replaceAll("³", "3"))
      ),
      soil_moisture_3_9cm: getHourRangeForDay(
        i,
        hourly.soil_moisture_3_9cm!
      ).map(
        (n) =>
          new Qty(n, hourly_units["soil_moisture_3_9cm"].replaceAll("³", "3"))
      ),
      soil_moisture_9_27cm: getHourRangeForDay(
        i,
        hourly.soil_moisture_9_27cm!
      ).map(
        (n) =>
          new Qty(n, hourly_units["soil_moisture_9_27cm"].replaceAll("³", "3"))
      ),
      soil_moisture_27_81cm: getHourRangeForDay(
        i,
        hourly.soil_moisture_27_81cm!
      ).map(
        (n) =>
          new Qty(n, hourly_units["soil_moisture_27_81cm"].replaceAll("³", "3"))
      ),
    },
  }));
}

export const weatherCodeMapping: { [key: number]: JSX.Element } = {
  0: <ClearDay />,
  1: <PartlyCloudyDay />,
  2: <Cloudy />,
  3: <Overcast />,
  4: <Fog />,
  5: <Drizzle />,
  6: <Rain />,
  7: <Snow />,
  8: <Thunderstorms />,
  10: <Haze />,
  18: <Rain />,
  19: <Rain />,
  20: <Rain />,
  21: <Rain />,
  22: <Rain />,
  23: <Rain />,
  24: <Rain />,
  25: <Rain />,
  26: <Rain />,
  27: <Rain />,
  28: <Rain />,
  29: <Rain />,
  30: <Snow />,
  31: <Snow />,
  32: <Snow />,
  33: <Snow />,
  34: <Rain />,
  35: <Rain />,
  36: <Rain />,
  37: <Rain />,
  38: <Rain />,
  40: <Fog />,
  41: <Fog />,
  42: <Fog />,
  43: <Fog />,
  44: <Drizzle />,
  45: <Rain />,
  46: <Snow />,
  47: <Snow />,
  48: <Snow />,
  49: <Snow />,
  50: <Snow />,
  51: <Snow />,
  52: <Snow />,
  53: <Snow />,
  54: <Snow />,
  55: <Snow />,
  56: <Snow />,
  57: <Snow />,
  58: <Snow />,
  59: <Snow />,
  60: <Rain />,
  61: <Rain />,
  62: <Rain />,
  63: <Rain />,
  64: <Rain />,
  65: <Rain />,
  66: <Rain />,
  67: <Rain />,
  68: <Rain />,
  69: <Rain />,
  70: <Snow />,
  71: <Snow />,
  72: <Snow />,
  73: <Snow />,
  74: <Snow />,
  75: <Snow />,
  76: <Snow />,
  77: <Snow />,
  78: <Snow />,
  79: <Snow />,
  80: <Sleet />,
  81: <Sleet />,
  82: <Sleet />,
  83: <Sleet />,
  84: <Sleet />,
  85: <Sleet />,
  86: <Sleet />,
  87: <Sleet />,
  88: <Sleet />,
  89: <Sleet />,
  90: <Rain />,
  91: <Rain />,
  92: <Rain />,
  93: <Rain />,
  94: <Rain />,
  95: <Rain />,
  96: <Rain />,
  97: <Rain />,
  98: <Rain />,
  99: <Rain />,
};

export function WeatherCodeSVG(props: {
  weatherCode: number;
  isDay: boolean;
}): JSX.Element {
  if (weatherCodeMapping.hasOwnProperty(props.weatherCode)) {
    return weatherCodeMapping[props.weatherCode];
  } else if (props.isDay) {
    return <ClearDay />;
  } else {
    return <ClearNight />;
  }
}

export function WeatherIconForDay(weatherData: DayToDayWeather): JSX.Element {
  // Extract relevant weather data
  const { tempMax, tempMin, snowfallSum, weathercode, windSpeed } = weatherData;

  const precipiationSum = snowfallSum
    .add(weatherData.rainSum)
    .add(weatherData.showersSum);

  // Default to "NotAvailable" if no mapping is found
  let weatherIcon = <ClearDay />;

  // Logic to determine the weather icon based on conditions
  if (weatherCodeMapping.hasOwnProperty(weathercode)) {
    // Use the provided weather code mapping
    weatherIcon = weatherCodeMapping[weathercode];
  } else {
    if (
      tempMax.to("F").scalar > 30 &&
      precipiationSum.to("in").scalar < 5 &&
      windSpeed.to("mph").scalar < 10
    ) {
      weatherIcon = <ClearDay />;
    } else if (tempMin.to("F").scalar < 0 && snowfallSum.to("in").scalar > 10) {
      weatherIcon = <Snow />;
    }
  }

  return weatherIcon;
}

function useForecast(geo: GeoLocationSensorState) {
  const {} = useFetch("");
}

export function useWeather(geo: GeoLocationSensorState) {}
