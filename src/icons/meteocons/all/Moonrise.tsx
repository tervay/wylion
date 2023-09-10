import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonrise = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <clipPath id="moonrise_svg__a">
        <path fill="none" d="M0 7.5h64v32H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#moonrise_svg__a)">
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
    <path
      fill="none"
      stroke="#374151"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 42.5h11l5-4.5 5 4.5h11"
    />
  </svg>
);
export default SvgMoonrise;
