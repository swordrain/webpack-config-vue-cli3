[VueLoaderPlugin {},
    DefinePlugin { definitions: { 'process.env': [Object] } },
    CaseSensitivePathsPlugin { options: {}, pathCache: {}, fsOperations: 0, primed: false },
    FriendlyErrorsWebpackPlugin {
        compilationSuccessInfo: {},
        onErrors: undefined,
        shouldClearConsole: true,
        formatters:
            [[Function: format],
            [Function: format],
            [Function: format],
            [Function]],
        transformers:
            [[Function: transform],
            [Function: transform],
            [Function: transform],
            [Function]]
    },
    HotModuleReplacementPlugin {
        options: {},
        multiStep: undefined,
        fullBuildTimeout: 200,
        requestTimeout: 10000
    },
    NoEmitOnErrorsPlugin {},
    ProgressPlugin { profile: undefined, handler: undefined },
    HtmlWebpackPlugin {
        options:
        {
            template: '/Users/lianli/Desktop/extract-vue3-webpack-config/public/index.html',
            templateParameters: [Function: templateParameters],
            filename: 'index.html',
            hash: false,
            inject: true,
            compile: true,
            favicon: false,
            minify: false,
            cache: true,
            showErrors: true,
            chunks: 'all',
            excludeChunks: [],
            chunksSortMode: 'auto',
            meta: {},
            title: 'Webpack App',
            xhtml: false
        }
    },
    HtmlPwaPlugin {
        options:
        {
            iconPaths: [Object],
            name: 'extract-vue3-webpack-config',
            themeColor: '#4DBA87',
            msTileColor: '#000000',
            appleMobileWebAppCapable: 'no',
            appleMobileWebAppStatusBarStyle: 'default',
            assetsVersion: '',
            manifestPath: 'manifest.json'
        }
    },
    PreloadPlugin {
        options:
        {
            rel: 'preload',
            include: 'initial',
            excludeHtmlNames: [],
            fileBlacklist: [Array]
        }
    },
    PreloadPlugin {
        options:
        {
            rel: 'prefetch',
            include: 'asyncChunks',
            excludeHtmlNames: [],
            fileBlacklist: [Array]
        }
    },
    { apply: [Function: apply] },
    ForkTsCheckerWebpackPlugin {
        options:
        {
            vue: true,
            tslint: true,
            formatter: 'codeframe',
            checkSyntacticErrors: false
        },
        tsconfig: './tsconfig.json',
        tslint: './tslint.json',
        watch: [],
        ignoreDiagnostics: [],
        ignoreLints: [],
        logger:
            Console {
        log: [Function: bound consoleCall],
        info: [Function: bound consoleCall],
        warn: [Function: bound consoleCall],
        error: [Function: bound consoleCall],
        dir: [Function: bound consoleCall],
        time: [Function: bound consoleCall],
        timeEnd: [Function: bound consoleCall],
        trace: [Function: bound consoleCall],
        assert: [Function: bound consoleCall],
        clear: [Function: bound consoleCall],
        count: [Function: bound consoleCall],
        countReset: [Function: bound countReset],
        group: [Function: bound consoleCall],
        groupCollapsed: [Function: bound consoleCall],
        groupEnd: [Function: bound consoleCall],
        Console: [Function: Console],
        debug: [Function: debug],
        dirxml: [Function: dirxml],
        table: [Function: table],
        markTimeline: [Function: markTimeline],
        profile: [Function: profile],
        profileEnd: [Function: profileEnd],
        timeline: [Function: timeline],
        timelineEnd: [Function: timelineEnd],
        timeStamp: [Function: timeStamp],
        context: [Function: context],
        [Symbol(counts)]: Map {} },
    silent: false,
    async: true,
    checkSyntacticErrors: false,
    workersNumber: 1,
    memoryLimit: 2048,
    useColors: true,
    colors: Chalk { level: 2, enabled: true },
    formatter: [Function: codeframeFormatter],
    tsconfigPath: undefined,
    tslintPath: undefined,
    watchPaths: [],
    compiler: undefined,
    started: undefined,
    elapsed: undefined,
    cancellationToken: undefined,
    isWatching: false,
    checkDone: false,
    compilationDone: false,
    diagnostics: [],
    lints: [],
    emitCallback: [Function: noopEmitCallback],
    doneCallback: [Function: doneCallback],
    typescriptVersion: '3.1.3',
    tslintVersion: '5.11.0',
    vue: true }]