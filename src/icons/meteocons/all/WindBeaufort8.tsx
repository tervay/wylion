import * as React from "react";
import type { SVGProps } from "react";
const SvgWindBeaufort8 = (props: SVGProps<SVGSVGElement>) => (
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
        dur="1.4s"
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
        begin="-.35s"
        dur="1.4s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <path
      fill="#374151"
      d="M46.26 35.27a4.25 4.25 0 0 1 2.74-.79 4.53 4.53 0 0 1 2.79.73 2.53 2.53 0 0 1 1 2.12 2.7 2.7 0 0 1-1.53 2.45 3.53 3.53 0 0 1 1.37 1 2.58 2.58 0 0 1 .49 1.66 2.84 2.84 0 0 1-1 2.29 4.71 4.71 0 0 1-3.09.84q-4.07 0-4.06-2.89A2.9 2.9 0 0 1 46.76 40a2.77 2.77 0 0 1-1.49-2.56 2.65 2.65 0 0 1 .99-2.17zm4.81 6.82a.77.77 0 0 0-.15-.33l-.2-.24a.75.75 0 0 0-.28-.21l-.33-.16-.4-.13-.42-.11-.47-.12-.47-.1a1.89 1.89 0 0 0-1.52 1.8c0 1 .73 1.46 2.18 1.46a2.68 2.68 0 0 0 1.62-.38 1.3 1.3 0 0 0 .48-1.1 2.33 2.33 0 0 0-.04-.38zm-.66-5.62a2.36 2.36 0 0 0-1.4-.35c-1.23 0-1.85.46-1.85 1.39a1.15 1.15 0 0 0 .45 1 4.17 4.17 0 0 0 1.35.56l.6.15a1.85 1.85 0 0 0 1.35-1.71 1.17 1.17 0 0 0-.5-1.04z"
    />
  </svg>
);
export default SvgWindBeaufort8;