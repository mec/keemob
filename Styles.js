import React from 'react';
import {StyleSheet} from 'react-native';

export const colors = {
  'background': '#282C34',
  'foreground': '#ABB2BF',
  'highlight' : '#528BFF',
  'white'     : '#D7DAE0',
  'red'       : '#df3c06',
  'orange'    : '#fbac45',
  'yellow'    : '#e9d92a',
  'green'     : '#0dc94b',
  'blue'      : '#4e6af8',
  'violet'    : '#d946db',
};

export const main = StyleSheet.create({
  listRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.background,
    padding: 10,
    borderBottomColor: colors.foreground,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between'
  },
  icon: {
    margin: 10,
  },
  white: {
    color: colors.white,
  },
  footer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.background,
  },
  dark: {
    backgroundColor: colors.background,
  },
  darkButton: {
    backgroundColor: colors.background,
    color: colors.foreground,
  },
  entry: {
    flex: 1,
    backgroundColor: colors.background,
  },
  entryText: {
    fontSize: 16,
    color: colors.white,
  }
});

// more info https://goo.gl/dqw4jF
export const header = {
    backgroundColor: colors.background,
    borderBottomColor: colors.foreground,
    borderBottomWidth: 1,
};
