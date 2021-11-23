import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL || 'https://127.0.0:3000',
        API_URL: process.env.API_URL || 'https://dev-novicell-geekchallenge.s1.umbraco.io/'
    },
    css: [
        'normalize.css/normalize.css',
        '@/assets/css/master.css'
    ],
    build: {
        postcss: {
            postcssOptions: {
                config: {
                    stage: 0
                },
                plugins: {
                    'postcss-import': {},
                    'postcss-nested': {},
                    'postcss-preset-env': {
                        stage: 0, // default stage is 2
                        preserve: false,
                        importFrom: [
                            'assets/css/_variables.css'
                        ],
                        autoprefixer: {
                            grid: true
                        },
                        features: {
                            'color-mod-function': { unresolved: 'warn' },
                            'custom-media-queries': {},
                        },
                        browsers: ['>= 5% in DK', 'not ie 11']
                    },
                    'cssnano': {
                        preset: ["default", {
                            autoprefixer: false, // preset-env does this
                            discardComments: {
                                removeAll: true
                            },
                            mergeLonghand: true,
                            colormin: false,
                            zindex: false,
                            discardUnused: {
                                fontFace: false
                            }
                        }],
                    },
                    'postcss-reporter': {
                        clearReportedMessages: true
                    },
                }
            }
        }
    },
});