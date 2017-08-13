import React from 'react';
import { StatusBar, Text, View, Button, ListView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as css from "../Styles";

export default class GroupScreen extends React.Component {
  static navigationOptions = {
    title: 'Group',
    headerRight: <Button title="Add" />,
    headerTintColor: css.colors.foreground,
    headerStyle: css.header,
  };

  constructor() {
    super(); const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { dataSource: ds.cloneWithRows(['Group 1', 'Group 2', 'Group 3', 'Group 4']), };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ListView style={[css.main.dark]} dataSource={this.state.dataSource} renderRow={(rowData) =>
        <View style={[css.main.listRow]} >
          <View style={{flex:1, flexDirection: 'row'}}>
             <Button
              onPress={() => navigate('Entries', { title: 'Lucy' })}
              title={rowData}
              color={css.colors.white}
            />
          </View>
          <FontAwesome name='angle-right' size={16} style={[css.main.icon, css.main.white]}/>
      </View>
      } />
    );
  }
}
