const {override, fixBabelImports} = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
        libaryName: 'antd-mobile',
        style: 'css'
    })
)