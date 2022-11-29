import React from 'react';
import { Dimensions, View } from 'react-native';
import MiddleOfButton from '../MiddleOfButton';
import { connect } from 'react-redux'

function UpperDeckLeftStatusOnImage(props) {
    return (
        <View style={{ top: Dimensions.get('screen').height / 3 }}>
            <MiddleOfButton
                top={Dimensions.get('screen').height / 18}
                left={Dimensions.get('screen').width / 50}
                active={props?.UpperDeckLeftbtn?.aircon}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 5.6}
                left={-Dimensions.get('screen').width / 60}
                active={props?.UpperDeckLeftbtn?.freezer}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 4.8}
                left={-Dimensions.get('screen').width / 70}
                active={props?.UpperDeckLeftbtn?.stove}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 4.8}
                left={-Dimensions.get('screen').width / 33}
                active={props?.UpperDeckLeftbtn?.hood}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 4.8}
                left={Dimensions.get('screen').width / 250}
                active={props?.UpperDeckLeftbtn?.oven}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 4.2}
                left={Dimensions.get('screen').width / 400}
                active={props?.UpperDeckLeftbtn?.quooker}
            />
        </View>
    )
}

const mapStateToProps = ({ UpperDeckLeftbtn }) => ({
    UpperDeckLeftbtn,

});

export default connect(mapStateToProps, {

})(UpperDeckLeftStatusOnImage);