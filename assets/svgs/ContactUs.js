import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ContactUsComponent(props) {
    return (
        <Svg
            width={16}
            height={20}
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.931 4.396a4.396 4.396 0 11-8.79 0 4.396 4.396 0 018.79 0zm-4.395 5.697a8.956 8.956 0 00-6.619 2.91c-1.483 1.616-1.12 4.188.748 5.338a11.219 11.219 0 0011.741 0c1.868-1.15 2.231-3.722.748-5.338a8.957 8.957 0 00-6.618-2.91z"
                fill="#28A7E8"
            />
        </Svg>
    )
}

export default ContactUsComponent
