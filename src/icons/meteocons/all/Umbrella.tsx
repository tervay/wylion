import * as React from "react";
import type { SVGProps } from "react";
const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="none"
      stroke="#d1d5db"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M32 32.69v12.5c0 2.12-1.9 2.12-3 2.12a3 3 0 0 1-3-2.12m6-28.69v1"
    />
    <path
      fill="none"
      stroke="#ef4444"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M45.5 33.12c0-8.28-6-15-13.5-15s-13.5 6.72-13.5 15l1.43-.91a6 6 0 0 1 6.58.08l1.24.83.77-.54a6 6 0 0 1 7 0l.77.54 1.24-.83a6 6 0 0 1 6.58-.08z"
    >
      <animateTransform
        attributeName="transform"
        dur="2s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 0.5; 0 0"
      />
    </path>
  </svg>
);
export default SvgUmbrella;
