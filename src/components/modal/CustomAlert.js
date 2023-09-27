import React, { useState } from "react";

import { Modal, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import { Height, Width } from "../../utils/responsive";
import PopupComponent from "../../../assets/svgs/Popup";
import { useNavigation } from "@react-navigation/native";

export default function CustomAlert({
  displayMode,
  displayMsg,
  visibility,
  dismissAlert,
  onDonePress,
}) {
  const navigation = useNavigation();
  return (
    <View>
      <Modal
        visible={visibility}
        animationType={"fade"}
        transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(52, 52, 52, 0.8)",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "white",
              height: Height(450),
              width: Width(350),
              borderWidth: 1,
              borderColor: "#fff",
              borderRadius: Width(5),
              elevation: 10,
            }}>
            <View style={{ alignItems: "center", marginTop: Height(30) }}>
              {displayMode == "success" ? (
                <>
                  <PopupComponent size={Height(195)} />
                </>
              ) : (
                <>
                  <MaterialIcons
                    name="cancel"
                    color={"red"}
                    size={80}
                  />
                </>
              )}
              <Text
                style={{
                  fontSize: Height(25),
                  fontFamily: fonts.ARCHIVO_MEDIUM,
                  color: colors.textColor,
                  marginTop: Height(50),
                  textAlign: "center",
                }}>
                {displayMsg}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                dismissAlert(false), navigation.navigate("Tab");
              }}>
              <LinearGradient
                colors={[
                  colors.gradientPrimaryColor,
                  colors.gradientSecondaryColor,
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.btn}>
                <Text style={styles.btnText}>Done</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: Height(45),
    width: Width(300),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: Width(2),
    marginTop: Height(25),
  },
  btnText: {
    fontSize: Height(20),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    color: colors.whiteColor,
  },
});
