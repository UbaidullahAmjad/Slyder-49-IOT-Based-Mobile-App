import React from 'react';
import { Dimensions, View } from 'react-native';
import MiddleOfButton from '../MiddleOfButton';
import { connect } from 'react-redux'

function LowerDeckLeftstatusOnImage(props) {
    return (
        <View
            style={{ marginTop: Dimensions.get('screen').height / 4.5 }}>
            <MiddleOfButton top={Dimensions.get('screen').height / 26}
                left={-Dimensions.get('screen').width / 26}
                active={props?.LowerDeckLeftBtn?.washingMachine}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 13}
                left={-Dimensions.get('screen').width / 28}
                active={props?.LowerDeckLeftBtn?.grayWaterPump}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 9}
                left={-Dimensions.get('screen').width / 36}
                active={props?.LowerDeckLeftBtn?.toilet}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 7}
                left={-Dimensions.get('screen').width / 50}
                active={props?.LowerDeckLeftBtn?.ventilation}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 5}
                left={-Dimensions.get('screen').width / 23}
                active={props?.LowerDeckLeftBtn?.waterpump}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 2.85}
                left={-Dimensions.get('screen').width / 22}
                active={props?.LowerDeckLeftBtn?.bilgepumpcenter}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 2.6}
                left={-Dimensions.get('screen').width / 48}
                active={props?.LowerDeckLeftBtn?.boiler}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 2.3}
                left={-Dimensions.get('screen').width / 18.5}
                active={props?.LowerDeckLeftBtn?.aircon}
            />
            <MiddleOfButton top={Dimensions.get('screen').height / 1.88}
                left={-Dimensions.get('screen').width / 25}
                active={props?.LowerDeckLeftBtn?.bilgepumpaft}
            />
        </View>
    )
}

const mapStateToProps = ({ LowerDeckLeftBtn }) => ({
    LowerDeckLeftBtn
});

export default connect(mapStateToProps, {
})(LowerDeckLeftstatusOnImage);