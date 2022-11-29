import React, { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import CustomAlert from '../../../../Component/CustomAlert';
import GeneratorButton from '../../../../Component/Generator/GeneratorButton';
import LocalTime from '../../../../Component/LocalTime';
import { ReplaceDotandFixed } from '../../../../Confiq/Helper';
import LocalizationContext from '../../../../../LocalizationContext';
import { StartGenerator, StopGenerator, UnderEngineSwitchesStatusChange } from '../../../../Store/Actions/UnderEngineActions';
import { Log1resetStyle } from '../../../../Constant/CommonStyle';
function UnderEngineLeftLeftSide(props) {
    const { t } = React.useContext(LocalizationContext);
    const [modalshow, setModalshow] = useState(false)
    const [modalsendValue, setModalsendValue] = useState('')
    const log1Reset = React.useMemo(() => {
        return () => { setModalsendValue("slyderapp;UnderEngine;log1;reset;True"), setModalshow(true) }
    }, [])
    const log2Reset = React.useMemo(() => {
        return () => { setModalsendValue("slyderapp;UnderEngine;log2;reset;True"), setModalshow(true) }
    }, [])
    const customalertftn = React.useMemo(() => {
        return () => setModalshow(false)
    }, [])
    return (
        <View style={{ flex:1, paddingTop: hp('8%') }}>
            <View style={{ flex: 1, flexDirection: "row-reverse", }}>
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
                    {/* reset button */}
                    <View
                        style={{
                            position: 'absolute',
                            left: '-20%',
                            top: "19%"
                        }}>
                        <GeneratorButton
                            title={'reset'}
                            stylee={Log1resetStyle}
                            onPressIn={log1Reset}
                            borderColor={'#000000'}
                        />
                    </View>
                    <View
                        style={{
                            top: Dimensions.get('window').width / 10.5,
                            position: 'absolute',
                            left: '-20%',
                        }}>
                        <GeneratorButton
                            title={'reset'}
                            stylee={Log1resetStyle}
                            onPressIn={log2Reset}
                            borderColor={'#000000'}
                        />
                    </View>
                    <View>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",

                            }}>
                                {t('LOG 1')}
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
                        style={{
                            fontSize: hp('8%'),
                            marginTop: -20,
                            fontFamily: "DINAlternate-Bold",
                            alignSelf: 'center',
                            color: props?.ColorReducer?.primary,
                        }}>
                        {props?.UnderEngineleftLeftSide?.log1}
                    </Text>
                    <View
                        style={{
                            height: 1.64,
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
                                {t('LOG 2')}
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
                        <Text
                            style={{
                                alignSelf: 'center',
                                color: props?.ColorReducer?.primary,
                                marginTop: -20,
                                fontSize: hp('8%'),
                                fontFamily: "DINAlternate-Bold",
                            }}>
                            {props?.UnderEngineleftLeftSide?.log2}
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
                                {t('time')}
                            </Text>
                            <Text
                                style={{
                                    fontSize: hp('2%'),
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "OpenSans-Bold",
                                    top: 10,
                                    alignSelf: 'flex-end',

                                }}>
                                local
                            </Text>
                        </View>
                        <LocalTime />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row-reverse" }}>
                <View
                    style={{
                        width: "90%",
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
                                paddingLeft: "2%"
                            }}>
                                {t('WATER TEMP')}
                            </Text>
                            <Text
                                style={{
                                    alignSelf: 'flex-end',
                                    fontSize: hp('2%'),
                                    color: props?.ColorReducer?.primary,
                                    fontFamily: "OpenSans-Bold",
                                    paddingRight: '8%'
                                }}>
                                °C
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
                                {ReplaceDotandFixed(props?.UnderEngineleftLeftSide?.Watertemp)}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <CustomAlert show={modalshow} value={modalsendValue} onPress={customalertftn} />
        </View>
    )
}
const mapStateToProps = ({ UnderEngineleftLeftSide, ColorReducer }) => ({
    UnderEngineleftLeftSide,
    ColorReducer
});

export default connect(mapStateToProps, {
    UnderEngineSwitchesStatusChange,
    StartGenerator,
    StopGenerator
})(UnderEngineLeftLeftSide);