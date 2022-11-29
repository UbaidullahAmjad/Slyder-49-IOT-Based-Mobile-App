import React, { useEffect, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { Neomorph } from 'react-native-neomorph-shadows'
import { heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen'
import { BarChart, XAxis, YAxis } from 'react-native-svg-charts'
import { connect } from 'react-redux'
import { Lines } from './chartAdds'
function BarGraphs({
    title,
    xaxis,
    marginLeft,
    graphContentType,
    ylabel,
    xLabel,
    yaxis,
    numberOfTicks,
    ColorReducer
}) {
    const [chartdata, setchartdata] = useState([])
    useEffect(() => {
        let colors = ['#7D4D2C', '#7D7D1D', '#3F7D1B', '#2D2C80', '#2D2C80', '#2C6780', '#4C2680', '#607D1C']
        let data = []
        for (let i = 0; i < 70; i++) {
            data.push({
                value: Math.floor(Math.random() * (80 - 0 + 1)) + 0,
                svg: {
                    fill: colors[parseInt(Math.floor(Math.random() * (8 - 0 + 1)) + 0,)],
                    stroke: 'black',
                    strokeWidth: 0.5,
                },
            })
        }
        setchartdata(data)

    }, [])
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
                    color: ColorReducer?.primary,
                    marginLeft: widthPercentageToDP('0.8%')
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
                            <Text style={{ position: "absolute", fontSize: hp('1.6%'), color: ColorReducer?.iconNormalColor, fontStyle: "italic" }}>{ylabel[0]}</Text>
                            <Text style={{ position: "absolute", fontSize: hp('1.2%'), color: ColorReducer?.iconNormalColor, fontStyle: "italic", marginLeft: widthPercentageToDP('0.4%') }}>{ylabel[1]}</Text>
                        </View>

                        <Text style={{ position: "absolute", fontSize: hp('1.5%'), bottom: 0, right: widthPercentageToDP('0.2%'), color: ColorReducer?.iconNormalColor, fontStyle: "italic" }}>{xLabel}</Text>
                        <YAxis
                            data={yaxis}
                            contentInset={{ top: 20, bottom: 30 }}
                            svg={{
                                fill: ColorReducer?.iconNormalColor,
                                fontSize: hp('1.5%'),
                                // fontSize: 10,


                            }}
                            numberOfTicks={numberOfTicks}
                            formatLabel={(value) => value}
                        />
                        <View style={{ flex: 1, paddingLeft: '1.5%' }}>
                            <View style={{ flex: 1, zIndex: 1 }}>
                                <BarChart
                                    style={{
                                        height: Dimensions.get('window').width / 10.5,
                                        width: Dimensions.get('window').width / 2.09
                                    }}
                                    spacingInner={0}
                                    // gridMin={-10}
                                    // gridMax={120}
                                    data={chartdata}
                                    yAccessor={({ item }) => item.value}
                                    contentInset={{ top: 30, bottom: 13 }}
                                >
                                    
                                </BarChart>
                                <XAxis
                                    // style={{ marginHorizontal: -10 }}
                                    data={xaxis}
                                    formatLabel={(value, index) => value + 1}
                                    contentInset={{ left: 18, right: 18 }}
                                    svg={{ fontSize: hp('1.5%'), fill: ColorReducer?.iconNormalColor }}
                                />
                                <Lines xaxis={xaxis} contentInset={graphContentType} borderColor={ColorReducer?.iconNormalColor} />
                            </View>
                        </View>
                    </View>


                </Neomorph>
            </View>
        </View>
    )
}
const mapStateToProps = ({ ColorReducer }) => ({
    ColorReducer
});

export default connect(mapStateToProps, {

})(BarGraphs);