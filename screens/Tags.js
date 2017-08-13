import React from 'react';
import { StatusBar, Text, View, Button, ListView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as css from "../Styles";

export default class TagsScreen extends React.Component {
  static navigationOptions = {
    title: 'Colors',
    headerTintColor: css.colors.foreground,
    headerStyle: css.header,
  };

  constructor() {
    super(); const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { dataSource: ds.cloneWithRows(['Yellow', 'Green', 'Red', 'Orange', 'Blue', 'Purple']), };
    this.state = { dataSource: ds.cloneWithRows([
      {'title' : 'Tag 1', icon : 'th-large', 'screen' : 'Entry', 'color' : css.colors.yellow},
      {'title' : 'Tag 2', 'icon' : 'bookmark-o', 'screen' : 'Entry', 'color' : css.colors.green},
      {'title' : 'Tag 3', 'icon' : 'tags', 'screen' : 'Entry', 'color' : css.colors.red},
      {'title' : 'Tag 4', 'icon' : 'folder-open', 'screen' : 'Entry', 'color' : css.colors.orange},
      {'title' : 'Tag 5', 'icon' : 'folder-open', 'screen' : 'Entry', 'color' : css.colors.blue},
      {'title' : 'Tag 6', 'icon' : 'folder-open', 'screen' : 'Entry', 'color' : css.colors.violet}
    ]),};
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ListView style={[css.main.dark]} dataSource={this.state.dataSource} renderRow={(rowData) =>
        <View style={[css.main.listRow]} >
          <View style={{flex:1, flexDirection: 'row'}}>
            <FontAwesome name='tag' size={16} color={css.colors.white} style={[css.main.icon]}/>
             <Button
              onPress={() => navigate(rowData.screen, { title: 'Lucy' })}
              title={rowData.title}
              color={css.colors.white}
            />
          </View>
          <FontAwesome name='angle-right' size={16} style={[css.main.icon, css.main.white]}/>
      </View>

      } />
    );
  }
}
