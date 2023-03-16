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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
export function FormItem(props) {
    var label = props.label, children = props.children;
    var rowClass = classNames("viking-row", {
        "viking-row-no-label": !label,
    });
    return (_jsxs("div", __assign({ className: rowClass }, { children: [label && (_jsx("div", __assign({ className: "viking-form-item-label" }, { children: _jsx("label", __assign({ title: label }, { children: label })) }))), _jsx("div", __assign({ className: "viking-form-item" }, { children: children }))] })));
}
export default FormItem;
