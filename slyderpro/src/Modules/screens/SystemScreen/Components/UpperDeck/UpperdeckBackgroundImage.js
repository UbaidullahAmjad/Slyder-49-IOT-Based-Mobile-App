import React from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import DayImage from '../../../../../../images/shipBackground.png';
import NightImage from '../../../../../../images/shipBackgroundred.png';
function UpperdeckBackgroundImage(props) {
    return (
        <ImageBackground
            source={props?.ColorReducer?.isDarkThemeOn ? NightImage : DayImage}
            resizeMode="stretch"
            style={{
                height: Dimensions.get('screen').height / 1.1,
                width: Dimensions.get('screen').width / 3,
            }}>
                {props?.children}
        </ImageBackground>
    )
}

const mapStateToProps = ({ ColorReducer }) => ({
    ColorReducer
});

export default connect(mapStateToProps, {

})(UpperdeckBackgroundImage);