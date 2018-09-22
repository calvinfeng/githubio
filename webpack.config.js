module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./index.tsx",
    output: {
        path: __dirname,
        filename: "index.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }
        ]
    }
};