import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonNew = (props: SVGProps<SVGSVGElement>) => (
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
      transform="rotate(-45 32.002 31.994)"
    />
  </svg>
);
export default SvgMoonNew;
