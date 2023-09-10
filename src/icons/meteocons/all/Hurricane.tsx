import * as React from "react";
import type { SVGProps } from "react";
const SvgHurricane = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M43 32a11 11 0 1 1-11-11 11 11 0 0 1 11 11zM25 14.61l-.48 1a33.68 33.68 0 0 0-3.42 17.82h0M39 49.39l.48-1a33.68 33.68 0 0 0 3.42-17.82h0"
      />
      <animateTransform
        attributeName="transform"
        dur="1s"
        repeatCount="indefinite"
        type="rotate"
        values="360 32 32; 0 32 32"
      />
    </g>
  </svg>
);
export default SvgHurricane;
