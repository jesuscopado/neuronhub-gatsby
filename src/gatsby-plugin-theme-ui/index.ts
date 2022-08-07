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
    accentLight: "#f6e7eb",
    modes: {
      dark: {
        grey: "#73737D",
        primary: "#fff",
        secondary: "#fff",
        accent: "#bb3f5c",
        background: "#111216",
        hover: "rgba(255, 255, 255, 0.07)",
        gradient:
          "linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)",
        articleText: "#fff",
        track: "rgba(255, 255, 255, 0.3)",
        progress: "#fff",
        card: "#1D2128",
        error: "#EE565B",
        success: "#46B17B",
        errorBackground: "rgba(238, 86, 91, 0.1)",
        horizontalRule: "rgba(255, 255, 255, 0.15)",
        inputBackground: "rgba(255, 255, 255, 0.07)",
      },
    },
  },
};