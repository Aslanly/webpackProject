import { BuildOptions } from "./types/config";
import webpack from 'webpack';
import { buildPlaguns } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenhash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlaguns(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}