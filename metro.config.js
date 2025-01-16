const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Agregar extensiones personalizadas para activos
  config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg");
  config.resolver.assetExts.push("ttf", "otf", "png", "jpg", "jpeg");
  config.resolver.sourceExts.push("jsx", "js", "json", "ts", "tsx", "svg");
  

  // Resolver manualmente módulos específicos para stylis
  config.resolver.extraNodeModules = {
    ...config.resolver.extraNodeModules,
    stylis: require.resolve("stylis"),
    "styled-components": require.resolve("styled-components"),
  };

  // Optimización adicional para mejorar el soporte con Hermes (si aplica)
   // Transformador para SVGs
   config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };

  return config;
})();
