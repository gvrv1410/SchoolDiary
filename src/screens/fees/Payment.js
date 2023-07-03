import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { globalstyles } from '../../utils/globalstyle'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Height, Width } from '../../utils/responsive'
import colors from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import fonts from '../../utils/fonts'
import MasterCardComponent from '../../../assets/svgs/MasterCard'
import DebitCardComponent from '../../../assets/svgs/DebitCard'
import PaypalComponent from '../../../assets/svgs/Paypal'
import DropShadow from 'react-native-drop-shadow'
import Textinput from '../../components/textInput/Textinput'
import Button from '../../components/button/Button'
const Payment = () => {
    const navigation = useNavigation()
    const [activeIndex, setActiveIndex] = useState(1)
    const [select, setSelect] = useState('')

    // switch (select) {
    //     case 'Debit':
    //         return (
    //             <View style={globalstyles.container}>
    //                 <View style={styles.headerView}>
    //                     <Ionicons name='ios-chevron-back-outline' size={Height(30)} color={colors.textColor} onPress={() => navigation.goBack()} />
    //                     <Text style={styles.headerText}>Payment</Text>
    //                 </View>
    //                 <DropShadow style={globalstyles.dropShadow}>
    //                     <View style={styles.headerRowView}>
    //                         <TouchableOpacity style={[styles.btnRow, { backgroundColor: activeIndex === 1 ? colors.placeholderColor : colors.whiteColor, height: activeIndex === 1 ? Height(50) : null, width: Width(117) }]} onPress={() => { setActiveIndex(1), setSelect('') }}>
    //                             {activeIndex === 1 ? <MasterCardComponent size={Height(15)} /> : null}
    //                             <Text style={[styles.btnRowText, { color: activeIndex === 1 ? colors.whiteColor : colors.blackColor }]}>Master Card</Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity style={[styles.btnRow, { backgroundColor: activeIndex === 2 ? colors.placeholderColor : colors.whiteColor, height: activeIndex === 2 ? Height(50) : null, width: Width(117) }]} onPress={() => { setActiveIndex(2) }}>
    //                             {activeIndex === 2 ? <DebitCardComponent size={Height(15)} /> : null}
    //                             <Text style={[styles.btnRowText, { color: activeIndex === 2 ? colors.whiteColor : colors.blackColor }]}>Debit Card</Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity style={[styles.btnRow, { backgroundColor: activeIndex === 3 ? colors.placeholderColor : colors.whiteColor, height: activeIndex === 3 ? Height(50) : null, width: Width(117) }]} onPress={() => { setActiveIndex(3), setSelect('PayPal') }}>
    //                             {activeIndex === 3 ? <PaypalComponent size={Height(15)} /> : null}
    //                             <Text style={[styles.btnRowText, { color: activeIndex === 3 ? colors.whiteColor : colors.blackColor }]}>PayPal</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                 </DropShadow>
    //                 <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Card No</Text>
    //                 <Textinput
    //                     placeholder={'Card No'}
    //                     height={Height(50)}
    //                     keyboardType='numeric'
    //                     width={Width(350)}
    //                 />
    //                 <View style={styles.textRowView}>
    //                     <View>
    //                         <Text style={styles.text}>Validity</Text>
    //                         <Textinput
    //                             placeholder={'Validity'}
    //                             height={Height(50)}
    //                             keyboardType='numeric'
    //                             width={Width(150)}
    //                         />
    //                     </View>
    //                     <View>
    //                         <Text style={styles.text}>CVV</Text>
    //                         <Textinput
    //                             placeholder={'CVV'}
    //                             height={Height(50)}
    //                             keyboardType='numeric'
    //                             width={Width(150)}
    //                         />
    //                     </View>
    //                 </View>
    //                 <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Card Holder Name</Text>
    //                 <Textinput
    //                     placeholder={'Card Holder Name'}
    //                     height={Height(50)}
    //                     // keyboardType='numeric'
    //                     width={Width(350)}
    //                 />
    //                 <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Payment Details</Text>
    //                 <View style={styles.view}>
    //                     <View style={styles.bottomRowView}>
    //                         <Text style={styles.bottomText}>Annual :</Text>
    //                         <Text style={styles.bottomText}>30,000/-</Text>
    //                     </View>
    //                     <View style={styles.bottomRowView}>
    //                         <Text style={styles.bottomText}>Total Fee :</Text>
    //                         <Text style={styles.bottomText}>30,000/-</Text>
    //                     </View>
    //                     <View style={styles.bottomRowView}>
    //                         <Text style={[styles.bottomSubText, { fontFamily: fonts.ARCHIVO_SEMIBOLD }]}>Paid Fees :</Text>
    //                         <Text style={styles.bottomSubText}>60,000/-</Text>
    //                     </View>
    //                 </View>
    //                 <Button
    //                     name='Payment'
    //                     btnHeight={Height(45)}
    //                     btnWidth={Width(300)}
    //                     alignSelf='center'
    //                     justifyContent='center'
    //                     alignItems='center'
    //                     marginTop={Height(30)}
    //                 />
    //                 <Button
    //                     name='Download invoice'
    //                     btnHeight={Height(45)}
    //                     btnWidth={Width(300)}
    //                     alignSelf='center'
    //                     justifyContent='center'
    //                     alignItems='center'
    //                     marginTop={Height(30)}
    //                 />
    //             </View>
    //         )
    //     case 'PayPal':
    //         return (
    //             <View style={globalstyles.container}>
    //                 <View style={styles.headerView}>
    //                     <Ionicons name='ios-chevron-back-outline' size={Height(30)} color={colors.textColor} onPress={() => navigation.goBack()} />
    //                     <Text style={styles.headerText}>Payment</Text>
    //                 </View>
    //                 <DropShadow style={globalstyles.dropShadow}>
    //                     <View style={styles.headerRowView}>
    //                         <TouchableOpacity style={[styles.btnRow, { backgroundColor: activeIndex === 1 ? colors.placeholderColor : colors.whiteColor, height: activeIndex === 1 ? Height(50) : null, width: Width(117) }]} onPress={() => { setActiveIndex(1), setSelect('') }}>
    //                             {activeIndex === 1 ? <MasterCardComponent size={Height(15)} /> : null}
    //                             <Text style={[styles.btnRowText, { color: activeIndex === 1 ? colors.whiteColor : colors.blackColor }]}>Master Card</Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity style={[styles.btnRow, { backgroundColor: activeIndex === 2 ? colors.placeholderColor : colors.whiteColor, height: activeIndex === 2 ? Height(50) : null, width: Width(117) }]} onPress={() => { setActiveIndex(2), setSelect('Debit') }}>
    //                             {activeIndex === 2 ? <DebitCardComponent size={Height(15)} /> : null}
    //                             <Text style={[styles.btnRowText, { color: activeIndex === 2 ? colors.whiteColor : colors.blackColor }]}>Debit Card</Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity style={[styles.btnRow, { backgroundColor: activeIndex === 3 ? colors.placeholderColor : colors.whiteColor, height: activeIndex === 3 ? Height(50) : null, width: Width(117) }]} onPress={() => setActiveIndex(3)}>
    //                             {activeIndex === 3 ? <PaypalComponent size={Height(15)} /> : null}
    //                             <Text style={[styles.btnRowText, { color: activeIndex === 3 ? colors.whiteColor : colors.blackColor }]}>PayPal</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                 </DropShadow>
    //                 <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Country</Text>
    //                 <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Card No</Text>
    //                 <Textinput
    //                     placeholder={'Card No'}
    //                     height={Height(50)}
    //                     keyboardType='numeric'
    //                     width={Width(350)}
    //                 />
    //                 <View style={styles.textRowView}>
    //                     <View>
    //                         <Text style={styles.text}>Validity</Text>
    //                         <Textinput
    //                             placeholder={'Validity'}
    //                             height={Height(50)}
    //                             keyboardType='numeric'
    //                             width={Width(150)}
    //                         />
    //                     </View>
    //                     <View>
    //                         <Text style={styles.text}>CVV</Text>
    //                         <Textinput
    //                             placeholder={'CVV'}
    //                             height={Height(50)}
    //                             keyboardType='numeric'
    //                             width={Width(150)}
    //                         />
    //                     </View>
    //                 </View>
    //                 <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Card Holder Name</Text>
    //                 <Textinput
    //                     placeholder={'Card Holder Name'}
    //                     height={Height(50)}
    //                     // keyboardType='numeric'
    //                     width={Width(350)}
    //                 />
    //                 <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Payment Details</Text>
    //                 <View style={styles.view}>
    //                     <View style={styles.bottomRowView}>
    //                         <Text style={styles.bottomText}>Annual :</Text>
    //                         <Text style={styles.bottomText}>30,000/-</Text>
    //                     </View>
    //                     <View style={styles.bottomRowView}>
    //                         <Text style={styles.bottomText}>Total Fee :</Text>
    //                         <Text style={styles.bottomText}>30,000/-</Text>
    //                     </View>
    //                     <View style={styles.bottomRowView}>
    //                         <Text style={[styles.bottomSubText, { fontFamily: fonts.ARCHIVO_SEMIBOLD }]}>Paid Fees :</Text>
    //                         <Text style={styles.bottomSubText}>60,000/-</Text>
    //                     </View>
    //                 </View>
    //                 <Button
    //                     name='Payment'
    //                     btnHeight={Height(45)}
    //                     btnWidth={Width(300)}
    //                     alignSelf='center'
    //                     justifyContent='center'
    //                     alignItems='center'
    //                     marginTop={Height(30)}
    //                 />
    //                 <Button
    //                     name='Download invoice'
    //                     btnHeight={Height(45)}
    //                     btnWidth={Width(300)}
    //                     alignSelf='center'
    //                     justifyContent='center'
    //                     alignItems='center'
    //                     marginTop={Height(30)}
    //                 />
    //             </View>
    //         )
    //     default: {
    //         return (
    //             <View style={globalstyles.container}>
    //                 <View style={styles.headerView}>
    //                     <Ionicons name='ios-chevron-back-outline' size={Height(30)} color={colors.textColor} onPress={() => navigation.goBack()} />
    //                     <Text style={styles.headerText}>Payment</Text>
    //                 </View>
    //                 <DropShadow style={globalstyles.dropShadow}>
    //                     <View style={styles.headerRowView}>
    //                         <TouchableOpacity style={[styles.btnRow, { backgroundColor: activeIndex === 1 ? colors.placeholderColor : colors.whiteColor, height: activeIndex === 1 ? Height(50) : null, width: Width(117) }]} onPress={() => setActiveIndex(1)}>
    //                             {activeIndex === 1 ? <MasterCardComponent size={Height(15)} /> : null}
    //                             <Text style={[styles.btnRowText, { color: activeIndex === 1 ? colors.whiteColor : colors.blackColor }]}>Master Card</Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity style={[styles.btnRow, { backgroundColor: activeIndex === 2 ? colors.placeholderColor : colors.whiteColor, height: activeIndex === 2 ? Height(50) : null, width: Width(117) }]} onPress={() => { setActiveIndex(2), setSelect('Debit') }}>
    //                             {activeIndex === 2 ? <DebitCardComponent size={Height(15)} /> : null}
    //                             <Text style={[styles.btnRowText, { color: activeIndex === 2 ? colors.whiteColor : colors.blackColor }]}>Debit Card</Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity style={[styles.btnRow, { backgroundColor: activeIndex === 3 ? colors.placeholderColor : colors.whiteColor, height: activeIndex === 3 ? Height(50) : null, width: Width(117) }]} onPress={() => { setActiveIndex(3), setSelect('PayPal') }}>
    //                             {activeIndex === 3 ? <PaypalComponent size={Height(15)} /> : null}
    //                             <Text style={[styles.btnRowText, { color: activeIndex === 3 ? colors.whiteColor : colors.blackColor }]}>PayPal</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                 </DropShadow>
    //                 <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Card No</Text>
    //                 <Textinput
    //                     placeholder={'Card No'}
    //                     height={Height(50)}
    //                     keyboardType='numeric'
    //                     width={Width(350)}
    //                 />
    //                 <View style={styles.textRowView}>
    //                     <View>
    //                         <Text style={styles.text}>Validity</Text>
    //                         <Textinput
    //                             placeholder={'Validity'}
    //                             height={Height(50)}
    //                             keyboardType='numeric'
    //                             width={Width(150)}
    //                         />
    //                     </View>
    //                     <View>
    //                         <Text style={styles.text}>CVV</Text>
    //                         <Textinput
    //                             placeholder={'CVV'}
    //                             height={Height(50)}
    //                             keyboardType='numeric'
    //                             width={Width(150)}
    //                         />
    //                     </View>
    //                 </View>
    //                 <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Card Holder Name</Text>
    //                 <Textinput
    //                     placeholder={'Card Holder Name'}
    //                     height={Height(50)}
    //                     // keyboardType='numeric'
    //                     width={Width(350)}
    //                 />
    //                 <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Payment Details</Text>
    //                 <View style={styles.view}>
    //                     <View style={styles.bottomRowView}>
    //                         <Text style={styles.bottomText}>Annual :</Text>
    //                         <Text style={styles.bottomText}>30,000/-</Text>
    //                     </View>
    //                     <View style={styles.bottomRowView}>
    //                         <Text style={styles.bottomText}>Total Fee :</Text>
    //                         <Text style={styles.bottomText}>30,000/-</Text>
    //                     </View>
    //                     <View style={styles.bottomRowView}>
    //                         <Text style={[styles.bottomSubText, { fontFamily: fonts.ARCHIVO_SEMIBOLD }]}>Paid Fees :</Text>
    //                         <Text style={styles.bottomSubText}>60,000/-</Text>
    //                     </View>
    //                 </View>
    //                 <Button
    //                     name='Payment'
    //                     btnHeight={Height(45)}
    //                     btnWidth={Width(300)}
    //                     alignSelf='center'
    //                     justifyContent='center'
    //                     alignItems='center'
    //                     marginTop={Height(30)}
    //                 />
    //                 <Button
    //                     name='Download invoice'
    //                     btnHeight={Height(45)}
    //                     btnWidth={Width(300)}
    //                     alignSelf='center'
    //                     justifyContent='center'
    //                     alignItems='center'
    //                     marginTop={Height(30)}
    //                 />
    //             </View>
    //         )
    //     }
    // }
    return (
        <View style={globalstyles.container}>
            <View style={styles.headerView}>
                <Ionicons name='ios-chevron-back-outline' size={Height(30)} color={colors.textColor} onPress={() => navigation.goBack()} />
                <Text style={styles.headerText}>Payment</Text>
            </View>
            {/* <DropShadow style={globalstyles.dropShadow}>
                <View style={styles.headerRowView}>
                    <TouchableOpacity style={[styles.btnRow, { backgroundColor: activeIndex === 1 ? colors.placeholderColor : colors.whiteColor, height: activeIndex === 1 ? Height(50) : null, width: Width(117) }]} onPress={() => { setActiveIndex(1), setSelect('') }}>
                        {activeIndex === 1 ? <MasterCardComponent size={Height(15)} /> : null}
                        <Text style={[styles.btnRowText, { color: activeIndex === 1 ? colors.whiteColor : colors.blackColor }]}>Master Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnRow, { backgroundColor: activeIndex === 2 ? colors.placeholderColor : colors.whiteColor, height: activeIndex === 2 ? Height(50) : null, width: Width(117) }]} onPress={() => { setActiveIndex(2) }}>
                        {activeIndex === 2 ? <DebitCardComponent size={Height(15)} /> : null}
                        <Text style={[styles.btnRowText, { color: activeIndex === 2 ? colors.whiteColor : colors.blackColor }]}>Debit Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnRow, { backgroundColor: activeIndex === 3 ? colors.placeholderColor : colors.whiteColor, height: activeIndex === 3 ? Height(50) : null, width: Width(117) }]} onPress={() => { setActiveIndex(3), setSelect('PayPal') }}>
                        {activeIndex === 3 ? <PaypalComponent size={Height(15)} /> : null}
                        <Text style={[styles.btnRowText, { color: activeIndex === 3 ? colors.whiteColor : colors.blackColor }]}>PayPal</Text>
                    </TouchableOpacity>
                </View>
            </DropShadow> */}
            <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Card No</Text>
            <Textinput
                placeholder={'Card No'}
                height={Height(50)}
                keyboardType='numeric'
                width={Width(350)}
            />
            <View style={styles.textRowView}>
                <View>
                    <Text style={styles.text}>Validity</Text>
                    <Textinput
                        placeholder={'Validity'}
                        height={Height(50)}
                        keyboardType='numeric'
                        width={Width(150)}
                    />
                </View>
                <View>
                    <Text style={styles.text}>CVV</Text>
                    <Textinput
                        placeholder={'CVV'}
                        height={Height(50)}
                        keyboardType='numeric'
                        width={Width(150)}
                    />
                </View>
            </View>
            <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Card Holder Name</Text>
            <Textinput
                placeholder={'Card Holder Name'}
                height={Height(50)}
                // keyboardType='numeric'
                width={Width(350)}
            />
            <Text style={[{ marginHorizontal: Width(20) }, styles.text]}>Payment Details</Text>
            <View style={styles.view}>
                <View style={styles.bottomRowView}>
                    <Text style={styles.bottomText}>Annual :</Text>
                    <Text style={styles.bottomText}>30,000/-</Text>
                </View>
                <View style={styles.bottomRowView}>
                    <Text style={styles.bottomText}>Total Fee :</Text>
                    <Text style={styles.bottomText}>30,000/-</Text>
                </View>
                <View style={styles.bottomRowView}>
                    <Text style={[styles.bottomSubText, { fontFamily: fonts.ARCHIVO_SEMIBOLD }]}>Paid Fees :</Text>
                    <Text style={styles.bottomSubText}>60,000/-</Text>
                </View>
            </View>
            <Button
                name='Payment'
                btnHeight={Height(45)}
                btnWidth={Width(300)}
                alignSelf='center'
                justifyContent='center'
                alignItems='center'
                marginTop={Height(30)}
            />
            <Button
                name='Download invoice'
                btnHeight={Height(45)}
                btnWidth={Width(300)}
                alignSelf='center'
                justifyContent='center'
                alignItems='center'
                marginTop={Height(30)}
            />
        </View>
    )

}

export default Payment

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row', alignItems: 'center', marginTop: Height(50), marginLeft: Width(20)
    },
    headerText: {
        fontSize: Height(25), fontFamily: fonts.ARCHIVO_SEMIBOLD, marginLeft: Width(20), color: colors.textColor
    },
    headerRowView: {
        height: Height(50), width: Width(350), backgroundColor: colors.whiteColor, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', borderRadius: Width(5), marginTop: Height(20)
    },
    btnRow: {
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: Width(20), borderRadius: Width(5)
    },
    btnRowText: {
        fontSize: Height(15), fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.blackColor, marginLeft: Width(10)
    },
    text: {
        marginTop: Height(30), fontSize: Height(15), fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.blackColor
    },
    textRowView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20)
    }, bottomRowView: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Height(20)
    },
    bottomText: {
        fontSize: Height(12), fontFamily: fonts.ARCHIVO_REGULAR, color: colors.placeholderColor
    },
    bottomSubText: {
        fontSize: Height(15), fontFamily: fonts.ARCHIVO_REGULAR, color: colors.textColor
    },
    view: {
        marginHorizontal: Width(20)
    }
})