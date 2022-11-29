import React, { useCallback, useState } from 'react';
import { Dimensions, TouchableOpacity, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import CustomText from '../../../../Component/CustomText';

function RoundedButtonStatus({ onClick, active, title, top, right, showtitle, ColorReducer, Mqtt }) {
    const [isDown, setDown] = useState(false);
    const handlePressIn = useCallback(() => {
        setDown(true);
    }, [setDown]);
    const handlePressOut = useCallback(() => {
        setDown(false);
    }, [setDown]);
    const gradColorsCircle = isDown
        ? ['#000000', '#616161']
        : ['#515151', '#191919'];
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                top: top,
                position: "absolute"
            }}>
            {right ? (null) :
                title != 'rc' ? (
                    <CustomText title={title} />
                ) : null
            }
            <TouchableOpacity
                onPress={onClick}
                disabled={Mqtt.client == null ? true : false}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={1}
                style={[
                    {
                        backgroundColor: '#292929',
                        width: widthPercentageToDP('2.8%'),
                        height: widthPercentageToDP('2.8%'),
                        borderRadius: 100,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: widthPercentageToDP('0.8%'),
                        marginTop: heightPercentageToDP('0.3%')
                    },
                ]}>
                <LinearGradient
                    colors={gradColorsCircle}
                    useAngle={true}
                    angle={145}
                    angleCenter={{ x: 0.7, y: 0.5 }}
                    style={{
                        width: widthPercentageToDP('2.3%'),
                        height: widthPercentageToDP('2.3%'),
                        borderRadius: 100,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    {title == 'rc' ? (
                        <Text style={{
                            color: ColorReducer.primary,
                            fontSize: heightPercentageToDP('2%'),
                            fontWeight: "bold"
                        }}>
                            {title}
                        </Text>

                    ) :
                        <View
                            style={{
                                borderWidth: Dimensions.get('screen').width / 500,
                                width: Dimensions.get('screen').width / 110,
                                borderColor: active ? ColorReducer?.btnstatus : '#606060',
                                borderRadius: 2,
                            }}
                        />
                    }

                </LinearGradient>
            </TouchableOpacity>
            {showtitle ? (
                null
            ) : right ? <CustomText title={title} right /> :
                null}

        </View>
    )
}

const mapStateToProps = ({ ColorReducer, Mqtt }) => ({
    ColorReducer,
    Mqtt
});

export default connect(mapStateToProps, {
})(RoundedButtonStatus);
