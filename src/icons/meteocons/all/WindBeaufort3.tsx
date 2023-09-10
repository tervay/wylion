import * as React from "react";
import type { SVGProps } from "react";
const SvgWindBeaufort3 = (props: SVGProps<SVGSVGElement>) => (
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
        dur="1.9s"
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
        begin="-.475s"
        dur="1.9s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
    <path
      fill="#374151"
      d="M51.44 39.79A2.54 2.54 0 0 1 53 42.32a3 3 0 0 1-1 2.38 4.15 4.15 0 0 1-2.88.88q-3.18 0-4.07-2.52a.47.47 0 0 1 .33-.66l.81-.28a.55.55 0 0 1 .41 0 .69.69 0 0 1 .25.34 2.07 2.07 0 0 0 .75 1.06 2.74 2.74 0 0 0 1.52.33q1.89 0 1.89-1.53t-1.56-1.5h-1.58a.58.58 0 0 1-.4-.1.53.53 0 0 1-.11-.4v-.68a.55.55 0 0 1 .11-.4.58.58 0 0 1 .4-.11h1.29a1.65 1.65 0 0 0 1.14-.38 1.31 1.31 0 0 0 .43-1c0-1-.56-1.46-1.68-1.46a2.5 2.5 0 0 0-1.42.32 2.21 2.21 0 0 0-.71 1.07.6.6 0 0 1-.24.33.56.56 0 0 1-.42 0l-.81-.29a.46.46 0 0 1-.33-.66 3.56 3.56 0 0 1 1.38-1.96 4.69 4.69 0 0 1 2.58-.62 3.8 3.8 0 0 1 2.6.81 2.82 2.82 0 0 1 .93 2.24 2.4 2.4 0 0 1-1.17 2.26z"
    />
  </svg>
);
export default SvgWindBeaufort3;
