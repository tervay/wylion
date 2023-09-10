import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometerColder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <circle cx={32} cy={42} r={4} fill="#ef4444" />
    <path
      fill="none"
      stroke="#ef4444"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M32 33v8.5"
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 1; 0 0"
      />
    </path>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M44 26v12l-3-3.45L44 38l3-3.45"
      />
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="1.5s"
        keyTimes="0.0; 0.5; 0.9; 1.0"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 0; 0 6; 0 6"
      />
      <animate
        attributeName="opacity"
        dur="1.5s"
        keyTimes="0.0; 0.3; 0.8; 0.9; 1.0"
        repeatCount="indefinite"
        values="0; 1; 1; 0; 0"
      />
    </g>
    <path
      fill="none"
      stroke="#e5e7eb"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M39 41.9a7 7 0 1 1-14 0 7.12 7.12 0 0 1 3-5.83v-17a4 4 0 1 1 8 0v17a7.12 7.12 0 0 1 3 5.83zM32.5 25h3m-3-4h3m-3 8h3"
    />
  </svg>
);
export default SvgThermometerColder;
