import { StyleSheet } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

export default function FastImages({ tintColor, imageTop, imageLeft, imageTransform, imagePosition, imageHeight, imageWidth, imageSource }) {
    return (
        <FastImage
            tintColor={tintColor}
            style={{
                transform: [{ rotate: `${imageTransform ? imageTransform : 0}deg` }],
                position: imagePosition,
                height: imageHeight,
                width: imageWidth,
                left: imageLeft,
                top: imageTop
            }}
            source={imageSource}
            resizeMode={FastImage.resizeMode.contain}
        />
    )
}

const styles = StyleSheet.create({})