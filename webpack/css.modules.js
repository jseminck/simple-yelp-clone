module.exports = function configureCssModules(config, isDev, src, modules) {
    const cssModulesNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;
    const matchCssLoaders = /(^|!)(css-loader)($|!)/;
    const cssloader = findLoader(config.module.loaders, matchCssLoaders);

    const newloader = Object.assign({}, cssloader, {
        test: /\.module\.css$/,
        include: [src],
        loader: cssloader.loader.replace(matchCssLoaders, `$1$2?modules&localIdentName=${cssModulesNames}$3`)
    });

    config.module.loaders.push(newloader);
    cssloader.test = new RegExp(`[^module]${cssloader.test.source}`)
    cssloader.loader = newloader.loader;

    config.module.loaders.push({
        test: /\.css$/,
        include: [modules],
        loader: 'style!css'
    });

    return config;
};

function findLoader(loaders, match) {
    const found = loaders.filter(l => l && l.loader && l.loader.match(match));
    return found ? found[0] : null;
}