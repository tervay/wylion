import * as React from "react";
import type { SVGProps } from "react";
const SvgStarryNight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <g>
      <path
        fill="#fcd34d"
        d="M42.56 21.13 41.26 19a.55.55 0 0 1-.06-.5l.8-2.36a.59.59 0 0 0-.87-.7L39 16.74a.55.55 0 0 1-.5.06l-2.36-.8a.59.59 0 0 0-.7.87l1.3 2.13a.55.55 0 0 1 .06.5l-.8 2.36a.59.59 0 0 0 .87.7l2.13-1.3a.55.55 0 0 1 .5-.06l2.36.8a.59.59 0 0 0 .7-.87z"
      />
      <animate
        attributeName="opacity"
        dur="3s"
        repeatCount="indefinite"
        values="1; 0; 1"
      />
    </g>
    <g>
      <path
        fill="#fcd34d"
        d="m49.73 27.18-2.49-.07a.62.62 0 0 1-.46-.22l-1.53-2a.6.6 0 0 0-1.07.35l-.07 2.49a.62.62 0 0 1-.22.46l-2 1.53a.6.6 0 0 0 .35 1.07l2.49.07a.62.62 0 0 1 .46.22l1.53 2a.6.6 0 0 0 1.07-.35l.07-2.49a.62.62 0 0 1 .22-.46l2-1.53a.6.6 0 0 0-.35-1.07z"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        values="1; 0; 1"
      />
    </g>
    <g>
      <path
        fill="#fcd34d"
        d="m40.69 27.65-1.25-1.1a.4.4 0 0 1-.14-.31v-1.66a.39.39 0 0 0-.69-.27l-1.1 1.25a.4.4 0 0 1-.31.14h-1.66a.39.39 0 0 0-.27.69l1.25 1.1a.4.4 0 0 1 .14.31v1.66a.39.39 0 0 0 .69.27l1.1-1.25a.4.4 0 0 1 .31-.14h1.66a.39.39 0 0 0 .27-.69z"
      />
      <animate
        attributeName="opacity"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        values="1; 0; 1"
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
export default SvgStarryNight;
