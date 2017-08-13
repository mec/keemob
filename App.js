import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/Home';
import ColorScreen from './screens/Color';
import TagsScreen from './screens/Tags';
import GroupScreen from './screens/Group';
import EntryScreen from './screens/Entries';
import EntryItemScreen from './screens/Entry';

export default StackNavigator({
  Home: { screen: HomeScreen },
  Group: { screen: GroupScreen },
  Color: { screen: ColorScreen },
  Tags: { screen: TagsScreen },
  Entries: { screen: EntryScreen },
  EntryItem: { screen: EntryItemScreen }
});
