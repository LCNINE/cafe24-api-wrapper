"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryMapToString = queryMapToString;
function queryMapToString(queryMap) {
    if (queryMap.size === 0)
        return "";
    let pairs = [];
    queryMap.forEach((value, key) => {
        if (Array.isArray(value)) {
            pairs.push(`${key}=${value.join(",")}`);
        }
        else {
            pairs.push(`${key}=${value}`);
        }
    });
    return "?" + pairs.join("&");
}
