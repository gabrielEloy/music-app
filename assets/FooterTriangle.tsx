import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={1440}
      height={225}
      viewBox="0 0 1440 225"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0l1448 225H0V0z" fill="#8E8E8E" />
      <path d="M0 0l1448 225H0V0z" fill="url(#prefix__paint0_linear)" />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={257}
          y1={-373.5}
          x2={719.226}
          y2={206.803}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopOpacity={0.46} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgComponent
