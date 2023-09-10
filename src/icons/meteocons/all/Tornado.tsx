import * as React from "react";
import type { SVGProps } from "react";
const SvgTornado = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M17 20h30"
      />
      <animateTransform
        attributeName="transform"
        dur="2s"
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
        d="M19 26h26"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.2s"
        dur="2s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M21.5 32h21"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.4s"
        dur="2s"
        repeatCount="indefinite"
        type="translate"
        values="-5 0; 5 0; -5 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M24 38h16"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.6s"
        dur="2s"
        repeatCount="indefinite"
        type="translate"
        values="-6 0; 6 0; -6 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M28 44h8"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.8s"
        dur="2s"
        repeatCount="indefinite"
        type="translate"
        values="-7 0; 7 0; -7 0"
      />
    </g>
  </svg>
);
export default SvgTornado;
