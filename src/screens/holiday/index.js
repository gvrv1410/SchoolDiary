import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Height, Width } from "../../utils/responsive";
import { useNavigation } from "@react-navigation/native";
import HolidayHeaderComponent from "../../../assets/svgs/HolidayHeader";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import { Calendar } from "react-native-calendars";
import { content } from "../../utils/content";
import { globalstyles } from "../../utils/globalstyle";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentHoliday } from "../../redux/reducer/holidayReducer";
import DropShadow from "react-native-drop-shadow";

const HolidayScreen = () => {
  const navigation = useNavigation();
  const showBack = true;
  const imageShow = false;
  const textShow = true;
  const [markedDates, setMarkedDates] = useState({});
  useEffect(() => {
    const markDate = (date, color) => {
      const markedDate = {};
      markedDate[date] = {
        customStyles: { container: { backgroundColor: color } },
      };
      setMarkedDates((prevMarkedDates) => ({
        ...prevMarkedDates,
        ...markedDate,
      }));
    };
    holiday.data &&
      holiday.data.forEach((data) => {
        const date = new Date(data.Holiday_Start);
        var formattedDate = date.toISOString().slice(0, 10);
        markDate(formattedDate, formattedDate ? "#E8B510" : "transparent");
      });
    markDate();
  }, []);

  const dispatch = useDispatch();
  const holiday = useSelector((state) => state.holiday);
  useEffect(() => {
    dispatch(fetchStudentHoliday());
  }, [dispatch]);

  return (
    <View style={globalstyles.container}>
      <Header
        showBack={showBack}
        imageShow={imageShow}
        textShow={textShow}
        firstText={content.holiday}
        dynamicImage={<HolidayHeaderComponent size={Height(110)} />}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.view}>
          <View style={styles.borderView}></View>
          <Calendar
            markingType={"custom"}
            markedDates={markedDates}
            style={styles.calendarView}
            theme={{
              dayTextColor: colors.blackColor,
              arrowColor: colors.textColor,
              monthTextColor: colors.textColor,
              textDayFontFamily: fonts.ARCHIVO_REGULAR,
              textMonthFontFamily: fonts.ARCHIVO_SEMIBOLD,
              textDayHeaderFontFamily: fonts.ARCHIVO_MEDIUM,
              textMonthFontWeight: "bold",
              textDayHeaderFontWeight: "300",
              textDayFontSize: Height(15),
              textMonthFontSize: Height(25),
              textDayHeaderFontSize: Height(15),
              textDayStyle: {
                color: colors.blackColor,
              },
              textDayFontWeight: "300",
              weekVerticalMargin: Width(10),
              arrowStyle: {
                alignSelf: "center",
              },
              "stylesheet.calendar.header": {
                week: {
                  marginTop: 5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              },
            }}
          />
        </View>
        <View style={styles.scrollView}>
          {holiday?.data &&
            holiday?.data.map((item, i) => {
              const date = new Date(item.Holiday_Start);
              var formattedDate = date.toISOString().slice(0, 10);
              return (
                <DropShadow
                  style={[
                    globalstyles.dropShadow,
                    {
                      alignSelf: "center",
                      marginTop: Height(20),
                    },
                  ]}
                  key={i}>
                  <View
                    key={i}
                    style={styles.scrollSubView}>
                    <Text style={styles.text}>{item.Holiday_title}</Text>
                    <Text style={styles.subText}>{formattedDate}</Text>
                  </View>
                </DropShadow>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HolidayScreen;

const styles = StyleSheet.create({
  headerView: {
    position: "absolute",
    marginTop: Platform.OS === "ios" ? Height(50) : Height(30),
    marginLeft: Width(20),
    width: "100%",
  },
  headerFrontView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTextView: {
    marginTop: Height(40),
  },
  headerText: {
    fontSize: Height(25),
    fontFamily: fonts.ARCHIVO_SEMIBOLD,
    color: colors.whiteColor,
  },
  headerSubText: {
    fontSize: Height(15),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    color: colors.whiteColor,
    marginTop: Height(5),
  },
  imageView: {
    marginRight: Width(50),
    marginTop: Height(30),
  },
  bottomSubView: {
    height: Height(50),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Width(5),
  },
  bottomText: {
    fontSize: Height(15),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    color: colors.blackColor,
  },
  roundView: {
    width: Width(30),
    height: Width(30),
    borderRadius: Width(30) / 2,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    marginTop: Height(40),
  },
  roundText: {
    fontSize: Height(15),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    color: colors.whiteColor,
  },
  view: {
    marginTop: Height(50),
  },
  borderView: {
    height: Height(400),
    width: Width(350),
    borderWidth: Height(1),
    position: "absolute",
    alignSelf: "center",
    borderRadius: Width(10),
    borderColor: "grey",
  },
  calendarView: {
    height: Height(420),
    width: Width(330),
    marginTop: Height(15),
    alignSelf: "center",
    position: "absolute",
    marginTop: Width(-30),
  },
  bottomView: {
    marginTop: Height(370),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: Width(50),
  },
  text: {
    fontSize: Height(15),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    color: colors.blackColor,
  },
  subText: {
    fontSize: Height(10),
    fontFamily: fonts.ARCHIVO_REGULAR,
    color: colors.blackColor,
  },
  dropDownShadow: {
    position: "absolute",
    marginTop: Height(190),
    alignSelf: "center",
    width: Width(200),
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: Platform.OS === "ios" ? 1 : 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: Width(5),
  },
  scrollView: {
    marginTop: Height(420),
    marginBottom: Height(30),
  },
  scrollSubView: {
    height: Height(50),
    width: Width(350),
    backgroundColor: colors.whiteColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Width(20),
  },
});
