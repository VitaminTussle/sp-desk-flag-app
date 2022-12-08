module.exports = {
    webpack: {
        configure: {
            resolve: {
                fallback: {
                    "util": require.resolve("util"),
                    "path": require.resolve("path-browserify"),
                    "os": require.resolve("os-browserify"),
                    "fs": false
                }
            },
            externals: {
                "node-hid": "commonjs node-hid"
            }
        }
    }
};