import store from '../Store'
export function boolean(val) {
  if (val == true) {
    return 'True'
  } else {
    return 'False'
  }
}

export function gettimestamp() {
  var date = new Date()
  let stamp = Date.parse(date)
  return stamp / 1000;
}

export function returnImage(val) {
  if (val == 0) {
    return require('../../images/compoenentimages/pink-2.png')
  }
  else if (val > 0 && val <= 25) {
    return require('../../images/compoenentimages/pink-right.png')
  }
  else if (val > 25 && val <= 50) {
    return require('../../images/compoenentimages/pink.png')
  }
  else if (val > 50 && val <= 75) {
    return require('../../images/compoenentimages/pink-3.png')
  }
  else if (val > 75 && val <= 100) {
    return require('../../images/compoenentimages/pink-4.png')
  }
  else {
    return require('../../images/compoenentimages/pink-2.png')
  }
}

export function ReplaceDotandFixed(val) {
  // return parseFloat(val).toFixed(1).replace(/\.0+$/, '').replace(`${store.getState().Mqtt.decimalFormat ? '.' : '.'}`, `${store.getState().Mqtt.decimalFormat ? '.' : ','}`)
  return parseFloat(val).toFixed(1).replace(/\.0+$/, '')
}
