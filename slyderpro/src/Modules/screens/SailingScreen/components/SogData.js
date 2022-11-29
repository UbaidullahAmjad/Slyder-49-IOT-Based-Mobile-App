import React from "react";
import { Text } from 'react-native';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';

function SogData(props) {
    var Sog = 0
    if (props?.data == "Sog") {
        if (props?.Sailing?.Sog.toString().length > 3) {
            Sog = props?.Sailing?.Sog?.substring(0, 3)
        } else {
            Sog = props?.Sailing?.Sog
        }
    }
    return (
        <Text
            style={{
                textAlign: 'center',
                marginLeft: 20,
                marginTop: -15,
                fontSize: hp('8%'),
                color: '#AAAAAA',
                fontFamily: "OpenSans-Bold",
            }}>
            {props?.data == 'Sog' ? Sog :
                props?.data == "Twa" ? props?.Sailing?.Twa :
                    props?.data == "Tws" ? parseInt(props?.Sailing?.Tws) :
                        '0'
            }
        </Text>

    )
}
const mapStateToProps = (state, ownProps) => ({
    Sailing: state.Sailing,
    data: ownProps.data
});

export default connect(mapStateToProps, {})(SogData);