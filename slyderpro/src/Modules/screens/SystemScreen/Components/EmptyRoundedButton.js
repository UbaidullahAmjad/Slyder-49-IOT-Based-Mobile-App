import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { connect } from 'react-redux'
import CustomText from '../../../../Component/CustomText'

function EmptyRoundedButton({ title, top, right, Color }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                top: top,
                position: 'absolute',
            }}>
            {right ? (null) :
                <CustomText title={title} />
            }
            <View
                style={{
                    marginLeft: widthPercentageToDP('1%'),
                    borderWidth: 1,
                    padding: Dimensions.get('screen').height / 50,
                    borderColor: Color?.isDarkThemeOn ? 'red' : 'silver',
                    borderRadius: 30,
                    marginRight: widthPercentageToDP('0.5%'),
                }}
            />
            {right ? <CustomText title={title} right /> :
                null
            }
        </View>
    )
}

const mapStateToProps = (state) => ({
    Color: state.ColorReducer
});

export default connect(mapStateToProps, {
})(EmptyRoundedButton);