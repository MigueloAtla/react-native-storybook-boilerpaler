export const theme = {
    fontSizes: {
        base: 16,
        xs: 12,
        s: 14,
        m: 16,
        l: 20,
        xl: 24,
        xxl: 32,
        xxxl: 64,
    },
    colors: {
        // define colors
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
        web: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        body: 'system-ui, sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    shadows: {
        small: '0 0 4px rgba(0, 0, 0, .125)',
        large: '0 0 24px rgba(0, 0, 0, .125)',
    },
    variants: {},
    text: {},
    buttons: {
        primary: {
            color: 'white',
            bg: 'primary',
        },
    },
};

export const darkTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        bg: '#100c0b',
    },
};
export const lightTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        bg: '#f2f2f2',
    },
};
