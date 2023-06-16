import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function PopupComponent(props) {
    return (
        <Svg
            width={197}
            height={193}
            viewBox="0 0 197 193"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle
                cx={189.364}
                cy={32.0702}
                r={7.63566}
                fill="#00C2F8"
                fillOpacity={0.5}
            />
            <Circle
                cx={114.535}
                cy={4.5814}
                r={4.5814}
                fill="#00C2F8"
                fillOpacity={0.5}
            />
            <Circle
                cx={24.4341}
                cy={13.7444}
                r={12.2171}
                fill="#00C2F8"
                fillOpacity={0.5}
            />
            <Circle
                cx={13.7443}
                cy={143.55}
                r={6.10853}
                fill="#00C2F8"
                fillOpacity={0.5}
            />
            <Circle
                cx={68.7209}
                cy={187.837}
                r={4.5814}
                fill="#00C2F8"
                fillOpacity={0.5}
            />
            <Circle
                cx={132.861}
                cy={183.256}
                r={1.52713}
                fill="#00C2F8"
                fillOpacity={0.5}
            />
            <Circle
                cx={177.147}
                cy={171.039}
                r={3.05426}
                fill="#00C2F8"
                fillOpacity={0.5}
            />
            <Circle
                cx={181.729}
                cy={119.117}
                r={3.05426}
                fill="#00C2F8"
                fillOpacity={0.5}
            />
            <Circle
                cx={1.52713}
                cy={80.9383}
                r={1.52713}
                fill="#00C2F8"
                fillOpacity={0.5}
            />
            <Circle cx={98.5} cy={98.5} r={71.5} fill="url(#paint0_linear_694_224)" />
            <Path
                d="M88.08 122c-.83 0-1.659-.316-2.29-.946l-19.84-19.772a3.215 3.215 0 010-4.564 3.244 3.244 0 014.58 0l17.55 17.489 37.39-37.26a3.244 3.244 0 014.58 0 3.216 3.216 0 010 4.564l-39.68 39.543a3.232 3.232 0 01-2.29.946z"
                fill="#fff"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_694_224"
                    x1={47.5}
                    y1={46.5}
                    x2={139.5}
                    y2={157}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#00C3F8" />
                    <Stop offset={1} stopColor="#0083DC" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default PopupComponent
