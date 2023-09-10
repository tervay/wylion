import * as React from "react";
import type { SVGProps } from "react";
const SvgDustWind = (props: SVGProps<SVGSVGElement>) => (
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
      strokeDasharray="24 18"
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
    <g>
      <path
        fill="none"
        stroke="#fde68a"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M21.5 39.5h9"
      />
      <animateTransform
        attributeName="transform"
        dur=".9s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 15 0"
      />
      <animate
        attributeName="opacity"
        dur=".9s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#fde68a"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M11.5 24.5h9"
      />
      <animateTransform
        attributeName="transform"
        begin="-.3s"
        dur=".9s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 18 0"
      />
      <animate
        attributeName="opacity"
        begin="-.3s"
        dur=".9s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#fde68a"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M27.5 32h9"
      />
      <animateTransform
        attributeName="transform"
        begin="-.6s"
        dur=".9s"
        repeatCount="indefinite"
        type="translate"
        values="-6 0; 12 0"
      />
      <animate
        attributeName="opacity"
        begin="-.6s"
        dur=".9s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
    </g>
  </svg>
);
export default SvgDustWind;
