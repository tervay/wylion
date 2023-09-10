import * as React from "react";
import type { SVGProps } from "react";
const SvgFog = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="none"
      stroke="#e5e7eb"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14z"
    />
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M17 58h30"
      />
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M17 52h30"
      />
      <animateTransform
        attributeName="transform"
        begin="-4s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </g>
  </svg>
);
export default SvgFog;
