import React from 'react';
import { Dimensions, View } from 'react-native';
import MiddleOfButton from '../MiddleOfButton';
import { connect } from 'react-redux'

function UppderDeckRightStatusOnImage(props) {
    return (
        <View style={{ top: Dimensions.get('screen').height / 30 }}>
            <MiddleOfButton
                right={Dimensions.get('screen').height / 12}
                active={props?.UpperDeckRightbtn?.furler}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 10}
                right={Dimensions.get('screen').height / 4.2}
                active={props?.UpperDeckRightbtn?.capstan}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 10.5}
                right={-Dimensions.get('screen').height / 15}
                active={props?.UpperDeckRightbtn?.capstan}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 3.2}
                right={Dimensions.get('screen').height / 12}
                active={props?.UpperDeckRightbtn?.anchor}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 2.7}
                right={Dimensions.get('screen').height / 9}
                active={props?.UpperDeckRightbtn?.vhf}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 1.92}
                right={Dimensions.get('screen').height / 80}
                active={props?.UpperDeckRightbtn?.refridgerator}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 1.92}
                right={-Dimensions.get('screen').height / 30}
                active={props?.UpperDeckRightbtn?.tv}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 1.82}
                right={-Dimensions.get('screen').height / 30}
                active={props?.UpperDeckRightbtn?.hifi}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 1.52}
                right={-Dimensions.get('screen').height / 22}
                active={props?.UpperDeckRightbtn?.winches}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 1.37}
                right={Dimensions.get('screen').height / 30}
                active={props?.UpperDeckRightbtn?.winches}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 1.39}
                right={Dimensions.get('screen').height / 8}
                active={props?.UpperDeckRightbtn?.winches}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 1.51}
                right={Dimensions.get('screen').height / 4.7}
                active={props?.UpperDeckRightbtn?.winches}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 1.38}
                right={-Dimensions.get('screen').height / 11}
                active={props?.UpperDeckRightbtn?.helm}
            />
            <MiddleOfButton
                top={Dimensions.get('screen').height / 1.39}
                active={props?.UpperDeckRightbtn?.helm}
                right={Dimensions.get('screen').height / 4.1}
            />
        </View>
    )
}

const mapStateToProps = ({ UpperDeckRightbtn }) => ({
    UpperDeckRightbtn,

});

export default connect(mapStateToProps, {

})(UppderDeckRightStatusOnImage);