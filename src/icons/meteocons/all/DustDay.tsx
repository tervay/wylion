import * as React from "react";
import type { SVGProps } from "react";
const SvgDustDay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <clipPath id="dust-day_svg__a">
        <path fill="none" d="M7.5 7.5h47l-47 47v-47z" />
      </clipPath>
    </defs>
    <g clipPath="url(#dust-day_svg__a)">
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
    <g>
      <path
        fill="none"
        stroke="#fde68a"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m24.89 45.11 3.19-3.19"
      />
      <path
        fill="none"
        stroke="#fde68a"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m33.03 36.97 7.42-7.42"
      />
      <path
        fill="none"
        stroke="#fde68a"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m42.92 27.08 3.19-3.19"
      />
      <animateTransform
        attributeName="transform"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="-2 2; 0 0; -2 2"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#fde68a"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m34.89 45.11 3.19-3.19"
      />
      <path
        fill="none"
        stroke="#fde68a"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m43.03 36.97 7.42-7.42"
      />
      <path
        fill="none"
        stroke="#fde68a"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m52.92 27.08 3.19-3.19"
      />
      <animateTransform
        attributeName="transform"
        begin="-2.5s"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="-2 2; 0 0; -2 2"
      />
    </g>
  </svg>
);
export default SvgDustDay;
