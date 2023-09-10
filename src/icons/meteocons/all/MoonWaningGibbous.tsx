import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonWaningGibbous = (props: SVGProps<SVGSVGElement>) => (
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
      d="M44.68 40.83a17.84 17.84 0 0 1-11.93-21.72 17.2 17.2 0 0 1 1.73-4A16.78 16.78 0 0 0 15 27a17.83 17.83 0 0 0 12 21.74 16.83 16.83 0 0 0 19.58-7.45 18 18 0 0 1-1.9-.46z"
    />
  </svg>
);
export default SvgMoonWaningGibbous;
