import React from 'react';
import { StatusBar, Text, View, Button, ListView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as css from "../Styles";

export default class ColorScreen extends React.Component {
  static navigationOptions = {
    title: 'Colors',
    headerTintColor: css.colors.foreground,
    headerStyle: css.header,
  };

  constructor() {
    super(); const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { dataSource: ds.cloneWithRows(['Yellow', 'Green', 'Red', 'Orange', 'Blue', 'Purple']), };
    this.state = { dataSource: ds.cloneWithRows([
      {'title' : 'Yellow', icon : 'th-large', 'screen' : 'Entries', 'color' : css.colors.yellow},
      {'title' : 'Green', 'icon' : 'bookmark-o', 'screen' : 'Entries', 'color' : css.colors.green},
      {'title' : 'Red', 'icon' : 'tags', 'screen' : 'Entries', 'color' : css.colors.red},
      {'title' : 'Orange', 'icon' : 'folder-open', 'screen' : 'Entries', 'color' : css.colors.orange},
      {'title' : 'Blue', 'icon' : 'folder-open', 'screen' : 'Entries', 'color' : css.colors.blue},
      {'title' : 'Purple', 'icon' : 'folder-open', 'screen' : 'Entries', 'color' : css.colors.violet}
    ]),};
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ListView style={[css.main.dark]} dataSource={this.state.dataSource} renderRow={(rowData) =>
        <View style={[css.main.listRow]} >
          <View style={{flex:1, flexDirection: 'row'}}>
            <FontAwesome name='bookmark-o' size={16} color={rowData.color} style={[css.main.icon]}/>
             <Button
              onPress={() => navigate(rowData.screen, { title: 'Lucy' })}
              title={rowData.title}
              color={rowData.color}
            />
          </View>
          <FontAwesome name='angle-right' size={16} style={[css.main.icon, css.main.white]}/>
      </View>

      } />
    );
  }
}
