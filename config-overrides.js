const {override, fixBabelImports} = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
        libaryName: 'antd-mobile',
        style: 'css'
    })
)
// const {injectBabelPlugin}  =  require('react-app-rewired')
// module.exports = function override (config, env) {
//     config = injectBabelPlugin( ['import', {
//         librayName: 'antd-mobile',
//         style: 'css',

//     }], config)
//     return config
// }
