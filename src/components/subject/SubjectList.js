import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { subject } from '../../helper/dummyData'

const SubjectList = () => {



    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item}</Text>
        </View>
    );


    return (
        <View>
            <FlatList
                data={subject}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default SubjectList

const styles = StyleSheet.create({

})