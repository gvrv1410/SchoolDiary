import {
  FlatList,
  Linking,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import colors from "../../utils/colors";
import imageConstants from "../../helper/imageConstants";
import { useNavigation } from "@react-navigation/native";
import { settingData } from "../../helper/dummyData";
import DropShadow from "react-native-drop-shadow";
import SettingViewComponent from "../../../assets/svgs/SettingView";
import { Height, Width } from "../../utils/responsive";
import fonts from "../../utils/fonts";
import ForwardComponent from "../../../assets/svgs/Forward";
import { globalstyles } from "../../utils/globalstyle";
import Button from "../../components/button/Button";
import { content } from "../../utils/content";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducer/authReducer";
import { fetchStudentData } from "../../redux/reducer/studentReducer";
import { BASE_URL } from "../../helper/apiConstants";
const MenuScreen = () => {
  const navigation = useNavigation();
  const showBack = false;
  const imageShow = true;
  const textShow = true;

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate("Login");
  };

  const studentData = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(fetchStudentData());
  }, [dispatch]);

  var Student;
  if (studentData && studentData?.data) {
    Student = studentData?.data;
  }

  useEffect(() => {
    dispatch(fetchStudentData());
  }, [dispatch]);

  var sCode;
  if (Student) {
    sCode = Student?.S_Class_code;
  }

  var sId;
  if (Student) {
    sId = Student?.S_icard_Id;
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
        url: "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C5CHFA_enIN1046IN1046&oq=go&aqs=chrome.1.69i57j46i67i131i199i433i465i650j69i59j35i39i650j69i60l4.4416j0j7&sourceid=chrome&ie=UTF-8",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={globalstyles.container}>
      <Header
        showBack={showBack}
        imageShow={imageShow}
        userImage={
          Student
            ? { uri: `${BASE_URL}student_img/${Student.S_img}` }
            : imageConstants.userImage
        }
        textShow={textShow}
        firstText={Student && Student.S_name}
        lastText={"Class : " + sCode + " | " + "Roll No : " + sId}
        onPressPro={() => navigation.navigate("Profile")}
      />
      <View>
        <FlatList
          data={settingData}
          renderItem={({ item }) => {
            return (
              <DropShadow style={globalstyles.dropShadow}>
                <View
                  style={{
                    height: Height(50),
                    width: Width(350),
                    backgroundColor: colors.whiteColor,
                    alignSelf: "center",
                    marginTop: Height(20),
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: Width(5),
                  }}>
                  <View style={{ justifyContent: "center" }}>
                    <SettingViewComponent size={Width(50)} />
                    <View
                      style={{ position: "absolute", paddingLeft: Width(10) }}>
                      {item.image}
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: Height(15),
                      fontFamily: fonts.ARCHIVO_MEDIUM,
                      color: colors.blackColor,
                      width: Width(200),
                    }}>
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    style={{ marginLeft: Width(70) }}
                    onPress={() => {
                      if (item.name === content.share) {
                        onShare();
                      } else if (item.name === content.rateUs) {
                        Linking.openURL(
                          "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C5CHFA_enIN1046IN1046&oq=go&aqs=chrome.1.69i57j46i67i131i199i433i465i650j69i59j35i39i650j69i60l4.4416j0j7&sourceid=chrome&ie=UTF-8"
                        );
                      }
                      navigation.navigate(item?.navigation);
                    }}>
                    <ForwardComponent size={Height(15)} />
                  </TouchableOpacity>
                </View>
              </DropShadow>
            );
          }}
        />
      </View>

      <Button
        name={content.logout}
        btnHeight={Height(45)}
        btnWidth={Width(300)}
        onPress={handleLogout}
        alignSelf="center"
        alignItems="center"
        justifyContent="center"
        marginTop={Height(25)}
      />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
