import * as React from "react";
import type { SVGProps } from "react";
const SvgOvercastNight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <clipPath id="overcast-night_svg__a">
        <path
          fill="none"
          d="m12 35-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
        />
      </clipPath>
      <clipPath id="overcast-night_svg__b">
        <path
          fill="none"
          d="m41.8 20.25 4.48 6.61.22 4.64 5.31 2.45 1.69 5.97h8.08L61 27l-9.31-8.5-9.89 1.75z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#overcast-night_svg__a)">
      <g>
        <g>
          <path
            fill="none"
            stroke="#72b9d5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M29.33 26.68a10.61 10.61 0 0 1-10.68-10.54A10.5 10.5 0 0 1 19 13.5a10.54 10.54 0 1 0 11.5 13.11 11.48 11.48 0 0 1-1.17.07z"
          />
          <animateTransform
            attributeName="transform"
            dur="10s"
            repeatCount="indefinite"
            type="rotate"
            values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293"
          />
        </g>
        <animateTransform
          attributeName="transform"
          dur="7s"
          repeatCount="indefinite"
          type="translate"
          values="3 0; -3 0; 3 0"
        />
      </g>
      <animateTransform
        attributeName="transform"
        dur="7s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 3 0; -3 0"
      />
    </g>
    <g clipPath="url(#overcast-night_svg__b)">
      <path
        fill="none"
        stroke="#9ca3af"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M34.23 33.45a4.05 4.05 0 0 0 4.05 4h16.51a4.34 4.34 0 0 0 .81-8.61 3.52 3.52 0 0 0 .06-.66 4.06 4.06 0 0 0-6.13-3.48 6.08 6.08 0 0 0-11.25 3.19 6.34 6.34 0 0 0 .18 1.46h-.18a4.05 4.05 0 0 0-4.05 4.1z"
      />
      <animateTransform
        attributeName="transform"
        dur="7s"
        repeatCount="indefinite"
        type="translate"
        values="-2.1 0; 2.1 0; -2.1 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#e5e7eb"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14z"
      />
      <animateTransform
        attributeName="transform"
        dur="7s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 3 0; -3 0"
      />
    </g>
  </svg>
);
export default SvgOvercastNight;
