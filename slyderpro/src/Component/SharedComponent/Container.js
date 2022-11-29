import React from 'react';
import { StatusBar, View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import SwipeNavbar from '../Welcome/SwipeNavbar';

function Container(props) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                width: props?.weatherslider ? Dimensions.get('screen').width - widthPercentageToDP('35%') : Dimensions.get('screen').width - widthPercentageToDP('25%'),
                height: heightPercentageToDP('7%'),
                zIndex: 1,
                alignSelf: props?.weatherslider ? "flex-start" : "center",
            }}>
                <SwipeNavbar />
            </View>
            <LinearGradient
                style={[props?.containerStyle, { position: "absolute", width: Dimensions.get('screen').width, height: Dimensions.get('screen').height - heightPercentageToDP('6%') }]}
                colors={props?.ColorReducer?.bgColor}>
                <StatusBar hidden />
                {props?.children}
            </LinearGradient>
        </View>
    )
}
const mapStateToProps = ({ ColorReducer }) => ({
    ColorReducer
});
export default connect(mapStateToProps, {
})(Container);