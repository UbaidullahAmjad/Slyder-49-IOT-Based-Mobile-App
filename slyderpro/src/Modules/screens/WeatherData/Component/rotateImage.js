import React from 'react';
import { Dimensions, Image, StyleSheet, View, Animated } from 'react-native';
import { connect } from 'react-redux';
import FastImages from './FastImage';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';

function RotateImage(props) {
    return (
        <View style={{
            height: Dimensions.get('window').height / 2.5,
            alignSelf: "center",
        }}>

            <FastImages
                tintColor={props?.Color?.isDarkThemeOn ? 'rgba(255,0,0,0.20)' : null}
                imageHeight={Dimensions.get('window').height / 2.5}
                imageWidth={Dimensions.get('window').height / 2.5}
                imageSource={require('../../../../../images/compoenentimages/white.png')}
            />

            <FastImages
                tintColor={props?.Color?.isDarkThemeOn ? 'rgba(255,0,0,0.40)' : null}
                imagePosition={"absolute"}
                imageHeight={Dimensions.get('window').height / 2.5}
                imageWidth={Dimensions.get('window').height / 2.5}
                imageSource={require('../../../../../images/compoenentimages/greycircle.png')}
            />

            <FastImages
                tintColor={props?.Color?.isDarkThemeOn ? 'rgba(255,0,0,0.70)' : null}
                imagePosition={"absolute"}
                imageHeight={Dimensions.get('window').height / 2.6}
                imageWidth={Dimensions.get('window').height / 2.6}
                imageSource={require('../../../../../images/onlyNumber.png')}
                imageLeft={hp('0.8')}
                imageTop={hp('0.7')}
            />
            <FastImages
                imageTransform={props?.Weather?.WindAngle}
                imagePosition={"absolute"}
                imageHeight={Dimensions.get('window').height / 2.5}
                imageWidth={Dimensions.get('window').height / 2.5}
                imageSource={props?.Color?.isDarkThemeOn ? require('../../../../../images/compoenentimages/blueRed1.png') : require('../../../../../images/compoenentimages/blue.png')}
            />
            {props?.children}
        </View>
    )
}

const mapStateToProps = (state, ownProps) => ({
    Weather: state.Weather,
    Color: state.ColorReducer
});

export default connect(mapStateToProps, {})(RotateImage);

const styles = StyleSheet.create({})