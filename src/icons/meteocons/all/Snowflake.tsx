import * as React from "react";
import type { SVGProps } from "react";
const SvgSnowflake = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <g>
      <circle
        cx={32}
        cy={32}
        r={9}
        fill="none"
        stroke="#72b8d4"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        fill="none"
        stroke="#72b8d4"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m47.59 41-7.8-4.5m-15.58-9-7.8-4.5M32 14v9m0 27v-9m-7.79-4.5-7.8 4.5m31.18-18-7.8 4.5"
      />
      <animateTransform
        attributeName="transform"
        dur="18s"
        repeatCount="indefinite"
        type="rotate"
        values="0 32 32; 360 32 32"
      />
    </g>
  </svg>
);
export default SvgSnowflake;
