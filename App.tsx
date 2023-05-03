// import StorybookUIRoot from "./.ondevice/Storybook";
// export { StorybookUIRoot as default };

import {Text, View} from 'react-native';
import {MyButton} from '@components/Button/Button';
import FloatingButton from '@components/FloatingButton';

import {ThemeProvider} from '@emotion/react';
import {theme} from '@styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Open up App.tsx to start working on your app!!!!!!!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <MyButton
          onPress={() => {}}
          color="purple"
          text="hei this is a button!"
        />
        <FloatingButton symbol="" onPress={() => {}} />
      </View>
    </ThemeProvider>
  );
}
