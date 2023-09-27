import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Height, Width } from "../../utils/responsive";
import { BASE_URL } from "../../helper/apiConstants";
import imageConstants from "../../helper/imageConstants";
import BackComponent from "../../../assets/svgs/Back";
import colors from "../../utils/colors";
import Textinput from "../../components/textInput/Textinput";
import fonts from "../../utils/fonts";
import Button from "../../components/button/Button";
import { useDispatch } from "react-redux";
import { sendComplainData } from "../../redux/reducer/sendComplainReducer";
import CustomAlert from "../../components/modal/CustomAlert";

const AddComplain = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [complainTitle, setComplainTitle] = useState("");
  const [complainDescription, setCompalinDescription] = useState("");
  const [complainTitleError, setCompalinTitleError] = useState("");
  const [complainDescriptionError, setCompalinDescriptionError] = useState("");
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const name = route.params?.data.T_name;
  const img = route.params?.data.T_img;
  const abc = `${BASE_URL}teacher_img/${img}`;

  const handleSubmit = () => {
    if (complainTitle.length === 0) {
      setCompalinTitleError("Title is required");
    } else if (complainTitle.length < 6) {
      setCompalinTitleError("Title should be atlest 6 char");
    }

    if (complainDescription.length === 0) {
      setCompalinDescriptionError("Description is required");
    } else if (complainDescription.length < 10) {
      setCompalinDescriptionError("Decription should be atlest 10 char");
    } else {
      setCompalinTitleError("");
      setCompalinDescriptionError("");
      const complainDataWithId = {
        Complain_title: complainTitle,
        Complain_descriptio: complainDescription,
        T_icard_Id: route.params?.data.T_icard_Id,
      };
      dispatch(sendComplainData(complainDataWithId));
      setShowDonationSuccessPopup(true);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.whiteColor }}>
      <Image
        source={imageConstants.headerImage}
        style={styles.backgroundImage}
      />
      <View style={styles.view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackComponent />
        </TouchableOpacity>
        <View style={styles.rowView}>
          <Text style={styles.firstText}>{name}</Text>
          <TouchableOpacity style={styles.userImgView}>
            <Image source={{ uri: abc }} style={styles.userImage} />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          fontSize: Height(15),
          fontFamily: fonts.ARCHIVO_MEDIUM,
          color: colors.blackColor,
          marginTop: Height(30),
          marginHorizontal: Width(20),
        }}
      >
        Complain Title
      </Text>
      <Textinput
        placeholder="Complain Title"
        height={Height(50)}
        width={Width(350)}
        // value={complainTitle}
        onChangeText={(val) => setComplainTitle(val)}
      />
      {complainTitleError.length > 0 && (
        <Text style={styles.errorText}>{complainTitleError}</Text>
      )}
      <Text
        style={{
          fontSize: Height(15),
          fontFamily: fonts.ARCHIVO_MEDIUM,
          color: colors.blackColor,
          marginTop: Height(30),
          marginHorizontal: Width(20),
        }}
      >
        Complain Description
      </Text>
      <Textinput
        placeholder="Complain Description"
        height={Height(100)}
        multiline={true}
        width={Width(350)}
        // value={complainDescription}
        onChangeText={(val) => setCompalinDescription(val)}
      />
      {complainDescriptionError.length > 0 && (
        <Text style={styles.errorText}>{complainDescriptionError}</Text>
      )}
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>CANCEL</Text>
        </TouchableOpacity>
        <Button
          btnHeight={Height(50)}
          btnWidth={Width(150)}
          name={"SEND"}
          justifyContent="center"
          alignItems="center"
          onPress={handleSubmit}
        />
      </View>
      <CustomAlert
        displayMode={"success"}
        displayMsg={"Complain Send Successfully"}
        visibility={showDonationSuccessPopup}
        dismissAlert={setShowDonationSuccessPopup}
        onDonePress={() => {
          navigation.navigate("Tab");
        }}
      />
    </View>
  );
};

export default AddComplain;

const styles = StyleSheet.create({
  backgroundImage: {
    height: Height(200),
    width: "100%",
    borderBottomLeftRadius: Width(15),
    borderBottomRightRadius: Width(15),
  },
  view: {
    position: "absolute",
    marginTop: Height(50),
    paddingHorizontal: Width(20),
  },
  firstText: {
    fontSize: Height(20),
    fontFamily: fonts.ARCHIVO_SEMIBOLD,
    color: colors.whiteColor,
  },
  userImage: {
    height: Height(95),
    width: Height(95),
    borderRadius: Height(95) / 2,
  },
  userImgView: {
    height: Height(100),
    width: Height(100),
    backgroundColor: colors.gradientPrimaryColor,
    borderRadius: Height(100) / 2,
    marginTop: Height(5),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Width(350),
  },
  btnView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: Width(20),
    marginTop: Height(250),
  },
  btn: {
    height: Height(50),
    width: Width(150),
    backgroundColor: colors.whiteColor,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: Height(20),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    color: colors.blackColor,
  },
  errorText: {
    color: "red",
    marginLeft: Width(20),
    fontSize: Height(11),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    marginTop: Height(5),
    letterSpacing: 0.8,
  },
});
