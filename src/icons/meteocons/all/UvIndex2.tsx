import * as React from "react";
import type { SVGProps } from "react";
const SvgUvIndex2 = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#91c700"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={2}
      rx={6}
    />
    <path
      fill="#fff"
      d="M44.13 40a2.93 2.93 0 0 1 2.09.73 2.38 2.38 0 0 1 .78 1.8 2.53 2.53 0 0 1-.65 1.85 7 7 0 0 1-2.35 1.3l-.27.09-.28.1-.24.1a.54.54 0 0 0-.2.14.28.28 0 0 0-.06.18v.09h3.45a.51.51 0 0 1 .37.1.46.46 0 0 1 .1.35v.72a.47.47 0 0 1-.1.35.51.51 0 0 1-.37.1h-4.95a.46.46 0 0 1-.35-.1.47.47 0 0 1-.1-.35v-.84a2.33 2.33 0 0 1 .18-1 1.79 1.79 0 0 1 .53-.7 4.36 4.36 0 0 1 .67-.45 7.23 7.23 0 0 1 .8-.36 6.56 6.56 0 0 0 1.41-.68 1.22 1.22 0 0 0 .5-1 .9.9 0 0 0-.28-.68 1.05 1.05 0 0 0-.75-.28 1.26 1.26 0 0 0-1.24.81.78.78 0 0 1-.24.31.54.54 0 0 1-.35 0l-.88-.31c-.3-.11-.4-.3-.28-.58A3 3 0 0 1 44.13 40z"
    />
  </svg>
);
export default SvgUvIndex2;
