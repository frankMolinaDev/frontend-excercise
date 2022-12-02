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
        extensions: [".js", ".jsx"]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            {test: /\.css$/, use: "css-loader"},
            {
                test: /\.?jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
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
            // "process.env.NAME": JSON.stringify(require("./package.json").name),
            // "process.env.VERSION": JSON.stringify(require("./package.json").version)
        }),
        new ESLintPlugin({files: "./src/**/*.{js,jsx}"})
    ]
});

export default webpackConfig;
