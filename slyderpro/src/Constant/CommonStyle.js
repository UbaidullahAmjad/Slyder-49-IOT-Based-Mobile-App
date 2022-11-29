import {Dimensions} from 'react-native';
export const plusMinus = {
  width: Dimensions.get('screen').width / 28,
  height: Dimensions.get('screen').width / 28,
  borderRadius: 100,
  borderColor: '#1F1F1F',
  borderWidth: 5,
  justifyContent: 'center',
  alignItems: 'center',
};

export const startGeneratorStyle = {
  width: Dimensions.get('screen').width / 20,
  height: Dimensions.get('screen').width / 24,
  borderRadius: 40,
  borderWidth: 6,
};
export const Log1resetStyle = {
  width: Dimensions.get('screen').width / 24,
  height: Dimensions.get('screen').width / 35,
  borderRadius: 40,
  borderColor: '#000000',
  borderWidth: 4,
  justifyContent: 'center',
};

export const UpperDeckBASEURLRightSide = `slyderapp;systems;upperdeck_stb`;
export const UpperDeckBASEURLLeftSide = `slyderapp;systems;upperdeck_bb`;

export const LowerDeckBASEURLRightSide = `slyderapp;systems;lowerdeck_stb`;
export const LowerDeckBASEURLLeftSide = `slyderapp;systems;lowerdeck_bb`;