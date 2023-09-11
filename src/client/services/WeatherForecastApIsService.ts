/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrentWeather } from "../models/CurrentWeather";
import type { DailyResponse } from "../models/DailyResponse";
import type { HourlyResponse } from "../models/HourlyResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class WeatherForecastApIsService {
  /**
   * 7 day weather forecast for coordinates
   * 7 day weather variables in hourly and daily resolution for given WGS84 latitude and longitude coordinates. Available worldwide.
   * @returns any OK
   * @throws ApiError
   */
  public static getV1Forecast({
    latitude,
    longitude,
    hourly,
    daily,
    currentWeather,
    temperatureUnit = "celsius",
    windspeedUnit = "kmh",
    timeformat = "iso8601",
    timezone,
    pastDays,
  }: {
    /**
     * WGS84 coordinate
     */
    latitude: number;
    /**
     * WGS84 coordinate
     */
    longitude: number;
    hourly?: Array<
      | "temperature_2m"
      | "relativehumidity_2m"
      | "dewpoint_2m"
      | "apparent_temperature"
      | "pressure_msl"
      | "cloudcover"
      | "cloudcover_low"
      | "cloudcover_mid"
      | "cloudcover_high"
      | "windspeed_10m"
      | "windspeed_80m"
      | "windspeed_120m"
      | "windspeed_180m"
      | "winddirection_10m"
      | "winddirection_80m"
      | "winddirection_120m"
      | "winddirection_180m"
      | "windgusts_10m"
      | "shortwave_radiation"
      | "direct_radiation"
      | "direct_normal_irradiance"
      | "diffuse_radiation"
      | "vapor_pressure_deficit"
      | "evapotranspiration"
      | "precipitation"
      | "snowfall"
      | "precipitation_probability"
      | "rain"
      | "showers"
      | "snow_height"
      | "visibility"
      | "snow_depth"
      | "is_day"
      | "weathercode"
      | "freezinglevel_height"
      | "soil_temperature_0cm"
      | "soil_temperature_6cm"
      | "soil_temperature_18cm"
      | "soil_temperature_54cm"
      | "soil_moisture_0_1cm"
      | "soil_moisture_1_3cm"
      | "soil_moisture_3_9cm"
      | "soil_moisture_9_27cm"
      | "soil_moisture_27_81cm"
    >;
    daily?: Array<
      | "temperature_2m_max"
      | "temperature_2m_min"
      | "apparent_temperature_max"
      | "apparent_temperature_min"
      | "precipitation_sum"
      | "showers_sum"
      | "snowfall_sum"
      | "rain_sum"
      | "precipitation_probability_max"
      | "precipitation_probability_min"
      | "precipitation_probability_mean"
      | "precipitation_hours"
      | "weathercode"
      | "sunrise"
      | "sunset"
      | "windspeed_10m_max"
      | "windgusts_10m_max"
      | "winddirection_10m_dominant"
      | "shortwave_radiation_sum"
      | "uv_index_max"
      | "uv_index_clear_sky_max"
      | "et0_fao_evapotranspiration"
    >;
    currentWeather?: boolean;
    temperatureUnit?: "celsius" | "fahrenheit";
    windspeedUnit?: "kmh" | "ms" | "mph" | "kn";
    /**
     * If format `unixtime` is selected, all time values are returned in UNIX epoch time in seconds. Please not that all time is then in GMT+0! For daily values with unix timestamp, please apply `utc_offset_seconds` again to get the correct date.
     */
    timeformat?: "iso8601" | "unixtime";
    /**
     * If `timezone` is set, all timestamps are returned as local-time and data is returned starting at 0:00 local-time. Any time zone name from the [time zone database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) is supported.
     */
    timezone?: string;
    /**
     * If `past_days` is set, yesterdays or the day before yesterdays data are also returned.
     */
    pastDays?: 1 | 2;
  }): CancelablePromise<{
    /**
     * WGS84 of the center of the weather grid-cell which was used to generate this forecast. This coordinate might be up to 5 km away.
     */
    latitude?: number;
    /**
     * WGS84 of the center of the weather grid-cell which was used to generate this forecast. This coordinate might be up to 5 km away.
     */
    longitude?: number;
    /**
     * The elevation in meters of the selected weather grid-cell. In mountain terrain it might differ from the location you would expect.
     */
    elevation?: number;
    /**
     * Generation time of the weather forecast in milli seconds. This is mainly used for performance monitoring and improvements.
     */
    generationtime_ms?: number;
    /**
     * Applied timezone offset from the &timezone= parameter.
     */
    utc_offset_seconds?: number;
    /**
     * For each selected weather variable, data will be returned as a floating point array. Additionally a `time` array will be returned with ISO8601 timestamps.
     */
    hourly?: HourlyResponse;
    /**
     * For each selected weather variable, the unit will be listed here.
     */
    hourly_units?: Record<string, string>;
    /**
     * For each selected daily weather variable, data will be returned as a floating point array. Additionally a `time` array will be returned with ISO8601 timestamps.
     */
    daily?: DailyResponse;
    /**
     * For each selected daily weather variable, the unit will be listed here.
     */
    daily_units?: Record<string, string>;
    /**
     * Current weather conditions with the attributes: time, temperature, windspeed, winddirection and weathercode
     */
    current_weather?: CurrentWeather;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/v1/forecast",
      query: {
        hourly: hourly,
        daily: daily,
        latitude: latitude,
        longitude: longitude,
        current_weather: currentWeather,
        temperature_unit: temperatureUnit,
        windspeed_unit: windspeedUnit,
        timeformat: timeformat,
        timezone: timezone,
        past_days: pastDays,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
}
