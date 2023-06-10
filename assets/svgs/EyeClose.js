import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EyeCloseComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15.891 4.65C15.75 4.518 12.336 1.462 8 1.462c-.412 0-.822.028-1.227.081a.694.694 0 00-.197.052.501.501 0 00-.153.1.326.326 0 00-.084.134.258.258 0 00-.003.146c.013.048.04.094.08.135.039.04.09.076.148.103.06.028.126.046.196.056.07.009.141.009.21-.002.34-.044.685-.067 1.03-.068 3.174 0 5.928 1.994 6.777 2.672a13.78 13.78 0 01-1.79 1.208.44.44 0 00-.133.11.293.293 0 00-.06.139.26.26 0 00.02.143c.02.047.053.09.098.127a.54.54 0 00.161.092.762.762 0 00.407.027.635.635 0 00.184-.069c.82-.462 1.566-.983 2.227-1.554A.303.303 0 0016 4.872a.303.303 0 00-.109-.223zM12.374 6.769l-2.347-1.622-2.424-1.675L5.517 2.03 2.733.107a.597.597 0 00-.175-.08A.75.75 0 002.353 0a.672.672 0 00-.377.11.393.393 0 00-.115.12.273.273 0 00-.04.143c.001.098.059.192.16.26l2.264 1.565C2.657 2.83 1.255 3.661.109 4.65A.303.303 0 000 4.872c0 .081.038.16.109.223C.25 5.226 3.664 8.282 8 8.282c1.382-.022 2.731-.295 3.912-.79l2.222 1.54c.05.034.108.061.173.08a.745.745 0 00.408 0 .591.591 0 00.174-.08.394.394 0 00.115-.12.273.273 0 00.04-.14.273.273 0 00-.04-.142.394.394 0 00-.115-.12L12.374 6.77zM7.152 4.202L8.973 5.46a1.357 1.357 0 01-.418.219 1.816 1.816 0 01-1.026.023 1.439 1.439 0 01-.439-.199.945.945 0 01-.288-.303.653.653 0 01-.09-.357.679.679 0 01.124-.352c.076-.11.183-.209.316-.29zM8 7.545c-3.174 0-5.928-1.994-6.777-2.673 1.07-.867 2.36-1.591 3.809-2.136L6.4 3.68c-.238.148-.43.327-.564.528-.134.2-.207.418-.216.639-.008.22.049.44.167.646.119.205.296.391.522.548.226.156.496.279.793.36a3.308 3.308 0 001.86-.033c.29-.093.55-.226.763-.39l1.406.971A9.052 9.052 0 018 7.545z"
                fill="#737373"
            />
        </Svg>
    )
}

export default EyeCloseComponent