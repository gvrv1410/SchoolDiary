import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EyeComponent(props) {
    return (
        <Svg
            width={18}
            height={11}
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17 5.571s-3.57 4.572-8 4.572S1 5.57 1 5.57 4.57 1 9 1s8 4.571 8 4.571z"
                stroke="#737373"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9 7.857a2.286 2.286 0 100-4.571 2.286 2.286 0 000 4.571z"
                stroke="#737373"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default EyeComponent
