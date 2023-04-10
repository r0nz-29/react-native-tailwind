import React from 'react';
import {Text, View} from 'react-native';
import theme from './theme';
import {ThemeProvider} from '@rneui/themed';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text className="font-bold text-emerald-400">Raunit</Text>
      </View>
    </ThemeProvider>
  );
}

export default App;
