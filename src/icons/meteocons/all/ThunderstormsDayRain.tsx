import * as React from "react";
import type { SVGProps } from "react";
const SvgThunderstormsDayRain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <clipPath id="thunderstorms-day-rain_svg__a">
        <path
          fill="none"
          d="m12 35-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#thunderstorms-day-rain_svg__a)">
      <path
        fill="none"
        stroke="#f59e0b"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M23.5 24a4.5 4.5 0 1 1-4.5-4.5 4.49 4.49 0 0 1 4.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22 2.24-2.24M10.87 32.13l2.24-2.24m0-11.78-2.24-2.24m16.26 16.26-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
      />
      <animateTransform
        attributeName="transform"
        dur="45s"
        from="0 19 24"
        repeatCount="indefinite"
        to="360 19 24"
        type="rotate"
      />
    </g>
    <path
      fill="none"
      stroke="#e5e7eb"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M43.67 45.5h2.83a7 7 0 0 0 0-14h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0v0"
    />
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m24.39 43.03-.78 4.94"
      />
      <animateTransform
        attributeName="transform"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m31.39 43.03-.78 4.94"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.4s"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.4s"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m38.39 43.03-.78 4.94"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.2s"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.2s"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path fill="#f59e0b" d="m30 36-4 12h4l-2 10 10-14h-6l4-8h-6z" />
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"
      />
    </g>
  </svg>
);
export default SvgThunderstormsDayRain;
