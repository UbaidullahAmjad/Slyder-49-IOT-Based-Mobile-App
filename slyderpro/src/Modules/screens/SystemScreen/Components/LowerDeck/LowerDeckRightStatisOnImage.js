import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import MiddleOfButton from '../MiddleOfButton'
import { connect } from 'react-redux'

function LowerDeckRightStatisOnImage(props) {
    const [tenthBtn, setTenthButton] = React.useState(true);
    const [eleventhBtn, setEleventhButton] = React.useState(true);
    const [twelveBtn, setTwelveButton] = React.useState(false);
    const [forteenthBtn, setForteenthBtn] = React.useState(false);
    const [fifteenBtn, setFifteenButton] = React.useState(true);
    const [seventeenBtn, setSeventeenButton] = React.useState(true);
    const [nineteenBtn, setNineteenButton] = React.useState(false);
    return (
        <View style={{ top: Dimensions.get('screen').height / 3 }}>
            <MiddleOfButton top={Dimensions.get('screen').height / 50}
                active={props?.LowerDeckRightBtn?.ice_cube_maker}
                right={-Dimensions.get('screen').width / 50}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 20}
                active={props?.LowerDeckRightBtn?.freezer}
                right={-Dimensions.get('screen').width / 50}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 12}
                active={props?.LowerDeckRightBtn?.ventilation}
                right={-Dimensions.get('screen').width / 40}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 11}
                active={props?.LowerDeckRightBtn?.waterPumpAirCon}
                right={-Dimensions.get('screen').width / 21}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 8.5}
             active={props?.LowerDeckRightBtn?.grayWaterPump}
                // active={true}gray water
                right={-Dimensions.get('screen').width / 35}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 6.6}
                active={props?.LowerDeckRightBtn?.toilet}
                right={-Dimensions.get('screen').width / 35}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 4.2}
                active={props?.LowerDeckRightBtn?.bilgepumpcenter}
                right={-Dimensions.get('screen').width / 21}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 3.05}
                active={props?.LowerDeckRightBtn?.aircon}
                right={-Dimensions.get('screen').width / 17.5}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 2.4}
                active={props?.LowerDeckRightBtn?.bilgepumpaft}
                right={-Dimensions.get('screen').width / 24}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 2.15}
               active={props?.LowerDeckRightBtn?.watermaker}
                right={-Dimensions.get('screen').width / 33}
            />
        </View>
    )
}

const mapStateToProps = ({ LowerDeckRightBtn }) => ({
    LowerDeckRightBtn
});

export default connect(mapStateToProps, {
})(LowerDeckRightStatisOnImage);