import * as React from "react";
import type { SVGProps } from "react";
const SvgFallingStars = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <clipPath id="falling-stars_svg__a">
        <path fill="none" d="M64 2.79 30 23l2 6 5 4 27-12V2.79z" />
      </clipPath>
    </defs>
    <path
      fill="#fcd34d"
      d="M42.56 21.13 41.26 19a.55.55 0 0 1-.06-.5l.8-2.36a.59.59 0 0 0-.87-.7L39 16.74a.55.55 0 0 1-.5.06l-2.36-.8a.59.59 0 0 0-.7.87l1.3 2.13a.55.55 0 0 1 .06.5l-.8 2.36a.59.59 0 0 0 .87.7l2.13-1.3a.55.55 0 0 1 .5-.06l2.36.8a.59.59 0 0 0 .7-.87z"
    >
      <animate
        attributeName="opacity"
        dur="3s"
        repeatCount="indefinite"
        values=".8; 0; .8"
      />
    </path>
    <path
      fill="#fcd34d"
      d="m49.73 27.18-2.49-.07a.62.62 0 0 1-.46-.22l-1.53-2a.6.6 0 0 0-1.07.35l-.07 2.49a.62.62 0 0 1-.22.46l-2 1.53a.6.6 0 0 0 .35 1.07l2.49.07a.62.62 0 0 1 .46.22l1.53 2a.6.6 0 0 0 1.07-.35l.07-2.49a.62.62 0 0 1 .22-.46l2-1.53a.6.6 0 0 0-.35-1.07z"
    >
      <animate
        attributeName="opacity"
        begin="-1.5s"
        dur="3s"
        repeatCount="indefinite"
        values=".8; 0; .8"
      />
    </path>
    <g clipPath="url(#falling-stars_svg__a)">
      <path
        fill="#fcd34d"
        d="m49 23.19-1.78-1.74A.6.6 0 0 1 47 21l.2-2.49a.6.6 0 0 0-1-.46l-1.74 1.78A.6.6 0 0 1 44 20l-2.49-.2a.6.6 0 0 0-.46 1l1.78 1.74A.6.6 0 0 1 43 23l-.2 2.49a.6.6 0 0 0 1 .46l1.74-1.78A.6.6 0 0 1 46 24l2.49.2a.6.6 0 0 0 .51-1.01z"
      />
      <path
        fill="none"
        stroke="#fcd34d"
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="m41.5 23.5-1.34.67"
      />
      <path
        fill="none"
        stroke="#fcd34d"
        strokeDasharray="2.53 2.53"
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="m37.9 25.3-7.93 3.96"
      />
      <path
        fill="none"
        stroke="#fcd34d"
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="m28.84 29.83-1.34.67"
      />
      <animateTransform
        attributeName="transform"
        dur="2s"
        repeatCount="indefinite"
        type="translate"
        values="-15 9; 15 -7; 15 -7"
      />
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1; 1; 0; 0; 0"
      />
    </g>
    <g>
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
export default SvgFallingStars;
