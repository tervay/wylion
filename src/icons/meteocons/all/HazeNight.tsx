import * as React from "react";
import type { SVGProps } from "react";
const SvgHazeNight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <clipPath id="haze-night_svg__a">
        <path fill="none" d="M0 7.5h64v32H0z" />
      </clipPath>
    </defs>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M17 44h4.5"
      />
      <path
        fill="none"
        stroke="#d1d5db"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M28.5 44H39"
      />
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M42.5 44H47"
      />
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 3 0; -3 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M17 51h4.5"
      />
      <path
        fill="none"
        stroke="#d1d5db"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M28.5 51H39"
      />
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M42.5 51H47"
      />
      <animateTransform
        attributeName="transform"
        begin="-4s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 3 0; -3 0"
      />
    </g>
    <g clipPath="url(#haze-night_svg__a)">
      <path
        fill="none"
        stroke="#72b9d5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M46.66 36.2a16.66 16.66 0 0 1-16.78-16.55 16.29 16.29 0 0 1 .55-4.15A16.56 16.56 0 1 0 48.5 36.1c-.61.06-1.22.1-1.84.1z"
      />
      <animateTransform
        attributeName="transform"
        dur="10s"
        repeatCount="indefinite"
        type="rotate"
        values="-5 32 32;15 32 32;-5 32 32"
      />
    </g>
  </svg>
);
export default SvgHazeNight;
