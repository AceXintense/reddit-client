'use strict';

// This file is a helper for deploying the application to electron.

let fs = require('fs');

exports.removeFluff = function () {

    let html;

    fs.readFile(__dirname + '/../dist/index.html', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        html = data.replaceAll("/static", "static");
        fs.writeFileSync(__dirname + '/../dist/index.html', html, function (err, data) {
            if (err) {
                return console.log(err);
            }
        });
    });

};

String.prototype.replaceAll = function(searchStr, replaceStr) {
    var str = this;

    // no match exists in string?
    if(str.indexOf(searchStr) === -1) {
        // return string
        return str;
    }

    // replace and remove first match, and do another recursirve search/replace
    return (str.replace(searchStr, replaceStr)).replaceAll(searchStr, replaceStr);
};