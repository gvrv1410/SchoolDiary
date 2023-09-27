import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { useNavigation } from "@react-navigation/native";
import { Height, Width } from "../../utils/responsive";
import TimeTableHeaderComponent from "../../../assets/svgs/TimeTableHeader";
import { content } from "../../utils/content";
import { globalstyles } from "../../utils/globalstyle";
import { useDispatch, useSelector } from "react-redux";
import { fetchTimeTable } from "../../redux/reducer/timeTableReducer";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import { BASE_URL } from "../../helper/apiConstants";

const TimetableScreen = () => {
  const navigation = useNavigation();
  const showBack = true;
  const imageShow = false;
  const textShow = false;
  const dispatch = useDispatch();
  const timeTable = useSelector((state) => state.timetable);

  useEffect(() => {
    dispatch(fetchTimeTable());
  }, [dispatch]);

  return (
    <View style={globalstyles.container}>
      <Header
        showBack={showBack}
        imageShow={imageShow}
        textShow={textShow}
        firstText={content.timeTable}
        dynamicImage={<TimeTableHeaderComponent size={Height(110)} />}
        onPress={() => navigation.goBack()}
      />

      <Image
        source={{
          uri: `${BASE_URL}time_table/${timeTable?.data?.Daily_TimeTable}`,
        }}
        style={{ height: 500, width: 390 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default TimetableScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: Height(18),
    fontFamily: fonts.ARCHIVO_MEDIUM,
  },
  flatList: {
    marginVertical: Height(30),
  },
  mainView: {
    marginLeft: Width(20),
  },
  subView: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeView: {
    alignItems: "center",
  },
  subText: {
    fontFamily: fonts.ARCHIVO_MEDIUM,
    color: colors.blackColor,
  },
  imageStyle: {
    height: Height(500),
    width: Width(390),
  },
});
