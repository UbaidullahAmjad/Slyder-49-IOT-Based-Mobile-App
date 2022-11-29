import React from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import { heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';

function NavBarbtn(props) {

  return (
    <Neomorph
      inner={true} // <- enable inner shadow
      darkShadowColor="#232323" // <- set this
      lightShadowColor="#2e2e2e"
      style={{
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowColor: 'white',
        shadowRadius: 1,
        borderRadius: 36,
        backgroundColor: '#141414',
        width: Dimensions.get('screen').width / 14,
        height: Dimensions.get('screen').height / 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LinearGradient
        colors={['#484848', '#212121']}
        useAngle={true}
        angle={145}
        angleCenter={{ x: 1, y: 0 }}
        style={{
          width: '88%',
          height: '86%',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: props?.ColorReducer?.isDarkThemeOn ? 'red' : props.borderCol,
          borderRadius: 32,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width:'100%'
          }} onPress={props?.onPress}>
          <Text
            style={{
              color: props?.ColorReducer?.isDarkThemeOn ? 'red' : '#AAAAAA',
              fontSize: hp('2%'),
              fontWeight: 'bold',
            }}>
            {props?.text == "NIGHT" ? props?.ColorReducer?.isDarkThemeOn ? "DAY" : "NIGHT" : props.text}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </Neomorph>
  );
}

const mapStateToProps = ({ ColorReducer }) => ({
  ColorReducer
});

export default connect(mapStateToProps, {

})(NavBarbtn);