import React, { useState } from 'react';
import {
    Animated, Dimensions, Image, StyleSheet, Text,
    View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Neomorph } from 'react-native-neomorph-shadows';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import LocalizationContext from '../../../../../../LocalizationContext';
import CustomeSwitch from '../../../../../Component/CustomeSwitch';
import MOB from '../../../../../Component/MOB';
import store from '../../../../../Store';
import {
    LowerDeckSwitchesStatusChange, MobBtn
} from '../../../../../Store/Actions/LowerDeckAction';
import { LOWER_DECK_LIGHT_BB, LOWER_DECK_LIGHT_STB, LOWER_DECK_OUTLETS_BB, LOWER_DECK_OUTLETS_STB } from '../../../../../Store/Actions/type';
const data = [
    {
        warning: 'air con stb - change fuse',
        p: 1,
    },
    {
        warning: 'bilge pump aft stb / check filter',
        p: 0,
    },
    {
        warning: 'bilge pump aft bb / check filter',
        p: 0,
    },
    {
        warning: 'bilge pump ctr stb / check filter',
        p: 0,
    },
    {
        warning: 'bilge pump ctr stb / check filter',
        p: 0,
    },
    {
        warning: 'bilge pump ctr stb / check filter',
        p: 0,
    },
    {
        warning: 'bilge pump ctr stb / check filter',
        p: 0,
    },

];
function LowerDeckSwitches(props) {
    const { t } = React.useContext(LocalizationContext);
    const [indicator, setindicator] = useState(new Animated.Value(0));
    const [wholeHeight, setwholeHeight] = useState(1);
    const [visibleHeight, setvisibleHeight] = useState(0);
    const indicatorSize =
        wholeHeight > visibleHeight
            ? (visibleHeight * visibleHeight) / wholeHeight
            : visibleHeight;
    const difference =
        visibleHeight > indicatorSize ? visibleHeight - indicatorSize : 1;
    console.log("lower deck switches ")
    return (
        <View style={{ width: '35%', height: Dimensions.get('screen').height, }}>
            <MOB onPress={mob} title="MOB"  notdisable={false} />
            <View style={{ height: '17%' }} />
            <Text
                style={{
                    marginTop: '17%',
                    marginLeft: '10%',
                    fontSize: hp('2.5%'),
                    fontFamily: "OpenSans-ExtraBold",
                    color: props?.ColorReducer?.secondaryLight,
                    textShadowColor: props?.ColorReducer?.isDarkThemeOn ? "#B3001C" : 'rgba(255,255,255,.28)',
                    textShadowOffset: { width: -0.1, height: props?.ColorReducer?.isDarkThemeOn ? 0 : 1.1 },
                    textShadowRadius: 1,
                }}>
                {t('LOWER DECK')}
            </Text>

            <View
                style={{
                    marginTop: '10%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <View
                    style={{
                        marginHorizontal: 10,
                    }}>
                    <CustomeSwitch
                        value={props?.LowerDeckSwitch?.lightSBB}
                        onPress={lightbb}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: "OpenSans-Bold",
                            marginVertical: 20,
                        }}>
                        {t('lights')} bb
                    </Text>
                </View>

                <View
                    style={{
                        marginHorizontal: 10,
                    }}>
                    <CustomeSwitch
                        value={props?.LowerDeckSwitch?.lightSTB}
                        onPress={lightSTB}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            marginVertical: 20,
                            fontFamily: "OpenSans-Bold",
                        }}>
                        {t('lights')} stb
                    </Text>
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <View
                    style={{
                        marginHorizontal: 10,
                    }}>
                    <CustomeSwitch
                        value={props?.LowerDeckSwitch?.outletsBB}
                        onPress={outletsbb}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            marginVertical: 20, fontFamily: "OpenSans-Bold",
                        }}>
                        {t('outlets')} bb
                    </Text>
                </View>

                <View
                    style={{
                        marginHorizontal: 10,
                    }}>
                    <CustomeSwitch
                        value={props?.LowerDeckSwitch?.outletsstb}
                        onPress={outletsstb}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            marginVertical: 20,
                            fontFamily: "OpenSans-Bold",
                        }}>
                        {t('outlets')} stb
                    </Text>
                </View>
            </View>

            <View
                style={{
                    borderColor: '#191919',
                    marginHorizontal: 30,
                    marginVertical: "5%",
                    borderWidth: 1,
                }}
            />

            <View
                style={{
                    width: '85%',
                    alignSelf: "center",
                }}>
                <Neomorph
                    inner // <- enable inner shadow
                    darkShadowColor="#141414" // <- set this
                    lightShadowColor="#2e2e2e"
                    style={{
                        shadowOffset: { width: 2, height: 5 },
                        shadowOpacity: 1,
                        shadowColor: '#464646',
                        shadowRadius: 3,
                        borderRadius: 150,
                        backgroundColor: '#141414',
                        width: 16,
                        height: Dimensions.get('screen').height / 6,
                        overflow: 'visible',
                        position: 'absolute',
                        right: 0,
                        paddingBottom: 34,
                    }}></Neomorph>
                <View style={{ height: Dimensions.get('screen').height / 6, }}>

                    <ScrollView
                        onContentSizeChange={(width, height) => {
                            setwholeHeight(height);
                        }}
                        onLayout={({
                            nativeEvent: {
                                layout: { x, y, width, height },
                            },
                        }) => setvisibleHeight(height)}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: indicator } } }],
                            { useNativeDriver: false },
                        )}
                        showsVerticalScrollIndicator={false}
                        style={{ height: Dimensions.get('screen').height / 6, }}>
                        {data.map((item, index) => {
                            return (
                                <View key={index} style={{ flexDirection: 'row', marginTop: index == 0 ? 0 : '3%', }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        {item.p == 1 ?
                                            <Image
                                                style={{
                                                    height: Dimensions.get('screen').height / 60,
                                                    width: Dimensions.get('screen').width / 65,
                                                    tintColor: props?.ColorReducer?.isDarkThemeOn ? props?.ColorReducer?.primary : '#F2DF00'
                                                }}
                                                source={require('../../../../../../images/redtriangle.png')}
                                            />
                                            :
                                            <Image
                                                style={{
                                                    height: Dimensions.get('screen').height / 50,
                                                    width: Dimensions.get('screen').width / 50,
                                                    tintColor: props?.ColorReducer?.isDarkThemeOn ? props?.ColorReducer?.primary : '#F2DF00'
                                                }}
                                                source={require('../../../../../../images/yellowtriangle.png')}
                                            />
                                        }
                                    </View>

                                    <View
                                        style={{ marginLeft: 18, justifyContent: 'center' }}>
                                        {index == 0 ? <Text
                                            style={{ marginLeft: item.p == 1 ? 5 : 0, fontSize: hp('2.3%'), fontWeight: 'bold', color: props?.ColorReducer?.primary, fontFamily: "OpenSans-Regular" }}>
                                            air con stb<Text style={{ fontWeight: '300' }}> - change fuse</Text>
                                        </Text> : <Text
                                            style={{ marginLeft: item.p == 1 ? 5 : 0, fontWeight: '300', fontSize: hp('2.3%'), color: props?.ColorReducer?.primary, }}>
                                            {item.warning}
                                        </Text>}
                                    </View>
                                </View>
                            );
                        })}

                    </ScrollView>
                    <Animated.View
                        style={[
                            styles.indicator,
                            {
                                height: indicatorSize,
                                backgroundColor: props?.ColorReducer?.scrollviewColor,
                                // height: Dimensions.get('screen').height / 5,
                                transform: [
                                    {
                                        translateY: Animated.multiply(
                                            indicator,
                                            visibleHeight / wholeHeight,
                                        ).interpolate({
                                            inputRange: [0, difference],
                                            outputRange: [0, difference],
                                            extrapolate: 'clamp',
                                        }),
                                    },
                                ],
                            },
                        ]}
                    />
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = ({ LowerDeckSwitch, ColorReducer }) => ({
    LowerDeckSwitch,
    ColorReducer
});

export default connect(mapStateToProps, {
})(LowerDeckSwitches);

const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        width: 16,
        top: 1,
        right: 0,
        backgroundColor: '#AAAAAA',
        borderRadius: 12,
    },
});



// OnPress Switches and MOB
const mob = () => store.dispatch(MobBtn('True', 'slyderapp;systems;lowerdeck_bb;mob'))
const lightbb = (val) => store.dispatch(LowerDeckSwitchesStatusChange(val, 'slyderapp;systems;lowerdeck_bb;lights_bb', LOWER_DECK_LIGHT_BB))
const lightSTB = (val) => store.dispatch(LowerDeckSwitchesStatusChange(val, 'slyderapp;systems;lowerdeck_bb;lights_stb', LOWER_DECK_LIGHT_STB))
const outletsbb = (val) => store.dispatch(LowerDeckSwitchesStatusChange(val, 'slyderapp;systems;lowerdeck_bb;outlets_bb', LOWER_DECK_OUTLETS_BB))
const outletsstb = (val) => store.dispatch(LowerDeckSwitchesStatusChange(val, 'slyderapp;systems;lowerdeck_bb;outlets_stb', LOWER_DECK_OUTLETS_STB))
