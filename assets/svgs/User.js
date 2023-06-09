import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UserComponent(props) {
    return (
        <Svg
            width={15}
            height={18}
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7.5 8.75A4.375 4.375 0 107.5 0a4.375 4.375 0 000 8.75zm0-7.5a3.125 3.125 0 110 6.25 3.125 3.125 0 010-6.25zM8.125 10h-1.25A6.875 6.875 0 000 16.875a.625.625 0 00.625.625h13.75a.624.624 0 00.625-.625A6.875 6.875 0 008.125 10zm-6.838 6.25a5.625 5.625 0 015.588-5h1.25a5.625 5.625 0 015.588 5H1.287z"
                fill="#737373"
            />
        </Svg>
    )
}

export default UserComponent
