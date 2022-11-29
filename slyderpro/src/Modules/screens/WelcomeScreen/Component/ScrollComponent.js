import React, {useState, memo} from 'react';
import {Animated, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import grayTri from '../../../../../images/graytriangle.png';

function ScrollComponent({
  top,
  height,
  data,
  tintColor,
  mtop,
  headerTitle,
  bottomLine,
  ColorReducer,
}) {
  const [indicator, setindicator] = useState(new Animated.Value(0));
  const [wholeHeight, setwholeHeight] = useState(1);
  const [visibleHeight, setvisibleHeight] = useState(0);
  const indicatorSize =
    wholeHeight > visibleHeight
      ? (visibleHeight * visibleHeight) / wholeHeight
      : visibleHeight;
  const difference =
    visibleHeight > indicatorSize ? visibleHeight - indicatorSize : 1;

  console.log('********************************88scrollview');
  return (
    <View
      style={{
        marginTop: mtop,
        width: '85%',
        alignSelf: 'center',
        height: height,
      }}>
      <Neomorph
        inner // <- enable inner shadow
        darkShadowColor="#141414" // <- set this
        lightShadowColor="#474747"
        style={{
          shadowOffset: {width: 4, height: 0},
          shadowOpacity: 10,
          shadowColor: '#fff',
          shadowRadius: 3,
          backgroundColor: '#141414',
          borderColor: '#A4A4A4',
          borderWidth: 0,
          width: (1.5 / 100) * wp('60%'),
          height: height,
          borderRadius: 20,
          overflow: 'visible',
          position: 'absolute',
          right: 0,
          paddingBottom: 34,
          // ...include most of View/Layout styles
        }}></Neomorph>
      <FlatList
        nestedScrollEnabled={true}
        data={data}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={(width, height) => {
          setwholeHeight(height);
        }}
        onLayout={({
          nativeEvent: {
            layout: {x, y, width, height},
          },
        }) => setvisibleHeight(height)}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: indicator}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                left: 45,
                marginTop: '1.5%',
              }}>
              <Image
                style={{
                  width: hp('2.5%'),
                  height: hp('2.5%'),
                  tintColor: ColorReducer?.isDarkThemeOn
                    ? ColorReducer?.primary
                    : tintColor,
                }}
                source={grayTri}
              />
              <Text
                style={{
                  fontSize: hp('2.2%'),
                  left: 10,
                  color: ColorReducer?.primary + 'b3',
                  fontFamily: 'OpenSans-Regular',
                }}>
                {item}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={() => {
          return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  width: hp('2.5%'),
                  height: hp('2.5%'),
                  tintColor: ColorReducer?.isDarkThemeOn
                    ? ColorReducer?.primary
                    : tintColor,
                }}
                source={grayTri}
              />
              <Text
                style={{
                  fontSize: hp('2.2%'),
                  left: 10,
                  color: ColorReducer?.primary + 'b3',
                  fontFamily: 'OpenSans-Bold',
                }}>
                {headerTitle}
              </Text>
            </View>
          );
        }}
      />
      <View style={styles.indicatorWrapper} />
      <Animated.View
        style={[
          styles.indicator,
          {
            height: indicatorSize,
            backgroundColor: ColorReducer?.scrollviewColor,
            transform: [
              {
                translateY: Animated.multiply(
                  indicator,
                  visibleHeight / wholeHeight,
                ).interpolate({
                  inputRange: [0, difference],
                  outputRange: [0, difference],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      />
      {bottomLine ? (
        <View style={{width: '98%', position: 'absolute', bottom: -20}}>
          <Line h1={hp('0.5')} h2={hp('0.3')} w={wp('58.8%')} />
        </View>
      ) : null}
    </View>
  );
}
function Line({h1, h2, w}) {
  return (
    <Neomorph
      inner // <- enable inner shadow
      darkShadowColor="gray" // <- set this
      lightShadowColor="gray"
      style={{
        shadowOffset: {width: 0, height: 10},
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
          // borderRadius: 150,
        }}
      />
    </Neomorph>
  );
}

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: (1.4 / 100) * wp('60%'),
    top: 1,
    right: 0,
    borderRadius: 50,
  },
});

const mapStateToProps = ({ColorReducer}) => ({
  ColorReducer,
});

export default connect(mapStateToProps, {})(ScrollComponent);
