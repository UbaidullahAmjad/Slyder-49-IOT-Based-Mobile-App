import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import LocalizationContext from '../../../../../LocalizationContext';
import CustomeSwitch from '../../../../Component/CustomeSwitch';
import { ReplaceDotandFixed } from '../../../../Confiq/Helper';
import store from '../../../../Store';
import { CHANGE_UNDERENGINE_RIGHT_CAPSTAN_WINCHES, CHANGE_UNDERENGINE_WINCHES, CHANGE_UNDERENGINE_WINDLASS } from '../../../../Store/Actions/type';
import { UnderEngineSwitchesStatusChange } from '../../../../Store/Actions/UnderEngineActions';
import UnderengineRightLeft from './UnderengineRightLeft';

function UnderEngineRight(props) {
    const { t } = React.useContext(LocalizationContext);
    return (
        <View style={{ flex: 1, paddingTop: hp('5%'), paddingLeft: wp('1.5%'), flexDirection: "row", marginBottom: hp('3%') }}>
            <View style={{ width: "55%", paddingTop: hp('8%'), }}>
                <UnderengineRightLeft />
            </View>

            <View style={{ width: "45%", }}>
                <View style={{ flex: 1, alignItems: "center", paddingTop: hp('20%') }}>
                    <View>
                        <CustomeSwitch
                            value={props?.RightSideUnderEngine?.winches}
                            onPress={winches}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: 6,
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                            }}>
                            {t('winches')}
                        </Text>
                    </View>
                    <View style={{ marginTop: hp('4.5%') }}>
                        <CustomeSwitch
                            value={props?.RightSideUnderEngine?.windlass}
                            onPress={windlass}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: 6,
                                fontSize: hp('2%'),
                                color: props?.ColorReducer?.primary,
                                fontFamily: "OpenSans-Bold",
                            }}>
                            {t('windlass')}
                        </Text>
                    </View>

                </View>
                <View style={{ alignItems: "center", zIndex: 1 }}>
                    <CustomeSwitch
                        value={props?.RightSideUnderEngine?.capstan_winches}
                        onPress={capstan}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 6,
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: "OpenSans-Bold",
                        }}>
                        {t('capstan winches')}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = ({ RightSideUnderEngine, ColorReducer }) => ({
    RightSideUnderEngine,
    ColorReducer
});

export default connect(mapStateToProps, {
    UnderEngineSwitchesStatusChange
})(UnderEngineRight);


const winches = (val) => store.dispatch(UnderEngineSwitchesStatusChange(val, 'slyderapp;UnderEngine;winches;winches', CHANGE_UNDERENGINE_WINCHES))
const windlass = (val) => store.dispatch(UnderEngineSwitchesStatusChange(val, 'slyderapp;UnderEngine;windlass;windlass', CHANGE_UNDERENGINE_WINDLASS))
const capstan = (val) => store.dispatch(UnderEngineSwitchesStatusChange(val, 'slyderapp;UnderEngine;capstan_winches;capstan_winches', CHANGE_UNDERENGINE_RIGHT_CAPSTAN_WINCHES))