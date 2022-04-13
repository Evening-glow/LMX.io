const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#1DA57A',
                            '@border-radius-base': '3px',
                            '@heading-color': 'rgba(140, 194, 105, 0.85)',
                            // '@font-size-base': '14px',
                            '@text-color': 'rgba(0, 0, 0, 0.65)',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};