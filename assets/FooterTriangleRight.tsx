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
      <path d="M1448 0L-11 230h1459V0z" fill="#454545" />
    </svg>
  )
}

export default SvgComponent
