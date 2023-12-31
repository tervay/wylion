import * as React from "react";
import type { SVGProps } from "react";
const SvgWindBeaufort12 = (props: SVGProps<SVGSVGElement>) => (
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
        dur="1s"
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
        begin="-.25s"
        dur="1s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <path
      fill="#374151"
      d="M46.55 34.82a.57.57 0 0 1 .11.39v9.64a.43.43 0 0 1-.51.51h-.86a.43.43 0 0 1-.5-.51V37l-2.11 1.17a.62.62 0 0 1-.46.12.6.6 0 0 1-.3-.31l-.38-.67a.52.52 0 0 1-.06-.4c0-.1.14-.19.31-.29l2.92-1.68a1.37 1.37 0 0 1 .72-.21h.72a.55.55 0 0 1 .4.09zm5.96-.34a3.64 3.64 0 0 1 2.65 1 3.23 3.23 0 0 1 1 2.37 3.29 3.29 0 0 1-.9 2.48 10.49 10.49 0 0 1-3.26 1.8l-.22.08-.23.09-.22.09a.92.92 0 0 0-.23.12l-.19.11a1 1 0 0 0-.18.15l-.13.16a.34.34 0 0 0-.09.19.76.76 0 0 0 0 .21v.27h5a.58.58 0 0 1 .4.11.55.55 0 0 1 .11.4v.74a.51.51 0 0 1-.11.39.53.53 0 0 1-.4.12H49a.43.43 0 0 1-.51-.51v-1.13a3.33 3.33 0 0 1 .23-1.28 2.32 2.32 0 0 1 .71-.93 5.73 5.73 0 0 1 .9-.61c.28-.15.65-.31 1.11-.5a8.51 8.51 0 0 0 1.94-.93 1.84 1.84 0 0 0 .79-1.55 1.66 1.66 0 0 0-.48-1.2 1.74 1.74 0 0 0-1.26-.49 2.09 2.09 0 0 0-2.07 1.34.64.64 0 0 1-.25.35.54.54 0 0 1-.41 0l-.81-.3c-.34-.13-.45-.34-.33-.64a3.87 3.87 0 0 1 3.95-2.5z"
    />
  </svg>
);
export default SvgWindBeaufort12;
