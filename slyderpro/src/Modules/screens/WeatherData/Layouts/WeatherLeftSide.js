import React from 'react'
import { View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import BarGraphs from '../Component/Graphs/BarGraphs'
import LineGraph from '../Component/Graphs/LineGraph'
import LocalizationContext from './../../../../../LocalizationContext'

export default function WeatherLeftSide() {
    const { t } = React.useContext(LocalizationContext);
    return (
        <View
            style={{
                flex: 1,
                justifyContent:"flex-end",
                marginVertical: 12,
                marginLeft: 12
            }}>
            <BarGraphs
                title={t('wind speed')}
                marginLeft={-widthPercentageToDP('1.2%')}
                xaxis={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                graphContentType={{ top: 20, bottom: 0 }}
                ylabel={['kn', '']}
                xLabel={'h'}
                yaxis={[0, 10, 20, 30, 40, 50]}
                numberOfTicks={5}
            />
            <View style={{ marginTop: heightPercentageToDP('3%') }} />
            <LineGraph
                title={t('wind direction')}
                ylabel={['°', '']}
                xLabel={'h'}
                svg={{ stroke: '#B4472D' }}
                data={[150, 60, 10, 180, 170, 300, 360]}
                yaxis={[0, 60, 120, 180, 240, 300, 360]}
                xaxis={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                firststopcolor="red"
                secondstopcolor='blue'
                thirdstopcolor='gray'
                forthstopcolor='green'
                shadow={true}
                numberOfTicks={10}
                graphContentType={{ top: 20, bottom: 0 }}
                marginLeft={-widthPercentageToDP('1.8%')}
            />
            <View style={{ marginTop: heightPercentageToDP('3%') }} />
            <LineGraph
                title={t('temperature')}
                ylabel={['°', 'C']}
                xLabel={'h'}
                svg={{
                    strokeWidth: 2,
                    stroke: 'url(#gradient)'
                }}
                data={[0, 2, 8, 2, 5, 40, 50]}
                yaxis={[-10, 0, 10, 20, 30, 40, 50]}
                xaxis={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                firststopcolor="#B6B52C"
                secondstopcolor='#549680'
                thirdstopcolor='#C3A82D'
                forthstopcolor='#A64B36'
                shadow={false}
                numberOfTicks={5}
                graphContentType={{ top: 0, bottom: 5 }}
                marginLeft={-widthPercentageToDP('1.5%')}
            />
            <View style={{ marginTop: heightPercentageToDP('3%') }} />
            <LineGraph
                title={t('air pressure')}
                ylabel={['', 'hpa']}
                xLabel={'h'}
                svg={{
                    strokeWidth: 2,
                    stroke: 'url(#gradient)'
                }}
                data={[0, 2, 8, 2, 5, 40, 50]}
                yaxis={['960-1009.5', 0, 10, 20, 30, 40, 50]}
                xaxis={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                firststopcolor="#2D818C"
                secondstopcolor='#AC6F39'
                thirdstopcolor='#2D6E8B'
                forthstopcolor='#2D846E'
                shadow={false}
                numberOfTicks={5}
                graphContentType={{ top: 0, bottom: 5 }}
                customlabel={true}
                marginLeft={-widthPercentageToDP('1.5%')}
            />


            {/* <LineGraphs title={t('wind direction')} ylabel={'°'} xLabel={'h'} strokeColor='#640D02' top={Dimensions.get('screen').height / 34} />
            <LineGraphs title={t('temperature')} ylabel={'°C'} xLabel={'h'} strokeColor='#B18D2C' top={Dimensions.get('screen').height / 40} />
            <LineGraphs title={t('air pressure')} ylabel={'hPa'} xLabel={'h'} strokeColor='#2D8DB6' top={Dimensions.get('screen').height / 40} /> */}
        </View>
    )
}