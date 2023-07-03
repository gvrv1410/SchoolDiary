import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MasterCardComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 15 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15 4.647a4.642 4.642 0 01-4.637 4.647 4.642 4.642 0 01-4.637-4.647A4.639 4.639 0 0110.36 0C12.92 0 15 2.08 15 4.647z"
                fill="#F79F1A"
            />
            <Path
                d="M9.274 4.647a4.642 4.642 0 01-4.637 4.647A4.642 4.642 0 010 4.647 4.642 4.642 0 014.637 0c2.561 0 4.637 2.08 4.637 4.647z"
                fill="#EA001B"
            />
            <Path
                d="M7.499.988a4.64 4.64 0 00-1.776 3.659 4.64 4.64 0 001.776 3.659 4.64 4.64 0 001.776-3.66A4.645 4.645 0 007.499.989z"
                fill="#FF5F01"
            />
            <Path
                d="M14.988 7.115V6.95h-.041l-.05.114-.049-.119h-.045v.165h.029v-.123l.045.106h.033l.05-.107v.128h.028zm-.275 0v-.14h.057v-.029h-.14v.03h.058v.139h.025z"
                fill="#F79F1A"
            />
        </Svg>
    )
}

export default MasterCardComponent
