import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class GettingStarted extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpeg')} />
        <Text
          style={{
            backgroundColor: 'tomato',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}]
          }}>
          F8 Campinas Meetup
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('GettingStarted', () => GettingStarted);
