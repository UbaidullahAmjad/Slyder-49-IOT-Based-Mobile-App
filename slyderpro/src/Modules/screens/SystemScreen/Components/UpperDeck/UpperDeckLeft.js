import React from 'react';
import {Dimensions, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import RoundedButtonStatus from '../RoundedButtonStatus';
import {connect} from 'react-redux';
import {UpperDeckSwitchesStatusChange} from '../../../../../Store/Actions/UpperDeckAction';
import {
  UPPERDECK_LEFT_AIR_CON,
  UPPERDECK_LEFT_FREEZER,
  UPPERDECK_LEFT_STOVE,
  UPPERDECK_LEFT_HOOD,
  UPPERDECK_LEFT_OVEN,
  UPPERDECK_LEFT_QUOOKER,
} from '../../../../../Store/Actions/type';
import LocalizationContext from '../../../../../../LocalizationContext';
import store from '../../../../../Store';
import {UpperDeckBASEURLLeftSide} from '../../../../../Constant/CommonStyle';

const {aircon, freezer, stove, hood, oven, quooker} =
  store.getState().UpperDeckLeftbtn;

const aircononPress = () =>
  store.dispatch(
    UpperDeckSwitchesStatusChange(
      !store.getState().UpperDeckLeftbtn.aircon,
      `${UpperDeckBASEURLLeftSide};air_con`,
      UPPERDECK_LEFT_AIR_CON,
    ),
  );
const freezeronPress = () =>
  store.dispatch(
    UpperDeckSwitchesStatusChange(
      !store.getState().UpperDeckLeftbtn.freezer,
      `${UpperDeckBASEURLLeftSide};freezer`,
      UPPERDECK_LEFT_FREEZER,
    ),
  );
const stoveonPress = () =>
  store.dispatch(
    UpperDeckSwitchesStatusChange(
      !store.getState().UpperDeckLeftbtn.stove,
      `${UpperDeckBASEURLLeftSide};stove`,
      UPPERDECK_LEFT_STOVE,
    ),
  );
const hoodonPress = () =>
  store.dispatch(
    UpperDeckSwitchesStatusChange(
      !store.getState().UpperDeckLeftbtn.hood,
      `${UpperDeckBASEURLLeftSide};extractor_hood`,
      UPPERDECK_LEFT_HOOD,
    ),
  );
const ovenonPress = () =>
  store.dispatch(
    UpperDeckSwitchesStatusChange(
      !store.getState().UpperDeckLeftbtn.oven,
      `${UpperDeckBASEURLLeftSide};oven`,
      UPPERDECK_LEFT_OVEN,
    ),
  );
const quookeronPress = () =>
  store.dispatch(
    UpperDeckSwitchesStatusChange(
      !store.getState().UpperDeckLeftbtn.quooker,
      `${UpperDeckBASEURLLeftSide};quooker`,
      UPPERDECK_LEFT_QUOOKER,
    ),
  );
function UpperDeckLeft(props) {
  const {t} = React.useContext(LocalizationContext);
  return (
    <View
      style={{
        flexDirection: 'column',
        marginTop: Dimensions.get('screen').height / 4.5,
        width: widthPercentageToDP('13.8%'),
      }}>
      <RoundedButtonStatus
        onClick={aircononPress}
        active={props?.UpperDeckLeftbtn?.aircon}
        title={t('air con')}
        top={0}
      />
      <RoundedButtonStatus
        onClick={freezeronPress}
        active={props?.UpperDeckLeftbtn?.freezer}
        title={t('freezer')}
        top={Dimensions.get('screen').height / 12}
      />
      <RoundedButtonStatus
        onClick={stoveonPress}
        active={props?.UpperDeckLeftbtn?.stove}
        title={t('stove')}
        top={Dimensions.get('screen').height / 6}
      />
      <RoundedButtonStatus
        onClick={hoodonPress}
        active={props?.UpperDeckLeftbtn?.hood}
        title={t('extractor hood')}
        top={Dimensions.get('screen').height / 3}
      />
      <RoundedButtonStatus
        onClick={ovenonPress}
        active={props?.UpperDeckLeftbtn?.oven}
        title={t('oven')}
        top={Dimensions.get('screen').height / 2.35}
      />
      <RoundedButtonStatus
        onClick={quookeronPress}
        active={props?.UpperDeckLeftbtn?.quooker}
        title={t('quooker')}
        top={Dimensions.get('screen').height / 1.95}
      />
    </View>
  );
}

const mapStateToProps = ({UpperDeckLeftbtn}) => ({
  UpperDeckLeftbtn,
});

export default connect(mapStateToProps, {
  UpperDeckSwitchesStatusChange,
})(UpperDeckLeft);
