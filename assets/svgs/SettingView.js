import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SettingViewComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 44 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 55.084v-55h30.15C38.551 6.074 44 15.708 44 26.57 44 38.76 37.141 49.4 26.95 55.084H0z"
                fill="#28A7E8"
                fillOpacity={0.2}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 55.084v-55h20.557c9.865 5.762 16.459 16.224 16.459 28.174 0 11.07-5.658 20.863-14.332 26.826H0z"
                fill="#28A7E8"
                fillOpacity={0.3}
            />
        </Svg>
    )
}

export default SettingViewComponent
