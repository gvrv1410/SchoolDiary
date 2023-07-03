import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { Height, Width } from "../../utils/responsive";
import NotificationHeaderComponent from "../../../assets/svgs/NotificationHeader";
import { useNavigation } from "@react-navigation/native";
import { content } from "../../utils/content";
import { useDispatch, useSelector } from "react-redux";
import { fetchNoticeData } from "../../redux/reducer/noticeReducer";
import colors from "../../utils/colors";
import DropShadow from "react-native-drop-shadow";
import { globalstyles } from "../../utils/globalstyle";
import fonts from "../../utils/fonts";

const NotificationScreen = () => {
  const navigation = useNavigation();
  const showBack = true;
  const imageShow = false;
  const textShow = true;

  const dispatch = useDispatch();
  const noticeData = useSelector((state) => state.notice);

  var Notice;
  if (noticeData && noticeData.data) {
    Notice = noticeData.data;
  } else {
  }
  useEffect(() => {
    dispatch(fetchNoticeData());
  }, [dispatch]);
  return (
    <View style={{ flex: 1, backgroundColor: colors.whiteColor }}>
      <Header
        showBack={showBack}
        imageShow={imageShow}
        textShow={textShow}
        firstText={content.notifications}
        dynamicImage={<NotificationHeaderComponent size={Height(110)} />}
        onPress={() => navigation.goBack()}
      />
      <FlatList
        data={Notice}
        renderItem={({ item }) => {
          return (
            <DropShadow style={globalstyles.dropShadow}>
              <TouchableOpacity
                style={{
                  height: Height(80),
                  width: Width(350),
                  backgroundColor: colors.whiteColor,
                  alignSelf: "center",
                  marginTop: Height(30),
                  borderRadius: Width(5),
                  padding: Width(20),
                  justifyContent: "center",
                }}
                onPress={() =>
                  navigation.navigate("NoticeDetails", { data: item })
                }>
                <Text
                  style={{
                    fontSize: Height(20),
                    fontFamily: fonts.ARCHIVO_MEDIUM,
                    color: colors.textColor,
                  }}>
                  {item.Notice_title}
                </Text>
              </TouchableOpacity>
            </DropShadow>
          );
        }}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
