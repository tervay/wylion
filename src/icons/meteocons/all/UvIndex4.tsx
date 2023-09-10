import * as React from "react";
import type { SVGProps } from "react";
const SvgUvIndex4 = (props: SVGProps<SVGSVGElement>) => (
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
    <rect
      width={21}
      height={21}
      x={33.5}
      y={33.5}
      fill="#ffb800"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={2}
      rx={6}
    />
    <path
      fill="#fff"
      d="M47.4 44.87a.53.53 0 0 1 .1.36v.63a.55.55 0 0 1-.1.36.54.54 0 0 1-.38.1h-.64v1.22a.5.5 0 0 1-.11.36.51.51 0 0 1-.37.1h-.81a.51.51 0 0 1-.37-.1.5.5 0 0 1-.11-.36v-1.22H41a.54.54 0 0 1-.38-.1.5.5 0 0 1-.1-.36v-.56a1.44 1.44 0 0 1 0-.35.92.92 0 0 1 .17-.25l3.66-4.37a1 1 0 0 1 .3-.26A.81.81 0 0 1 45 40h.86a.51.51 0 0 1 .37.1.5.5 0 0 1 .11.36v4.31H47a.54.54 0 0 1 .4.1zm-4.79-.1h2v-2.38z"
    />
  </svg>
);
export default SvgUvIndex4;
