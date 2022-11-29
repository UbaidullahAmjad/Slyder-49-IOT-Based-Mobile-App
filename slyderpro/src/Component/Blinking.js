import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import BlinkingDesign from './BlinkingDesign';
function Blinking(props) {
    console.log('blinking')
    return (
        <View
            style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between"
            }}
        >
            <BlinkingDesign item='BMS 24V' value={props?.HeartbeatReducer?.bms24} />
            <BlinkingDesign item='BMS 100V' value={props?.HeartbeatReducer?.bms100} />
            <BlinkingDesign item='ModBus' value={props?.HeartbeatReducer?.modbus} />
            <BlinkingDesign item='Motor' value={props?.HeartbeatReducer?.motor} />
            <BlinkingDesign item='N2K' value={props?.HeartbeatReducer?.n2k} />
        </View>

    )
}

const mapStateToProps = ({ HeartbeatReducer }) => ({
    HeartbeatReducer
});

export default React.memo(connect(mapStateToProps, {

})(Blinking));






