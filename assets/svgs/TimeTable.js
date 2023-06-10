import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function TimeTableComponent(props) {
    return (
        <Svg
            width={35}
            height={34}
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M19.428 1.13c0-.62.613-1.13 1.379-1.13.763 0 1.378.504 1.378 1.13v4.943c0 .62-.612 1.13-1.378 1.13-.764 0-1.379-.504-1.379-1.13V1.13zM3.751 15.997c-.077 0-.148-.342-.148-.763 0-.422.063-.76.148-.76h3.76c.077 0 .148.34.148.76 0 .421-.063.763-.148.763H3.75zm5.993 0c-.077 0-.148-.342-.148-.763 0-.422.063-.76.148-.76h3.76c.077 0 .148.34.148.76 0 .421-.063.763-.148.763h-3.76zm5.993 0c-.077 0-.148-.342-.148-.763 0-.422.06-.76.148-.76h3.76c.076 0 .148.338.148.757-.376.233-.738.49-1.086.766h-2.822zM3.76 20.371c-.077 0-.148-.342-.148-.763 0-.422.062-.764.148-.764h3.76c.076 0 .148.342.148.764 0 .421-.063.763-.149.763H3.76zm5.993 0c-.077 0-.149-.342-.149-.763 0-.422.063-.764.149-.764h3.76c.076 0 .147.342.147.764 0 .421-.062.763-.148.763h-3.76zm-5.985 4.375c-.077 0-.148-.342-.148-.763 0-.422.063-.764.148-.764h3.76c.077 0 .148.342.148.764 0 .421-.063.763-.148.763h-3.76zm5.993 0c-.077 0-.148-.342-.148-.763 0-.422.063-.764.148-.764h3.76c.077 0 .148.342.148.764 0 .421-.063.763-.148.763H9.76zM7.052 1.13C7.052.507 7.668 0 8.431 0S9.81.504 9.81 1.13v4.943c0 .62-.616 1.13-1.38 1.13-.762 0-1.378-.504-1.378-1.13V1.13zm-5.534 9.673h26.239V5.116a.693.693 0 00-.693-.693H24.55a.763.763 0 010-1.526h2.515a2.21 2.21 0 011.573.652c.404.404.652.957.652 1.572v9.032a11.24 11.24 0 00-1.547-.416v-1.41h.017H1.52V27.06c0 .196.076.364.201.49a.7.7 0 00.49.202h12.47c.143.53.322 1.045.536 1.544H2.225a2.215 2.215 0 01-1.573-.653A2.199 2.199 0 010 27.073V5.121C0 4.51.248 3.953.652 3.55a2.21 2.21 0 011.573-.652H4.91a.763.763 0 010 1.526H2.225a.681.681 0 00-.49.203.701.701 0 00-.203.49v5.688h-.014zM12.011 4.42a.763.763 0 010-1.527h5.122a.763.763 0 010 1.527H12.01z"
                fill="#272727"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.102 15.817c1.202 0 2.353.239 3.401.675a8.849 8.849 0 012.891 1.93 8.957 8.957 0 011.931 2.889 8.855 8.855 0 01.675 3.4c0 1.203-.239 2.354-.675 3.402a8.923 8.923 0 01-4.82 4.822 8.855 8.855 0 01-3.4.675 8.845 8.845 0 01-3.4-.675 8.894 8.894 0 01-2.891-14.515 8.958 8.958 0 012.887-1.931 8.897 8.897 0 013.401-.672zm-.928 5.44a1.05 1.05 0 01.305-.738 1.048 1.048 0 011.136-.225 1.037 1.037 0 01.644.963v3.742l2.358 1.248c.02.012.04.026.06.037a1.007 1.007 0 01.43.607 1.1 1.1 0 01.023.399 1 1 0 01-.128.376l-.026.042-.02.026a1.023 1.023 0 01-.598.419c-.128.03-.265.04-.399.022a1 1 0 01-.376-.128l-2.86-1.53a1.06 1.06 0 01-.393-.373l-.005-.01a1.033 1.033 0 01-.151-.534v-4.343z"
                fill="url(#paint0_linear_726_140)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_726_140"
                    x1={26.1037}
                    y1={15.8167}
                    x2={26.1037}
                    y2={33.6099}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#00C4F8" />
                    <Stop offset={1} stopColor="#0082DC" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default TimeTableComponent
