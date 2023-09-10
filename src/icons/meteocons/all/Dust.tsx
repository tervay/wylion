import * as React from "react";
import type { SVGProps } from "react";
const SvgDust = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <defs>
      <clipPath id="dust_svg__a">
        <path fill="none" d="M7.5 7.5h47l-47 47v-47z" />
      </clipPath>
    </defs>
    <g clipPath="url(#dust_svg__a)">
      <path
        fill="none"
        stroke="#e5e7eb"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14z"
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
export default SvgDust;
