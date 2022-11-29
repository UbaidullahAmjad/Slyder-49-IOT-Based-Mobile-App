import React from 'react';
import { View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import NumberMeter from '../../../../Component/NumberMeter';
import { ReplaceDotandFixed } from '../../../../Confiq/Helper';
function CenterLayoutElectric(props) {
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
            }}>
            <View style={{ width: '50%', height: '100%', flexDirection: 'row' }}>
                <View style={{ width: '54%', height: '100%' }} />
                <View
                    style={{
                        width: '37%',
                        height: '75%',
                        justifyContent: 'space-between',
                        alignSelf: 'center',
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: '2%',
                        }}>
                        <View
                            style={{
                                width: '50%',
                                alignItems: 'center',
                            }}>
                            <NumberMeter number={'TBD'} skill="kW" width={wp('1.8%')} />
                        </View>
                        <View
                            style={{
                                width: '50%',
                                alignItems: 'center',
                            }}>
                            <NumberMeter number={'TBD'} skill="kW" width={wp('1.8%')} />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                width: '50%',
                                alignItems: 'center',
                            }}>
                            <NumberMeter number={`${ReplaceDotandFixed(props?.Electric?.hv1?.soc).toString().substring(0,4)}`} skill="%" width={wp('1.8%')} />
                        </View>
                        <View
                            style={{
                                width: '50%',
                                alignItems: 'center',
                            }}>
                            <NumberMeter number={`${ReplaceDotandFixed(props?.Electric?.hv2?.soc).toString().substring(0,4)}`} skill="%" width={wp('1.8%')} />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                width: '50%',
                                alignItems: 'center',
                            }}>
                            <NumberMeter number={`${ReplaceDotandFixed(props?.Electric?.hv1?.tempHct).toString().substring(0,4)}`} skill="°C" width={wp('1.8%')} />
                        </View>
                        <View
                            style={{
                                width: '50%',
                                alignItems: 'center',
                            }}>
                            <NumberMeter number={`${ReplaceDotandFixed(props?.Electric?.hv2?.tempHct).toString().substring(0,4)}`} skill="°C" width={wp('1.8%')} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = ({ Electric }) => ({
    Electric
});
export default connect(mapStateToProps, {

})(CenterLayoutElectric);