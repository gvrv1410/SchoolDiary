import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PrivacyPolicyComponent(props) {
    return (
        <Svg
            width={19}
            height={20}
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.975 3.909a1 1 0 00-.644-.846L9.46.11a1.003 1.003 0 00-.285-.092.978.978 0 00-.643.096L.674 3.063a1 1 0 00-.644.846c-.01.116-.94 11.62 8.41 15.926a.99.99 0 00.63.162c.162-.01.323-.06.467-.148 9.38-4.296 8.449-15.824 8.438-15.94zm-4.248 3.777l-4.281 4.476a1 1 0 01-.712.31h-.01a1 1 0 01-.708-.294l-2-2A1 1 0 117.43 8.763l1.277 1.278 3.574-3.737a1 1 0 111.446 1.382z"
                fill="#28A7E8"
            />
        </Svg>
    )
}

export default PrivacyPolicyComponent
