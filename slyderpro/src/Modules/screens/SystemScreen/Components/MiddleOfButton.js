import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import NeumorphismButtonCircle from '../../../../Component/NeumorphismButtonCircle';

function MiddleOfButton({ top, left, active, right, ColorReducer }) {
    return (
        <View
            style={{
                position: 'absolute',
                right: right,
                top: top,
                left: left,

            }}>
            {active ? (
                <NeumorphismButtonCircle green activeColor={ColorReducer?.btnstatus} />
            ) : (
                <NeumorphismButtonCircle />
            )}
        </View>

    )
}

const mapStateToProps = ({ ColorReducer }) => ({
    ColorReducer
});

export default React.memo(connect(mapStateToProps, {

})(MiddleOfButton));