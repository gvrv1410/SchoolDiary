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
import MaterialsComponent from "../../../assets/svgs/Materials";
import { Height, Width } from "../../utils/responsive";
import { useNavigation, useRoute } from "@react-navigation/native";
import { globalstyles } from "../../utils/globalstyle";
import { useDispatch, useSelector } from "react-redux";
import { fetchMaterialData } from "../../redux/reducer/materialReducer";
import { BASE_URL } from "../../helper/apiConstants";
import DropShadow from "react-native-drop-shadow";
import colors from "../../utils/colors";
import Pdf from "react-native-pdf";
import fonts from "../../utils/fonts";
import RoundComponent from "../../../assets/svgs/Round";
import RNFetchBlob from "react-native-blob-util";
const MaterialsDetails = () => {
  const navigation = useNavigation();
  const showBack = true;
  const imageShow = false;
  const textShow = true;
  const route = useRoute();
  console.log({ route });
  const dispatch = useDispatch();

  const mData = useSelector((state) => state.materialData);
  console.log({ mData });

  const materialDataFetch = () => {
    const materialObj = {
      Subject_code: route.params?.data.Subject_Code,
    };
    dispatch(fetchMaterialData(materialObj));
  };
  useEffect(() => {
    materialDataFetch();
  }, [dispatch]);

  const handleDownload = async (img) => {
    console.log(img);

    const path = `${img}/Warren.pdf`;
    await RNFetchBlob.config({
      path: path,
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        title: "Pds downloaded successfully! Click to view",
        description: "A PDF file.",
        mime: "application/pdf",
      },
    })
      .fetch("GET", img)
      .then(async (res) => {
        if (res && res.info().status === 200) {
          console.log(res);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={globalstyles.container}>
      <Header
        showBack={showBack}
        imageShow={imageShow}
        textShow={textShow}
        firstText={route.params?.data.Subject_Name}
        dynamicImage={<MaterialsComponent size={Height(120)} />}
        onPress={() => navigation.goBack()}
      />
      <FlatList
        data={mData && mData.data}
        renderItem={({ item }) => {
          console.log(`${BASE_URL}materials/${item.Material_files}`);
          const imageUrl = `${BASE_URL}materials/${item.Material_files}`;
          console.log("Image URL:", imageUrl);
          const fileExtension = imageUrl.split(".").pop().toLowerCase();
          console.log(fileExtension);
          return (
            <DropShadow style={globalstyles.dropShadow}>
              <View style={styles.rowView}>
                <View style={styles.view}>
                  <View>
                    {fileExtension === "pdf" ? (
                      <Pdf
                        trustAllCerts={false}
                        onError={(error) => {
                          console.log(error);
                        }}
                        source={{
                          uri: `${BASE_URL}materials/${item.Material_files}`,
                        }}
                        style={styles.pdf}
                        singlePage={true}
                      />
                    ) : (
                      <Image
                        source={{
                          uri: `${BASE_URL}materials/${item.Material_files}`,
                        }}
                        style={styles.pdf}
                      />
                    )}
                  </View>
                  <Text style={styles.text}>{item.Material_title}</Text>
                </View>
                <TouchableOpacity
                  style={styles.btnRound}
                  onPress={() => handleDownload(imageUrl)}>
                  <RoundComponent />
                </TouchableOpacity>
              </View>
            </DropShadow>
          );
        }}
      />
    </View>
  );
};

export default MaterialsDetails;

const styles = StyleSheet.create({
  view: {
    height: Height(60),
    width: Width(330),
    flexDirection: "row",
    backgroundColor: colors.whiteColor,
    alignSelf: "center",
    marginTop: Height(30),
    alignItems: "center",
  },
  pdf: {
    width: Width(50),
    height: Height(10),
    flex: 1,
  },
  text: {
    fontSize: Height(15),
    fontFamily: fonts.ARCHIVO_SEMIBOLD,
    marginLeft: Width(5),
    color: colors.blackColor,
  },
  rowView: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  btnRound: {
    position: "absolute",
    justifyContent: "center",
    marginLeft: Width(310),
    marginTop: Height(20),
    height: Height(60),
    alignItems: "center",
  },
});
