import React from "react";
import { connect } from 'react-redux';
import NumberMeter from "../../../../Component/NumberMeter";
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
  } from 'react-native-responsive-screen';

function WendSpeed(props) {
    return (
        <NumberMeter number={props?.Weather?.TimeHour.toString()} skill="h" width={wp('1.8%') -  props?.Weather?.TimeHour.toString().length * 20} /> 
    )
}
const mapStateToProps = (state, ownProps) => ({
    Weather: state.Weather,
    data: ownProps.data
});

export default connect(mapStateToProps, {

})(WendSpeed);