import * as React from "react";
import type { SVGProps } from "react";
const SvgClearDay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <g>
      <path
        fill="none"
        stroke="#f59e0b"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M42.5 32A10.5 10.5 0 1 1 32 21.5 10.5 10.5 0 0 1 42.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81 4.39-4.39M16.09 47.91l4.39-4.39m0-23-4.39-4.39m31.82 31.78-4.39-4.39M15.71 32H9.5m45 0h-6.21"
      />
      <animateTransform
        attributeName="transform"
        dur="45s"
        from="0 32 32"
        repeatCount="indefinite"
        to="360 32 32"
        type="rotate"
      />
    </g>
  </svg>
);
export default SvgClearDay;
