// import StorybookUIRoot from "./.ondevice/Storybook";
// export { StorybookUIRoot as default };

import {Text, View} from 'react-native';

import {ThemeProvider} from '@emotion/react';
import {theme} from '@styles/theme';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <View>
                <Text>
                    Open up App.tsx to start working on your app!!!!!!!!
                </Text>
                <Text>Changes you make will automatically reload.</Text>
            </View>
        </ThemeProvider>
    );
}
