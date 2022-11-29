import { View, Text } from 'react-native'
import React from 'react'
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import moment from 'moment';
import { connect } from 'react-redux';

function LocalTime(props) {
    const [time, setTime] = React.useState();

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (

        <Text
            style={{
                fontSize: hp('6%'),
                alignSelf: 'center',
                color:  props?.ColorReducer?.primary,
                fontFamily: "DINAlternate-Bold",
            }}>
            {moment(time).format("hh:mm:ss")}
        </Text>

    )
}

const mapStateToProps = ({  ColorReducer }) => ({
    ColorReducer
});

export default connect(mapStateToProps, {
 
})(LocalTime);