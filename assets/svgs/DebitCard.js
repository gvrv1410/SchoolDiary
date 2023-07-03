import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DebitCardComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M14.027 10.192H.973A.974.974 0 010 9.22V.973C0 .433.437 0 .973 0h13.051c.54 0 .973.437.973.973v8.244a.97.97 0 01-.97.975z"
                fill="#505278"
            />
            <Path
                d="M14.027 0H7.5v10.192h6.527A.972.972 0 0015 9.22V.973A.974.974 0 0014.027 0z"
                fill="#424566"
            />
            <Path
                d="M7.825 0a5.618 5.618 0 01-5.61 5.423A5.537 5.537 0 010 4.966v-1.31a4.38 4.38 0 002.215.595A4.445 4.445 0 006.65 0h1.175z"
                fill="#575982"
            />
            <Path
                d="M7.501 0v1.702c.19-.536.305-1.107.325-1.702h-.325zm7.5 5.962v1.19c-.703-.136-1.389-.194-2.069-.127-1.227.123-2.367.697-3.588 1.808-.197.179-.392.36-.586.542-.293.272-.586.548-.894.817H5.966c.703-.469 1.333-1.057 1.992-1.673.196-.181.395-.372.598-.553 1.418-1.286 2.771-1.957 4.26-2.107.735-.076 1.479-.017 2.185.103z"
                fill="#505278"
            />
            <Path
                d="M5.966 10.192H7.5v-1.25c-.501.46-.996.89-1.535 1.25z"
                fill="#575982"
            />
            <Path
                d="M3.14 4.963H1.703a.399.399 0 01-.398-.399V3.61c0-.22.178-.398.398-.398h1.439c.22 0 .398.179.398.398v.955a.4.4 0 01-.398.399z"
                fill="#424566"
            />
            <Path
                d="M3.14 4.936H1.7a.373.373 0 01-.373-.372v-.958c0-.205.167-.372.372-.372h1.442c.205 0 .372.167.372.372v.958a.373.373 0 01-.372.372z"
                fill="#FEBD55"
            />
            <Path
                d="M3.513 4.116v-.058H2.75V3.8l.196-.197h.566a.362.362 0 00-.006-.058h-.574a.027.027 0 00-.02.009l-.206.205h-.258v-.522h-.058v.522h-.255l-.205-.205a.032.032 0 00-.02-.01h-.578a.362.362 0 00-.006.06h.571l.194.193v.26h-.765v.06h.765v.26l-.194.193h-.57c0 .02.002.041.005.059h.577a.027.027 0 00.02-.009l.206-.205h.255v.521h.058v-.521h.258l.205.205a.027.027 0 00.02.009h.575a.36.36 0 00.006-.059h-.566l-.196-.196v-.258h.762zm-.82.24H2.15v-.542h.542v.542z"
                fill="#B5613C"
            />
            <Path
                d="M13.428 4.919a.081.081 0 01-.038-.009.084.084 0 01-.038-.117c.225-.448.225-.961 0-1.41a.09.09 0 01.038-.117.09.09 0 01.117.039 1.72 1.72 0 010 1.567.092.092 0 01-.08.047zm-.302-.167a1.331 1.331 0 000-1.33.086.086 0 00-.12-.033.086.086 0 00-.032.12c.208.37.208.792 0 1.158a.09.09 0 00.032.12.082.082 0 00.044.012.107.107 0 00.076-.047zm-.375-.117a.951.951 0 000-1.096c-.026-.041-.082-.05-.123-.024-.041.027-.05.083-.024.123a.785.785 0 010 .897.09.09 0 00.024.123.077.077 0 00.05.015c.029 0 .055-.015.073-.038zm-.396-.115a.585.585 0 00.2-.433.585.585 0 00-.2-.434.085.085 0 00-.123.006.085.085 0 00.006.123c.091.085.14.193.14.305 0 .111-.049.22-.14.304a.088.088 0 00-.005.123c.017.018.04.03.064.03.02 0 .04-.009.058-.024z"
                fill="#CAD4FF"
            />
            <Path
                d="M7.38 8.716H1.415a.086.086 0 01-.088-.088c0-.05.038-.088.088-.088H7.38c.05 0 .088.038.088.088 0 .05-.041.088-.088.088z"
                fill="#E6EAFF"
            />
            <Path
                d="M13.607 8.716h-1.13a.086.086 0 01-.088-.088c0-.05.038-.088.088-.088h1.13c.05 0 .088.038.088.088 0 .05-.04.088-.088.088zm-1.61-.088a.086.086 0 00-.089-.088h-1.13a.086.086 0 00-.088.088c0 .05.037.088.087.088h1.131c.05 0 .088-.041.088-.088z"
                fill="#CAD4FF"
            />
            <Path
                d="M1.414 1.998a.086.086 0 01-.088-.088v-.343c0-.05.038-.088.088-.088.05 0 .088.039.088.088v.343a.088.088 0 01-.088.088zm.565-.088v-.343a.086.086 0 00-.087-.088.086.086 0 00-.088.088v.343c0 .05.038.088.088.088.05 0 .087-.041.087-.088zm.481 0v-.343a.086.086 0 00-.088-.088.086.086 0 00-.088.088v.343c0 .05.038.088.088.088a.09.09 0 00.088-.088zm.477 0v-.343a.086.086 0 00-.087-.088.086.086 0 00-.088.088v.343c0 .05.038.088.088.088.05 0 .087-.041.087-.088zM1.596 7.224H1.58a.268.268 0 01-.267-.266v-.416c0-.147.12-.267.267-.267h.015c.146 0 .266.12.266.267v.416a.265.265 0 01-.266.266zm-.015-.773a.091.091 0 00-.09.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.09-.09v-.416a.091.091 0 00-.09-.091H1.58zm.727.773h-.015a.268.268 0 01-.267-.266v-.416c0-.147.12-.267.267-.267h.015c.146 0 .266.12.266.267v.416a.266.266 0 01-.266.266zm-.015-.773a.091.091 0 00-.09.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.09-.09v-.416a.091.091 0 00-.09-.091h-.015zm.727.773h-.015a.268.268 0 01-.267-.266v-.416c0-.147.12-.267.267-.267h.015c.146 0 .266.12.266.267v.416c0 .146-.12.266-.266.266zm-.015-.773a.091.091 0 00-.091.09v.417a.091.091 0 00.09.09h.016a.091.091 0 00.09-.09v-.416a.091.091 0 00-.09-.091h-.015zm.726.773h-.014a.268.268 0 01-.267-.266v-.416c0-.147.12-.267.267-.267h.014c.147 0 .267.12.267.267v.416c0 .146-.12.266-.267.266zm-.014-.773a.091.091 0 00-.091.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.091-.09v-.416a.091.091 0 00-.09-.091h-.015zm1.107.773H4.81a.268.268 0 01-.266-.266v-.416c0-.147.12-.267.266-.267h.015c.147 0 .267.12.267.267v.416c0 .146-.12.266-.267.266zm-.014-.773a.091.091 0 00-.091.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.091-.09v-.416a.091.091 0 00-.09-.091H4.81zm.726.773h-.015a.268.268 0 01-.266-.266v-.416c0-.147.12-.267.266-.267h.015c.147 0 .267.12.267.267v.416c0 .146-.12.266-.267.266zm-.015-.773a.091.091 0 00-.09.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.09-.09v-.416a.091.091 0 00-.09-.091h-.015zm.727.773h-.015a.268.268 0 01-.266-.266v-.416c0-.147.12-.267.266-.267h.015c.146 0 .267.12.267.267v.416c0 .146-.12.266-.267.266zm-.015-.773a.091.091 0 00-.09.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.09-.09v-.416a.091.091 0 00-.09-.091h-.015zm.727.773h-.015a.268.268 0 01-.266-.266v-.416c0-.147.12-.267.266-.267h.015c.146 0 .266.12.266.267v.416c0 .146-.12.266-.266.266zm-.015-.773a.091.091 0 00-.09.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.09-.09v-.416a.091.091 0 00-.09-.091h-.015z"
                fill="#E6EAFF"
            />
            <Path
                d="M8.053 7.225h-.015a.268.268 0 01-.267-.267v-.416c0-.147.12-.267.267-.267h.015c.146 0 .266.12.266.267v.416c0 .146-.12.267-.266.267zm-.015-.774a.091.091 0 00-.09.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.09-.09v-.416a.091.091 0 00-.09-.09h-.015zm.727.774H8.75a.268.268 0 01-.267-.267v-.416c0-.147.12-.267.267-.267h.015c.146 0 .266.12.266.267v.416c0 .146-.12.267-.266.267zM8.75 6.45a.091.091 0 00-.09.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.09-.09v-.416a.091.091 0 00-.09-.09H8.75zm.727.774h-.015a.268.268 0 01-.267-.267v-.416c0-.147.12-.267.267-.267h.015c.146 0 .266.12.266.267v.416c0 .146-.12.267-.266.267zm-.015-.774a.091.091 0 00-.09.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.09-.09v-.416a.091.091 0 00-.09-.09h-.015zm.726.774h-.014a.268.268 0 01-.267-.267v-.416c0-.147.12-.267.267-.267h.014c.147 0 .267.12.267.267v.416c0 .146-.12.267-.267.267zm-.014-.774a.091.091 0 00-.091.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.091-.09v-.416a.092.092 0 00-.09-.09h-.015zm1.107.774h-.014A.268.268 0 0111 6.958v-.416c0-.147.12-.267.267-.267h.014c.147 0 .267.12.267.267v.416c0 .146-.12.267-.267.267zm-.014-.774a.091.091 0 00-.091.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.091-.09v-.416a.091.091 0 00-.09-.09h-.015zm.726.774h-.015a.268.268 0 01-.266-.267v-.416c0-.147.12-.267.266-.267h.015c.146 0 .267.12.267.267v.416c0 .146-.12.267-.267.267zm-.015-.774a.091.091 0 00-.09.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.09-.09v-.416a.092.092 0 00-.09-.09h-.015zm.727.774h-.015a.268.268 0 01-.266-.267v-.416c0-.147.12-.267.266-.267h.015c.146 0 .267.12.267.267v.416c0 .146-.12.267-.267.267zm-.015-.774a.091.091 0 00-.09.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.09-.09v-.416a.091.091 0 00-.09-.09h-.015zm.727.774h-.015a.268.268 0 01-.266-.267v-.416c0-.147.12-.267.266-.267h.015c.146 0 .266.12.266.267v.416c0 .146-.12.267-.266.267zm-.015-.774a.091.091 0 00-.09.09v.417a.091.091 0 00.09.09h.015a.091.091 0 00.09-.09v-.416a.091.091 0 00-.09-.09h-.015z"
                fill="#CAD4FF"
            />
        </Svg>
    )
}

export default DebitCardComponent
