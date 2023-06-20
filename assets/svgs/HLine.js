import * as React from "react"
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function HLineComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 350 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path stroke="url(#paint0_linear_173_19)" d="M8 7.5L350 7.49997" />
            <Circle cx={7.5} cy={7.5} r={7.5} fill="#737373" />
            <Circle cx={7.5} cy={7.5} r={6.75} fill="#fff" />
            <Circle cx={7.5} cy={7.5} r={4.5} fill="#737373" />
            <Defs>
                <LinearGradient
                    id="paint0_linear_173_19"
                    x1={8}
                    y1={8}
                    x2={350}
                    y2={8}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#737373" />
                    <Stop offset={1} stopColor="#CECECE" stopOpacity={0} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default HLineComponent
