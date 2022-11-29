import * as shape from 'd3-shape'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { Neomorph } from 'react-native-neomorph-shadows'
import { heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen'
import { LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { Gradient, Lines, Shadow, VerticalGrid } from './chartAdds'
import { connect } from 'react-redux';
 function LineGraph({
    title,
    ylabel,
    xLabel,
    svg,
    data,
    yaxis,
    xaxis,
    firststopcolor,
    secondstopcolor,
    thirdstopcolor,
    forthstopcolor,
    shadow,
    numberOfTicks,
    graphContentType,
    customlabel,
    marginLeft,
    ColorReducer
}) {
    const contentInset = { top: 20, bottom: 20 }
    console.log(yaxis)
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <Text
                numberOfLines={1}
                style={{
                    transform: [{ rotate: '-90deg' }],
                    fontSize: hp('1.8%'),
                    fontFamily: "OpenSans-Bold",
                    fontWeight: 'bold',
                    color:ColorReducer?.primary
                }}>
                {title}
            </Text>
            <View style={{ width: "100%", }}>
                <Neomorph
                    inner
                    darkShadowColor="#141414"
                    lightShadowColor="#2e2e2e"
                    style={{
                        // marginLeft: -widthPercentageToDP('3%'),
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 1,
                        shadowColor: 'white',
                        shadowRadius: 3,
                        borderRadius: 10,
                        backgroundColor: '#252525',
                        width: Dimensions.get('window').width / 1.9,
                        height: Dimensions.get('window').width / 9,
                        marginLeft: marginLeft,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>

                    <View style={{
                        height: Dimensions.get('window').width / 9.5,
                        flexDirection: 'row',
                        backgroundColor: ColorReducer?.graphBg,
                        width: "99%",
                        borderRadius: 10,
                        paddingHorizontal: '1.5%'
                    }}>
                        <View style={{ flexDirection: "row", position: "absolute", top: -hp('0.3%'), left: widthPercentageToDP('1.3%') }}>
                            <Text style={{ position: "absolute", fontSize: hp('2.5%'), color: ColorReducer?.iconNormalColor, fontStyle: "italic" }}>{ylabel[0]}</Text>
                            <Text style={{ position: "absolute", fontSize: hp('1.8%'), color: ColorReducer?.iconNormalColor, fontStyle: "italic", marginLeft: widthPercentageToDP('0.4%') }}>{ylabel[1]}</Text>
                        </View>

                        <Text style={{ position: "absolute", fontSize: hp('1.5%'), bottom: 0, right: widthPercentageToDP('0.2%'), color: ColorReducer?.iconNormalColor, fontStyle: "italic" }}>{xLabel}</Text>

                        {customlabel ? (
                            <View style={{ flexDirection: "column", width: widthPercentageToDP('2%'), height: "100%", justifyContent: "center", marginLeft: -widthPercentageToDP('0.6%') }}>
                                {['1047-\n1050', '1030-\n1046,9', '1009-\n1029', '1004-\n1008,9', '960-\n100,9'].map((item, index) => {
                                    return (
                                        <Text key={index} style={{ fontSize: hp('1.2%'), color: ColorReducer?.iconNormalColor, marginTop: hp('0.2%') }}>{item}</Text>
                                    )
                                })}
                            </View>
                        ) :
                            <YAxis
                                data={yaxis}
                                contentInset={contentInset}
                                svg={{
                                    fill: ColorReducer?.iconNormalColor,
                                    fontSize: hp('1.5%'),
                                    // fontSize: 10,


                                }}
                                numberOfTicks={numberOfTicks}
                                formatLabel={(value) => value}
                            />
                        }

                        <View style={{ flex: 1, paddingLeft: '1.5%' }}>
                            <View style={{ flex: 1, zIndex: 1 }}>
                                <LineChart
                                    style={{ flex: 1, }}
                                    gridMin={-20}
                                    gridMax={120}
                                    curve={shape.curveNatural}
                                    data={data}
                                    svg={svg}
                                    contentInset={graphContentType}


                                >
                                    {shadow && <Shadow />}
                                    <Gradient
                                        firststopcolor={firststopcolor}
                                        secondstopcolor={secondstopcolor}
                                        thirdstopcolor={thirdstopcolor}
                                        forthstopcolor={forthstopcolor}
                                    />
                                </LineChart>

                                <XAxis
                                    // style={{ marginHorizontal: -10 }}
                                    data={xaxis}
                                    formatLabel={(value, index) => value + 1}
                                    contentInset={{ left: 18, right: 10 }}
                                    svg={{ fontSize: hp('1.5%'), fill: ColorReducer?.iconNormalColor }}
                                />
                                <Lines xaxis={xaxis} contentInset={contentInset} borderColor={ColorReducer?.iconNormalColor} />
                            </View>



                        </View>

                    </View>

                </Neomorph>
            </View>

        </View>
    )
}
const mapStateToProps = ({  ColorReducer }) => ({
    ColorReducer
});

export default connect(mapStateToProps, {
   
})(LineGraph);




