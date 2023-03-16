var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
    var _a = useState(""), title = _a[0], setTitle = _a[1];
    useEffect(function () {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1", {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            },
        })
            .then(function (res) {
            console.log(res.data);
        });
    });
    return (_jsx("div", __assign({ className: "App" }, { children: _jsx("header", { className: "App-header" }) })));
}
export default App;
