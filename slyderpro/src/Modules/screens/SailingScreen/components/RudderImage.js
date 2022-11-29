import { ImageBackground, Dimensions, View } from 'react-native'
import React from 'react'
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';

export default function RudderImage({ props }) {

    React.useEffect(() => {
    }, [props?.SailingCenter?.RudderPosition])

    return (
        <ImageBackground style={{
            alignSelf: 'center',
            position: 'absolute',
            height: Dimensions.get('window').height / 2,
            width: wp('20%'),
            top: hp('12%'),
            justifyContent: "flex-end",
            alignItems: "flex-end"
        }} source={require('../../../../../images/compoenentimages/pink-2.png')}>

            {
                props?.SailingCenter?.RudderPosition > 0 && props?.SailingCenter?.RudderPosition <= 10
                    ?
                    props?.SailingCenter?.RudderPosition == 10
                        ? <View style={{ transform: [{ rotate: `-15deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.3%'), right: wp('9.2%') }} />
                        : <View style={{ transform: [{ rotate: `-15deg` }], height: hp('0.5%'), width: wp('0.32%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.3%'), right: wp('9.4%') }} />
                    : props?.SailingCenter?.RudderPosition > 10 && props?.SailingCenter?.RudderPosition <= 20
                        ?
                        props?.SailingCenter?.RudderPosition == 20
                            ? <>
                                <View style={{ transform: [{ rotate: `-15deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.32%'), right: wp('9.2%') }} />
                                <View style={{ transform: [{ rotate: `-18deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.8%'), right: wp('8.45%') }} />
                            </>
                            :
                            <>
                                <View style={{ transform: [{ rotate: `-15deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.32%'), right: wp('9.2%') }} />
                                <View style={{ transform: [{ rotate: `-20deg` }], height: hp('0.5%'), width: wp('0.32%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('8.6%') }} />
                            </>
                        :
                        props?.SailingCenter?.RudderPosition > 20 && props?.SailingCenter?.RudderPosition <= 30
                            ?
                            props?.SailingCenter?.RudderPosition == 30
                                ?
                                <>
                                    <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.32%'), right: wp('9.2%') }} />
                                    <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('8.45%') }} />
                                    <View style={{ transform: [{ rotate: `-30deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('8.5%'), right: wp('7.7%') }} />
                                </>
                                :
                                <>
                                    <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.3%'), right: wp('9.2%') }} />
                                    <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('8.4%') }} />
                                    <View style={{ transform: [{ rotate: `-30deg` }], height: hp('0.5%'), width: wp('0.32%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('8.3%'), right: wp('7.9%') }} />
                                </>
                            :
                            props?.SailingCenter?.RudderPosition > 30 && props?.SailingCenter?.RudderPosition <= 40
                                ?
                                props?.SailingCenter?.RudderPosition == 40
                                    ?
                                    <>
                                        <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.32%'), right: wp('9.2%') }} />
                                        <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('8.45%') }} />
                                        <View style={{ transform: [{ rotate: `-40deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('8.5%'), right: wp('7.7%') }} />
                                        <View style={{ transform: [{ rotate: `-50deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('9.6%'), right: wp('7.1%') }} />
                                    </>
                                    :
                                    <>
                                        <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.3%'), right: wp('9.2%') }} />
                                        <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('8.4%') }} />
                                        <View style={{ transform: [{ rotate: `-40deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('8.5%'), right: wp('7.7%') }} />
                                        <View style={{ transform: [{ rotate: `-50deg` }], height: hp('0.5%'), width: wp('0.32%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('9.3%'), right: wp('7.3%') }} />
                                    </>
                                :
                                props?.SailingCenter?.RudderPosition > 40 && props?.SailingCenter?.RudderPosition <= 50
                                    ?
                                    props?.SailingCenter?.RudderPosition == 50 ?
                                        <>
                                            <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.3%'), right: wp('9.2%') }} />
                                            <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('8.4%') }} />
                                            <View style={{ transform: [{ rotate: `-40deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('8.5%'), right: wp('7.7%') }} />
                                            <View style={{ transform: [{ rotate: `-50deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('9.6%'), right: wp('7.1%') }} />
                                            <View style={{ transform: [{ rotate: `-60deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('10.8%'), right: wp('6.6%') }} />
                                        </>
                                        :
                                        <>
                                            <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.3%'), right: wp('9.2%') }} />
                                            <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('8.4%') }} />
                                            <View style={{ transform: [{ rotate: `-40deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('8.5%'), right: wp('7.7%') }} />
                                            <View style={{ transform: [{ rotate: `-50deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('9.6%'), right: wp('7.1%') }} />
                                            <View style={{ transform: [{ rotate: `-60deg` }], height: hp('0.5%'), width: wp('0.32%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('10.7%'), right: wp('6.7%') }} />
                                        </>
                                    :
                                    props?.SailingCenter?.RudderPosition > 50 && props?.SailingCenter?.RudderPosition <= 60
                                        ?
                                        props?.SailingCenter?.RudderPosition == 60 ?
                                            <>
                                                <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.3%'), right: wp('9.2%') }} />
                                                <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('8.4%') }} />
                                                <View style={{ transform: [{ rotate: `-40deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('8.5%'), right: wp('7.7%') }} />
                                                <View style={{ transform: [{ rotate: `-50deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('9.6%'), right: wp('7.1%') }} />
                                                <View style={{ transform: [{ rotate: `-60deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('10.8%'), right: wp('6.6%') }} />
                                                <View style={{ transform: [{ rotate: `-70deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('12.2%'), right: wp('6.25%') }} />
                                            </>
                                            : <>
                                                <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.3%'), right: wp('9.2%') }} />
                                                <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('8.4%') }} />
                                                <View style={{ transform: [{ rotate: `-40deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('8.5%'), right: wp('7.7%') }} />
                                                <View style={{ transform: [{ rotate: `-50deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('9.6%'), right: wp('7.1%') }} />
                                                <View style={{ transform: [{ rotate: `-60deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('10.8%'), right: wp('6.6%') }} />
                                                <View style={{ transform: [{ rotate: `-70deg` }], height: hp('0.5%'), width: wp('0.32%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('11.8%'), right: wp('6.4%') }} />
                                            </>
                                        : null
            }


            {
                props?.SailingCenter?.RudderPosition < 0 && props?.SailingCenter?.RudderPosition >= -10
                    ?
                    props?.SailingCenter?.RudderPosition == -10
                        ? <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('9.55%') }} />
                        : <View style={{ transform: [{ rotate: `15deg` }], height: hp('0.5%'), width: wp('0.32%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('9.8%') }} />

                    : props?.SailingCenter?.RudderPosition < -10 && props?.SailingCenter?.RudderPosition >= -20
                        ?
                        props?.SailingCenter?.RudderPosition == -20
                            ? <>
                                <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('9.55%') }} />
                                <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.7%'), left: wp('8.7%') }} />
                            </>
                            :
                            <>
                                <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('9.55%') }} />
                                <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.5%'), width: wp('0.32%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.6%'), left: wp('9%') }} />
                            </>
                        :
                        props?.SailingCenter?.RudderPosition < -20 && props?.SailingCenter?.RudderPosition >= -30
                            ?
                            props?.SailingCenter?.RudderPosition == -30
                                ?
                                <>
                                    <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('9.55%') }} />
                                    <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.7%'), left: wp('8.7%') }} />
                                    <View style={{ transform: [{ rotate: `30deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('8.4%'), left: wp('8%') }} />
                                </>
                                :
                                <>
                                    <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('9.55%') }} />
                                    <View style={{ transform: [{ rotate: `20deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.7%'), left: wp('8.7%') }} />
                                    <View style={{ transform: [{ rotate: `30deg` }], height: hp('0.5%'), width: wp('0.32%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('8.2%'), left: wp('8.2%') }} />
                                </>
                            :
                            props?.SailingCenter?.RudderPosition < -30 && props?.SailingCenter?.RudderPosition >= -40
                                ?
                                props?.SailingCenter?.RudderPosition == -40
                                    ?
                                    <>
                                        <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('9.55%') }} />
                                        <View style={{ transform: [{ rotate: `20deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.7%'), left: wp('8.7%') }} />
                                        <View style={{ transform: [{ rotate: `30deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('8.4%'), left: wp('8%') }} />
                                        <View style={{ transform: [{ rotate: `50deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('9.3%'), left: wp('7.4%') }} />
                                    </>
                                    :
                                    <>
                                        <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('9.55%') }} />
                                        <View style={{ transform: [{ rotate: `20deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.7%'), left: wp('8.7%') }} />
                                        <View style={{ transform: [{ rotate: `30deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('8.4%'), left: wp('8%') }} />
                                        <View style={{ transform: [{ rotate: `50deg` }], height: hp('0.5%'), width: wp('0.32%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('9.1%'), left: wp('7.55%') }} />
                                    </>
                                :
                                props?.SailingCenter?.RudderPosition < -40 && props?.SailingCenter?.RudderPosition >= -50
                                    ?
                                    props?.SailingCenter?.RudderPosition == -50 ?
                                        <>
                                            <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('9.55%') }} />
                                            <View style={{ transform: [{ rotate: `20deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.7%'), left: wp('8.7%') }} />
                                            <View style={{ transform: [{ rotate: `30deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('8.4%'), left: wp('8%') }} />
                                            <View style={{ transform: [{ rotate: `50deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('9.3%'), left: wp('7.4%') }} />
                                            <View style={{ transform: [{ rotate: `60deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('10.5%'), left: wp('6.8%') }} />
                                        </>
                                        :
                                        <>
                                            <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('9.55%') }} />
                                            <View style={{ transform: [{ rotate: `20deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.7%'), left: wp('8.7%') }} />
                                            <View style={{ transform: [{ rotate: `30deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('8.4%'), left: wp('8%') }} />
                                            <View style={{ transform: [{ rotate: `50deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('9.3%'), left: wp('7.4%') }} />
                                            <View style={{ transform: [{ rotate: `60deg` }], height: hp('0.5%'), width: wp('0.32%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('10.4%'), left: wp('7%') }} />
                                        </>
                                    :
                                    props?.SailingCenter?.RudderPosition < -50 && props?.SailingCenter?.RudderPosition >= -60
                                        ?
                                        props?.SailingCenter?.RudderPosition == -60 ?
                                            <>
                                                <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('9.55%') }} />
                                                <View style={{ transform: [{ rotate: `20deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.7%'), left: wp('8.7%') }} />
                                                <View style={{ transform: [{ rotate: `30deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('8.4%'), left: wp('8%') }} />
                                                <View style={{ transform: [{ rotate: `50deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('9.3%'), left: wp('7.4%') }} />
                                                <View style={{ transform: [{ rotate: `60deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('10.5%'), left: wp('6.8%') }} />
                                                <View style={{ transform: [{ rotate: `70deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('12%'), left: wp('6.5%') }} />
                                            </>
                                            : <>
                                                <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('9.55%') }} />
                                                <View style={{ transform: [{ rotate: `20deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.7%'), left: wp('8.7%') }} />
                                                <View style={{ transform: [{ rotate: `30deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('8.4%'), left: wp('8%') }} />
                                                <View style={{ transform: [{ rotate: `50deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('9.3%'), left: wp('7.4%') }} />
                                                <View style={{ transform: [{ rotate: `60deg` }], height: hp('0.5%'), width: wp('0.5%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('10.5%'), left: wp('6.8%') }} />
                                                <View style={{ transform: [{ rotate: `70deg` }], height: hp('0.5%'), width: wp('0.32%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('11.8%'), left: wp('6.6%') }} />
                                            </>
                                        : null
            }
        </ImageBackground>
    )
}
