import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function NotificationHeaderComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 106 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M48.723 18.977s1.849 3.419 2.217 4.99l-.53.943-2.837 1.547c-.244-1.729-2.328-5.582-2.328-5.582l3.478-1.898z"
                fill="url(#paint0_linear_72_1269)"
            />
            <Path
                d="M52.595 1.385s-1.178 1.503-1.813 1.976l-.529-.054L49 2.332C49.731 1.884 51.06.19 51.06.19l1.536 1.195z"
                fill="url(#paint1_linear_72_1269)"
            />
            <Path
                d="M87.808 33.154s7.71-.379 3.621 23.115c0 0-2.75 7.975.722 13.114H41.03v-36.23h46.777z"
                fill="#1BD9E5"
            />
            <Path
                d="M82.56 94.232s3.571-4.166.22-6.813c0 0-2.448-1.482-4.443-1.362 0 0 2.828 4.743 1.912 5.215-.915.472-2.77-5.512-2.77-5.512s-5.57-.543-7.362.321c0 0 4.762 3.897 3.759 4.13-1.003.231-6.147-3.596-6.147-3.596s-5.183.882-4.907 4.045c.276 3.163 2.063 4.138 2.849 4.055.786-.083 5.378-1.837 5.477-1.194.1.643-2.664 2.746-4.6 2.844 0 0 3.655 4.031 6.084 2.868 2.43-1.164 2.636-3.007 4.151-3.7 1.515-.691 2.807-.69 2.182.016-.626.706-3.366 1.39-4.232 2.922-.865 1.532-1.643 2.565.87 2.187 2.514-.377 6.598-2.215 6.778-4.323l.179-2.103z"
                fill="#599DAD"
            />
            <Path
                d="M65.369 90.747s14.082-.542 17.19 3.485c0 0 .689 2.06 2.805 3.934l.33.9s-2.442-2.574-3.313-2.73c0-.001 1.365-4.988-17.012-5.589zM36.78 48.523s3.438 1.518 4.52 5.368l-.525.168s-1.848-3.817-3.904-5.01c-2.057-1.192-.092-.526-.092-.526z"
                fill="#599DAD"
            />
            <Path
                d="M51.879 43.9s3.086 5.004 1.065 10.92l-.825-.247s1.003-6.557-.589-9.917c-1.592-3.36.349-.756.349-.756z"
                fill="#6BB7BF"
            />
            <Path d="M31.2 47.06h53.37v69.601H31.2V47.059z" fill="#1AB9E1" />
            <Path
                d="M30.35 47.06h52.474v69.601H30.35V47.059z"
                fill="url(#paint2_linear_72_1269)"
            />
            <Path
                d="M30.353 47.058h52.471c-.29-3.968.147-6.851.849-8.922 1.345-3.983 3.662-4.983 3.662-4.983H37.848c-4.223 0-7.498 2.544-8.39 5.922a9.21 9.21 0 00-.09.38c-.847 3.865.948 7.532.985 7.603z"
                fill="#1AB9E1"
            />
            <Path
                d="M30.353 47.058h52.471c-.29-3.968.147-6.851.848-8.922-5.362.983-18.644 3.075-32.86 2.723-9.197-.229-16.465-.844-21.444-1.404-.847 3.865.948 7.532.985 7.603z"
                fill="#1AB9E1"
            />
            <Path
                d="M75.493 61.803H47.667a.52.52 0 00-.52.52v.265c0 .287.233.52.52.52h27.826a.52.52 0 00.52-.52v-.266a.52.52 0 00-.52-.52zM64.724 64H47.557a.41.41 0 00-.41.409v.486c0 .226.184.41.41.41h17.167a.41.41 0 00.41-.41v-.486a.41.41 0 00-.41-.41zM44.467 65.093v-2.666h-.352c-.213 0-.32-.089-.32-.267 0-.128.084-.218.251-.27.133-.037.27-.059.407-.065.187-.014.337-.021.45-.021.11 0 .18.022.209.067.028.046.042.158.042.34v2.884h.363c.234 0 .352.102.352.304 0 .214-.118.32-.352.32h-1.462a.403.403 0 01-.258-.083.28.28 0 01-.104-.232c0-.206.12-.31.357-.31l.417-.001z"
                fill="#BBD5FC"
            />
            <Path
                d="M75.515 75.55H47.688a.52.52 0 00-.52.519v.266c0 .287.233.52.52.52h27.827a.52.52 0 00.52-.52v-.266a.52.52 0 00-.52-.52zM64.745 77.745H47.578a.41.41 0 00-.41.41v.486c0 .226.184.41.41.41h17.167a.41.41 0 00.41-.41v-.486a.41.41 0 00-.41-.41zM45.946 78.784c0 .178-.124.267-.373.267h-1.545c-.223 0-.335-.09-.335-.272a.339.339 0 01.09-.198c.088-.1.216-.25.386-.452.258-.323.473-.603.646-.84.06-.077.144-.196.254-.357a.866.866 0 00.136-.407.419.419 0 00-.117-.304.407.407 0 00-.302-.12.463.463 0 00-.312.112.542.542 0 00-.14.283 3.19 3.19 0 01-.086.312.24.24 0 01-.23.15.265.265 0 01-.222-.104.354.354 0 01-.075-.235c0-.113.017-.226.051-.334.065-.227.206-.424.401-.557a1.16 1.16 0 01.664-.183c.263-.009.52.084.716.26a.907.907 0 01.298.697 1.22 1.22 0 01-.213.652c-.078.123-.24.34-.485.651-.125.16-.323.394-.593.7h1.017c.246.002.369.096.369.28zM75.575 87.016H47.748a.52.52 0 00-.52.52v.265c0 .287.233.52.52.52h27.827a.52.52 0 00.52-.52v-.266a.52.52 0 00-.52-.52zM64.805 89.212H47.638a.41.41 0 00-.41.41v.486c0 .226.184.41.41.41h17.167a.41.41 0 00.41-.41v-.486a.41.41 0 00-.41-.41zM46.005 89.424a1.013 1.013 0 01-.351.804c-.236.198-.536.301-.843.29a1.179 1.179 0 01-.675-.189c-.295-.198-.443-.438-.443-.717a.3.3 0 01.077-.207.254.254 0 01.198-.087c.083 0 .162.056.236.168.063.107.133.21.207.309a.536.536 0 00.407.168c.226 0 .386-.083.482-.25a.667.667 0 00.068-.318c0-.315-.185-.49-.555-.525-.208-.02-.313-.108-.313-.265a.253.253 0 01.182-.245c.226-.084.34-.127.344-.13.122-.08.183-.22.182-.42a.377.377 0 00-.105-.281.386.386 0 00-.283-.104.516.516 0 00-.346.106.688.688 0 00-.177.313.218.218 0 01-.221.168.224.224 0 01-.19-.1.365.365 0 01-.074-.222.616.616 0 01.082-.3.924.924 0 01.413-.39c.174-.086.365-.13.56-.129a.974.974 0 01.678.248.843.843 0 01.271.653.895.895 0 01-.407.77c.398.158.596.452.596.882z"
                fill="#D2E4FD"
            />
            <Path
                d="M64.788 50.165H47.453a.543.543 0 00-.542.543v.438a.542.542 0 00.542.542h17.335a.543.543 0 00.543-.542v-.438a.543.543 0 00-.543-.543zM69.309 52.504H42.933a.662.662 0 00-.661.661v.193a.662.662 0 00.661.661h26.376a.662.662 0 00.662-.662v-.193a.662.662 0 00-.662-.661z"
                fill="#BBD5FC"
            />
            <Path
                d="M58.154 70.146c5.716 0 11.141-.717 15.185-1.742 4.085-1.036 6.287-2.728 6.287-4.23 0-1.361-1.794-2.613-5.188-3.62 3.252.965 4.991 2.382 4.991 3.62 0 1.373-2.254 2.732-6.184 3.73-4.03 1.023-9.389 1.585-15.09 1.585-5.703 0-11.062-.562-15.091-1.585-3.93-.995-6.184-2.355-6.184-3.73 0-1.455 2.374-3.262 6.194-4.716 4.342-1.655 9.7-2.268 15.08-2.268 10.101 0 14.259 1.178 17.867 2.657-3.624-1.485-7.733-3.167-17.867-3.167-5.401 0-10.78.916-15.145 2.578-3.902 1.485-6.325 3.37-6.325 4.916 0 1.501 2.25 2.899 6.335 3.934 4.044 1.026 9.419 2.038 15.135 2.038z"
                fill="#C65447"
            />
            <Path
                d="M23.442 83.547s.188 1.831.395 2.176c.206.345 1.085 1.452 1.46 1.67.375.216-.229-1.458-.153-1.784.076-.326.31.595.475.617.166.021.123-.808.13-1.109.005-.3-.804-1.046-1.086-1.688-.282-.641-1.221.118-1.221.118zM45.925 66.67l.42-.794s-.209-1.415 1.56-2.307c0 0 .648-.264 1.014.265.339.486-.642.398-.59 1.23.053.833-.339 1.321-.892 1.592l-.454.527-1.058-.514z"
                fill="#FFB27D"
            />
            <Path
                d="M29.18 64.772s1.522 7.468 9.895 9.908c2.614.762 8.551-7.843 8.551-7.843s-.208-.794-1.516-.61c0 0-5.782 3.827-6.512 4.243-.645.369-4.893-4.743-6.83-5.568-1.935-.825-3.588-.13-3.588-.13z"
                fill="#015DA6"
            />
            <Path
                d="M51.464 63.3l.237 1.547-7.776 1.194-.237-1.546 7.776-1.194z"
                fill="#C65447"
            />
            <Path
                d="M53.388 63.798l-1.69 1.051-.237-1.546 1.927.495zM42.86 65.15l.075.488a.55.55 0 00.628.46l.36-.054-.238-1.546-.391.06a.52.52 0 00-.434.591z"
                fill="#FFB27D"
            />
            <Path
                d="M19.184 111.719s-1.039.949-.836 1.621c.202.671 1.14 1.123 1.267 1.945.127.823.633 1.273 1.09 1.273h2.17s.339-.579-.475-.754c-.814-.174-1.117-1.142-1.066-2.04.05-.898-.076-2.095-.076-2.095l-1.723-.399-.351.449zM31.927 114.17s-.186 2.157.271 2.382l5.834-.012s0-.673-.937-.823c-.937-.15-2.584-.699-2.863-1.921-.279-1.223-2.305.374-2.305.374z"
                fill="#015DA6"
            />
            <Path
                d="M36.855 83.695s-.308 3.782-.67 8.328c-.492 6.172-1.085 13.76-1.142 15.194-.1 2.496-.506 6.487-.506 6.487s-.963.95-2.889.548c0 0-1.716-5.698-2.206-11.725l-.023-.298c-.456-6.137-1.165-19.061-1.165-19.061l8.6.527z"
                fill="#272727"
            />
            <Path
                d="M36.855 83.695s-.308 3.782-.67 8.328l-6.743 10.506-.023-.298c-.456-6.137-1.165-19.061-1.165-19.061l8.6.525z"
                fill="#1A1A1A"
            />
            <Path
                d="M35.449 84.144S29.9 97.84 26.252 104.276c-3.648 6.436-4.785 8.232-4.785 8.232s-2.09-.823-2.28-1.384c0 0 1.395-12.425 3.838-15.454 1.38-1.711 3.002-6.851 3.078-8.644.076-1.793.494-5.351.494-5.351l8.852 2.47z"
                fill="#272727"
            />
            <Path
                d="M28.149 63.039s3.754 1.811 5.918 1.14a5.096 5.096 0 00-1.465-1.173c.075-.435.136-.814.167-1.131.052-.383.082-.768.091-1.153l-1.448-1.14-1.373-1.09c.11 3.063-1.89 4.547-1.89 4.547z"
                fill="#FFB27D"
            />
            <Path
                d="M26.17 82.377c-.008.229.483.492.7.59 1.606.705 3.105 1.196 4.803 1.356 2.005.204 4.378-.245 5.194-.229a.339.339 0 00.224-.09c.059-.04.1-2.459.059-5.5 0-.123 0-.246-.009-.368v-.042a114.228 114.228 0 00-.116-3.68c-.117-2.737-.333-5.376-.699-6.835-.442-1.721-1.44-2.86-2.348-3.688l-.746-.656c-.75.148-1.54.106-2.33-.279-.866-.418-1.799-.869-1.949-.754-1.132.828-1.9 2.689-2.306 5.066a26.413 26.413 0 00-.34 4.507c0 .59.018 1.197.05 1.796.2 3.245 0 6.064-.116 7.695-.037.48-.062.848-.07 1.11z"
                fill="#0073CE"
            />
            <Path
                d="M26.237 82.225c13.146-.026 2.425-14.264 2.425-14.264l-2.13-.692a41.412 41.412 0 00-.247 4.816c0 .63.012 1.279.036 1.918.145 3.47 0 6.482-.084 8.222z"
                fill="#046BBC"
            />
            <Path
                d="M30.013 59.662s.95 1.73 2.756 2.213c.052-.383.082-.768.091-1.153l-1.448-1.14-1.399.08z"
                fill="#ED985F"
            />
            <Path
                d="M33.52 60.67s-3.58.585-3.917-1.616c-.336-2.202-1.025-3.61 1.248-4.077 2.272-.467 2.849.308 3.14 1.018.29.71.453 4.466-.47 4.674z"
                fill="#FFB27D"
            />
            <Path
                d="M28.301 54.714c-.032-.037-.107-.068-.271-.076a.68.68 0 01.311-.089c.036-.232.16-.642.559-.742a.498.498 0 00-.243.361c.462-.475 1.453-.82 4.198-.604 3.617.285 2.425 2.601 1.957 2.877-.468.276-1.647-.48-2.52-.41-.873.068-1.038 1.329-1.334 1.502-.297.173-.18-.136-.58-.314-.401-.177-.439.483-.323.914.115.431-.434 1-.434 1l-.556-.598c-.557-.6-1.081-3.136-.828-3.676l.064-.145z"
                fill="#272727"
            />
            <Path
                d="M28.953 62.188S26.686 63.26 25.6 64.91c-1.685 2.558-3.639 11.884-3.675 12.748-.036.863 1.424 6.96 1.424 6.96s1.483-.098 1.866-.847c0 0-.296-6.263-.109-6.666.188-.403 6.181-8.403 5.507-10.107-.674-1.705-1.66-4.81-1.66-4.81z"
                fill="#015DA6"
            />
            <Path
                d="M46.353 65.838s-.123-.487.215-.706c.338-.219.648-.814.79-.733.295.167-.161.686-.078 1.334.031.227-.499.823-.927.105z"
                fill="#FFB27D"
            />
            <Path
                d="M42.249 101.524h32.263a.395.395 0 00.393-.393.394.394 0 00-.393-.392H42.246a.395.395 0 00-.393.392.395.395 0 00.396.393zM42.249 103.096h32.263a.395.395 0 00.393-.393.392.392 0 00-.393-.392H42.246a.39.39 0 00-.393.392.395.395 0 00.396.393zM42.238 104.838h32.264a.392.392 0 00.277-.67.396.396 0 00-.277-.116H42.236a.395.395 0 00-.363.544.394.394 0 00.365.242zM42.197 105.794h28.058c.202 0 .366.164.366.366v.053a.366.366 0 01-.366.367H42.197a.366.366 0 01-.366-.367v-.053c0-.202.164-.366.366-.366z"
                fill="#D2E4FD"
            />
            <Path
                d="M95.561 98.566l-30.815-4.842-3.404 21.663 30.816 4.841 3.403-21.662z"
                fill="#0073CE"
            />
            <Path
                d="M84.013 96.432l-7.515-1.18-.266 1.697 7.514 1.18.267-1.697z"
                fill="#272727"
            />
            <Path
                d="M72.013 99.21s-.791 4.922-1.644 6.807l-1.276.546-4.096-.644c1.104-1.948 1.995-7.496 1.995-7.496l5.02.787z"
                fill="url(#paint3_linear_72_1269)"
            />
            <Path
                d="M19.338 36.575s-.926 5.765-1.925 7.973l-1.495.639-4.796-.754c1.292-2.282 2.335-8.78 2.335-8.78l5.881.922z"
                fill="url(#paint4_linear_72_1269)"
            />
            <Path d="M69.091 106.561l.117-.744 1.162.183-1.279.561z" fill="#15A5C7" />
            <Path
                d="M77.157 98.803s-.547 3.404-1.139 4.709l-.882.376-2.832-.445c.763-1.347 1.38-5.186 1.38-5.186l3.473.546z"
                fill="#E4E3EE"
            />
            <Path d="M75.136 103.888l.081-.514.803.126-.884.388z" fill="#C9C9C9" />
            <Path
                d="M86.703 102.152s-.405 2.51-.88 3.466l-.732.265-2.378-.374c.618-.985 1.074-3.816 1.074-3.816l2.916.459z"
                fill="url(#paint5_linear_72_1269)"
            />
            <Path d="M85.09 105.883l.06-.38.675.106-.734.274z" fill="#15A5C7" />
            <Path
                d="M92.614 101.027s-.518 3.211-1.125 4.433l-.937.339-3.042-.479c.79-1.26 1.373-4.879 1.373-4.879l3.73.586z"
                fill="#E4E3EE"
            />
            <Path d="M90.552 105.799l.076-.486.863.136-.939.35z" fill="#C9C9C9" />
            <Path
                d="M75.775 106.178s-.404 2.51-.879 3.466l-.732.265-2.378-.374c.617-.984 1.073-3.814 1.073-3.814l2.916.457z"
                fill="#E4E3EE"
            />
            <Path d="M74.164 109.91l.06-.38.674.106-.734.274z" fill="#C9C9C9" />
            <Path
                d="M86.79 107.771s-.523 3.239-1.135 4.472l-.945.341-3.068-.482c.797-1.271 1.385-4.922 1.385-4.922l3.762.591z"
                fill="url(#paint6_linear_72_1269)"
            />
            <Path d="M84.71 112.584l.077-.489.87.137-.947.352z" fill="#15A5C7" />
            <Path
                d="M81.866 102.283l-3.904-.635-1.06 6.525 3.904.634 1.06-6.524zM90.334 115.058l-25.941-4.215-.06.372 25.94 4.215.06-.372zM80.978 116.188l-17.005-2.763-.06.371 17.005 2.763.06-.371zM76.973 114.212l-12.79-2.078-.06.372 12.79 2.078.06-.372z"
                fill="#E4E3EE"
            />
            <Path
                d="M93.971 122.831l-8.864-1.44.06-.372 8.492 1.379.793-4.88.372.061-.853 5.252zM62.819 98.271l-.372-.06 1.092-6.721 6.59 1.07-.06.372-6.218-1.01-1.032 6.349zM28.666 16.57l-7.185 1.955 1.375 5.05 7.185-1.955-1.375-5.05z"
                fill="#0073CE"
            />
            <Path
                d="M25.942 17.233l-1.752.477.108.395 1.752-.477-.108-.395z"
                fill="#272727"
            />
            <Path
                d="M23.6 19.01s.308 1.15.307 1.643l-.225.244-.955.26c.05-.532-.298-1.828-.298-1.828l1.17-.319z"
                fill="url(#paint7_linear_72_1269)"
            />
            <Path d="M23.682 20.896l-.048-.173.271-.074-.223.247z" fill="#15A5C7" />
            <Path
                d="M24.68 18.419s.214.795.212 1.137l-.155.168-.66.18c.034-.368-.206-1.265-.206-1.265l.81-.22z"
                fill="#E4E3EE"
            />
            <Path d="M24.737 19.724l-.033-.12.188-.051-.155.17z" fill="#C9C9C9" />
            <Path
                d="M27.087 18.216s.157.586.147.84l-.134.13-.554.15c.038-.274-.14-.935-.14-.935l.68-.185z"
                fill="url(#paint8_linear_72_1269)"
            />
            <Path d="M27.1 19.186l-.024-.089.157-.043-.133.132z" fill="#15A5C7" />
            <Path
                d="M28.264 17.393s.201.75.188 1.076l-.17.165-.71.193c.049-.352-.178-1.197-.178-1.197l.87-.237z"
                fill="#E4E3EE"
            />
            <Path d="M28.281 18.634l-.03-.113.2-.055-.17.168z" fill="#C9C9C9" />
            <Path
                d="M25.1 20.16s.157.586.147.84l-.134.13-.554.151c.038-.275-.139-.936-.139-.936l.68-.185z"
                fill="#E4E3EE"
            />
            <Path d="M25.113 21.13l-.024-.088.158-.043-.134.131z" fill="#C9C9C9" />
            <Path
                d="M27.654 19.431s.203.756.19 1.085l-.172.167-.716.194c.05-.354-.179-1.207-.179-1.207l.877-.239z"
                fill="url(#paint9_linear_72_1269)"
            />
            <Path d="M27.672 20.683l-.031-.115.203-.055-.172.17z" fill="#15A5C7" />
            <Path
                d="M26.046 18.717l-.912.243.406 1.524.913-.243-.407-1.524zM29.138 20.672l-6.061 1.616.023.087 6.061-1.616-.023-.087zM27.211 21.832l-3.973 1.06.023.086 3.973-1.06-.023-.086zM26.146 21.793l-2.989.797.023.087 2.989-.797-.023-.087z"
                fill="#E4E3EE"
            />
            <Path
                d="M30.69 22.01l-2.072.552-.023-.087 1.985-.53-.304-1.14.087-.023.327 1.227zM21.506 19.704l-.087.023-.419-1.57 1.54-.411.023.087-1.453.387.396 1.484zM54.157 30.685l.042.064-.082.033c.119.03.264.24.358.325.114.101.229.2.346.298.145.121.44.458.654.42.241-.045.283-.447.344-.63l.172-.523.093-.284.032-.095c.064-.098.043-.124-.06-.08l-.114-.116.012.04.043-.158.086-.007a.138.138 0 00-.15.01.137.137 0 00-.05.143.197.197 0 00.156.155.162.162 0 00.159-.041l.028-.03a.162.162 0 00.045-.158c-.075-.197-.301-.23-.404-.035-.09.168-.124.388-.183.57l-.2.618c-.029.091-.047.2-.09.286-.031.053-.021.063.03.029l-.153-.101a11.943 11.943 0 01-.938-.69c-.072-.058-.122-.116-.22-.087a.075.075 0 00-.053.07.09.09 0 00.049.088c.011.007.025.01.038.008a.062.062 0 00.036-.017l.01-.009a.057.057 0 00-.04-.097h.004z"
                fill="#0073CE"
            />
            <Path
                d="M55.53 31.66a3.402 3.402 0 01-.06-1.672c.03-.151-.2-.217-.233-.065a3.128 3.128 0 00.139 1.779c.035.094.183.058.154-.042zM55.534 29.252c.068-.247.153-.488.255-.723.084-.193.216-.381.264-.586.02-.092-.097-.177-.168-.098-.145.161-.217.4-.286.603-.085.25-.152.506-.2.766-.017.088.11.126.135.038zM56.267 27.34c.235-.498.543-.958.915-1.364.098-.11-.058-.269-.16-.162-.394.424-.692.927-.873 1.476-.026.07.085.116.118.05zM57.748 25.458c.169-.07.317-.175.473-.267.12-.071.34-.254.48-.215a.114.114 0 00.133-.06.113.113 0 00.012-.05v-.027a.139.139 0 00-.099-.13c-.173-.067-.358.106-.488.196-.196.135-.415.278-.563.463-.029.036-.004.114.052.09zM59.553 24.459c.226-.04.453-.082.682-.126.18-.033.449-.141.623-.103a.127.127 0 00.144-.065.126.126 0 00.014-.054l.002-.031a.152.152 0 00-.11-.144c-.18-.064-.426.063-.598.111-.269.076-.538.154-.806.231-.117.034-.068.202.049.18v.001z"
                fill="#0073CE"
            />
            <Path
                d="M80.236 16.16l-6.203-2.467a1.057 1.057 0 00-1.372.591l-1.613 4.056a1.056 1.056 0 00.59 1.371l6.204 2.468a1.058 1.058 0 001.372-.59l1.612-4.057a1.056 1.056 0 00-.59-1.372z"
                fill="url(#paint10_linear_72_1269)"
            />
            <Path
                d="M77.587 12.437l-2.523 1.78.084.12 2.523-1.781-.084-.12zM77.834 12.543l-.138.05 1.186 3.325.137-.048-1.185-3.327z"
                fill="#001B62"
            />
            <Path
                d="M78.01 12.626a.334.334 0 11-.59-.315.334.334 0 01.59.315z"
                fill="#001B62"
            />
            <Path
                d="M77.88 12.556a.187.187 0 11-.33-.176.187.187 0 01.33.176zM72.905 17.883l.496-1.28.202.079.272 1.028a.877.877 0 01.03.134l.009.003.02-.054c.008-.017.014-.034.021-.052l.311-.802.202.079-.497 1.279-.194-.076-.276-1.04a28.914 28.914 0 01-.028-.137l-.01-.004a9.002 9.002 0 01-.02.054l-.022.056-.315.811-.201-.078zm1.752.705a.608.608 0 01-.238-.154.39.39 0 01-.093-.231.743.743 0 01.06-.31.737.737 0 01.164-.268.379.379 0 01.224-.107.591.591 0 01.28.045c.105.04.185.093.24.157.056.063.086.14.092.229a.715.715 0 01-.058.31.723.723 0 01-.166.268.378.378 0 01-.223.109.604.604 0 01-.282-.048zm.062-.16a.318.318 0 00.167.024.232.232 0 00.13-.078c.04-.042.074-.1.104-.177l.013-.033a.549.549 0 00.043-.2.222.222 0 00-.045-.144.305.305 0 00-.138-.097.3.3 0 00-.166-.021.231.231 0 00-.132.075.582.582 0 00-.101.178l-.013.033a.583.583 0 00-.045.2c0 .057.016.106.046.146.03.04.076.07.137.094zm.852.515a.257.257 0 01-.12-.083.205.205 0 01-.035-.11.35.35 0 01.024-.117l.24-.617-.124-.048.063-.16.127.049.141-.26.155.06-.106.273.177.07-.062.16-.178-.07-.23.596c-.011.028-.014.052-.007.072.007.02.024.035.053.046l.097.038-.05.13a.286.286 0 01-.053-.005.402.402 0 01-.058-.01.285.285 0 01-.054-.014zm.779-1.047l.076-.198.194.075-.077.198-.193-.075zm-.447 1.15l.38-.98.195.075-.38.98-.195-.075zm.825.346a.545.545 0 01-.225-.15.376.376 0 01-.083-.227.794.794 0 01.064-.308.753.753 0 01.161-.267.377.377 0 01.215-.112.537.537 0 01.268.04.571.571 0 01.165.094.348.348 0 01.098.123.306.306 0 01.03.151.526.526 0 01-.039.176l-.195-.076a.34.34 0 00.027-.137.16.16 0 00-.04-.101.264.264 0 00-.111-.073.243.243 0 00-.147-.015.233.233 0 00-.125.079.584.584 0 00-.102.18l-.012.033a.634.634 0 00-.048.2c0 .057.012.105.039.143a.28.28 0 00.128.09c.05.02.092.027.129.021a.182.182 0 00.1-.052.315.315 0 00.072-.115l.188.073a.487.487 0 01-.087.149.34.34 0 01-.281.122.552.552 0 01-.189-.04zm1.01.392a.578.578 0 01-.233-.153.384.384 0 01-.087-.229.746.746 0 01.06-.309.738.738 0 01.164-.269.372.372 0 01.22-.108.568.568 0 01.277.044.493.493 0 01.212.144c.05.06.077.132.082.216a.717.717 0 01-.057.291l-.03.075-.687-.267a.572.572 0 00-.037.188.22.22 0 00.044.135.32.32 0 00.133.088c.037.014.07.022.103.024a.232.232 0 00.088-.012.215.215 0 00.123-.129l.19.074a.405.405 0 01-.09.143.323.323 0 01-.132.08.431.431 0 01-.16.017.627.627 0 01-.183-.043zm-.02-.705l.48.186a.4.4 0 00.03-.127.215.215 0 00-.012-.1.176.176 0 00-.054-.072.29.29 0 00-.087-.051.318.318 0 00-.145-.024.205.205 0 00-.118.055.419.419 0 00-.095.133z"
                fill="#0073CE"
            />
            <Path
                d="M28.656 3.164L25.5 4.206a.525.525 0 00-.334.665l.681 2.062a.526.526 0 00.664.334l3.155-1.042A.526.526 0 0030 5.561l-.682-2.063a.526.526 0 00-.663-.334z"
                fill="url(#paint11_linear_72_1269)"
            />
            <Path
                d="M26.455 2.591l-.393 1.486.07.018.393-1.485-.07-.019zM26.583 2.553l-.037.062 1.516.89.037-.063-1.516-.89z"
                fill="#001B62"
            />
            <Path
                d="M26.677 2.528a.166.166 0 11-.326.069.166.166 0 01.326-.069z"
                fill="#001B62"
            />
            <Path
                d="M26.605 2.543a.093.093 0 01-.142.097.093.093 0 11.142-.097zM26.27 6.505l-.221-.65.102-.035.434.307a.441.441 0 01.054.042l.006-.002-.01-.028-.009-.026-.138-.407.102-.035.22.65-.098.033-.44-.31-.028-.022a1.772 1.772 0 01-.027-.021l-.004.001.009.028.01.028.14.412-.103.035zm.897-.293a.304.304 0 01-.14.017.195.195 0 01-.11-.058.373.373 0 01-.077-.138.368.368 0 01-.023-.156.19.19 0 01.051-.112.295.295 0 01.122-.074.294.294 0 01.143-.016.184.184 0 01.108.058.357.357 0 01.077.137c.02.06.028.112.023.156a.19.19 0 01-.05.114.302.302 0 01-.124.072zm-.027-.081a.16.16 0 00.071-.045.115.115 0 00.025-.072.272.272 0 00-.017-.1l-.006-.017a.276.276 0 00-.047-.09.111.111 0 00-.064-.042.153.153 0 00-.084.008.15.15 0 00-.07.045.115.115 0 00-.027.071.29.29 0 00.019.1l.005.018a.29.29 0 00.047.09.12.12 0 00.065.042.157.157 0 00.083-.008zm.491-.076a.128.128 0 01-.072.006.102.102 0 01-.049-.03.176.176 0 01-.029-.053l-.106-.314-.062.021-.028-.081.064-.022-.029-.145.079-.027.047.14.09-.031.027.081-.09.03.103.303c.005.014.012.024.02.03.01.005.021.005.036 0l.05-.016.022.066a.143.143 0 01-.022.015.208.208 0 01-.025.015.14.14 0 01-.026.012zm-.038-.652l-.034-.1.099-.034.034.1-.099.034zm.199.584l-.17-.498.1-.033.168.498-.098.033zm.427-.132a.272.272 0 01-.134.015.188.188 0 01-.105-.06.397.397 0 01-.075-.14.376.376 0 01-.024-.154.189.189 0 01.047-.111.268.268 0 01.115-.071.285.285 0 01.094-.017c.028 0 .053.005.077.016.023.01.043.026.06.048a.262.262 0 01.042.08l-.1.034a.17.17 0 00-.033-.062.08.08 0 00-.048-.026.132.132 0 00-.066.008.122.122 0 00-.061.042.116.116 0 00-.023.07.293.293 0 00.02.102l.005.016c.013.039.028.07.046.092a.122.122 0 00.06.043.14.14 0 00.079-.007.127.127 0 00.056-.034.09.09 0 00.021-.051.159.159 0 00-.009-.068l.096-.032c.01.03.014.058.014.085a.17.17 0 01-.069.137.275.275 0 01-.085.045zm.513-.174a.29.29 0 01-.138.016.192.192 0 01-.107-.06.373.373 0 01-.077-.138.368.368 0 01-.023-.155.186.186 0 01.05-.112.283.283 0 01.12-.073.246.246 0 01.127-.013.177.177 0 01.1.057.357.357 0 01.072.13l.013.038-.35.119a.286.286 0 00.047.083.11.11 0 00.06.038.16.16 0 00.08-.01.178.178 0 00.047-.023.117.117 0 00.03-.033.108.108 0 00.005-.089l.097-.032c.01.03.014.057.012.083a.162.162 0 01-.025.073.215.215 0 01-.056.058.314.314 0 01-.084.043zm-.235-.264l.245-.083a.201.201 0 00-.03-.059.107.107 0 00-.037-.034.088.088 0 00-.043-.01.146.146 0 00-.05.008.16.16 0 00-.064.038.102.102 0 00-.027.059.21.21 0 00.006.081z"
                fill="#0073CE"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_72_1269"
                    x1={46.7159}
                    y1={20.0579}
                    x2={49.58}
                    y2={25.3761}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1BDBE6" />
                    <Stop offset={1} stopColor="#1AB9E1" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_72_1269"
                    x1={51.715}
                    y1={0.692484}
                    x2={49.8804}
                    y2={3.02458}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1BDBE6" />
                    <Stop offset={1} stopColor="#1AB9E1" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_72_1269"
                    x1={56.5872}
                    y1={47.0593}
                    x2={56.5872}
                    y2={116.661}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1BDCE6" />
                    <Stop offset={1} stopColor="#1AB9E1" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_72_1269"
                    x1={69.1263}
                    y1={98.7414}
                    x2={67.8838}
                    y2={106.388}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1BDBE6" />
                    <Stop offset={1} stopColor="#1ABAE1" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_72_1269"
                    x1={15.9576}
                    y1={36.0259}
                    x2={14.5023}
                    y2={44.9824}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1BDBE6" />
                    <Stop offset={1} stopColor="#1ABAE1" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_72_1269"
                    x1={85.0251}
                    y1={101.879}
                    x2={84.391}
                    y2={105.781}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1BDBE6" />
                    <Stop offset={1} stopColor="#1ABAE1" />
                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_72_1269"
                    x1={84.6246}
                    y1={107.42}
                    x2={83.8066}
                    y2={112.454}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1BDBE6" />
                    <Stop offset={1} stopColor="#1ABAE1" />
                </LinearGradient>
                <LinearGradient
                    id="paint7_linear_72_1269"
                    x1={22.9254}
                    y1={19.1901}
                    x2={23.4018}
                    y2={20.9769}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1BDBE6" />
                    <Stop offset={1} stopColor="#1ABAE1" />
                </LinearGradient>
                <LinearGradient
                    id="paint8_linear_72_1269"
                    x1={26.6946}
                    y1={18.3202}
                    x2={26.9377}
                    y2={19.232}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1BDBE6" />
                    <Stop offset={1} stopColor="#1ABAE1" />
                </LinearGradient>
                <LinearGradient
                    id="paint9_linear_72_1269"
                    x1={27.1486}
                    y1={19.5659}
                    x2={27.4623}
                    y2={20.7423}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1BDBE6" />
                    <Stop offset={1} stopColor="#1ABAE1" />
                </LinearGradient>
                <LinearGradient
                    id="paint10_linear_72_1269"
                    x1={77.6291}
                    y1={14.7633}
                    x2={74.246}
                    y2={21.1087}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1BDAE5" />
                    <Stop offset={1} stopColor="#1AB9E1" />
                </LinearGradient>
                <LinearGradient
                    id="paint11_linear_72_1269"
                    x1={27.2147}
                    y1={3.46482}
                    x2={27.9533}
                    y2={6.96642}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1BDAE5" />
                    <Stop offset={1} stopColor="#1AB9E1" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default NotificationHeaderComponent
