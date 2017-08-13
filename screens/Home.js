import React from 'react';
import { StatusBar, Text, View, Button, ListView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as css from "../Styles";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Keemob',
    headerLeft: <Button title="Edit" />,
    headerRight: <Button title="Add" />,
    headerStyle: css.header,
    headerTintColor: css.colors.foreground,
  };
  constructor() {
    super(); const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { dataSource: ds.cloneWithRows([
      {'title' : 'All items', icon : 'th-large', 'screen' : 'Group' },
      {'title' : 'Colors', 'icon' : 'bookmark-o', 'screen' : 'Color' },
      {'title' : 'Tags', 'icon' : 'tags', 'screen' : 'Tags' },
      {'title' : 'Example file', 'icon' : 'folder-open', 'screen' : 'Group' },
      {'title' : 'Another Example File', 'icon' : 'folder-open', 'screen' : 'Group' },
      {'title' : 'Trash', 'icon' : 'trash', 'screen' : 'Entries' }
    ]),};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
      <StatusBar barStyle = 'light-content' hidden = {false}/>
      <ListView style={[css.main.dark]} dataSource={this.state.dataSource} renderRow={(rowData) =>
        <View style={[css.main.listRow]} >
          <View style={{flex:1, flexDirection: 'row'}}>
            <FontAwesome name={rowData.icon} size={16} style={[css.main.icon, css.main.white]}/>
             <Button
              onPress={() => navigate(rowData.screen, { title: 'Lucy' })}
              title={rowData.title}
              color='#ffffff'
            />
          </View>
          <FontAwesome name='angle-right' size={16} style={[css.main.icon, css.main.white]}/>
      </View>

      } />
    </View>
    );
  }
}
