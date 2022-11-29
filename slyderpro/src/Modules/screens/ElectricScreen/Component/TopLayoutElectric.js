import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import NumberMeter from '../../../../Component/NumberMeter';
import { ReplaceDotandFixed } from '../../../../Confiq/Helper';

function TopLayoutElectric(props) {
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                flexDirection: 'row',
            }}>
            <View style={{ width: '50%', height: '100%', marginTop: '2%' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    <View
                        style={{
                            justifyContent: 'center',
                        }}>
                        <View
                            style={{
                                borderWidth: 2,
                                borderColor: props?.ColorReducer?.lightDarkColor,
                                padding: 12,
                                borderRadius: 12,
                            }}>
                            <NumberMeter number={props?.ElectricTop?.A1} skill="A" width={wp('1.8%')} />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: Dimensions.get('screen').width / 8,
                            margin: 10,
                        }}>
                        <View
                            style={{
                                borderWidth: 2,
                                borderColor: props?.ColorReducer?.lightDarkColor,
                                padding: 12,
                                borderRadius: 12,
                            }}>
                            <NumberMeter number={props?.ElectricTop?.A2} skill="A" width={wp('1.8%')} />
                        </View>
                        <View
                            style={{
                                borderWidth: 2,
                                borderColor: props?.ColorReducer?.lightDarkColor,
                                padding: 12,
                                borderRadius: 12,
                            }}>
                            <NumberMeter number={props?.ElectricTop?.A3} skill="A" width={wp('1.8%')} />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            alignSelf: 'center',
                            marginRight: 12,
                        }}>
                        <View
                            style={{
                                borderWidth: 2,
                                borderColor: props?.ColorReducer?.lightDarkColor,
                                padding: 12,
                                borderRadius: 12,
                                marginBottom: 15,
                            }}>
                            <NumberMeter number={props?.ElectricTop?.A4} skill="A" width={wp('1.8%')} />
                        </View>
                        <View
                            style={{
                                borderWidth: 2,
                                borderColor: props?.ColorReducer?.lightDarkColor,
                                padding: 12,
                                borderRadius: 12,
                            }}>
                            <NumberMeter number={props?.ElectricTop?.A5} skill="A" width={wp('1.8%')} />
                        </View>
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                        }}>
                        <View
                            style={{
                                marginTop: -40,
                            }}>
                            <Text
                                style={{
                                    fontSize: hp('2%'),
                                    color: props?.ColorReducer?.lightDarkColor,
                                    textAlign: 'center',
                                    paddingBottom: 12,
                                    fontFamily: 'OpenSans-Bold'
                                }}>
                                solar
                            </Text>
                            <View
                                style={{
                                    borderWidth: 2,
                                    borderColor: props?.ColorReducer?.lightDarkColor,
                                    padding: 12,
                                    borderRadius: 12,
                                }}>
                                <NumberMeter number={props?.ElectricTop?.A6} skill="A" width={wp('1.5%')} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ width: '50%', flexDirection: 'row' }}>
                <View
                    style={{
                        width: '29.5%',
                        height: '100%',
                    }}
                />

                <View
                    style={{
                        width: '36%',
                        justifyContent: 'flex-end',
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '48%', alignItems: 'center' }}>
                            <NumberMeter number={props?.ElectricTop?.dc1?.temp} skill="kW" width={wp('1.8%')} />
                        </View>
                        <View style={{ width: '56%', alignItems: 'center' }}>
                            <NumberMeter number={props?.ElectricTop?.dc2?.temp} skill="kW" width={wp('1.8%')} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: '6%' }}>
                        <View style={{ width: '48%', alignItems: 'center' }}>
                            <NumberMeter number={`${ReplaceDotandFixed(props?.ElectricTop?.dc1?.soc).toString().substring(0, 4)}`} skill="%" width={wp('1.8%')} />
                        </View>
                        <View style={{ width: '56%', alignItems: 'center' }}>
                            <NumberMeter number={`${ReplaceDotandFixed(props?.ElectricTop?.dc2?.soc).toString().substring(0, 4)}`} skill="%" width={wp('1.8%')} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const mapStateToProps = ({ ElectricTop, ColorReducer }) => ({
    ElectricTop,
    ColorReducer
});
export default connect(mapStateToProps, {

})(TopLayoutElectric);