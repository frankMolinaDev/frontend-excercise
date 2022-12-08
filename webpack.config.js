import path from "path";
import {fileURLToPath} from "url";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webpackConfig = (env) => ({
    entry: "./src/index.jsx",
    ...(env.production || !env.development ? {} : {devtool: "eval-source-map"}),
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            {test: /\.css$/i, use: ["style-loader", "css-loader"]},
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                },
                resolve: {
                    fullySpecified: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development
        }),
        new ESLintPlugin({files: "./src/**/*.{js,jsx}"})
    ]
});

export default webpackConfig;
