import * as React from "react";
import type { SVGProps } from "react";
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <circle
      cx={32}
      cy={32}
      r={18}
      fill="none"
      stroke="#e5e7eb"
      strokeLinejoin="round"
      strokeWidth={3}
    />
    <path
      fill="none"
      stroke="#374151"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m36.47 39.46-4.3-15.09a.17.17 0 0 0-.17-.17.16.16 0 0 0-.17.17l-4.32 15.09a.35.35 0 0 0 .07.29q.06.11.24 0l4-1.5a.47.47 0 0 1 .33 0l4 1.5c.13.07.22.07.28 0a.26.26 0 0 0 .04-.29z"
    >
      <animateTransform
        attributeName="transform"
        calcMode="spline"
        dur="1s"
        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
        repeatCount="indefinite"
        type="rotate"
        values="-3 32 32;3 32 32;-3 32 32"
      />
    </path>
  </svg>
);
export default SvgCompass;
