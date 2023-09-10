import * as React from "react";
import type { SVGProps } from "react";
const SvgWindBeaufort6 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="none"
      stroke="#e5e7eb"
      strokeDasharray="35 22"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M43.64 20a5 5 0 1 1 3.61 8.46h-35.5"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="1.6s"
        repeatCount="indefinite"
        values="-57; 57"
      />
    </path>
    <path
      fill="none"
      stroke="#e5e7eb"
      strokeDasharray="24 15"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M29.14 44a5 5 0 1 0 3.61-8.46h-21"
    >
      <animate
        attributeName="stroke-dashoffset"
        begin="-.4s"
        dur="1.6s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <path
      fill="#374151"
      d="M49.21 38.72c2.59 0 3.88 1.15 3.88 3.42A3.13 3.13 0 0 1 52 44.66a4.41 4.41 0 0 1-3 .92 4.11 4.11 0 0 1-3-1 3.87 3.87 0 0 1-1-2.87v-3.32a3.88 3.88 0 0 1 1-2.88 4.1 4.1 0 0 1 3-1q3 0 3.87 2.37a.56.56 0 0 1 0 .41.73.73 0 0 1-.35.25l-.8.28a.46.46 0 0 1-.4 0 .69.69 0 0 1-.25-.35 2.05 2.05 0 0 0-2.11-1.25 1.91 1.91 0 0 0-2.16 2.15V39a8.91 8.91 0 0 1 2.41-.28zm-.15 5.1a2.66 2.66 0 0 0 1.61-.42 1.49 1.49 0 0 0 .55-1.26 1.56 1.56 0 0 0-.5-1.25 2.65 2.65 0 0 0-1.64-.41 5.3 5.3 0 0 0-2.18.34v.86a1.9 1.9 0 0 0 2.16 2.14z"
    />
  </svg>
);
export default SvgWindBeaufort6;
