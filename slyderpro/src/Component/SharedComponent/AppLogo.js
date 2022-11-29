import { View, Text , Image } from 'react-native'
import React from 'react'
import { connect } from 'react-redux';
import slyderLogo from '../../../images/slyderlogo.png';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
function AppLogo(props) {
    return (
        <View>
            {props?.ColorReducer?.isDarkThemeOn ? (
                <Image
                    resizeMode='contain'
                    style={{
                        alignSelf: 'center',
                        marginTop: 10,
                        width: widthPercentageToDP('50%'),
                        height: heightPercentageToDP('15%'),
                        tintColor: "#B3001C"
                    }}
                    source={slyderLogo} />

            ) :
                <Image
                    resizeMode='contain'
                    style={{
                        alignSelf: 'center',
                        marginTop: 10,
                        width: widthPercentageToDP('50%'),
                        height: heightPercentageToDP('15%'),
                    }}
                    source={slyderLogo} />
            }
        </View>
    )
}
const mapStateToProps = ({ ColorReducer }) => ({
    ColorReducer
});

export default connect(mapStateToProps, {
})(AppLogo)