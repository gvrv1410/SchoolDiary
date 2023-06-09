import { Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
import { Height, Width } from '../../utils/responsive';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import LoginVectorComponent from '../../../assets/svgs/LoginVector';
import EyeComponent from '../../../assets/svgs/Eye';
import EyeCloseComponent from '../../../assets/svgs/EyeClose';
import UserComponent from '../../../assets/svgs/User';
import LogoComponent from '../../../assets/svgs/Logo';
import LoginFirstComponent from '../../../assets/svgs/LoginFirst';
import LoginSecondComponent from '../../../assets/svgs/LoginSecond';
import LoginThirdComponent from '../../../assets/svgs/LoginThird';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
const LoginScreen = () => {




    const slides = [
        {
            id: '1',
            image: <LoginVectorComponent width={Width(290)} height={Height(230)} />,
            title: 'Easily Find Nearby',
            subtitle: 'Hold My hand tight as i want to grow old with you from this day forth.',
        },
        {
            id: '2',
            image: <LoginFirstComponent width={Width(290)} height={Height(230)} />,
            title: 'Find Someone Special',
            subtitle: 'You are the only thing that exists in the world.',
        },
        {
            id: '3',
            image: <LoginSecondComponent width={Width(290)} height={Height(230)} />,
            title: 'Start Dating',
            subtitle: 'Date with your partner and enjoy it.',
        },
        {
            id: '4',
            image: <LoginThirdComponent width={Width(290)} height={Height(230)} />,
            title: 'Start Dating',
            subtitle: 'Date with your partner and enjoy it.',
        },
    ];



    const Slide = ({ item }) => {
        return (
            <View style={styles.imageView}>
                {item.image}
            </View>
        );
    };

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef();
    const navigation = useNavigation()
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };





    const Footer = () => {
        return (
            <View
                style={{
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,

                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    {slides.map((_, index,) => (
                        <View key={index}>
                            <View
                                style={[
                                    styles.indicator,
                                    currentSlideIndex === index && {
                                        backgroundColor: '#FFFFFF',
                                        width: Width(30),
                                        borderRadius: Width(50)
                                    },
                                ]}
                            />
                        </View>
                    ))}
                </View>

            </View>
        );
    };



    const [userName, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);
    const Validation = async () => {
        var userNameValid = false;
        if (userName.length === 0) {
            setUserNameError('Please enter a user name');
        } else {
            setUserNameError('');
            userNameValid = true;
        }

        var passwordValid = false;
        if (password.length === 0) {
            setPasswordError('Password is required');
        } else if (password.length < 6) {
            setPasswordError('Password should be minimum 6 characters');
        } else if (password.indexOf(' ') >= 0) {
            setPasswordError('Password cannot contain spaces');
        } else {
            setPasswordError('');
            passwordValid = true;
        }

        if (userNameValid && passwordValid === true) {
            navigation.navigate('Tab')
        }
    }

    return (
        <LinearGradient
            colors={[colors.gradientPrimaryColor, colors.gradientSecondaryColor]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1 }}>
                <View style={styles.logo}>
                    <LogoComponent />
                </View>
                <FlatList
                    ref={ref}
                    onMomentumScrollEnd={updateCurrentSlideIndex}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={slides}
                    pagingEnabled
                    renderItem={({ item }) => <Slide item={item} />}
                    contentContainerStyle={{ height: Height(250), }}
                />
                <Footer />
                <View style={styles.view}>
                    <Text style={styles.signInText}>Let’s Sign in</Text>
                    <Text style={styles.subText}>Welcome back, You’ve been missed!</Text>

                    <DropShadow style={styles.dropShadow}>
                        <View style={styles.textView}>
                            <TextInput
                                placeholder="Username"
                                style={styles.textInput}
                                placeholderTextColor={colors.placeholderColor}
                                onChangeText={(text) => setUserName(text)}
                                value={userName}
                                onFocus={() => Validation()}
                            />
                            <View style={styles.verticleLine} />
                            <View style={styles.iconView}>
                                <UserComponent width={Width(15)} height={Height(18)} />
                            </View>
                        </View>
                    </DropShadow>
                    {userNameError.length > 0 && (
                        <Text style={styles.errorText}>{userNameError}</Text>
                    )}
                    <DropShadow style={styles.dropShadow}>
                        <View style={styles.textView}>
                            <TextInput
                                placeholder="Password"
                                style={styles.textInput}
                                placeholderTextColor={colors.placeholderColor}
                                secureTextEntry={passwordVisible}
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                                onFocus={() => Validation()}
                            />
                            <View style={styles.verticleLine} />
                            <TouchableOpacity
                                style={styles.iconView}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            >
                                {passwordVisible ? (
                                    <EyeComponent width={Width(18)} height={Height(11)} />
                                ) : (
                                    <EyeCloseComponent width={Width(18)} height={Height(11)} />
                                )}
                            </TouchableOpacity>
                        </View>
                    </DropShadow>
                    {passwordError.length > 0 && (
                        <Text style={styles.errorText}>{passwordError}</Text>
                    )}
                    <TouchableOpacity style={styles.btn} onPress={() => Validation()}>
                        <LinearGradient
                            colors={[
                                colors.gradientPrimaryColor,
                                colors.gradientSecondaryColor,
                            ]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.btn}
                        >
                            <Text style={styles.btnText}>LOG IN</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    logo: {
        marginTop: Height(80),
        marginLeft: Width(20),
    },
    indicator: {
        height: Height(10),
        width: Height(10),
        backgroundColor: colors.indicatorColor,
        marginHorizontal: Width(3),
        borderRadius: Height(10) / 2,
    },
    imageView: {
        alignSelf: 'center',
        width: Width(390),
        alignItems: 'center',
        height: Height(300),
        marginTop: Height(100)
    },
    safeView: {
        flex: 0,
        backgroundColor: colors.whiteColor,
    },
    view: {
        height: Height(370),
        backgroundColor: colors.whiteColor,
        marginTop: Height(30),
        borderTopLeftRadius: Width(15),
        borderTopRightRadius: Width(15),
    },
    signInText: {
        fontSize: Height(30),
        color: colors.textColor,
        fontFamily: fonts.ARCHIVO_SEMIBOLD,
        textAlign: 'center',
        marginTop: Height(40),
    },
    subText: {
        fontSize: Height(15),
        fontFamily: fonts.ARCHIVO_REGULAR,
        color: colors.textColor,
        textAlign: 'center',
        marginTop: Height(7),
    },
    textView: {
        width: Width(300),
        height: Height(45),
        backgroundColor: colors.whiteColor,
        borderRadius: Width(2),
        alignSelf: 'center',
        marginTop: Height(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textInput: {
        fontSize: Height(15),
        fontFamily: fonts.ARCHIVO_REGULAR,
        color: colors.blackColor,
        paddingLeft: Width(10),
        width: Width(250),
    },
    verticleLine: {
        height: '70%',
        width: 1,
        backgroundColor: colors.placeholderColor,
    },
    iconView: {
        marginHorizontal: Width(10),
    },
    dropShadow: {
        shadowColor: colors.placeholderColor,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    btn: {
        height: Height(45),
        width: Width(300),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: Width(2),
        marginTop: Height(25),
    },
    btnText: {
        fontSize: Height(20),
        fontFamily: fonts.ARCHIVO_MEDIUM,
        color: colors.whiteColor,
    },
    errorText: {
        color: 'red',
        marginLeft: Width(60),
        fontSize: Height(11),
        fontFamily: fonts.ARCHIVO_MEDIUM,
    },
});


