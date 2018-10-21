{
    "mode": "development",
        "context": "/Users/lianli/Desktop/extract-vue3-webpack-config",
            "devtool": "cheap-module-eval-source-map",
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
            "filename": "[name].js",
                "publicPath": "/",
                    "globalObject": "this"
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
        "noParse": { },
        "rules": [
            {
                "test": {},
                "use": [
                    {
                        "loader": "cache-loader",
                        "options": {
                            "cacheDirectory": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/.cache/vue-loader",
                            "cacheIdentifier": "7eae8eb1"
                        }
                    },
                    {
                        "loader": "vue-loader",
                        "options": {
                            "compilerOptions": {
                                "preserveWhitespace": false
                            },
                            "cacheDirectory": "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/.cache/vue-loader",
                            "cacheIdentifier": "7eae8eb1"
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                                "loader": "vue-style-loader",
                                "options": {
                                    "sourceMap": false,
                                    "shadowMode": false
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
                            "cacheIdentifier": "1163bbd3"
                        }
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
                            "cacheIdentifier": "401271e7"
                        }
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
                            "happyPackMode": false
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
                            "cacheIdentifier": "401271e7"
                        }
                    },
                    {
                        "loader": "babel-loader"
                    },
                    {
                        "loader": "ts-loader",
                        "options": {
                            "transpileOnly": true,
                            "happyPackMode": false,
                            "appendTsxSuffixTo": [
                                "\\.vue$"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    "plugins": [
        {},
        {
            "definitions": {
                "process.env": {
                    "NODE_ENV": "\"development\"",
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
            "options": {},
            "fullBuildTimeout": 200,
            "requestTimeout": 10000
        },
        {},
        {},
        {
            "options": {
                "template": "/Users/lianli/Desktop/extract-vue3-webpack-config/public/index.html",
                "filename": "index.html",
                "hash": false,
                "inject": true,
                "compile": true,
                "favicon": false,
                "minify": false,
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
            "options": {
                "vue": true,
                "tslint": true,
                "formatter": "codeframe",
                "checkSyntacticErrors": false
            },
            "tsconfig": "./tsconfig.json",
            "tslint": "./tslint.json",
            "watch": [],
            "ignoreDiagnostics": [],
            "ignoreLints": [],
            "logger": {},
            "silent": false,
            "async": true,
            "checkSyntacticErrors": false,
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
        }
    ],
        "entry": {
        "app": [
            "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/webpack-dev-server/client/index.js?http://192.168.10.101:8080/sockjs-node",
            "/Users/lianli/Desktop/extract-vue3-webpack-config/node_modules/webpack/hot/dev-server.js",
            "./src/main.ts"
        ]
    },
    "devServer": {
        "clientLogLevel": "none",
            "historyApiFallback": {
            "disableDotRule": true,
                "rewrites": [
                    {
                        "from": {},
                        "to": "/index.html"
                    }
                ]
        },
        "contentBase": "/Users/lianli/Desktop/extract-vue3-webpack-config/public",
            "watchContentBase": true,
                "hot": true,
                    "quiet": true,
                        "compress": false,
                            "publicPath": "/",
                                "overlay": {
            "warnings": false,
                "errors": true
        },
        "https": false
    }
}