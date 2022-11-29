import React from 'react';
import { Image, Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import grayTri from '../../../../../images/graytriangle.png';
import yellowTri from '../../../../../images/yellowtriangle.png';
import CustomSwitch from '../../../../Component/CustomeSwitch';
import store from '../../../../Store';
import { CHANGE_WELCOME_POWER_UP, CHANGE_WELCOME_SYSTEM_CHECK } from '../../../../Store/Actions/type';
import { ChangeAirCondition, WelcomeSwitchButton } from '../../../../Store/Actions/WelcomeAction';
import LocalizationContext from './../../../../../LocalizationContext';
import ScrollComponent from './ScrollComponent';

const data = [
    'bilge alarm / check seacocks', "overvoltage in main relay box / check & renew fuse",
    'bilge alarm / check seacocks', "overvoltage in main relay box / check & renew fuse",
]
const MaintanceEvent = [
    "adjust system timezone",
    "check: diesel filter / interval pending in 10 engine hours",
    "check: diesel filter / interval pending in 10 engine hours",
    "check: diesel filter / interval pending in 10 engine hours",
    "check: diesel filter / interval pending in 10 engine hours",
    "check: diesel filter / interval pending in 10 engine hours",
    "check: diesel filter / interval pending in 10 engine hours",
]

const systemcheck = (val) => store.dispatch(WelcomeSwitchButton(val, 'slyderapp;welcome;welcome;system_check', CHANGE_WELCOME_SYSTEM_CHECK))
const powerUp = (val) => store.dispatch(WelcomeSwitchButton(val, 'slyderapp;welcome;welcome;power_up', CHANGE_WELCOME_POWER_UP))
const aircon = (val) => store.dispatch(ChangeAirCondition(val, 'slyderapp;welcome;welcome;air_con'))
function WelcomeSection(props) {
    const { t, locale } = React.useContext(LocalizationContext);
    return (
        <View
            style={{
                width: '70%',
                marginTop: hp('4%'),
                marginBottom: hp('1%'),
            }}>
            <View style={{ width: '100%' }}>
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
                    {locale == 'en' ? 'WELCOME' : t('Welcome')}
                </Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    width: '75%',
                    marginTop: '3%',
                }}>
                <View>
                    <CustomSwitch
                        value={props?.WelcomePart?.systemCheck}
                        onPress={systemcheck}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: 'OpenSans-Bold',
                            marginTop: 4,
                        }}>
                        {locale == 'en' ? 'system check' : t('system check')}
                    </Text>
                </View>
                <View>
                    <CustomSwitch
                        value={props?.WelcomePart?.powerUp}
                        onPress={powerUp}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: 'OpenSans-Bold',
                            marginTop: 4,
                        }}>
                        {locale == 'en' ? 'power up' : t('power up')}
                    </Text>
                </View>
                <View>
                    <CustomSwitch
                        value={props?.WelcomePart?.airCon}
                        onPress={aircon}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: hp('2%'),
                            color: props?.ColorReducer?.primary,
                            fontFamily: 'OpenSans-Bold',
                            marginTop: 4,
                        }}>
                        {locale == 'en' ? 'air con' : t('air con')}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    width: '85%',
                    marginTop: '5%',
                }}>
                <View style={{ flexDirection: 'column' }}>
                    <Line h1={hp('0.4')} h2={hp('0.2')} w={wp('20%')} />
                    <View style={{ flexDirection: 'row', marginVertical: hp('1.5%') }}>
                        <Image style={{ width: hp('4.5%'), height: hp('3%'), alignSelf: 'center', resizeMode: "contain", tintColor: props?.ColorReducer?.iconNormalColor }} source={grayTri} />
                        <Text style={{ color: props?.ColorReducer?.primaryLight, fontSize: hp('2.2%'), fontFamily: 'OpenSans-Bold', marginLeft: 8 }}>
                            {locale == 'en' ? 'ALL ELECTRICAL SYSTEMS OK' : t('ALL ELECTRICAL SYSTEMS OK')}
                        </Text>
                    </View>
                    <Line h1={hp('0.4')} h2={hp('0.2')} w={wp('20%')} />
                </View>
                <View style={{ flexDirection: 'column', marginRight: '6%' }}>
                    <Line h1={hp('0.4')} h2={hp('0.2')} w={wp('12%')} />
                    <View style={{ flexDirection: 'row', marginVertical: hp('1.5%'), }}>
                        <Image style={{ width: hp('4.5%'), height: hp('3%'), alignSelf: 'center', resizeMode: "stretch", tintColor: props?.ColorReducer?.isDarkThemeOn ? props?.ColorReducer?.primary : '#F2DF00' }} source={yellowTri} />
                        <Text style={{
                            color: props?.ColorReducer?.primary,
                            fontFamily: 'OpenSans-Regular', fontSize: hp('2.2%'), paddingLeft: wp('0.3%')
                        }}>
                            {locale == 'en' ? 'seacock open?' : t('seacock open?')}
                        </Text>
                    </View>
                    <Line h1={hp('0.4')} h2={hp('0.21')} w={wp('12%')} />
                </View>
            </View>
            <View style={{ zIndex: 1 }}>
                <ScrollComponent
                    headerTitle={locale == 'en' ? 'SYSTEM MALFUNCTION (S)' : t('SYSTEM MALFUNCTION (S)')}
                    tintColor='#FF1300'
                    height={hp('15%')}
                    mtop={hp('2.5%')}
                    data={data}
                    bottomLine
                />
            </View>
            <View style={{ zIndex: 1 }}>
                <ScrollComponent
                    headerTitle={locale == 'en' ? 'MAINTANANCE EVENTS' : t('MAINTANANCE EVENTS')}
                    tintColor='#F2DF00'
                    height={hp('15%')}
                    mtop={hp('5%')}
                    data={MaintanceEvent}
                />
            </View>
        </View>
    )
}

const mapStateToProps = ({ WelcomePart, ColorReducer }) => ({
    WelcomePart,
    ColorReducer
});

export default connect(mapStateToProps, {
    ChangeAirCondition
})(WelcomeSection);

function Line({ h1, h2, w }) {
    return (
        <Neomorph
            inner // <- enable inner shadow
            darkShadowColor="gray" // <- set this
            lightShadowColor="gray"
            style={{
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 1,
                shadowColor: 'gray',
                shadowRadius: 0,
                borderRadius: 150,
                backgroundColor: 'gray',
                width: w,
                height: h1,
            }}>
            <View
                style={{
                    width: '100%',
                    height: h2,
                    backgroundColor: '#000',
                }}
            />
        </Neomorph>

    )
}

