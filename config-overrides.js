const { override, addDecoratorsLegacy,fixBabelImports  } = require('customize-cra');
module.exports = override(
 addDecoratorsLegacy(),
 fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  })
);