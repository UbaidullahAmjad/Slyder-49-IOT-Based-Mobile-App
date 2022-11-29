import React from 'react';
import { Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import CustomSwitch from '../../../../Component/CustomeSwitch';
import store from '../../../../Store';
import { CHANGE_GOODBYE_ATANCHOR, CHANGE_GOODBYE_INHARBOUR, CHANGE_GOODBYE_LONGTERM } from '../../../../Store/Actions/type';
import { WelcomeSwitchButton } from '../../../../Store/Actions/WelcomeAction';
import LocalizationContext from './../../../../../LocalizationContext';

const inharbour = (val) => store.dispatch(WelcomeSwitchButton(val, 'slyderapp;welcome;goodbye;in_harbour', CHANGE_GOODBYE_INHARBOUR))
const longterm = (val) => store.dispatch(WelcomeSwitchButton(val, 'slyderapp;welcome;goodbye;long_term', CHANGE_GOODBYE_LONGTERM))
const atanchor = (val) => store.dispatch(WelcomeSwitchButton(val, 'slyderapp;welcome;goodbye;at_anchor', CHANGE_GOODBYE_ATANCHOR))
function GoodByeSection(props) {
    const { t, locale } = React.useContext(LocalizationContext);
    return (
        <View
            style={{
                width: '30%',
                marginTop: hp('4%'),
                marginBottom: hp('4%'),
                alignItems: 'center',
                borderLeftWidth: 1,
                borderColor: '#6C6C6C',
            }}>
            <Text
                style={{
                    fontSize: hp('3.5%'),
                    textAlign: 'center',
                    color: props?.ColorReducer?.secondaryLight,
                    fontFamily: "OpenSans-ExtraBold",
                    textShadowColor: props?.ColorReducer?.isDarkThemeOn ? "#B3001C" : 'rgba(255,255,255,.28)',
                    textShadowOffset: { width: -0.1, height: props?.ColorReducer?.isDarkThemeOn ? 0 : 1.1 },
                    textShadowRadius: 1,

                }}>
                {locale == 'en' ? 'GOODBYE' : t('GOODBYE')}
            </Text>
            <View style={{ marginTop: '6%' }}>
                <CustomSwitch
                    value={props?.GoodByeReducer?.InHarbour}
                    onPress={inharbour} />
                <Text
                    style={{
                        textAlign: 'center',
                        top: 5,
                        fontSize: hp('2%'),
                        color: props?.ColorReducer?.primary,
                        fontFamily: 'OpenSans-Bold',
                    }}>
                    {locale == 'en' ? 'in harbour' : t('in harbour')}
                </Text>
            </View>
            <View style={{ marginTop: '8%' }}>
                <CustomSwitch
                    value={props?.GoodByeReducer?.AtAnchor}
                    onPress={atanchor} />
                <Text
                    style={{
                        textAlign: 'center',
                        top: 5,
                        fontSize: hp('2%'),
                        color: props?.ColorReducer?.primary,
                        fontFamily: 'OpenSans-Bold',
                    }}>
                    {locale == 'en' ? 'at anchor' : t('at anchor')}
                </Text>
            </View>
            <View style={{ marginTop: '10%' }}>
                <CustomSwitch
                    value={props?.GoodByeReducer?.LongTerm}
                    onPress={longterm}
                />
                <Text
                    style={{
                        textAlign: 'center',
                        top: 5,
                        fontSize: hp('2%'),
                        color: props?.ColorReducer?.primary,
                        fontFamily: 'OpenSans-Bold',
                    }}>
                    {locale == 'en' ? 'long term' : t('long term')}
                </Text>
            </View>
        </View>
    )
}
const mapStateToProps = ({ GoodByeReducer, ColorReducer }) => ({
    GoodByeReducer,
    ColorReducer
});

export default connect(mapStateToProps, {
})(GoodByeSection);