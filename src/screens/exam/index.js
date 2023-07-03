import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { useNavigation } from "@react-navigation/native";
import { Height, Width } from "../../utils/responsive";
import ExamHeaderComponent from "../../../assets/svgs/ExamHeader";
import { content } from "../../utils/content";
import { useDispatch, useSelector } from "react-redux";
import { fetchExamTimeTable } from "../../redux/reducer/examReducer";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import DropShadow from "react-native-drop-shadow";
import { globalstyles } from "../../utils/globalstyle";
import { BASE_URL } from "../../helper/apiConstants";

const ExamScreen = () => {
  const navigation = useNavigation();
  const showBack = true;
  const imageShow = false;
  const textShow = true;

  const dispatch = useDispatch();
  const ExamtimeTable = useSelector((state) => state.examTimeTable);

  console.log({ ExamtimeTable });
  useEffect(() => {
    dispatch(fetchExamTimeTable());
  }, [dispatch]);
  console.log(
    `${BASE_URL}exam_time_table/${ExamtimeTable.data.Exam_TimeTable}`
  );
  return (
    <View style={globalstyles.container}>
      <Header
        showBack={showBack}
        imageShow={imageShow}
        textShow={textShow}
        firstText={content.exam}
        dynamicImage={<ExamHeaderComponent size={Height(110)} />}
        onPress={() => navigation.goBack()}
      />
      {ExamtimeTable.data.map((item, i) => {
        console.log({ item });
        return (
          <View>
            <DropShadow
              style={{
                shadowColor: "rgba(0, 165, 235, 0.15)",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: Platform.OS === "ios" ? 1 : 0.2,
                shadowRadius: 5,
                elevation: 5,
                alignSelf: "center",
              }}>
              <View
                style={{
                  height: Height(55),
                  width: Width(200),
                  backgroundColor: colors.whiteColor,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: Width(5),
                }}>
                <Text
                  style={{
                    fontSize: Height(20),
                    fontFamily: fonts.ARCHIVO_SEMIBOLD,
                    color: colors.textColor,
                  }}>
                  {item && item.Exam_Type}
                </Text>
              </View>
            </DropShadow>

            <Image
              source={{
                uri:
                  item && `${BASE_URL}exam_time_table/${item.Exam_TimeTable}`,
              }}
              style={styles.image}
            />
          </View>
        );
      })}
    </View>
  );
};

export default ExamScreen;

const styles = StyleSheet.create({
  flatList: {
    marginVertical: Height(30),
  },
  view: {
    height: Height(80),
    width: Width(350),
    backgroundColor: colors.whiteColor,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: Width(5),
    marginTop: Height(30),
  },
  lineView: {
    width: Width(5),
    backgroundColor: colors.textColor,
    height: Height(80),
    borderTopLeftRadius: Width(5),
    borderBottomLeftRadius: Width(5),
  },
  subView: {
    marginLeft: Width(10),
    width: Width(200),
  },
  subjectCode: {
    fontSize: Height(15),
    fontFamily: fonts.ARCHIVO_SEMIBOLD,
    color: colors.textColor,
  },
  text: {
    fontSize: Height(12),
    fontFamily: fonts.ARCHIVO_REGULAR,
    color: colors.blackColor,
    marginTop: Height(5),
  },
  dateText: {
    marginLeft: Width(60),
    fontSize: Height(12),
    fontFamily: fonts.ARCHIVO_REGULAR,
    color: colors.blackColor,
    marginTop: Height(5),
  },
  image: {
    height: Height(300),
    width: Width(390),
  },
});
