import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometerMercury = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <circle cx={32} cy={42} r={4} fill="#ef4444" />
    <path
      fill="none"
      stroke="#ef4444"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M32 28.5v13"
    />
  </svg>
);
export default SvgThermometerMercury;
