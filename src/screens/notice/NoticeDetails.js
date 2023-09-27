import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Height, Width } from "../../utils/responsive";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import { BASE_URL } from "../../helper/apiConstants";
import { globalstyles } from "../../utils/globalstyle";
import { WebView } from "react-native-webview";
const NoticeDetails = () => {
  const route = useRoute();
  const data = route?.params.data;
  const navigation = useNavigation();
  const fileUrl = `${BASE_URL}notices/${data?.Notice_attechments}`;
  const isPdf = fileUrl.endsWith(".pdf");
  return (
    <View style={globalstyles.container}>
      <View style={styles.headerView}>
        <Ionicons
          name="ios-chevron-back-outline"
          size={Height(30)}
          color={colors.textColor}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Notice</Text>
      </View>
      <Text style={styles.text}>{data?.Notice_title}</Text>
      <Text style={styles.subText}>{data?.Notice_description}</Text>
      {isPdf ? (
        // <Pdf
        //   trustAllCerts={false}
        //   source={{
        //     uri: `${BASE_URL}notices/${data?.Notice_attechments}`,
        //     cache: true,
        //   }}
        //   onLoadComplete={(numberOfPages, filePath) => {}}
        //   onPageChanged={(page, numberOfPages) => {}}
        //   onError={(error) => {
        //   }}
        //   onPressLink={(uri) => {}}
        //   style={styles.pdfView}
        // />
        <WebView
          source={{ uri: `${BASE_URL}notices/${data?.Notice_attechments}` }}
          style={styles.pdfView}
        />
      ) : (
        <Image
          source={{ uri: `${BASE_URL}notices/${data?.Notice_attechments}` }}
          style={styles.imgView}
        />
      )}
    </View>
  );
};

export default NoticeDetails;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Height(50),
    marginLeft: Width(20),
  },
  headerText: {
    fontSize: Height(25),
    fontFamily: fonts.ARCHIVO_SEMIBOLD,
    marginLeft: Width(20),
    color: colors.textColor,
  },
  text: {
    fontSize: Height(20),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    paddingHorizontal: Width(20),
    marginTop: Height(30),
  },
  subText: {
    fontSize: Height(12),
    fontFamily: fonts.ARCHIVO_REGULAR,
    color: colors.blackColor,
    letterSpacing: 0.2,
    paddingHorizontal: Width(20),
    marginTop: Height(5),
  },
  pdfView: {
    height: Height(500),
    width: Width(350),
    alignSelf: "center",
    marginTop: Height(30),
    flex: 1,
  },
  imgView: {
    height: Height(500),
    width: Width(350),
    alignSelf: "center",
    marginTop: Height(30),
    resizeMode: "contain",
  },
});
