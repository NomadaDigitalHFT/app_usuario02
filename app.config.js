export default {
    expo: {
      name: "App_Usuario02",
      slug: "App_Usuario02",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./src/assets/icons/icon.png",
      userInterfaceStyle: "light",
      newArchEnabled: true,
      assetBundlePatterns: ["**/*"],
      splash: {
        image: "./src/assets/icons/logotxtp.jpg",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      ios: {
        supportsTablet: true,
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./src/assets/icons/icon.png",
          backgroundColor: "#ffffff",
        },
      },
      web: {
        favicon: "./public/favicon.png",
      },
    },
  };
  