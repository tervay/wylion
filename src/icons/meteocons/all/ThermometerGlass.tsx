import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometerGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
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
export default SvgThermometerGlass;
