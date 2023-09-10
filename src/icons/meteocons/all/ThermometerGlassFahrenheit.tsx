import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometerGlassFahrenheit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="#374151"
      d="M42.72 34.92a2.18 2.18 0 1 1-1.53-3.72 2.17 2.17 0 0 1 1.53 3.72zm-2.21-.86a.91.91 0 0 0 .68.28.93.93 0 0 0 .68-.28.89.89 0 0 0 .28-.67.93.93 0 0 0-.28-.68.87.87 0 0 0-.68-.29.89.89 0 0 0-.68.29.93.93 0 0 0-.28.68.89.89 0 0 0 .28.67zm10.38-2.65a.47.47 0 0 1 .11.35v.66a.46.46 0 0 1-.11.35.5.5 0 0 1-.36.1h-4.09v2.46h3.44a.55.55 0 0 1 .36.1.5.5 0 0 1 .11.36v.65a.5.5 0 0 1-.11.36.51.51 0 0 1-.36.1h-3.44v3.44a.38.38 0 0 1-.45.46h-.76a.55.55 0 0 1-.36-.1.46.46 0 0 1-.11-.36v-8.58a.43.43 0 0 1 .11-.35.5.5 0 0 1 .36-.1h5.3a.5.5 0 0 1 .36.1z"
    />
    <path
      fill="none"
      stroke="#e5e7eb"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M39 41.9a7 7 0 1 1-14 0 7.12 7.12 0 0 1 3-5.83v-17a4 4 0 1 1 8 0v17a7.12 7.12 0 0 1 3 5.83zM32.5 25h3m-3-4h3m-3 8h3"
    />
  </svg>
);
export default SvgThermometerGlassFahrenheit;
