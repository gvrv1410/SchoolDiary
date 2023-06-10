import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ForwardComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7.55 7.825l.353-.353-.353-.354L.98.548a.029.029 0 010-.04c.01-.01.029-.01.04 0l6.944 6.944c.01.01.01.029 0 .04L1.02 14.435l.353.354-.353-.354-.007.007h-.004a.05.05 0 01-.01.002.05.05 0 01-.009-.001H.988l-.001-.001-.007-.007a.029.029 0 010-.04l6.57-6.57z"
                stroke="#272727"
            />
        </Svg>
    )
}

export default ForwardComponent
