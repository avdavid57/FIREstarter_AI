const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add any custom Metro configuration here if needed
// For example, if you have custom asset extensions or resolvers:
// config.resolver.assetExts.push('myasset');

module.exports = config; 