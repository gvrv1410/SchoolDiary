import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import imageConstants from '../../helper/imageConstants'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
    const showBack = true;
    const imageShow = true;
    const textShow = true;

    const navigation = useNavigation()
    return (
        <View>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                userImage={imageConstants.userImage}
                textShow={textShow}
                firstText={'Hello'}
                lastText={'Hi'}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})