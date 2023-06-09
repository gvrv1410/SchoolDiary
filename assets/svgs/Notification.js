import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NotificationComponent(props) {
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
                d="M13.753 13.895H1.247c-.463 0-.868-.232-1.1-.637-.231-.405-.173-.869.058-1.274L.842 11a9.325 9.325 0 001.563-5.21c0-2.143 1.39-4.111 3.416-4.806A1.877 1.877 0 017.5 0c.695 0 1.332.347 1.679.984 2.026.695 3.416 2.663 3.416 4.805 0 1.853.52 3.648 1.563 5.21l.637.985c.231.405.29.868.058 1.274-.174.405-.637.637-1.1.637zM4.663 15.053c.29 1.331 1.447 2.315 2.837 2.315 1.39 0 2.547-.984 2.837-2.315H4.663z"
                fill="#fff"
            />
        </Svg>
    )
}

export default NotificationComponent
