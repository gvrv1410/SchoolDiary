import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackComponent(props) {
    return (
        <Svg
            width={8}
            height={15}
            viewBox="0 0 8 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7.098.155A.516.516 0 017.472 0a.529.529 0 01.374.902l-6.57 6.57 6.57 6.57a.529.529 0 01-.748.747L.155 7.845a.529.529 0 010-.747L7.098.155z"
                fill="#fff"
            />
        </Svg>
    )
}

export default BackComponent
