import * as React from "react"
import Svg, { Mask, Path } from "react-native-svg"

function DeleteComponent(props) {
    return (
        <Svg
            width={13}
            height={16}
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Mask id="a" fill="#fff">
                <Path d="M12.585 2.213H9.681V1.52A1.521 1.521 0 008.16 0H4.84a1.521 1.521 0 00-1.52 1.521v.692H.414a.415.415 0 100 .83h.293l.869 10.77a1.533 1.533 0 001.515 1.4h6.816a1.532 1.532 0 001.515-1.4l.869-10.77h.293a.415.415 0 000-.83zM4.15 1.52A.691.691 0 014.84.83h3.32a.691.691 0 01.691.691v.692H4.15V1.52zm6.445 12.226a.697.697 0 01-.692.636h-6.81a.697.697 0 01-.686-.636L1.521 3.043h9.958l-.885 10.704zm-1.466-7.8v5.532a.415.415 0 11-.83 0V5.947a.415.415 0 11.83 0zm-2.213 0v5.532a.415.415 0 11-.83 0V5.947a.415.415 0 11.83 0zm-2.213 0v5.532a.415.415 0 11-.83 0V5.947a.415.415 0 11.83 0z" />
            </Mask>
            <Path
                d="M9.68 2.213h-1v1h1v-1zM3.32 1.52h-1 1zm0 .692v1h1v-1h-1zM0 2.628h-1 1zm.415.415v1-1zm.293 0l.997-.08-.074-.92H.708v1zm.869 10.77l-.997.08v.007l.997-.087zm1.515 1.4l-.007 1h.007v-1zm6.816 0v1h.007l-.007-1zm1.515-1.4l.997.087v-.006l-.997-.08zm.869-10.77v-1h-.923l-.074.92.997.08zm.293 0v1-1zM8.16.83v-1 1zm.691 1.383v1h1v-1h-1zm-4.702 0h-1v1h1v-1zm6.445 11.534l.996.087v-.005l-.996-.082zm-.692.636v1h.004l-.004-1zm-6.81 0l-.012 1h.012v-1zm-.686-.636l-.996.082v.005l.996-.087zM1.521 3.043v-1H.435l.09 1.082.996-.082zm9.958 0l.996.082.09-1.082h-1.086v1zm1.106-1.83H9.681v2h2.904v-2zm-1.904 1V1.52h-2v.692h2zm0-.692c0-.668-.266-1.31-.739-1.783L8.528 1.153c.098.097.153.23.153.368h2zM9.942-.262A2.521 2.521 0 008.16-1v2c.138 0 .27.055.368.153L9.942-.262zM8.16-1H4.84v2h3.32v-2zM4.84-1c-.668 0-1.31.266-1.782.738l1.414 1.415A.521.521 0 014.84 1v-2zm-1.782.738a2.521 2.521 0 00-.739 1.783h2c0-.138.055-.27.153-.368L3.058-.262zm-.739 1.783v.692h2V1.52h-2zm1-.308H.415v2h2.904v-2zm-2.904 0c-.375 0-.735.149-1 .414L.828 3.041a.585.585 0 01-.414.172v-2zm-1 .414a1.415 1.415 0 00-.415 1h2a.585.585 0 01-.171.414L-.586 1.627zm-.415 1c0 .376.15.736.414 1.001L.83 2.214c.11.11.171.258.171.414h-2zm.414 1.001c.266.265.626.415 1 .415v-2c.156 0 .305.061.415.17L-.586 3.629zm1 .415h.294v-2H.415v2zm-.703-.92l.869 10.77 1.993-.16-.868-10.77-1.994.16zM.581 13.9c.054.628.341 1.213.804 1.641l1.357-1.47a.532.532 0 01-.17-.344L.58 13.9zm.804 1.641c.464.428 1.07.667 1.7.672l.014-2a.532.532 0 01-.357-.141L1.385 15.54zm1.707.672h6.816v-2H3.092v2zm6.823 0a2.532 2.532 0 001.7-.672l-1.357-1.47a.532.532 0 01-.357.142l.014 2zm1.7-.672c.463-.428.75-1.013.805-1.641l-1.993-.173a.533.533 0 01-.169.345l1.357 1.469zm.805-1.647l.869-10.771-1.994-.16-.868 10.77 1.993.16zm-.128-9.851h.293v-2h-.293v2zm.293 0c.375 0 .735-.15 1-.415l-1.414-1.414a.585.585 0 01.414-.171v2zm1-.415c.266-.265.415-.625.415-1h-2c0-.156.062-.304.171-.414l1.415 1.414zm.415-1c0-.376-.15-.735-.414-1L12.17 3.04A.585.585 0 0112 2.628h2zm-.414-1a1.415 1.415 0 00-1-.415v2a.585.585 0 01-.415-.172l1.415-1.414zM5.149 1.52c0 .082-.033.16-.09.218L3.644.325a1.692 1.692 0 00-.495 1.196h2zm-.09.218a.309.309 0 01-.219.09v-2c-.448 0-.878.179-1.196.496L5.06 1.74zm-.219.09h3.32v-2H4.84v2zm3.32 0a.309.309 0 01-.219-.09L9.356.325A1.692 1.692 0 008.16-.17v2zm-.219-.09a.309.309 0 01-.09-.218h2c0-.448-.178-.879-.495-1.196L7.94 1.74zm-.09-.218v.692h2V1.52h-2zm1-.308H4.15v2H8.85v-2zm-3.702 1V1.52h-2v.692h2zm4.448 11.446a.303.303 0 01.097-.196l1.354 1.472c.312-.287.505-.68.542-1.1l-1.993-.176zm.097-.196a.303.303 0 01.204-.08l.008 2c.423-.002.83-.162 1.142-.448l-1.354-1.472zm.208-.08h-6.81v2h6.81v-2zm-6.798 0c.076.001.148.03.203.08l-1.36 1.467c.308.287.712.448 1.133.453l.024-2zm.203.08c.055.052.089.122.096.197l-1.993.174c.037.42.228.81.537 1.096l1.36-1.466zm.096.201L2.518 2.96l-1.993.165.885 10.704 1.993-.165zM1.521 4.043h9.958v-2H1.52v2zm8.961-1.083l-.885 10.704 1.993.165.885-10.704-1.993-.165zM8.128 5.947v5.532h2V5.947h-2zm0 5.532c0-.155.061-.304.171-.414l1.414 1.414c.266-.265.415-.625.415-1h-2zm.171-.414a.585.585 0 01.414-.171v2c.375 0 .735-.15 1-.415L8.3 11.065zm.414-.171c.155 0 .304.061.414.171l-1.415 1.414c.266.266.626.415 1 .415v-2zm.414.171c.11.11.17.258.17.414h-2c0 .375.15.735.415 1l1.415-1.414zm.17.414V5.947h-2v5.532h2zm0-5.532a.585.585 0 01-.17.414L7.712 4.946a1.415 1.415 0 00-.414 1h2zm-.17.414a.585.585 0 01-.414.17v-2c-.375 0-.735.15-1 .415l1.413 1.415zm-.414.17a.585.585 0 01-.414-.17l1.414-1.415a1.415 1.415 0 00-1-.414v2zm-.414-.17a.585.585 0 01-.171-.414h2c0-.375-.15-.735-.415-1L8.3 6.36zm-2.384-.414v5.532h2V5.947h-2zm0 5.532c0-.155.062-.304.171-.414L7.5 12.479c.266-.265.415-.625.415-1h-2zm.171-.414a.585.585 0 01.414-.171v2c.375 0 .735-.15 1-.415l-1.414-1.414zm.414-.171c.155 0 .304.061.414.171L5.5 12.479c.265.266.625.415 1 .415v-2zm.414.171c.11.11.171.258.171.414h-2c0 .375.15.735.415 1l1.414-1.414zm.171.414V5.947h-2v5.532h2zm0-5.532a.585.585 0 01-.171.414L5.5 4.946a1.415 1.415 0 00-.415 1h2zm-.171.414a.585.585 0 01-.414.17v-2c-.375 0-.735.15-1 .415l1.414 1.415zm-.414.17a.585.585 0 01-.414-.17L7.5 4.946a1.415 1.415 0 00-1-.414v2zm-.414-.17a.585.585 0 01-.171-.414h2c0-.375-.15-.735-.415-1L6.086 6.36zm-2.384-.414v5.532h2V5.947h-2zm0 5.532c0-.155.062-.304.171-.414l1.415 1.414c.265-.265.414-.625.414-1h-2zm.171-.414a.585.585 0 01.414-.171v2c.375 0 .735-.15 1-.415l-1.413-1.414zm.414-.171c.155 0 .304.061.414.171l-1.414 1.414c.265.266.625.415 1 .415v-2zm.414.171c.11.11.171.258.171.414h-2c0 .375.15.735.415 1L4.7 11.065zm.171.414V5.947h-2v5.532h2zm0-5.532a.585.585 0 01-.171.414L3.287 4.946a1.415 1.415 0 00-.415 1h2zm-.171.414a.585.585 0 01-.414.17v-2c-.375 0-.735.15-1 .415L4.7 6.361zm-.414.17a.585.585 0 01-.413-.17l1.414-1.415a1.415 1.415 0 00-1-.414v2zm-.413-.17a.585.585 0 01-.172-.414h2c0-.375-.149-.735-.414-1L3.873 6.36z"
                fill="#737373"
                mask="url(#a)"
            />
        </Svg>
    )
}

export default DeleteComponent