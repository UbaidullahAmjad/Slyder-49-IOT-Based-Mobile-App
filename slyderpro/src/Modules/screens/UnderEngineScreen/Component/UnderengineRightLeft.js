import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { ReplaceDotandFixed } from '../../../../Confiq/Helper';
import LocalizationContext from '../../../../../LocalizationContext';

function UnderengineRightLeft(props) {
    const { t } = React.useContext(LocalizationContext);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: Dimensions.get('screen').width / 7,
                        height: Dimensions.get('screen').height / 2.85,
                        padding: 16,
                        flexDirection: 'column',
                        borderWidth: 0.7,
                        borderColor: props?.ColorReducer?.iconNormalColor,
                        borderRadius: 20,
                    }}>
                    <View>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                            }}>
                                DTW
                            </Text>
                            <Text
                                style={{
                                    alignSelf: 'flex-end',
                                    fontSize: hp('2%'),
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "OpenSans-Bold",

                                }}>
                                nm
                            </Text>
                        </View>
                    </View>
                    <Text
                        numberOfLines={1}
                        style={{
                            fontSize: hp('8%'),
                            marginTop: -20,
                            fontFamily: "DINAlternate-Bold",
                            alignSelf: 'center',
                            color: props?.ColorReducer?.primary,
                        }}>
                        {ReplaceDotandFixed(props?.UnderengineRightLeftReducer?.dwt)}
                    </Text>
                    <View
                        style={{
                            height: 2,
                            alignSelf: 'center',
                            width: '90%',
                            backgroundColor: props?.ColorReducer?.iconNormalColor,
                            flexDirection: 'row',
                        }}></View>
                    <View style={{ top: 6 }}>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                            }}>
                                TTW
                            </Text>
                            <Text
                                style={{
                                    alignSelf: 'flex-end',
                                    fontSize: hp('2%'),
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "OpenSans-Bold",

                                }}>
                                hrs
                            </Text>
                        </View>
                        <Text
                            style={{
                                alignSelf: 'center',
                                color: props?.ColorReducer?.primary,
                                marginTop: -20,
                                fontSize: hp('8%'),
                                fontFamily: "DINAlternate-Bold",
                            }}>
                            {props?.UnderengineRightLeftReducer?.ttw}
                        </Text>
                    </View>
                    <View
                        style={{
                            height: 2,
                            top: 5,
                            alignSelf: 'center',
                            width: '90%',
                            backgroundColor: props?.ColorReducer?.iconNormalColor,
                            flexDirection: 'row',
                        }}></View>
                    <View style={{ top: 0 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',

                            }}>
                            <Text
                                style={{
                                    fontSize: hp('2%'),
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "OpenSans-Bold",
                                    top: 10,

                                }}>
                                ETA
                            </Text>
                            <Text
                                style={{
                                    fontSize: hp('2%'),
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "OpenSans-Bold",
                                    top: 10,
                                    alignSelf: 'flex-end',

                                }}>
                                24h
                            </Text>
                        </View>
                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize: hp('6%'),
                                alignSelf: 'center',
                                // marginTop: -8,
                                color: props?.ColorReducer?.primary,
                                fontFamily: "DINAlternate-Bold",
                            }}>
                            {props?.UnderengineRightLeftReducer?.eta}
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <View
                    style={{
                        width: "80%",
                        justifyContent: 'center',
                        borderWidth: 1.5,
                        borderColor: props?.ColorReducer?.iconNormalColor,
                        borderRadius: 20,
                        padding: 10,
                    }}>
                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <Text style={{
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                                paddingLeft: "8%"
                            }}>
                                {t('DEPTH')}
                            </Text>
                            <Text
                                style={{
                                    alignSelf: 'flex-end',
                                    fontSize: hp('2%'),
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "OpenSans-Bold",
                                    paddingRight: '8%'
                                }}>
                                m
                            </Text>
                        </View>
                        <View>
                            <Text
                                numberOfLines={1}
                                style={{
                                    textAlign: 'center',
                                    marginLeft: 20,
                                    marginTop: -15,
                                    fontSize: hp('8%'),
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "DINAlternate-Bold",
                                }}>
                                {ReplaceDotandFixed(props?.UnderengineRightLeftReducer?.WaterDept)}
                            </Text>
                        </View>
                    </View>
                </View>
                <View />
            </View>
        </View>
    )
}

const mapStateToProps = ({ UnderengineRightLeftReducer, ColorReducer }) => ({
    UnderengineRightLeftReducer,
    ColorReducer
});

export default connect(mapStateToProps, {

})(UnderengineRightLeft);