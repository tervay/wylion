import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonFirstQuarter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M38.8 15.87a17.48 17.48 0 0 0-7.12-1.58 17.37 17.37 0 0 1-13 29.32 13.42 13.42 0 0 0 5.93 4.23A17.68 17.68 0 0 0 48 39.12a17.68 17.68 0 0 0-9.2-23.25z"
    />
  </svg>
);
export default SvgMoonFirstQuarter;
