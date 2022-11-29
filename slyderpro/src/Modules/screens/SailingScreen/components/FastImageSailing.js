import React from 'react'
import FastImage from 'react-native-fast-image'
function FastImageSailing({ tintColor, imageLeft, imageIndex, imageTop, imageTransform, imagePosition, imageHeight, imageWidth, imageSource }) {
    return (
        <FastImage
            tintColor={tintColor}
            style={{
                top: imageTop,
                zIndex: imageIndex,
                transform: [{ rotate: `${imageTransform ? imageTransform : 0}deg` }],
                position: imagePosition,
                height: imageHeight,
                width: imageWidth,
                left: imageLeft
            }}
            source={imageSource}
            resizeMode={FastImage.resizeMode.contain}
        />
    )
}
export default React.memo(FastImageSailing)