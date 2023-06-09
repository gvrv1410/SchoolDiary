import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M19.999 8.984a.703.703 0 00-.21-.493l-2.002-1.793-7.312-6.52a.698.698 0 00-.931 0L2.25 6.698.23 8.49a.717.717 0 00-.228.465.708.708 0 00.554.74c0 .024 1.397 0 1.444 0v9.632a.699.699 0 00.698.698h4.727a.7.7 0 00.722-.698v-5.794h3.772v5.793a.699.699 0 00.699.7h4.684a.699.699 0 00.7-.7V9.712h1.443a.703.703 0 00.554-.727z"
                fill="#272727"
            />
        </Svg>
    )
}

export default HomeComponent
