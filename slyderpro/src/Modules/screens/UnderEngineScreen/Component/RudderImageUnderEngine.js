import { ImageBackground, Dimensions, View } from 'react-native'
import React from 'react'
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';

function RudderImageUnderEngine({ props }) {

    React.useEffect(() => {
    }, [props?.UnderEngineCenter?.RudderPosition])

    return (
        <ImageBackground
            style={{
                alignSelf: 'center',
                position: 'absolute',
                height: Dimensions.get('window').height / 2.5,
                width: wp('20%'),
                top: hp('5%'),
                justifyContent: "flex-end",
                alignItems: "flex-end"
            }} source={require('../../../../../images/compoenentimages/pink-2.png')}>


            {
                props?.UnderEngineCenter?.RudderPosition > 0 && props?.UnderEngineCenter?.RudderPosition <= 10
                    ?
                    props?.UnderEngineCenter?.RudderPosition == 10
                        ? <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6%'), right: wp('9.25%') }} />
                        : <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.4%'), width: wp('0.25%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6%'), right: wp('9.5%') }} />
                    : props?.UnderEngineCenter?.RudderPosition > 10 && props?.UnderEngineCenter?.RudderPosition <= 20
                        ?
                        props?.UnderEngineCenter?.RudderPosition == 20
                            ?
                            <>
                                <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6%'), right: wp('9.25%') }} />
                                <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.25%'), right: wp('8.67%') }} />
                            </>
                            :
                            <>
                                <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6%'), right: wp('9.25%') }} />
                                <View style={{ transform: [{ rotate: `-26deg` }], height: hp('0.4%'), width: wp('0.25%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.21%'), right: wp('8.9%') }} />
                            </>
                        :
                        props?.UnderEngineCenter?.RudderPosition > 20 && props?.UnderEngineCenter?.RudderPosition <= 30
                            ?
                            props?.UnderEngineCenter?.RudderPosition == 30
                                ?
                                <>
                                    <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6%'), right: wp('9.25%') }} />
                                    <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.25%'), right: wp('8.7%') }} />
                                    <View style={{ transform: [{ rotate: `-35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.8%'), right: wp('8.2%') }} />
                                </>
                                :
                                <>
                                    <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6%'), right: wp('9.25%') }} />
                                    <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.25%'), right: wp('8.7%') }} />
                                    <View style={{ transform: [{ rotate: `-35deg` }], height: hp('0.4%'), width: wp('0.25%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.6%'), right: wp('8.35%') }} />
                                </>
                            :
                            props?.UnderEngineCenter?.RudderPosition > 30 && props?.UnderEngineCenter?.RudderPosition <= 40
                                ?
                                props?.UnderEngineCenter?.RudderPosition == 40
                                    ?
                                    <>
                                        <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6%'), right: wp('9.25%') }} />
                                        <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.25%'), right: wp('8.7%') }} />
                                        <View style={{ transform: [{ rotate: `-35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.8%'), right: wp('8.2%') }} />
                                        <View style={{ transform: [{ rotate: `-50deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('7.7%') }} />
                                    </>
                                    :
                                    <>
                                        <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6%'), right: wp('9.25%') }} />
                                        <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.25%'), right: wp('8.7%') }} />
                                        <View style={{ transform: [{ rotate: `-35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.8%'), right: wp('8.2%') }} />
                                        <View style={{ transform: [{ rotate: `-50deg` }], height: hp('0.4%'), width: wp('0.25%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.5%'), right: wp('7.8%') }} />
                                    </>
                                :
                                props?.UnderEngineCenter?.RudderPosition > 40 && props?.UnderEngineCenter?.RudderPosition <= 50
                                    ?
                                    props?.UnderEngineCenter?.RudderPosition == 50
                                        ?
                                        <>
                                            <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6%'), right: wp('9.25%') }} />
                                            <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.25%'), right: wp('8.7%') }} />
                                            <View style={{ transform: [{ rotate: `-35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.8%'), right: wp('8.2%') }} />
                                            <View style={{ transform: [{ rotate: `-50deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('7.7%') }} />
                                            <View style={{ transform: [{ rotate: `-60deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('8.6%'), right: wp('7.3%') }} />
                                        </>
                                        :
                                        <>
                                            <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6%'), right: wp('9.25%') }} />
                                            <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.25%'), right: wp('8.7%') }} />
                                            <View style={{ transform: [{ rotate: `-35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.8%'), right: wp('8.2%') }} />
                                            <View style={{ transform: [{ rotate: `-50deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('7.7%') }} />
                                            <View style={{ transform: [{ rotate: `-60deg` }], height: hp('0.4%'), width: wp('0.25%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('8.4%'), right: wp('7.5%') }} />
                                        </>
                                    :
                                    props?.UnderEngineCenter?.RudderPosition > 50 && props?.UnderEngineCenter?.RudderPosition <= 60
                                        ?
                                        props?.UnderEngineCenter?.RudderPosition == 60
                                            ?
                                            <>
                                                <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6%'), right: wp('9.25%') }} />
                                                <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.25%'), right: wp('8.7%') }} />
                                                <View style={{ transform: [{ rotate: `-35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.8%'), right: wp('8.2%') }} />
                                                <View style={{ transform: [{ rotate: `-50deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('7.7%') }} />
                                                <View style={{ transform: [{ rotate: `-60deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('8.6%'), right: wp('7.3%') }} />
                                                <View style={{ transform: [{ rotate: `-70deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('9.7%'), right: wp('7%') }} />
                                            </>
                                            :
                                            <>
                                                <View style={{ transform: [{ rotate: `-10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6%'), right: wp('9.25%') }} />
                                                <View style={{ transform: [{ rotate: `-25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.25%'), right: wp('8.7%') }} />
                                                <View style={{ transform: [{ rotate: `-35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('6.8%'), right: wp('8.2%') }} />
                                                <View style={{ transform: [{ rotate: `-50deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('7.7%'), right: wp('7.7%') }} />
                                                <View style={{ transform: [{ rotate: `-60deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('8.6%'), right: wp('7.3%') }} />
                                                <View style={{ transform: [{ rotate: `-70deg` }], height: hp('0.4%'), width: wp('0.25%'), position: "absolute", backgroundColor: "#29C956", bottom: hp('9.5%'), right: wp('7.1%') }} />
                                            </>
                                        : null
            }



            {
                props?.UnderEngineCenter?.RudderPosition < 0 && props?.UnderEngineCenter?.RudderPosition >= -10
                    ?
                    props?.UnderEngineCenter?.RudderPosition == -10
                        ? <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6%'), left: wp('9.6%') }} />
                        : <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.4%'), width: wp('0.25%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6%'), left: wp('9.8%') }} />
                    : props?.UnderEngineCenter?.RudderPosition < -10 && props?.UnderEngineCenter?.RudderPosition >= -20
                        ?
                        props?.UnderEngineCenter?.RudderPosition == -20
                            ?
                            <>
                                <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6%'), left: wp('9.6%') }} />
                                <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.2%'), left: wp('8.9%') }} />
                            </>
                            :
                            <>
                                <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6%'), left: wp('9.6%') }} />
                                <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.4%'), width: wp('0.25%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.15%'), left: wp('9.2%') }} />
                            </>
                        :
                        props?.UnderEngineCenter?.RudderPosition < -20 && props?.UnderEngineCenter?.RudderPosition >= -30
                            ?
                            props?.UnderEngineCenter?.RudderPosition == -30
                                ?
                                <>
                                    <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6%'), left: wp('9.6%') }} />
                                    <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.3%'), left: wp('8.9%') }} />
                                    <View style={{ transform: [{ rotate: `35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.8%'), left: wp('8.4%') }} />
                                </>
                                :
                                <>
                                    <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6%'), left: wp('9.6%') }} />
                                    <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.3%'), left: wp('8.9%') }} />
                                    <View style={{ transform: [{ rotate: `35deg` }], height: hp('0.4%'), width: wp('0.25%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.7%'), left: wp('8.5%') }} />
                                </>
                            :
                            props?.UnderEngineCenter?.RudderPosition < -30 && props?.UnderEngineCenter?.RudderPosition >= -40
                                ?
                                props?.UnderEngineCenter?.RudderPosition == -40
                                    ?
                                    <>
                                        <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6%'), left: wp('9.6%') }} />
                                        <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.3%'), left: wp('8.9%') }} />
                                        <View style={{ transform: [{ rotate: `35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.8%'), left: wp('8.4%') }} />
                                        <View style={{ transform: [{ rotate: `50deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.6%'), left: wp('7.8%') }} />
                                    </>
                                    :
                                    <>
                                        <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6%'), left: wp('9.6%') }} />
                                        <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.3%'), left: wp('8.9%') }} />
                                        <View style={{ transform: [{ rotate: `35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.8%'), left: wp('8.4%') }} />
                                        <View style={{ transform: [{ rotate: `50deg` }], height: hp('0.4%'), width: wp('0.25%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.3%'), left: wp('8.1%') }} />
                                    </>
                                :
                                props?.UnderEngineCenter?.RudderPosition < -40 && props?.UnderEngineCenter?.RudderPosition >= -50
                                    ?
                                    props?.UnderEngineCenter?.RudderPosition == -50
                                        ?
                                        <>
                                            <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6%'), left: wp('9.6%') }} />
                                            <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.3%'), left: wp('8.9%') }} />
                                            <View style={{ transform: [{ rotate: `35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.8%'), left: wp('8.4%') }} />
                                            <View style={{ transform: [{ rotate: `50deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.6%'), left: wp('7.8%') }} />
                                            <View style={{ transform: [{ rotate: `60deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('8.6%'), left: wp('7.4%') }} />
                                        </>
                                        :
                                        <>
                                            <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6%'), left: wp('9.6%') }} />
                                            <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.3%'), left: wp('8.9%') }} />
                                            <View style={{ transform: [{ rotate: `35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.8%'), left: wp('8.4%') }} />
                                            <View style={{ transform: [{ rotate: `50deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.6%'), left: wp('7.8%') }} />
                                            <View style={{ transform: [{ rotate: `60deg` }], height: hp('0.4%'), width: wp('0.25%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('8.4%'), left: wp('7.6%') }} />
                                        </>
                                    :
                                    props?.UnderEngineCenter?.RudderPosition < -50 && props?.UnderEngineCenter?.RudderPosition >= -60
                                        ?
                                        props?.UnderEngineCenter?.RudderPosition == -60
                                            ?
                                            <>
                                                <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6%'), left: wp('9.6%') }} />
                                                <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.3%'), left: wp('8.9%') }} />
                                                <View style={{ transform: [{ rotate: `35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.8%'), left: wp('8.4%') }} />
                                                <View style={{ transform: [{ rotate: `50deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.6%'), left: wp('7.8%') }} />
                                                <View style={{ transform: [{ rotate: `60deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('8.6%'), left: wp('7.4%') }} />
                                                <View style={{ transform: [{ rotate: `70deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('9.7%'), left: wp('7.2%') }} />
                                            </>
                                            :
                                            <>
                                                <View style={{ transform: [{ rotate: `10deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6%'), left: wp('9.6%') }} />
                                                <View style={{ transform: [{ rotate: `25deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.3%'), left: wp('8.9%') }} />
                                                <View style={{ transform: [{ rotate: `35deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('6.8%'), left: wp('8.4%') }} />
                                                <View style={{ transform: [{ rotate: `50deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('7.6%'), left: wp('7.8%') }} />
                                                <View style={{ transform: [{ rotate: `60deg` }], height: hp('0.4%'), width: wp('0.45%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('8.6%'), left: wp('7.4%') }} />
                                                <View style={{ transform: [{ rotate: `70deg` }], height: hp('0.4%'), width: wp('0.25%'), position: "absolute", backgroundColor: "#D31F2A", bottom: hp('9.4%'), left: wp('7.3%') }} />
                                            </>
                                        : null
            }

        </ImageBackground>
    )
}

export default React.memo(RudderImageUnderEngine)
