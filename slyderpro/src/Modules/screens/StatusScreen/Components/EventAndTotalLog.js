import React, { useState } from 'react';
import {
    Animated, FlatList, StyleSheet, Text,
    View
} from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LongNeomorphButton from './LongNeomorphButton';
import LocalizationContext from './../../../../../LocalizationContext';
import { connect } from 'react-redux';

function EventAndTotalLog(props) {
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
    return (
        <View style={{ width: wp('100%'), height: hp('35%'), flexDirection: "row", }}>
            <View style={{ width: wp('60%'), height: "100%", paddingTop: hp('4%'), paddingLeft: wp('5%') }}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: hp('2.5%'),
                        fontFamily: "OpenSans-Bold",
                        color: props?.ColorReducer?.secondary,
                        marginBottom: 6,
                        textShadowColor: props?.ColorReducer?.isDarkThemeOn ? "#B3001C" : 'rgba(255,255,255,.2)',
                        textShadowOffset: { width: -1, height: props?.ColorReducer?.isDarkThemeOn ? 0 : 2 },
                        textShadowRadius: 1,
                        textDecorationLine: props?.ColorReducer?.isDarkThemeOn ? 'underline' : 'none'
                    }}>
                    {t('EVENTS')}
                </Text>
                <View
                    style={{
                        height: '75%',
                        overflow: "hidden",

                        borderBottomWidth: 3,
                        borderColor: '#000',
                        paddingBottom: hp('2%')
                    }}>
                    <Neomorph
                        inner // <- enable inner shadow
                        darkShadowColor="#141414" // <- set this
                        lightShadowColor="#474747"
                        style={{
                            shadowOffset: { width: 2, height: 5 },
                            shadowOpacity: 1,
                            shadowColor: '#fff',
                            shadowRadius: 3,
                            backgroundColor: '#141414',
                            borderColor: '#A4A4A4',
                            borderWidth: 0,
                            width: (1.5 / 100) * wp('60%'),
                            height: (70 / 100) * hp('30%'),
                            borderRadius: 20,
                            overflow: 'visible',
                            position: 'absolute',
                            right: 0,
                            paddingBottom: 34,
                            // ...include most of View/Layout styles
                        }}></Neomorph>

                    <FlatList
                        nestedScrollEnabled={true}
                        data={props?.EventReducer?.event}
                        showsVerticalScrollIndicator={false}
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
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ flexDirection: 'row', marginTop: 13 }}>
                                    <View style={{ justifyContent: 'center', }}>
                                        <Ionicons
                                            name="warning"
                                            size={wp('1.5%')}
                                            color={props?.ColorReducer?.isDarkThemeOn ? props?.ColorReducer?.primary : item.p == 0 ? '#FF3926' : '#F2E900'}
                                        />
                                        {/* {item.p == 1 ? <Image style={{ height: hp('2%'), width: wp('2%') ,}} source={require('../../../../images/redtriangle.png')} /> :
                        <Image style={{ height: hp('2%'), width: wp('2%') }} source={require('../../../../images/yellowtriangle.png')} />
                      } */}
                                    </View>

                                    <View
                                        style={{ marginLeft: 18, justifyContent: 'center' }}>
                                        {index == 0 ?
                                            <View style={{ flexDirection: "row" }}>
                                                <Text
                                                    style={{ marginLeft: item.p == 1 ? 5 : 0, fontSize: hp('2.3%'), color: props?.ColorReducer?.primary, fontFamily: "OpenSans-Bold" }}>
                                                    anchor alarm
                                                </Text>
                                                <Text style={{
                                                    fontSize: hp('2.3%'), color: props?.ColorReducer?.primary, fontFamily: "OpenSans-Regular", marginLeft: 12
                                                }}>
                                                    / 03:00 UTC / check position / reset alarm
                                                </Text>
                                            </View>

                                            : <Text
                                                style={{ marginLeft: item.p == 1 ? 5 : 0, fontWeight: '300', fontSize: hp('2.3%'), color: props?.ColorReducer?.primary, fontFamily: "OpenSans-Regular" }}>
                                                {item.warning}
                                            </Text>}
                                    </View>
                                </View>
                            );
                        }}
                        keyExtractor={(item, index) => index}
                    />
                    <View style={styles.indicatorWrapper} />
                    <Animated.View
                        style={[
                            styles.indicator,
                            {
                                height: indicatorSize,
                                backgroundColor: props?.ColorReducer?.scrollviewColor,
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
            {/* total log screen */}
            <View style={{ width: '24%', height: "100%", justifyContent: "center", alignItems: "center" }}>
                <Text
                    style={{
                        fontSize: hp('2%'),
                        color: props?.ColorReducer?.primary,
                        marginBottom: 16,
                        fontFamily: 'OpenSans-Bold'
                    }}>
                    {t('total log')}
                </Text>
                <LongNeomorphButton number={props?.EventReducer?.totallog} skill="nm" />

            </View>

        </View>
    )
}
const mapStateToProps = ({ EventReducer, ColorReducer }) => ({
    EventReducer,
    ColorReducer
});

export default connect(mapStateToProps, {

})(EventAndTotalLog);
const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        width: (1.4 / 100) * wp('60%'),
        top: 1,
        right: 0,
        borderRadius: 50,
    },
});