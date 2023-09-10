import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonWaningCrescent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27.18 15.21h0l.08-.06a18.38 18.38 0 0 0-2.38.86A17.5 17.5 0 1 0 39.12 48a18.21 18.21 0 0 0 2.23-1.19h-.1c-16.7.49-25.61-19.51-14.07-31.6z"
    />
  </svg>
);
export default SvgMoonWaningCrescent;
