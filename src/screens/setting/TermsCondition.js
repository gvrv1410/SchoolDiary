import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Height, Width } from "../../utils/responsive";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const TermsConditionScreen = () => {
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
        <Text style={styles.headerText}>Terms & Conditions</Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
          marginHorizontal: Width(20),
          marginVertical: Height(20),
        }}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          These Services do not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13 years of age. In the case we discover that a child under 13
          has provided us with personal information, we immediately delete this
          from our servers. If you are a parent or guardian and you are aware
          that your child has provided us with personal information, please
          contact us so that we will be able to do the necessary actions.
          Changes to This Privacy Policy We may update our Privacy Policy from
          time to time. Thus, you are advised to review this page periodically
          for any changes. We will notify you of any changes by posting the new
          Privacy Policy on this page. This policy is effective as of 2023-07-27
          Contact Us If you have any questions or suggestions about our Privacy
          Policy, do not hesitate to contact us at
          nutanpublicschoolvelanja@gmail.com. ‎
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsConditionScreen;

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
