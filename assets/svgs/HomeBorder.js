import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function HomeBorderComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M98 0H2a2 2 0 00-2 2v96a2 2 0 002 2h96a2 2 0 002-2V2a2 2 0 00-2-2z"
                fill="url(#paint0_linear_785_2)"
                fillOpacity={0.8}
            />
            <Path
                d="M94.25 3.75H5.75a2 2 0 00-2 2v88.5a2 2 0 002 2h88.5a2 2 0 002-2V5.75a2 2 0 00-2-2z"
                fill="#fff"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_785_2"
                    x1={50}
                    y1={0}
                    x2={50}
                    y2={100}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#28A7E8" />
                    <Stop offset={1} stopColor="#28A7E8" stopOpacity={0} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default HomeBorderComponent
