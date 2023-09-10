import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonWaxingCrescent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M39.12 16a18.38 18.38 0 0 0-2.38-.86l.08.06h0c11.54 12.1 2.63 32.1-14.07 31.62h-.1A18.21 18.21 0 0 0 24.88 48a17.5 17.5 0 1 0 14.24-32z"
    />
  </svg>
);
export default SvgMoonWaxingCrescent;
