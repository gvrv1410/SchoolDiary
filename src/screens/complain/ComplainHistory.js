import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Height, Width } from "../../utils/responsive";
import fonts from "../../utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchComplainData,
  fetchComplainFromTeacher,
} from "../../redux/reducer/fetchComplainReducer";
import DropShadow from "react-native-drop-shadow";
import { globalstyles } from "../../utils/globalstyle";
import EditComponent from "../../../assets/svgs/Edit";
import DeleteComponent from "../../../assets/svgs/Delete";
import { deleteComplain } from "../../redux/reducer/deleteComplainReducer";
import CustomAlert from "../../components/modal/CustomAlert";

const ComplainHistory = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const fetchCompain = useSelector((state) => state?.fetchComplain);
  const fetchCompainFromTeacher = useSelector(
    (state) => state?.fetchComplain?.complainData
  );
  useEffect(() => {
    dispatch(fetchComplainData());
    dispatch(fetchComplainFromTeacher());
  }, [dispatch]);

  const [select, setSelect] = useState("");
  const [activeIndex, setActiveIndex] = useState(1);

  const deleteComplainData = useSelector((state) => state?.deleteComplainss);
  const onPressDeleteComplain = (item) => {
    const deleteComplainWithId = {
      id: item._id,
    };
    dispatch(deleteComplain(deleteComplainWithId));
    if (deleteComplainData.data && deleteComplainData.data.success === true) {
      setShowDonationSuccessPopup(true);
    }
  };

  switch (select) {
    case "Complain":
      return (
        <View style={{ flex: 1, backgroundColor: colors.whiteColor }}>
          <View style={styles.headerView}>
            <Ionicons
              name="ios-chevron-back-outline"
              size={Height(30)}
              color={colors.textColor}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.headerText}>Complains</Text>
          </View>

          <View style={styles.headerRowView}>
            <DropShadow style={styles.shadow}>
              <TouchableOpacity
                style={[
                  {
                    backgroundColor:
                      activeIndex === 1
                        ? colors.whiteColor
                        : colors.placeholderColor,
                  },
                  styles.headerBtn,
                ]}
                onPress={() => {
                  setActiveIndex(1), setSelect("");
                }}
              >
                <Text
                  style={[
                    {
                      color:
                        activeIndex === 1
                          ? colors.textColor
                          : colors.whiteColor,
                    },
                    styles.headerBtnText,
                  ]}
                >
                  Complain
                </Text>
              </TouchableOpacity>
            </DropShadow>
            <DropShadow style={styles.shadow}>
              <TouchableOpacity
                style={[
                  {
                    backgroundColor:
                      activeIndex === 2
                        ? colors.whiteColor
                        : colors.placeholderColor,
                  },
                  styles.headerBtn,
                ]}
                onPress={() => setActiveIndex(2)}
              >
                <Text
                  style={[
                    {
                      color:
                        activeIndex === 2
                          ? colors.textColor
                          : colors.whiteColor,
                    },
                    styles.headerBtnText,
                  ]}
                >
                  My Complains
                </Text>
              </TouchableOpacity>
            </DropShadow>
          </View>

          {fetchCompain?.data && fetchCompain?.data?.length === 0 ? (
            <View>
              <Text>No Data Found</Text>
            </View>
          ) : (
            <FlatList
              data={fetchCompain && fetchCompain?.data}
              style={{ marginTop: Height(50) }}
              renderItem={({ item }) => {
                return (
                  <View>
                    <View style={styles.rowView}>
                      <TouchableOpacity
                        onPress={() => onPressDeleteComplain(item)}
                      >
                        <DeleteComponent />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.editBtn}
                        onPress={() =>
                          navigation.navigate("EditComplain", { data: item })
                        }
                      >
                        <EditComponent />
                      </TouchableOpacity>
                    </View>
                    <DropShadow style={globalstyles.dropShadow}>
                      <View style={styles.view}>
                        <Text style={styles.text}>{item.Complain_title}</Text>
                        <Text style={[styles.text, styles.subText]}>
                          {item.Complain_descriptio}
                        </Text>
                      </View>
                    </DropShadow>
                  </View>
                );
              }}
            />
          )}
          <CustomAlert
            displayMode={"success"}
            displayMsg={"Complain Delete Successfully"}
            visibility={showDonationSuccessPopup}
            dismissAlert={setShowDonationSuccessPopup}
          />
        </View>
      );
    default: {
      return (
        <View style={{ flex: 1, backgroundColor: colors.whiteColor }}>
          <View style={styles.headerView}>
            <Ionicons
              name="ios-chevron-back-outline"
              size={Height(30)}
              color={colors.textColor}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.headerText}>Complains</Text>
          </View>

          <View style={styles.headerRowView}>
            <DropShadow style={styles.shadow}>
              <TouchableOpacity
                style={[
                  {
                    backgroundColor:
                      activeIndex === 1
                        ? colors.whiteColor
                        : colors.placeholderColor,
                  },
                  styles.headerBtn,
                ]}
                onPress={() => {
                  setActiveIndex(1), setSelect("");
                }}
              >
                <Text
                  style={[
                    {
                      color:
                        activeIndex === 1
                          ? colors.textColor
                          : colors.whiteColor,
                    },
                    styles.headerBtnText,
                  ]}
                >
                  Complain
                </Text>
              </TouchableOpacity>
            </DropShadow>
            <DropShadow style={styles.shadow}>
              <TouchableOpacity
                style={[
                  {
                    backgroundColor:
                      activeIndex === 2
                        ? colors.whiteColor
                        : colors.placeholderColor,
                  },
                  styles.headerBtn,
                ]}
                onPress={() => {
                  setActiveIndex(2), setSelect("Complain");
                }}
              >
                <Text
                  style={[
                    {
                      color:
                        activeIndex === 2
                          ? colors.textColor
                          : colors.whiteColor,
                    },
                    styles.headerBtnText,
                  ]}
                >
                  My Complains
                </Text>
              </TouchableOpacity>
            </DropShadow>
          </View>

          {fetchCompainFromTeacher?.length === 0 ? (
            <View>
              <Text>No Data Found</Text>
            </View>
          ) : (
            <FlatList
              data={fetchCompainFromTeacher}
              style={{ marginTop: Height(70) }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <DropShadow style={globalstyles.dropShadow}>
                    <View style={styles.view}>
                      <Text style={styles.text}>{item.Complain_title}</Text>
                      <Text style={[styles.text, styles.subText]}>
                        {item.Complain_descriptio}
                      </Text>
                    </View>
                  </DropShadow>
                );
              }}
            />
          )}
        </View>
      );
    }
  }
};

export default ComplainHistory;

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
  rowView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: Width(20),
    marginTop: Height(30),
    alignItems: "center",
  },
  view: {
    height: Height(120),
    width: Width(350),
    backgroundColor: colors.whiteColor,
    alignSelf: "center",
    borderRadius: Width(5),
    marginTop: Height(20),
    padding: Width(10),
  },
  editBtn: {
    marginLeft: Width(15),
  },
  text: {
    fontSize: Height(15),
    fontFamily: fonts.ARCHIVO_MEDIUM,
    color: colors.blackColor,
    letterSpacing: 0.5,
  },
  subText: {
    fontSize: Height(13),
    fontFamily: fonts.ARCHIVO_REGULAR,
    marginTop: Height(5),
  },
  headerRowView: {
    flexDirection: "row",
    position: "absolute",
    marginTop: Height(100),
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: Width(30),
  },
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
  headerBtn: {
    width: Width(150),
    height: Height(50),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Width(5),
  },
  headerBtnText: {
    fontSize: Height(20),
    fontFamily: fonts.ARCHIVO_MEDIUM,
  },
});
