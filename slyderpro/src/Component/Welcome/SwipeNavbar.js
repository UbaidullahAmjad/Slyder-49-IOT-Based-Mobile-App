import { View, Pressable, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavBarbtn from '../../Component/NavBarbtn';
import { BlurView } from '@react-native-community/blur';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import store from '../../Store';
import { ChangeColorftn } from '../../Store/Actions/SharedAction';

export default function SwipeNavbar() {

    const [ShowComment, setShowModelComment] = useState(false);
    const [animateModal, setanimateModal] = useState(false);

    return (
        <View style={{
            height: heightPercentageToDP('7%'), width: "100%",
        }}>
            <Pressable
                style={{
                    width: '100%',
                    height: heightPercentageToDP('7%'),
                }}
                onPressOut={() => setShowModelComment(true)}></Pressable>
            <SwipeUpDownModal
                modalVisible={ShowComment}
                PressToanimate={animateModal}
                OpenModalDirection="up"
                PressToanimateDirection="up"
                duration={500}
                DisableHandAnimation={true}
                //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
                ContentModal={
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(255,255,255,0.4)',
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30,
                            overflow: 'hidden',
                        }}>
                        <BlurView
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                            }}
                            blurType="light"
                            blurAmount={4}
                        // reducedTransparencyFallbackColor="white"
                        ></BlurView>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: '65%',
                                    height: '30%',
                                    justifyContent: 'space-between',
                                }}>
                                <NavBarbtn text="DIMM" borderCol="#9A7C00" />
                                <NavBarbtn onPress={() => store.dispatch(ChangeColorftn())} text="NIGHT" borderCol="#18CAD9" />
                                <NavBarbtn text="STBY" borderCol="#DE00E6" />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: '88%',
                                    height: '30%',
                                    justifyContent: 'space-between',
                                    marginTop: 40,
                                    marginBottom: 12,
                                }}>
                                <NavBarbtn text="NAV" borderCol="#9A7C00" />
                                <NavBarbtn text="ANCHOR" borderCol="#87D918" />
                                <NavBarbtn text="STEAM" borderCol="#3E00E6" />
                                <NavBarbtn text="COMPASS" borderCol="#E60058" />
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                setShowModelComment(false);
                                setanimateModal(false);
                            }}
                            style={{
                                alignSelf: 'center',
                                marginVertical: 20,
                            }}>
                            <FontAwesome name="chevron-up" size={40} color="#393A3A" />
                        </TouchableOpacity>
                    </View>
                }
                ContentModalStyle={styles.Modal}
                onClose={() => {
                    setShowModelComment(false);
                    setanimateModal(false);
                }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    Modal: {
        marginTop: 0,
        width: '50%',
        flex: 0,
        height: '50%',
        alignSelf: 'center',
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
    },
});