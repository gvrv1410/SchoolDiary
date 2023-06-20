import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTimeTable } from "../../redux/reducer/timeTableReducer";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import { Height } from "../../utils/responsive";

const TabView = ({ mainContainer, activeIndex, tabData, onPress }) => {
    const activeTabContent = tabData[activeIndex]?.content;
    const dispatch = useDispatch();
    const timeTable = useSelector((state) => state.timetable);

    useEffect(() => {
        dispatch(fetchTimeTable());
    }, [dispatch]);

    return (
        <View>
            <View style={[style.mainContainer, mainContainer]}>
                {Array.isArray(timeTable.data.Daily_TimeTable[0]) &&
                    timeTable.data.Daily_TimeTable[0].map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index.toString()}
                                onPress={() => onPress(index, item)}
                                style={[
                                    style.tabStyle,
                                    {
                                        backgroundColor:
                                            colors.textColor,
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        style.headingStyle,
                                        {
                                            color:
                                                activeIndex === index
                                                    ? colors.blackColor : colors.whiteColor,
                                        },
                                    ]}
                                >
                                    {item?.title}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
            </View>
            <View style={style.contentContainer}>{activeTabContent}</View>
        </View>
    );
};

const style = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
    },
    tabStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#28A7E8',
        height: Height(70)
    },
    headingStyle: {
        fontSize: Height(15),
        fontFamily: fonts.ARCHIVO_SEMIBOLD,
    },
});

export default TabView;
