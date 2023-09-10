import * as React from "react";
import type { SVGProps } from "react";
const SvgWindBeaufort11 = (props: SVGProps<SVGSVGElement>) => (
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
        dur="1.1s"
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
        begin="-.275s"
        dur="1.1s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <path
      fill="#374151"
      d="M47.73 34.82a.52.52 0 0 1 .11.39v9.64a.51.51 0 0 1-.11.39.52.52 0 0 1-.4.12h-.85a.43.43 0 0 1-.51-.51V37l-2.1 1.17a.62.62 0 0 1-.46.12.57.57 0 0 1-.3-.31l-.38-.67a.58.58 0 0 1-.07-.4.67.67 0 0 1 .34-.31l2.93-1.68a1.34 1.34 0 0 1 .72-.21h.71a.52.52 0 0 1 .37.11zm6.6 0a.52.52 0 0 1 .11.39v9.64a.51.51 0 0 1-.11.39.53.53 0 0 1-.4.12h-.85a.43.43 0 0 1-.51-.51V37l-2.1 1.17a.63.63 0 0 1-.47.12.55.55 0 0 1-.29-.31l-.38-.67a.58.58 0 0 1-.07-.4.67.67 0 0 1 .31-.29l2.93-1.68a1.31 1.31 0 0 1 .71-.21h.72a.53.53 0 0 1 .4.09z"
    />
  </svg>
);
export default SvgWindBeaufort11;
