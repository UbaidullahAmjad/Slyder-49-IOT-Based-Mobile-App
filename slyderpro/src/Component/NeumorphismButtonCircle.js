import PropTypes from 'prop-types';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const NeumorphismButton = props => {
  const { size = heightPercentageToDP('1%') } = props;
  const [isDown, setDown] = useState(false);
  const handlePressIn = useCallback(() => {
    setDown(true);
  }, [setDown]);
  const handlePressOut = useCallback(() => {
    setDown(false);
  }, [setDown]);

  const gradColorsCircle = isDown
    ? ['#000000', '#616161']
    : props.green
      ? [props.activeColor , props.activeColor]
      : ['#616161', '#292929'];

  const buttonCommonStyle = {
    borderRadius: size,
    shadowRadius: size * 1.5,
  };
  const buttonOuterStyle = {
    shadowOffset: { width: size, height: size },
  };
  const buttonInnerStyle = {
    shadowOffset: { width: -size, height: -size },
  };
  const buttonFaceStyle = {
    borderRadius: size,
    paddingHorizontal: size,
    paddingVertical: size,
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <View
        style={[
          styles.buttonOuter,
          buttonCommonStyle,
          buttonOuterStyle,
          {
            backgroundColor: '#292929',
            borderRadius: 50,
            padding: 3,
          },
        ]}>
        <View style={[styles.buttonInner, buttonCommonStyle, buttonInnerStyle]}>
          <LinearGradient
            colors={gradColorsCircle}
            useAngle={true}
            angle={145}
            angleCenter={{ x: 0.7, y: 0.5 }}
            style={[styles.buttonFace, buttonFaceStyle, props.style]}>
            {props.children}
          </LinearGradient>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

NeumorphismButton.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  size: PropTypes.number,
};

const styles = StyleSheet.create({
  buttonOuter: {
    shadowOffset: { width: 12, height: 12 },
    shadowColor: '#ffffff',
    shadowOpacity: 1.0,
    shadowRadius: 18,
  },
  buttonInner: {
    borderRadius: 30,
    shadowOffset: { width: -12, height: -12 },
    shadowColor: '#ffffff',
    shadowOpacity: 1.0,
    shadowRadius: 18,
  },
  buttonFace: {
    borderRadius: 30,
  },
});

export default NeumorphismButton;
