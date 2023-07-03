import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { useNavigation } from "@react-navigation/native";
import ResultHeaderComponent from "../../../assets/svgs/ResultHeader";
import { Height, Width } from "../../utils/responsive";
import { content } from "../../utils/content";
import { useDispatch, useSelector } from "react-redux";
import { fetchExamResult } from "../../redux/reducer/resultReducer";
import fonts from "../../utils/fonts";
import DropShadow from "react-native-drop-shadow";
import colors from "../../utils/colors";
import { globalstyles } from "../../utils/globalstyle";
import Pdf from "react-native-pdf";
import { BASE_URL } from "../../helper/apiConstants";
import Button from "../../components/button/Button";
import HLineComponent from "../../../assets/svgs/HLine";
import { downloadFile, DocumentDirectoryPath } from "react-native-fs";
const ResultScreen = () => {
  const navigation = useNavigation();
  const showBack = true;
  const imageShow = false;
  const textShow = true;
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);
  console.log({ HEY: result.data === "No Result Found" });
  useEffect(() => {
    dispatch(fetchExamResult());
  }, [dispatch]);

  //   const handleDownload = async (img) => {
  //     console.log({ img });
  //     try {
  //       const options = {
  //         fromUrl: img,
  //         toFile: `${DocumentDirectoryPath}/file.jpg`,
  //       };

  //       const res = await downloadFile(options);
  //       console.log("Downloaded file:", res);
  //     } catch (error) {
  //       console.log("Error:", error);
  //     }
  //   };
  return (
    <View style={globalstyles.container}>
      <Header
        showBack={showBack}
        imageShow={imageShow}
        textShow={textShow}
        firstText={content.result}
        dynamicImage={<ResultHeaderComponent size={Height(112)} />}
        onPress={() => navigation.goBack()}
      />

      {(result.data === "No Result Found") === true ? (
        <View>
          <Text>No Data Found</Text>
        </View>
      ) : (
        <FlatList
          data={result && result.data}
          style={{ marginBottom: Height(30) }}
          renderItem={({ item }) => {
            const img = `${BASE_URL}result_data/${item.Result_copy}`;

            return (
              <View>
                <DropShadow style={styles.shadow}>
                  <View style={styles.view}>
                    <Text style={styles.viewText}>{item.Term}</Text>
                  </View>
                </DropShadow>
                <Text style={styles.text}>{item.Result_Title}</Text>
                <Pdf
                  trustAllCerts={false}
                  onError={(error) => {
                    console.log(error);
                  }}
                  source={{
                    uri: `${BASE_URL}result_data/${item.Result_copy}`,
                  }}
                  style={styles.pdf}
                  singlePage={true}
                />
                <Button
                  name={"Download"}
                  btnHeight={Height(50)}
                  btnWidth={Width(200)}
                  justifyContent={"center"}
                  alignItems={"center"}
                  alignSelf={"center"}
                  //   onPress={() => handleDownload(img)}
                />

                <View style={styles.bottomView}>
                  <HLineComponent
                    width={Width(350)}
                    height={Height(15)}
                  />
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "rgba(0, 165, 235, 0.15)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: Platform.OS === "ios" ? 1 : 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  view: {
    height: Height(55),
    width: Width(200),
    backgroundColor: colors.whiteColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Width(5),
    alignSelf: "center",
    marginTop: Height(20),
  },
  viewText: {
    fontSize: Height(20),
    fontFamily: fonts.ARCHIVO_SEMIBOLD,
    color: colors.textColor,
  },
  text: {
    fontSize: Height(18),
    fontFamily: fonts.ARCHIVO_SEMIBOLD,
    textAlign: "center",
    marginTop: Height(20),
  },
  pdf: {
    height: Height(200),
    width: Width(350),
    alignSelf: "center",
    marginTop: Height(20),
    borderRadius: Width(5),
    marginBottom: Height(20),
  },
  bottomView: {
    alignSelf: "center",
    marginTop: Height(20),
  },
});
