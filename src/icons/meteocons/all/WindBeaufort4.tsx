import * as React from "react";
import type { SVGProps } from "react";
const SvgWindBeaufort4 = (props: SVGProps<SVGSVGElement>) => (
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
        dur="1.8s"
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
        begin="-.45s"
        dur="1.8s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <path
      fill="#374151"
      d="M53.25 41.33a.57.57 0 0 1 .11.39v.65a.6.6 0 0 1-.11.4.56.56 0 0 1-.4.11h-1v2a.43.43 0 0 1-.51.51h-.73a.55.55 0 0 1-.4-.12.51.51 0 0 1-.11-.39v-2h-5a.6.6 0 0 1-.4-.11.55.55 0 0 1-.11-.4v-.54a1 1 0 0 1 .18-.62l5-6.17a.88.88 0 0 1 .72-.36h.82a.6.6 0 0 1 .4.1.59.59 0 0 1 .11.41v6h1a.55.55 0 0 1 .43.14zm-6.45-.12h3.26v-4z"
    />
  </svg>
);
export default SvgWindBeaufort4;
