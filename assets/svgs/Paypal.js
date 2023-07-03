import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PaypalComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.564 4.64c.031-.25.046-.502.046-.754A3.886 3.886 0 009.724 0H3.23a.837.837 0 00-.825.698L.012 14.92a.837.837 0 00.825.976h2.375a.843.843 0 00.832-.698l.01-.066-.33 1.967c-.076.45.271.86.727.86H6.53c.36 0 .668-.26.727-.615l.59-3.508a1.256 1.256 0 011.24-1.048h.545A5.369 5.369 0 0015 7.419a3.405 3.405 0 00-1.436-2.779z"
                fill="#002987"
            />
            <Path
                d="M13.563 4.64a6.119 6.119 0 01-6.072 5.364H5.68a.909.909 0 00-.873.658L3.722 17.1c-.075.45.271.86.728.86h2.077c.36 0 .668-.26.728-.615l.59-3.508a1.256 1.256 0 011.239-1.048h.546a5.369 5.369 0 005.368-5.37 3.405 3.405 0 00-1.435-2.779z"
                fill="#0085CC"
            />
            <Path
                d="M5.68 10.004h1.812c3.124 0 5.7-2.34 6.072-5.364a3.394 3.394 0 00-1.975-.63H6.86c-.539 0-.999.388-1.088.92l-.964 5.732a.909.909 0 01.873-.658z"
                fill="#00186A"
            />
        </Svg>
    )
}

export default PaypalComponent