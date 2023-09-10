/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DailyResponse = {
  time: Array<string>;
  temperature_2m_max?: Array<number>;
  temperature_2m_min?: Array<number>;
  apparent_temperature_max?: Array<number>;
  apparent_temperature_min?: Array<number>;
  // precipitation_sum?: Array<number>;
  precipitation_hours?: Array<number>;
  showers_sum?: Array<number>;
  snowfall_sum?: Array<number>;
  rain_sum?: Array<number>;
  precipitation_probability_max?: Array<number>;
  precipitation_probability_min?: Array<number>;
  precipitation_probability_mean?: Array<number>;
  weathercode?: Array<number>;
  sunrise?: Array<number>;
  sunset?: Array<number>;
  windspeed_10m_max?: Array<number>;
  windgusts_10m_max?: Array<number>;
  winddirection_10m_dominant?: Array<number>;
  shortwave_radiation_sum?: Array<number>;
  uv_index_max?: Array<number>;
  uv_index_clear_sky_max?: Array<number>;
  et0_fao_evapotranspiration?: Array<number>;
};
