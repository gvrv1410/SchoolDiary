import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { globalstyles } from "../../utils/globalstyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Height, Width } from "../../utils/responsive";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import { BASE_URL } from "../../helper/apiConstants";
const EventImageView = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={globalstyles.container}>
      <View style={styles.headerView}>
        <Ionicons
          name="ios-chevron-back-outline"
          size={Height(30)}
          color={colors.textColor}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Event Images</Text>
      </View>

      <Image
        source={{ uri: `${BASE_URL}event_photos/${route.params?.data}` }}
        style={{
          height: Height(400),
          width: Width(350),
          alignSelf: "center",
          marginTop: Height(50),
          borderRadius: Width(5),
        }}
      />
    </View>
  );
};

export default EventImageView;

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
});
