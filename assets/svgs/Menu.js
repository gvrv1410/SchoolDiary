import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MenuComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.111 13.333H18.89c.611 0 1.111-.5 1.111-1.11 0-.612-.5-1.112-1.111-1.112H1.11c-.611 0-1.111.5-1.111 1.111s.5 1.111 1.111 1.111zm0-5.555H18.89c.611 0 1.111-.5 1.111-1.111s-.5-1.111-1.111-1.111H1.11C.5 5.556 0 6.056 0 6.666c0 .612.5 1.112 1.111 1.112zM0 1.11c0 .611.5 1.111 1.111 1.111H18.89c.611 0 1.111-.5 1.111-1.11C20 .5 19.5 0 18.889 0H1.11C.5 0 0 .5 0 1.111z"
                fill="#272727"
            />
        </Svg>
    )
}

export default MenuComponent
