import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../../utils/colors";
import Header from "../../components/header/Header";
import imageConstants from "../../helper/imageConstants";
import { Height, Width } from "../../utils/responsive";
import HomeWorkHeaderComponent from "../../../assets/svgs/HomeWorkHeader";
import DropShadow from "react-native-drop-shadow";
import { months } from "../../helper/dummyData";
import fonts from "../../utils/fonts";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { content } from "../../utils/content";
import { globalstyles } from "../../utils/globalstyle";

const HomeWorkScreen = () => {
  const showBack = false;
  const imageShow = false;
  const textShow = true;
  const navigation = useNavigation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedMonthDates, setSelectedMonthDates] = useState([]);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
    setIsDropdownOpen(false);
    setSelectedMonthDates(getMonthDates(month));
  };

  const getCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear.toString();
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDayOfWeek = (day, month, year) => {
    const date = new Date(year, month, day);
    const options = { weekday: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const getMonthDates = (month) => {
    const monthIndex = months.indexOf(month);
    const year = getCurrentYear();
    const totalDays = getDaysInMonth(monthIndex, year);

    const dates = [];
    for (let day = 1; day <= totalDays; day++) {
      const dayOfWeek = getDayOfWeek(day, monthIndex, year);
      dates.push({ day, dayOfWeek });
    }

    return dates;
  };
  return (
    <View style={globalstyles.container}>
      <View>
        <Header
          showBack={showBack}
          imageShow={imageShow}
          textShow={textShow}
          firstText={content.homeWork}
          dynamicImage={<HomeWorkHeaderComponent size={Height(120)} />}
          onPressNoti={() => navigation.navigate("Notification")}
        />
        <DropShadow style={styles.firstViewShadow}>
          <TouchableOpacity
            style={styles.headerBtn}
            onPress={handleToggleDropdown}
          >
            <Text style={styles.dropdownItemText}>
              {selectedMonth || "None"} {getCurrentYear()}
            </Text>
          </TouchableOpacity>
        </DropShadow>
      </View>

      {isDropdownOpen && (
        <DropShadow style={styles.firstViewShadow}>
          <ScrollView style={styles.dropdownList}>
            {months.map((month, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectMonth(month)}
                style={styles.dropdownItem}
              >
                <Text style={styles.dropdownItemText}>{month}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </DropShadow>
      )}

      <ScrollView style={styles.scrollView}>
        {selectedMonthDates.length > 0 && (
          <View style={styles.dateList}>
            {selectedMonthDates.map((date, index) => (
              <DropShadow style={globalstyles.dropShadow} key={index}>
                <TouchableOpacity
                  key={index}
                  style={styles.dateItem}
                  onPress={() =>
                    navigation.navigate("HomeWorkList", {
                      date: date,
                      data: selectedMonth,
                      year: getCurrentYear(),
                    })
                  }
                >
                  <LinearGradient
                    colors={[colors.linearFirst, colors.linearSecond]}
                    style={styles.dateRoundView}
                  >
                    <Text style={styles.dateText}>{date.day}</Text>
                  </LinearGradient>
                  <Text style={styles.dayText}>{date.dayOfWeek}</Text>
                </TouchableOpacity>
              </DropShadow>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeWorkScreen;

const styles = StyleSheet.create({
  firstViewShadow: {
    position: "absolute",
    marginTop: Height(180),
    alignSelf: "center",
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: Platform.OS === "ios" ? 1 : 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  headerBtn: {
    height: Height(55),
    width: Width(200),
    backgroundColor: colors.whiteColor,
    borderRadius: Width(5),
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownList: {
    height: Height(400),
    width: Width(200),
    backgroundColor: colors.whiteColor,
    borderRadius: Width(5),
  },
  dropdownItemText: {
    fontSize: Height(20),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    color: colors.textColor,
  },
  dropdownItem: {
    alignSelf: "center",
    marginTop: Height(10),
  },
  dateItem: {
    flexDirection: "row",
    width: Width(350),
    height: Height(60),
    backgroundColor: colors.whiteColor,
    alignSelf: "center",
    marginTop: Height(30),
    alignItems: "center",
    borderRadius: Width(5),
    paddingHorizontal: Width(20),
  },
  dayText: {
    fontSize: Height(18),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    color: colors.blackColor,
    marginLeft: Width(20),
  },
  dateText: {
    fontSize: Height(30),
    fontFamily: fonts.ARCHIVO_SEMIBOLD,
    color: colors.textColor,
  },
  dateRoundView: {
    height: Height(50),
    width: Height(50),
    borderRadius: Height(50) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    zIndex: -1,
    marginTop: Height(50),
  },
});
