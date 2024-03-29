import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";
import Header from "../../components/header/Header";
import HomeWorkHeaderComponent from "../../../assets/svgs/HomeWorkHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Height, Width } from "../../utils/responsive";
import DropShadow from "react-native-drop-shadow";
import fonts from "../../utils/fonts";
import { globalstyles } from "../../utils/globalstyle";
import { useDispatch, useSelector } from "react-redux";
import { homeWorkDetails } from "../../redux/reducer/homeWorkReducer";

const HomeWorkDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const showBack = true;
  const imageShow = false;
  const textShow = false;

  const monthMap = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };

  const dateString = route.params?.date;
  const dateParts = dateString.split(" ");
  const day = dateParts[0];
  const month = monthMap[dateParts[1]];
  const year = dateParts[3];

  const formattedDate = `${year}-${month}-${day}`;
  const SubCode = route.params?.data.Subject_Code;
  const dispatch = useDispatch();

  const homeWork = useSelector((state) => state?.homeWorkDetails);
  const fetchData = () => {
    const homeWorkObj = {
      Subject_Code: SubCode,
      Homework_given_date: formattedDate,
    };
    dispatch(homeWorkDetails(homeWorkObj));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={globalstyles.container}>
      <View>
        <Header
          showBack={showBack}
          imageShow={imageShow}
          textShow={textShow}
          firstText={route.params?.data.Subject_Name}
          dynamicImage={<HomeWorkHeaderComponent size={Height(120)} />}
          onPress={() => navigation.goBack()}
        />
        <DropShadow style={styles.firstViewShadow}>
          <View style={styles.headerBtn}>
            <Text style={styles.dropdownItemText}>Home Work List</Text>
          </View>
        </DropShadow>
      </View>

      {homeWork?.data && homeWork?.data?.length === 0 ? (
        <View style={{ marginTop: Height(60) }}>
          <Text>No Data Found</Text>
        </View>
      ) : (
        <FlatList
          data={homeWork?.data}
          style={{ marginTop: Height(60) }}
          renderItem={({ item }) => {
            const dateString = item.Homework_due_date;
            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString("en-GB");
            return (
              <DropShadow style={globalstyles.dropShadow}>
                <View style={styles.view}>
                  <Text style={styles.text}>{item.Homework_title}</Text>
                  <View style={{ height: Height(100) }}>
                    <Text style={styles.subText}>
                      {item.Homework_description}
                    </Text>
                  </View>
                  <Text style={styles.dateText}>Due Date :{formattedDate}</Text>
                </View>
              </DropShadow>
            );
          }}
        />
      )}
    </View>
  );
};

export default HomeWorkDetail;

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
  dropdownItemText: {
    fontSize: Height(20),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    color: colors.textColor,
  },
  view: {
    width: Width(350),
    height: Height(180),
    backgroundColor: colors.whiteColor,
    alignSelf: "center",
    marginTop: Height(30),
    padding: Width(15),
    borderRadius: Width(5),
  },
  text: {
    fontSize: Height(18),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    color: colors.textColor,
  },
  subText: {
    fontSize: Height(12),
    color: colors.blackColor,
    fontFamily: fonts.ARCHIVO_REGULAR,
    letterSpacing: 0.8,
    marginTop: Height(3),
  },
  dateText: {
    fontSize: Height(10),
    color: colors.blackColor,
    fontFamily: fonts.ARCHIVO_REGULAR,
    letterSpacing: 0.8,
    marginTop: Height(20),
    alignSelf: "flex-end",
  },
});
