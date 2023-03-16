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
export function Form(props) {
    var name = props.name, children = props.children;
    return (_jsx("form", __assign({ name: name, className: "viking-form" }, { children: children })));
}
Form.defaultProps = {
    name: "viking_form",
};
export default Form;
