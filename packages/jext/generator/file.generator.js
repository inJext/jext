"use strict";
exports.__esModule = true;
exports.generator = exports.fileEditor = exports.fileGenerator = void 0;
var fs = require("fs");
var fileGenerator = function (src, dest) {
    try {
        if (!fs.existsSync(dest))
            fs.mkdirSync(dest, { recursive: true });
        fs.copyFileSync(src, dest);
    }
    catch (err) {
        throw err;
    }
    return undefined;
};
exports.fileGenerator = fileGenerator;
var fileEditor = function (src, from, to) {
    try {
        var reg = new RegExp('\\b(' + from + ')\\b', 'g');
        var data = fs.readFileSync(src, { encoding: 'utf-8' })
            .toString()
            .replace(reg, to);
        var buff = Buffer.from(data, 'utf-8');
        fs.writeFileSync(src, buff);
    }
    catch (err) {
        throw err;
    }
    return undefined;
};
exports.fileEditor = fileEditor;
// need to find a way to set the path from the current dir
var generator = function (type, name, dest) {
    var mode = 'default';
    if (dest)
        mode = 'personal';
    if (mode === 'default')
        dest = "./" + type + "/" + name + "." + type + ".tsx";
    return undefined;
};
exports.generator = generator;
// return path to the needed template
var templateSelector = function (type) {
    var componentList = ['page', 'button', 'nav', 'text', 'default'];
    for (var i in componentList) {
        console.log(i);
    }
    return undefined;
};
console.log(templateSelector('button'));
