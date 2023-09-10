import {
  ClearDay,
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
}

const weatherCodeMapping: { [key: number]: JSX.Element } = {
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
