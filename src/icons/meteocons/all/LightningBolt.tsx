import * as React from "react";
import type { SVGProps } from "react";
const SvgLightningBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path fill="#f59e0b" d="m29 15.5-6 18h6l-3 15 15-21h-9l6-12h-9z">
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"
      />
    </path>
  </svg>
);
export default SvgLightningBolt;
