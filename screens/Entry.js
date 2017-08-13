import React from 'react';
import { StatusBar, Text, View, Button, ListView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as css from "../Styles";

export default class EntryItemScreen extends React.Component {
  static navigationOptions = {
    title: 'Entry',
    headerTintColor: css.colors.foreground,
    headerStyle: css.header,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View  style={[css.main.entry]}>
        <Text style={[css.main.entryText]}>User</Text>
        <Text style={[css.main.entryText]}>Password</Text>

        <View style={[css.main.footer]}>
          <Button title='Open site'/>
          <Button title='Copy user'/>
          <Button title='Copy password'/>
        </View>

      </View>
    );
  }
}
