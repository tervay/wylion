import * as React from "react";
import type { SVGProps } from "react";
const SvgHail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="none"
      stroke="#e5e7eb"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M43.67 45.5h2.83a7 7 0 0 0 0-14h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0v0"
    />
    <g>
      <circle cx={24} cy={45} r={1.5} fill="#72b8d4" />
      <animateTransform
        attributeName="transform"
        dur="0.6s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 18; -4 14"
      />
      <animate
        attributeName="opacity"
        dur="0.6s"
        repeatCount="indefinite"
        values="1;1;0"
      />
    </g>
    <g>
      <circle cx={31} cy={45} r={1.5} fill="#72b8d4" />
      <animateTransform
        attributeName="transform"
        begin="-0.4s"
        dur="0.6s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 18; -4 14"
      />
      <animate
        attributeName="opacity"
        begin="-0.4s"
        dur="0.6s"
        repeatCount="indefinite"
        values="1;1;0"
      />
    </g>
    <g>
      <circle cx={38} cy={45} r={1.5} fill="#72b8d4" />
      <animateTransform
        attributeName="transform"
        begin="-0.2s"
        dur="0.6s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 18; -4 14"
      />
      <animate
        attributeName="opacity"
        begin="-0.2s"
        dur="0.6s"
        repeatCount="indefinite"
        values="1;1;0"
      />
    </g>
  </svg>
);
export default SvgHail;
