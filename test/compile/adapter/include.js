const assert = require('assert');
const include = require('../../../src/compile/adapter/include');
const path = require('path');


describe('#compile/adapter/include', () => {
    it('read file', () => {
        const root = path.resolve(__dirname, '..', '..', 'res');;
        const base = path.resolve(root, 'index.html');
        const data = {};
        assert.deepEqual('hello world', include('./file.html', data, base, '/'));
        assert.deepEqual('hello world', include('./file.html', data, base, root));
        assert.deepEqual('hello world', include('file.html', data, base, '/'));
        assert.deepEqual('hello world', include('file.html', data, base, root));
    });
});