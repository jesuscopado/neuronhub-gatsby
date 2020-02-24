import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  fonts: {
    ...novelaTheme.fonts,
    serif: "'Merriweather', Georgia, Serif",
    serifText: "Georgia, Serif",
    sansSerif:
      "'Harding', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
    monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  colors: {
    ...novelaTheme.colors,
    accent: "#bb3f5c",
  },
};