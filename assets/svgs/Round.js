import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function RoundComponent(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle
        cx={17}
        cy={17}
        r={17}
        fill="#28A7E8"
      />
      <Path
        d="M11.4 20.547a.4.4 0 00-.4.4V23.4c0 .22.179.4.4.4h11.2a.4.4 0 00.4-.4v-2.453a.4.4 0 10-.8 0V23H11.8v-2.053a.4.4 0 00-.4-.4z"
        fill="#fff"
      />
      <Path
        d="M17 11a.4.4 0 00-.4.4v8.604l-2.537-2.45a.4.4 0 10-.556.574l3.21 3.1v.002l.005.004c.015.014.033.02.05.032.024.018.047.038.076.05a.396.396 0 00.303 0c.026-.011.048-.03.07-.046.02-.013.04-.02.056-.036l3.215-3.106a.4.4 0 00-.557-.576L17.4 20.004V11.4a.4.4 0 00-.4-.4z"
        fill="#fff"
      />
    </Svg>
  );
}

export default RoundComponent;
