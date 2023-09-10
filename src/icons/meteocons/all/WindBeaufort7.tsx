import * as React from "react";
import type { SVGProps } from "react";
const SvgWindBeaufort7 = (props: SVGProps<SVGSVGElement>) => (
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
        dur="1.5s"
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
        begin="-.375s"
        dur="1.5s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <path
      fill="#374151"
      d="M52.69 34.82a.52.52 0 0 1 .11.39v.53a1.94 1.94 0 0 1-.15.72l-3.79 8.44a.64.64 0 0 1-.29.37 1.65 1.65 0 0 1-.66.09h-.82c-.33 0-.42-.17-.26-.51l3.81-8.39h-4.83a.43.43 0 0 1-.51-.46v-.74a.52.52 0 0 1 .12-.39.51.51 0 0 1 .39-.11h6.48a.53.53 0 0 1 .4.06z"
    />
  </svg>
);
export default SvgWindBeaufort7;
