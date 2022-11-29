import React from 'react'
import Svg, {
    Defs,
    Path,
    LinearGradient,
    Stop,
    ClipPath,
    Rect,
    Circle,
    Line,
    G,
} from 'react-native-svg'
import { Dimensions, View } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'

interface LineProps {
    line: string,
    xaxis: [],
    contentInset: {}
    firststopcolor: string,
    secondstopcolor: string,
    thirdstopcolor: string,
    forthstopcolor: string,
    borderColor: string
}

export const Shadow = (props: Partial<LineProps>) => {
    const { line } = props as LineProps
    return (
        <Path
            key={'shadow'}
            y={2}
            d={line}
            fill={'none'}
            strokeWidth={12}
            stroke={'rgba(180, 71, 45, 0.2)'}
        />
    )
}
export const Lines = (props: Partial<LineProps>) => {
    const { borderColor, contentInset } = props as LineProps
    return (
        <View style={{ height: '100%', width: '100%', position: "absolute" }}>
            <View style={{ flexDirection: 'row', height: '70%', ...contentInset, }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10].map((item, index) => {
                    return (
                        <View key={index} style={{
                            position: "absolute",
                            height: '100%',
                            // left: index == 0 ? 0 : 33 * index,
                            // left: index == 1 ? 15 : index == 2 ? 66 + 15 : index == 0 ? 0 : (index-1) * 66 + 15 ,
                            left: index == 1 ? widthPercentageToDP('1.2%') : index == 2 ? widthPercentageToDP('1.2%') + widthPercentageToDP('5.12%') : index == 0 ? 0 :
                                (index - 1) * widthPercentageToDP('5.17%') + widthPercentageToDP('1.2%'),
                            overflow: "hidden",
                            width: 1,
                            borderRightWidth: 2,
                            borderStyle: "dotted",
                            borderColor: borderColor,
                            zIndex: -1,
                            opacity: 0.2
                        }} />
                    )
                })}
            </View>
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
                return (
                    <View key={index} style={{
                        position: "absolute",
                        height: 1,
                        top: index == 0 ? widthPercentageToDP('1.6%') :
                            index == 1 ? widthPercentageToDP('1.6%') + widthPercentageToDP('1%') :
                                (index) * widthPercentageToDP('1.6%') + widthPercentageToDP('0.5%'),
                        overflow: "hidden",
                        width: '100%',
                        borderTopWidth: 2,
                        borderStyle: "dotted",
                        borderColor: borderColor,
                        zIndex: -1,
                        opacity: 0.2
                    }} />
                )
            })}
        </View>
    )
}

export const Gradient = (props: Partial<LineProps>) => {
    const {
        firststopcolor,
        secondstopcolor,
        thirdstopcolor,
        forthstopcolor
    } = props as LineProps
    return (
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0'} y1={'0%'} x2={'100%'} y2={'0%'}>
                <Stop offset={'10%'} stopColor={firststopcolor} />
                <Stop offset={'20%'} stopColor={secondstopcolor} />
                <Stop offset={'30%'} stopColor={thirdstopcolor} />
                <Stop offset={'100%'} stopColor={forthstopcolor} />
            </LinearGradient>
        </Defs>
    )

}

export const DashedLine = (props: Partial<LineProps>) => {
    const { line } = props as LineProps
    return (
        <Path
            key={'line-1'}
            d={line}
            stroke={'rgb(134, 65, 244)'}
            strokeWidth={2}
            fill={'none'}
            strokeDasharray={[4, 4]}
            clipPath={'url(#clip-path-2)'}
        />
    )
}

export const DashedLineSteps = (props: Partial<LineProps>) => {
    const { line } = props as LineProps
    return (
        <Path
            key={'line-1'}
            d={line}
            stroke={'url(#gradient)'}
            strokeWidth={2}
            fill={'none'}
            strokeDasharray={[4, 4]}
            clipPath={'url(#clip-path-2)'}
        />
    )
}

interface ClipProps {
    x: (arg: number) => number
    indexToClipFrom: number
}

export const Clips = (props: Partial<ClipProps>) => {
    const { x, indexToClipFrom } = props as ClipProps
    return (
        <ClipPath id="clip-path-1">
            <Rect x={'0'} y={'0'} width={x(indexToClipFrom)} height={'100%'} />
        </ClipPath>
    )
}

interface DecoratorProps {
    x: any
    y: any
    combinedData: {
        data: number[]
        svg: {
            stroke: string
            strokeWidth: number
        }
    }[]
}

const min = 1
const max = 10000000

const uniqueKey = (index: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min + index
}

export const MultipleLinesChartDecorator = (props: Partial<DecoratorProps>) => {
    const { x, y, combinedData } = props as DecoratorProps

    return (
        <>
            {combinedData &&
                combinedData.map((item, index) => {
                    return (
                        <Svg key={uniqueKey(index)}>
                            {item.data.map((value, index) => (
                                <Circle
                                    key={uniqueKey(index)}
                                    cx={x(index)}
                                    cy={y(value)}
                                    r={2.5}
                                    stroke={'rgb(0, 0, 0)'}
                                    fill={'white'}
                                />
                            ))}
                        </Svg>
                    )
                })}
        </>
    )
}

interface GridProps {
    x: any
    y: any
    combinedData: {
        data: number[]
        svg: { strokeWidth: number; strokeDasharray?: number[] }
    }[]
    ticks: number[]
    belowChart: boolean
}

export const CustomGrid = (props: Partial<GridProps>) => {
    const { x, y, combinedData, ticks } = props as GridProps

    return (
        <G>
            {
                // Horizontal grid
                ticks.map((tick) => (
                    <Line
                        key={tick}
                        x1={'0%'}
                        x2={'100%'}
                        y1={y(tick)}
                        y2={y(tick)}
                        stroke={'rgba(0,0,0,0.2)'}
                    />
                ))
            }
            {
                // Vertical grid
                combinedData &&
                combinedData[0].data.map((_, index) => (
                    <Line
                        key={uniqueKey(index)}
                        y1={'0%'}
                        y2={'100%'}
                        x1={x(index)}
                        x2={x(index)}
                        stroke={'rgba(0,0,0,0.2)'}
                    />
                ))
            }
        </G>
    )
}

export const VerticalGrid = (props: Partial<GridProps>) => {
    const { x, combinedData } = props as GridProps

    return (
        <G>
            {combinedData &&
                combinedData[0].data.map((_, index) => (
                    <Line
                        key={uniqueKey(index)}
                        y1={'0%'}
                        y2={'100%'}
                        x1={x(index)}
                        x2={x(index)}
                        stroke={'rgba(0,0,0,0.2)'}
                    />
                ))}
        </G>
    )
}
