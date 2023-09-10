import * as React from "react";
import type { SVGProps } from "react";
const SvgBarometer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <circle
      cx={32}
      cy={32}
      r={18}
      fill="none"
      stroke="#e5e7eb"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
    />
    <path
      fill="none"
      stroke="#e5e7eb"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M32 25v-6m13.5 13h-6M25 32h-6m22.5-8.5-3 3m-13 0-3-3m16 14 3 3m-19 0 3-3"
    />
    <circle cx={32} cy={32} r={3} fill="#374151" />
    <path
      fill="none"
      stroke="#374151"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M32 35.5v-15"
    >
      <animateTransform
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="30 32 32; 55 32 32; 45 32 32; 55 32 32; 30 32 32"
      />
    </path>
  </svg>
);
export default SvgBarometer;
