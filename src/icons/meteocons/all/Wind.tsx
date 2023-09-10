import * as React from "react";
import type { SVGProps } from "react";
const SvgWind = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="none"
      stroke="#e5e7eb"
      strokeDasharray="35 22"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M43.64 20a5 5 0 1 1 3.61 8.46h-35.5"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="2s"
        repeatCount="indefinite"
        values="-57; 57"
      />
    </path>
    <path
      fill="none"
      stroke="#e5e7eb"
      strokeDasharray="24 15"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M29.14 44a5 5 0 1 0 3.61-8.46h-21"
    >
      <animate
        attributeName="stroke-dashoffset"
        begin="-1.5s"
        dur="2s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
  </svg>
);
export default SvgWind;
