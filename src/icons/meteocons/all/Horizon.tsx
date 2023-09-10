import * as React from "react";
import type { SVGProps } from "react";
const SvgHorizon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <clipPath id="horizon_svg__a">
        <path fill="none" d="M0 7.5h64v32H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#horizon_svg__a)">
      <path
        fill="none"
        stroke="#f59e0b"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M42.5 39A10.5 10.5 0 1 1 32 28.5 10.5 10.5 0 0 1 42.5 39zM32 22.71V16.5m0 45v-6.21m11.52-27.81 4.39-4.39M16.09 54.91l4.39-4.39m0-23-4.39-4.39m31.82 31.78-4.39-4.39M15.71 39H9.5m45 0h-6.21"
      />
      <animateTransform
        attributeName="transform"
        dur="45s"
        from="0 32 39"
        repeatCount="indefinite"
        to="360 32 39"
        type="rotate"
      />
    </g>
    <path
      fill="none"
      stroke="#374151"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 42.5h32"
    />
  </svg>
);
export default SvgHorizon;
