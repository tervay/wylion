import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonWaxingGibbous = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <circle
      cx={32}
      cy={32}
      r={17.5}
      fill="none"
      stroke="#e5e7eb"
      strokeDasharray="1.96 5.89"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      fill="none"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M49 27a16.78 16.78 0 0 0-19.45-11.9 17.2 17.2 0 0 1 1.73 4 17.76 17.76 0 0 1-13.82 22.19A16.83 16.83 0 0 0 37 48.74 17.83 17.83 0 0 0 49 27z"
    />
  </svg>
);
export default SvgMoonWaxingGibbous;
