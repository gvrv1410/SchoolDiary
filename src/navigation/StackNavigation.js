import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import HomeScreen from "../screens/home";
import TabNavigation from "./TabNavigation";
import AttendanceScreen from "../screens/attendance";
import ComplainboxScreen from "../screens/complain";
import ExamScreen from "../screens/exam";
import ResultScreen from "../screens/result";
import HolidayScreen from "../screens/holiday";
import EventScreen from "../screens/event";
import FeesScreen from "../screens/fees";
import MaterialScreen from "../screens/material";
import TimetableScreen from "../screens/timeTable";
import HomeWorkList from "../screens/homeWork/HomeWorkList";
import HomeWorkDetail from "../screens/homeWork/HomeWorkDetail";
import NotificationComponent from "../../assets/svgs/Notification";
import NotificationScreen from "../screens/notice";
import ComplainHistory from "../screens/complain/ComplainHistory";
import ProfileScreen from "../screens/profile";
import MaterialsDetails from "../screens/material/MaterialsDetails";
import { Provider } from "react-redux";
import { store } from "../redux/store/configureStore";
import AddComplain from "../screens/complain/AddComplain";
import NoticeDetails from "../screens/notice/NoticeDetails";
import EditComplain from "../screens/complain/EditComplain";
import EventImageList from "../screens/event/EventImageList";
import EventImageView from "../screens/event/EventImageView";
import SplashScreen from "react-native-splash-screen";
import Payment from "../screens/fees/Payment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Aboutus from "../screens/setting/Aboutus";
import Contactus from "../screens/setting/Contactus";
import TermsCondition from "../screens/setting/TermsCondition";
import PrivacyPolicyScreen from "../screens/setting/PrivacyPolicy";
import TermsConditionScreen from "../screens/setting/TermsCondition";
import ContactusScreen from "../screens/setting/Contactus";
import AboutusScreen from "../screens/setting/Aboutus";
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  const getUserInfo = async () => {
    const userInfo = await AsyncStorage.getItem("idToken");
    if (userInfo) {
      navigationRef.navigate("Tab");
      return true;
    } else {
      navigationRef.navigate("Login");
      return false;
    }
  };

  return (
    <Provider store={store}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={getUserInfo() ? "Tab" : "Login"}>
        <Stack.Screen
          name="Tab"
          component={TabNavigation}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Attendance"
          component={AttendanceScreen}
        />
        <Stack.Screen
          name="Timetables"
          component={TimetableScreen}
        />
        <Stack.Screen
          name="Complainbox"
          component={ComplainboxScreen}
        />
        <Stack.Screen
          name="Exam"
          component={ExamScreen}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
        />
        <Stack.Screen
          name="Holiday"
          component={HolidayScreen}
        />
        <Stack.Screen
          name="Event"
          component={EventScreen}
        />
        <Stack.Screen
          name="Fees"
          component={FeesScreen}
        />
        <Stack.Screen
          name="Material"
          component={MaterialScreen}
        />
        <Stack.Screen
          name="HomeWorkList"
          component={HomeWorkList}
        />
        <Stack.Screen
          name="HomeWorkDetail"
          component={HomeWorkDetail}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
        />
        <Stack.Screen
          name="ComplainHistory"
          component={ComplainHistory}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="MaterialDetail"
          component={MaterialsDetails}
        />
        <Stack.Screen
          name="AddComplain"
          component={AddComplain}
        />
        <Stack.Screen
          name="NoticeDetails"
          component={NoticeDetails}
        />
        <Stack.Screen
          name="EditComplain"
          component={EditComplain}
        />
        <Stack.Screen
          name="EventImageList"
          component={EventImageList}
        />
        <Stack.Screen
          name="EventImageView"
          component={EventImageView}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
        />
        <Stack.Screen
          name="PrinacyPolicy"
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen
          name="Aboutus"
          component={AboutusScreen}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactusScreen}
        />
        <Stack.Screen
          name="TermsConditions"
          component={TermsConditionScreen}
        />
      </Stack.Navigator>
    </Provider>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
