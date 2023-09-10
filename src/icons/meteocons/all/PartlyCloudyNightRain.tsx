import * as React from "react";
import type { SVGProps } from "react";
const SvgPartlyCloudyNightRain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <clipPath id="partly-cloudy-night-rain_svg__a">
        <path
          fill="none"
          d="m12 35-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#partly-cloudy-night-rain_svg__a)">
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
  </svg>
);
export default SvgPartlyCloudyNightRain;
