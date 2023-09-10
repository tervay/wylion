import * as React from "react";
import type { SVGProps } from "react";
const SvgWindsock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="none"
      stroke="#d1d5db"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M18.5 47V17"
    />
    <g>
      <path
        fill="#ef4444"
        d="m23.93 17.13 3.59.53a.79.79 0 0 1 .68.79v9.21a.8.8 0 0 1-.68.79l-3.59.55a.8.8 0 0 1-.92-.79V17.92a.81.81 0 0 1 .92-.79z"
      />
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="1s"
        repeatCount="indefinite"
        type="translate"
        values="-0.1 1; 0 0; -0.1 -1; 0 0; -0.1 1"
      />
    </g>
    <g>
      <path
        fill="#ef4444"
        d="m32.58 18.27 3.59.52a.8.8 0 0 1 .68.79v6.94a.8.8 0 0 1-.68.79l-3.59.53a.8.8 0 0 1-.92-.79v-8a.8.8 0 0 1 .92-.78z"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.1s"
        dur="1s"
        repeatCount="indefinite"
        type="translate"
        values="-0.1 1; 0 0; -0.1 -1; 0 0; -0.1 1"
      />
    </g>
    <g>
      <path
        fill="#ef4444"
        d="m41.22 19.4 3.6.53a.79.79 0 0 1 .68.79v4.67a.8.8 0 0 1-.68.79l-3.6.52a.79.79 0 0 1-.91-.79v-5.72a.8.8 0 0 1 .91-.79z"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.2s"
        dur="1s"
        repeatCount="indefinite"
        type="translate"
        values="-0.1 1; 0 0; -0.1 -1; 0 0; -0.1 1"
      />
    </g>
  </svg>
);
export default SvgWindsock;
