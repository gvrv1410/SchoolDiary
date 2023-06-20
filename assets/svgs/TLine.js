import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TLineComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 1 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                stroke="#272727"
                strokeDasharray="2 2"
                d="M0.5 2.18557e-8L0.499999 20"
            />
        </Svg>
    )
}

export default TLineComponent
