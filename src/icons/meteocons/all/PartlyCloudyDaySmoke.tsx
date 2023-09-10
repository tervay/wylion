import * as React from "react";
import type { SVGProps } from "react";
const SvgPartlyCloudyDaySmoke = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <clipPath id="partly-cloudy-day-smoke_svg__a">
        <path
          fill="none"
          d="m12 35-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#partly-cloudy-day-smoke_svg__a)">
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
    <circle
      cx={31.75}
      cy={51}
      r={3}
      fill="none"
      stroke="#e5e7eb"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <animateTransform
        attributeName="transform"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 -17;"
      />
      <animate
        attributeName="opacity"
        dur="3s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
      <animate
        attributeName="r"
        dur="3s"
        repeatCount="indefinite"
        values="3; 4.5; 6"
      />
      <animate
        attributeName="stroke"
        dur="3s"
        repeatCount="indefinite"
        values="#9ca3af; #d1d5db; #e5e7eb"
      />
    </circle>
    <circle
      cx={25.75}
      cy={51}
      r={4.5}
      fill="none"
      stroke="#d1d5db"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <animateTransform
        attributeName="transform"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 -17;"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
      <animate
        attributeName="r"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        values="3; 4.5; 6"
      />
      <animate
        attributeName="cx"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        values="31.75; 25.75"
      />
      <animate
        attributeName="stroke"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        values="#9ca3af; #d1d5db; #e5e7eb"
      />
    </circle>
    <circle
      cx={36.75}
      cy={51}
      r={6}
      fill="none"
      stroke="#9ca3af"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <animateTransform
        attributeName="transform"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 -17;"
      />
      <animate
        attributeName="opacity"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
      <animate
        attributeName="r"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        values="3; 4.5; 6"
      />
      <animate
        attributeName="cx"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        values="31.75; 36.75"
      />
      <animate
        attributeName="stroke"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        values="#9ca3af; #d1d5db; #e5e7eb"
      />
    </circle>
  </svg>
);
export default SvgPartlyCloudyDaySmoke;
