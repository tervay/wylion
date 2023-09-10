import * as React from "react";
import type { SVGProps } from "react";
const SvgRaindrops = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="none"
      stroke="#2885c7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M38 17c-6.09 9-10 14.62-10 20.09a10 10 0 0 0 20 0C48 31.62 44.09 26 38 17z"
    >
      <animateTransform
        attributeName="transform"
        calcMode="spline"
        dur="5s"
        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
        repeatCount="indefinite"
        type="scale"
        values="1 1; 1 .9; 1 1"
      />
    </path>
    <path
      fill="none"
      stroke="#2885c7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M26 17c-6.09 9-10 14.62-10 20.09a10 10 0 0 0 20 0C36 31.62 32.09 26 26 17z"
    >
      <animateTransform
        attributeName="transform"
        begin="-3s"
        calcMode="spline"
        dur="5s"
        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
        repeatCount="indefinite"
        type="scale"
        values="1 1; 1 .9; 1 1"
      />
    </path>
  </svg>
);
export default SvgRaindrops;
