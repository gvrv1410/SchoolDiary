import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HistoryComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M20 10a10 10 0 01-20 0 .714.714 0 111.429 0A8.585 8.585 0 105.27 2.857h.443a.714.714 0 110 1.428H3.571a.714.714 0 01-.714-.714V1.428a.714.714 0 011.429 0v.367A9.998 9.998 0 0120 10zm-3.571 0A6.43 6.43 0 1110 3.57 6.436 6.436 0 0116.429 10zm-3.89.834l-1.825-1.216v-3.19a.714.714 0 00-1.428 0V10a.714.714 0 00.318.594l2.142 1.429a.714.714 0 00.793-1.189z"
                fill="#fff"
            />
        </Svg>
    )
}

export default HistoryComponent
