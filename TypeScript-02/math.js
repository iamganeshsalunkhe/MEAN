"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = exports.Math = void 0;
var Math = /** @class */ (function () {
    function Math(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    Math.prototype.add = function (p1, p2) {
        console.log(p1 + p2);
    };
    Math.prototype.subtract = function (p1, p2) {
        console.log(p1 - p2);
    };
    Math.prototype.multiply = function (p1, p2) {
        console.log(p1 * p2);
    };
    Math.prototype.divide = function (p1, p2) {
        console.log(p1 / p2);
    };
    return Math;
}());
exports.Math = Math;
exports.pi = 3.14;
