

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  const updatedSourceExists=[...sourceExts,'jsx',"ts","tsx"]
  return {
    transformer: {
        getTransformOptions:async() => ({
            transforme:{
                experimentalImportSupport:false,
                initialRequires:true,
            }

        }),
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...updatedSourceExists, "svg"]
    }
  };
})();
