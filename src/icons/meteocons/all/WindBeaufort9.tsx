import * as React from "react";
import type { SVGProps } from "react";
const SvgWindBeaufort9 = (props: SVGProps<SVGSVGElement>) => (
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
        dur="1.3s"
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
        begin="-.325s"
        dur="1.3s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <path
      fill="#374151"
      d="M48.79 41.34q-3.88 0-3.88-3.42A3.15 3.15 0 0 1 46 35.4a4.41 4.41 0 0 1 3-.92 4.06 4.06 0 0 1 3 1 3.85 3.85 0 0 1 1 2.87v3.28a3.84 3.84 0 0 1-1 2.88 4.05 4.05 0 0 1-3 1 3.74 3.74 0 0 1-3.89-2.37.65.65 0 0 1 0-.41.73.73 0 0 1 .35-.25l.8-.28a.49.49 0 0 1 .4 0 .69.69 0 0 1 .25.35 2 2 0 0 0 2.11 1.24 1.9 1.9 0 0 0 2.16-2.14v-.63a8.91 8.91 0 0 1-2.39.32zm1.75-4.56a2.2 2.2 0 0 0-1.6-.55 2.66 2.66 0 0 0-1.61.43 1.5 1.5 0 0 0-.55 1.26 1.56 1.56 0 0 0 .5 1.25 2.65 2.65 0 0 0 1.64.41 5.11 5.11 0 0 0 2.18-.35v-.85a2.12 2.12 0 0 0-.56-1.6z"
    />
  </svg>
);
export default SvgWindBeaufort9;
