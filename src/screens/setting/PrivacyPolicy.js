import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Height, Width } from "../../utils/responsive";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const PrivacyPolicyScreen = () => {
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
        <Text style={styles.headerText}>Privacy policy</Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
          marginHorizontal: Width(20),
          marginVertical: Height(20),
        }}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          Rutilant Tech built the Nutan public school app as a yearly
          subscription based app. This SERVICE is provided by Rutilant Tech at
          yearly cost and is intended for use as is. This page is used to inform
          visitors regarding our policies with the collection, use, and
          disclosure of Personal Information if anyone decided to use our
          Service. If you choose to use our Service, then you agree to the
          collection and use of information in relation to this policy. The
          Personal Information that we collect is used for providing and
          improving the Service. We will not use or share your information with
          anyone except as described in this Privacy Policy. The terms used in
          this Privacy Policy have the same meanings as in our Terms and
          Conditions, which are accessible at Nutan public school unless
          otherwise defined in this Privacy Policy. Information Collection and
          Use For a better experience, while using our Service, we may require
          you to provide us with certain personally identifiable information,
          including but not limited to This is school application.. The
          information that we request will be retained by us and used as
          described in this privacy policy. The app does use third-party
          services that may collect information used to identify you. Link to
          the privacy policy of third-party service providers used by the app
          Google Play Services Log Data We want to inform you that whenever you
          use our Service, in a case of an error in the app we collect data and
          information (through third-party products) on your phone called Log
          Data. This Log Data may include information such as your device
          Internet Protocol (“IP”) address, device name, operating system
          version, the configuration of the app when utilizing our Service, the
          time and date of your use of the Service, and other statistics.
          Cookies Cookies are files with a small amount of data that are
          commonly used as anonymous unique identifiers. These are sent to your
          browser from the websites that you visit and are stored on your
          device's internal memory. This Service does not use these “cookies”
          explicitly. However, the app may use third-party code and libraries
          that use “cookies” to collect information and improve their services.
          You have the option to either accept or refuse these cookies and know
          when a cookie is being sent to your device. If you choose to refuse
          our cookies, you may not be able to use some portions of this Service.
          Service Providers We may employ third-party companies and individuals
          due to the following reasons: To facilitate our Service; To provide
          the Service on our behalf; To perform Service-related services; or To
          assist us in analyzing how our Service is used. We want to inform
          users of this Service that these third parties have access to their
          Personal Information. The reason is to perform the tasks assigned to
          them on our behalf. However, they are obligated not to disclose or use
          the information for any other purpose. Security We value your trust in
          providing us your Personal Information, thus we are striving to use
          commercially acceptable means of protecting it. But remember that no
          method of transmission over the internet, or method of electronic
          storage is 100% secure and reliable, and we cannot guarantee its
          absolute security. Links to Other Sites This Service may contain links
          to other sites. If you click on a third-party link, you will be
          directed to that site. Note that these external sites are not operated
          by us. Therefore, we strongly advise you to review the Privacy Policy
          of these websites. We have no control over and assume no
          responsibility for the content, privacy policies, or practices of any
          third-party sites or services. Children’s Privacy
        </Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyScreen;

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
