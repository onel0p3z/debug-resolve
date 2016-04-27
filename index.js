(function () {
    'use strict';

    /**
     * debugResolver:
     * Creates a debug 'namespace' when called with the values
     * __filename and your app's rootDir path or process.cwd().
     *
     * ie:
     * var debug = require('debug')(require('debug-resolver')(__filename, process.cwd()));
     * @param {string} filename from __filename
     * @param {string} rootDir app's rootDir or from process.cwd()
     * @return {string} string representation 'namespace' for debug
     */
    module.exports = function debugResolver (filename, rootDir) {
        if (!filename || filename === '') {
            throw new Error('Please provide  __filename');
        }

        if (!rootDir || rootDir === '') {
            throw new Error('Please provide root path of your app or process.cwd()');
        }

        return filename.replace('.js', '').replace(rootDir, '').replace(/\//g, ':').replace(/^:/, '');
    }
})();

