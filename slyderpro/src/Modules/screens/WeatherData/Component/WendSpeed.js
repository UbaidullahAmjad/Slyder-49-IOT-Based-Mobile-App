import React from "react";
import { Text } from 'react-native';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { ReplaceDotandFixed } from "../../../../Confiq/Helper";
function WendSpeed(props) {
    return (
        <Text
            style={{
                textAlign: 'center',
                marginLeft: props?.wind ? 0 : 20,
                marginTop: props?.wind ? -hp('1.5%') : -hp('2.2%'),
                fontSize: props?.size ? hp('6%') : hp('7%'),
                color: props?.ColorReducer?.weatherText,
                fontFamily: "DINAlternate-Bold",
            }}>
            {/* {store.getState().Weather.Weather} */}
            {props?.data == 'WeatherSpeed' ? ReplaceDotandFixed(props?.Weather?.WeatherSpeed) :
                props?.data == "AirTemp" ? ReplaceDotandFixed(props?.Weather?.AirTemp) :
                    props?.data == "Humidity" ? props?.Weather?.Humidity :
                        props?.data == "AirPressure" ? props?.Weather?.AirPressure : '0'
            }
        </Text>

    )
}

const mapStateToProps = (state, ownProps) => ({
    Weather: state.Weather,
    ColorReducer: state.ColorReducer,
    data: ownProps.data
});

export default connect(mapStateToProps, {

})(WendSpeed);