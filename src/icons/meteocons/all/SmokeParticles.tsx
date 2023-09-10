import * as React from "react";
import type { SVGProps } from "react";
const SvgSmokeParticles = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <circle
      cx={31.75}
      cy={42}
      r={3}
      fill="none"
      stroke="#e5e7eb"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <animateTransform
        attributeName="transform"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 -17;"
      />
      <animate
        attributeName="opacity"
        dur="3s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
      <animate
        attributeName="r"
        dur="3s"
        repeatCount="indefinite"
        values="3; 4.5; 6"
      />
      <animate
        attributeName="stroke"
        dur="3s"
        repeatCount="indefinite"
        values="#9ca3af; #d1d5db; #e5e7eb"
      />
    </circle>
    <circle
      cx={25.75}
      cy={42}
      r={4.5}
      fill="none"
      stroke="#d1d5db"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <animateTransform
        attributeName="transform"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 -17;"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
      <animate
        attributeName="r"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        values="3; 4.5; 6"
      />
      <animate
        attributeName="cx"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        values="31.75; 25.75"
      />
      <animate
        attributeName="stroke"
        begin="-1s"
        dur="3s"
        repeatCount="indefinite"
        values="#9ca3af; #d1d5db; #e5e7eb"
      />
    </circle>
    <circle
      cx={36.75}
      cy={42}
      r={6}
      fill="none"
      stroke="#9ca3af"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <animateTransform
        attributeName="transform"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 -17;"
      />
      <animate
        attributeName="opacity"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        values="0; 1; 1; 1; 0"
      />
      <animate
        attributeName="r"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        values="3; 4.5; 6"
      />
      <animate
        attributeName="cx"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        values="31.75; 36.75"
      />
      <animate
        attributeName="stroke"
        begin="-2s"
        dur="3s"
        repeatCount="indefinite"
        values="#9ca3af; #d1d5db; #e5e7eb"
      />
    </circle>
  </svg>
);
export default SvgSmokeParticles;