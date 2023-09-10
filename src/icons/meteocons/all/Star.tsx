import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="none"
      stroke="#fcd34d"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="m33 23 9.06-4.25a2.39 2.39 0 0 1 3.18 3.18L41 31a2.42 2.42 0 0 0 0 2l4.25 9.06a2.39 2.39 0 0 1-3.18 3.18L33 41a2.42 2.42 0 0 0-2 0l-9.06 4.25a2.39 2.39 0 0 1-3.18-3.18L23 33a2.42 2.42 0 0 0 0-2l-4.25-9.06a2.39 2.39 0 0 1 3.18-3.18L31 23a2.42 2.42 0 0 0 2 0z"
    >
      <animate
        attributeName="opacity"
        dur="3s"
        repeatCount="indefinite"
        values="1; 0.4; 1"
      />
      <animateTransform
        attributeName="transform"
        dur="18s"
        repeatCount="indefinite"
        type="rotate"
        values="360 32 32; 0 32 32"
      />
    </path>
  </svg>
);
export default SvgStar;
