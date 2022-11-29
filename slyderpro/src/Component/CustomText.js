import React from 'react';
import { Dimensions, Text } from 'react-native';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
function CustomText(props) {
  return (
    <Text
      style={{
        fontSize: hp('1.8'),
        color: props?.ColorReducer?.primary,
        fontFamily: "OpenSans-Bold",
        marginLeft: props.right
          ? Dimensions.get('screen').width / 120
          : null,
        width: props.right ? null : Dimensions.get('screen').width / 10,
        textAlign: 'right',
      }}>
      {props.title}
    </Text>
  );
}
const mapStateToProps = ({ ColorReducer }) => ({
  ColorReducer
});
export default connect(mapStateToProps, {
})(CustomText);
