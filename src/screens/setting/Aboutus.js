import { ScrollView, Share, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Height, Width } from "../../utils/responsive";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const AboutusScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerView}>
        <Ionicons
          name="ios-chevron-back-outline"
          size={Height(30)}
          color={colors.textColor}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>About Us</Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
          marginHorizontal: Width(20),
          marginVertical: Height(20),
        }}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          Mail: nutanpublicschoolvelanja@gmail.com
        </Text>
        <Text style={styles.text}>Phone: 093766 93266</Text>
      </ScrollView>
    </View>
  );
};

export default AboutusScreen;

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
    fontSize: Height(15),
    textAlign: "justify",
    color: colors.blackColor,
    fontFamily: fonts.ARCHIVO_MEDIUM,
    lineHeight: Height(25),
  },
});
