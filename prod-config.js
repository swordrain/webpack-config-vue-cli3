{
    "mode": "production",
    "context": "/Users/lianli/Desktop/extract-vue3-webpack-config",
    "devtool": "source-map",
    "node": {
        "setImmediate": false,
        "process": "mock",
        "dgram": "empty",
        "fs": "empty",
        "net": "empty",
        "tls": "empty",
        "child_process": "empty"
    },
    "output": {
        "path": "/Users/lianli/Desktop/extract-vue3-webpack-config/dist",
        "filename": "js/[name].[contenthash:8].js",
        "publicPath": "/",
        "chunkFilename": "js/[name].[contenthash:8].js"
    },
    "resolve": {
        "alias": {
            "@": "/Users/lianli/Desktop/extract-vue3-webpack-config/src",
            "vue$": "vue/dist/vue.runtime.esm.js"
        },
        "extensions": [
            ".js",
            ".jsx",
            ".vue",
            ".json",
            ".ts",
            ".tsx"
        ],
        "modules": [
            "node_modules",
            "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules",
            "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/@vue/cli-service/node_modules"
        ]
    },
    "resolveLoader": {
        "modules": [
            "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/@vue/cli-plugin-typescript/node_modules",
            "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/@vue/cli-plugin-babel/node_modules",
            "node_modules",
            "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules",
            "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/@vue/cli-service/node_modules"
        ]
    },
    "module": {
        "noParse": {},
        "rules": [
            {
                "test": {},
                "use": [
                    {
                        "loader": "cache-loader",
                        "options": {
                            "cacheDirectory": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/.cache/vue-loader",
                            "cacheIdentifier": "da54fa0c"
                        }
                    },
                    {
                        "loader": "vue-loader",
                        "options": {
                            "compilerOptions": {
                                "preserveWhitespace": false
                            },
                            "cacheDirectory": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/.cache/vue-loader",
                            "cacheIdentifier": "da54fa0c"
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "url-loader",
                        "options": {
                            "limit": 4096,
                            "fallback": {
                                "loader": "file-loader",
                                "options": {
                                    "name": "img/[name].[hash:8].[ext]"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "file-loader",
                        "options": {
                            "name": "img/[name].[hash:8].[ext]"
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "url-loader",
                        "options": {
                            "limit": 4096,
                            "fallback": {
                                "loader": "file-loader",
                                "options": {
                                    "name": "media/[name].[hash:8].[ext]"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "url-loader",
                        "options": {
                            "limit": 4096,
                            "fallback": {
                                "loader": "file-loader",
                                "options": {
                                    "name": "fonts/[name].[hash:8].[ext]"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "pug-plain-loader"
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false,
                                    "indentedSyntax": true
                                }
                            }
                        ]
                    },
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false,
                                    "indentedSyntax": true
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false,
                                    "indentedSyntax": true
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "sass-loader",
                                "options": {
                                    "sourceMap": false,
                                    "indentedSyntax": true
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "less-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "less-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "less-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "less-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "oneOf": [
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "stylus-loader",
                                "options": {
                                    "sourceMap": false,
                                    "preferPathResolver": "webpack"
                                }
                            }
                        ]
                    },
                    {
                        "resourceQuery": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "stylus-loader",
                                "options": {
                                    "sourceMap": false,
                                    "preferPathResolver": "webpack"
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[name]_[local]_[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "stylus-loader",
                                "options": {
                                    "sourceMap": false,
                                    "preferPathResolver": "webpack"
                                }
                            }
                        ]
                    },
                    {
                        "use": [
                            {
                                "loader": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/mini-css-extract-plugin/dist/loader.js",
                                "options": {
                                    "publicPath": "../"
                                }
                            },
                            {
                                "loader": "css-loader",
                                "options": {
                                    "sourceMap": false,
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "postcss-loader",
                                "options": {
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "stylus-loader",
                                "options": {
                                    "sourceMap": false,
                                    "preferPathResolver": "webpack"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "test": {},
                "exclude": [
                    null
                ],
                "use": [
                    {
                        "loader": "cache-loader",
                        "options": {
                            "cacheDirectory": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/.cache/babel-loader",
                            "cacheIdentifier": "1c3fe57a"
                        }
                    },
                    {
                        "loader": "thread-loader"
                    },
                    {
                        "loader": "babel-loader"
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "cache-loader",
                        "options": {
                            "cacheDirectory": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/.cache/ts-loader",
                            "cacheIdentifier": "a2779ba4"
                        }
                    },
                    {
                        "loader": "thread-loader"
                    },
                    {
                        "loader": "babel-loader"
                    },
                    {
                        "loader": "ts-loader",
                        "options": {
                            "transpileOnly": true,
                            "appendTsSuffixTo": [
                                "\\.vue$"
                            ],
                            "happyPackMode": true
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "cache-loader",
                        "options": {
                            "cacheDirectory": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/.cache/ts-loader",
                            "cacheIdentifier": "a2779ba4"
                        }
                    },
                    {
                        "loader": "thread-loader"
                    },
                    {
                        "loader": "babel-loader"
                    },
                    {
                        "loader": "ts-loader",
                        "options": {
                            "transpileOnly": true,
                            "happyPackMode": true,
                            "appendTsxSuffixTo": [
                                "\\.vue$"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    "optimization": {
        "minimizer": [
            {
                "options": {
                    "test": {},
                    "extractComments": false,
                    "sourceMap": true,
                    "cache": true,
                    "parallel": true,
                    "uglifyOptions": {
                        "compress": {
                            "arrows": false,
                            "collapse_vars": false,
                            "comparisons": false,
                            "computed_props": false,
                            "hoist_funs": false,
                            "hoist_props": false,
                            "hoist_vars": false,
                            "inline": false,
                            "loops": false,
                            "negate_iife": false,
                            "properties": false,
                            "reduce_funcs": false,
                            "reduce_vars": false,
                            "switches": false,
                            "toplevel": false,
                            "typeofs": false,
                            "booleans": true,
                            "if_return": true,
                            "sequences": true,
                            "unused": true,
                            "conditionals": true,
                            "dead_code": true,
                            "evaluate": true
                        },
                        "output": {
                            "comments": {}
                        },
                        "mangle": {
                            "safari10": true
                        }
                    }
                }
            }
        ],
        "splitChunks": {
            "cacheGroups": {
                "vendors": {
                    "name": "chunk-vendors",
                    "test": {},
                    "priority": -10,
                    "chunks": "initial"
                },
                "common": {
                    "name": "chunk-common",
                    "minChunks": 2,
                    "priority": -20,
                    "chunks": "initial",
                    "reuseExistingChunk": true
                }
            }
        }
    },
    "plugins": [
        {},
        {
            "definitions": {
                "process.env": {
                    "NODE_ENV": "\"production\"",
                    "BASE_URL": "\"/\""
                }
            }
        },
        {
            "options": {},
            "pathCache": {},
            "fsOperations": 0,
            "primed": false
        },
        {
            "compilationSuccessInfo": {},
            "shouldClearConsole": true,
            "formatters": [
                null,
                null,
                null,
                null
            ],
            "transformers": [
                null,
                null,
                null,
                null
            ]
        },
        {
            "options": {
                "filename": "css/[name].[contenthash:8].css",
                "chunkFilename": "css/[name].[contenthash:8].css"
            }
        },
        {
            "options": {
                "sourceMap": false,
                "cssnanoOptions": {
                    "preset": [
                        "default",
                        {
                            "mergeLonghand": false,
                            "cssDeclarationSorter": false
                        }
                    ]
                }
            }
        },
        {
            "options": {
                "context": null,
                "hashFunction": "md4",
                "hashDigest": "hex",
                "hashDigestLength": 4
            }
        },
        {},
        {
            "options": {
                "template": "/Users/lianli/Desktop/extract-vue3-webpack-config/public/index.html",
                "filename": "index.html",
                "hash": false,
                "inject": true,
                "compile": true,
                "favicon": false,
                "minify": {
                    "removeComments": true,
                    "collapseWhitespace": true,
                    "removeAttributeQuotes": true,
                    "collapseBooleanAttributes": true,
                    "removeScriptTypeAttributes": true
                },
                "cache": true,
                "showErrors": true,
                "chunks": "all",
                "excludeChunks": [],
                "chunksSortMode": "auto",
                "meta": {},
                "title": "Webpack App",
                "xhtml": false
            }
        },
        {
            "options": {
                "iconPaths": {
                    "favicon32": "img/icons/favicon-32x32.png",
                    "favicon16": "img/icons/favicon-16x16.png",
                    "appleTouchIcon": "img/icons/apple-touch-icon-152x152.png",
                    "maskIcon": "img/icons/safari-pinned-tab.svg",
                    "msTileImage": "img/icons/msapplication-icon-144x144.png"
                },
                "name": "extract-vue3-webpack-config",
                "themeColor": "#4DBA87",
                "msTileColor": "#000000",
                "appleMobileWebAppCapable": "no",
                "appleMobileWebAppStatusBarStyle": "default",
                "assetsVersion": "",
                "manifestPath": "manifest.json"
            }
        },
        {
            "options": {
                "rel": "preload",
                "include": "initial",
                "excludeHtmlNames": [],
                "fileBlacklist": [
                    {},
                    {}
                ]
            }
        },
        {
            "options": {
                "rel": "prefetch",
                "include": "asyncChunks",
                "excludeHtmlNames": [],
                "fileBlacklist": [
                    {}
                ]
            }
        },
        {},
        {
            "config": {
                "chunks": [],
                "exclude": [
                    {},
                    {},
                    {},
                    {}
                ],
                "excludeChunks": [],
                "importsDirectory": "",
                "importScripts": [],
                "importWorkboxFrom": "cdn",
                "precacheManifestFilename": "precache-manifest.[manifestHash].js",
                "swDest": "service-worker.js",
                "cacheId": "extract-vue3-webpack-config"
            }
        },
        {
            "options": {
                "vue": true,
                "tslint": true,
                "formatter": "codeframe",
                "checkSyntacticErrors": true
            },
            "tsconfig": "./tsconfig.json",
            "tslint": "./tslint.json",
            "watch": [],
            "ignoreDiagnostics": [],
            "ignoreLints": [],
            "logger": {},
            "silent": false,
            "async": true,
            "checkSyntacticErrors": true,
            "workersNumber": 1,
            "memoryLimit": 2048,
            "useColors": true,
            "colors": {
                "level": 2,
                "enabled": true
            },
            "watchPaths": [],
            "isWatching": false,
            "checkDone": false,
            "compilationDone": false,
            "diagnostics": [],
            "lints": [],
            "typescriptVersion": "3.1.3",
            "tslintVersion": "5.11.0",
            "vue": true
        },
        {
            "type": "build",
            "watching": false,
            "autoDisconnect": true
        },
        {
            "opts": {
                "analyzerMode": "static",
                "analyzerHost": "127.0.0.1",
                "analyzerPort": 8888,
                "reportFilename": "report.html",
                "defaultSizes": "parsed",
                "openAnalyzer": false,
                "generateStatsFile": false,
                "statsFilename": "report.json",
                "statsOptions": null,
                "excludeAssets": null,
                "logLevel": "warn",
                "startAnalyzer": true
            },
            "server": null,
            "logger": {
                "activeLevels": {}
            }
        }
    ],
    "entry": {
        "app": [
            "./src/main.ts"
        ]
    }
}