import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonLastQuarter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M45.38 43.61a17.37 17.37 0 0 1-13.06-29.32h0a17.44 17.44 0 0 0-7.11 1.58A17.68 17.68 0 0 0 16 39.12a17.68 17.68 0 0 0 23.43 8.72 13.45 13.45 0 0 0 5.94-4.23z"
    />
  </svg>
);
export default SvgMoonLastQuarter;
