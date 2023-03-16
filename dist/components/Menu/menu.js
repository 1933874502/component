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
import classNames from "classnames";
import React, { createContext, useState } from "react";
export var MenuContext = createContext({ index: "0" });
function Menu(props) {
    var className = props.className, mode = props.mode, style = props.style, defaultIndex = props.defaultIndex, children = props.children, onSelect = props.onSelect;
    var _a = useState(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var handldeClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : "0",
        onSelect: handldeClick,
        mode: mode,
    };
    var classes = classNames("menu", className, {
        "menu-vertical": mode === "vertical",
        "menu-horizontal": mode !== "vertical",
    });
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                return React.cloneElement(childElement, {
                    index: index.toString(),
                });
            }
            else {
                console.error("not a menuItem");
            }
        });
    };
    return (_jsx("ul", __assign({ className: classes, style: style, "data-testid": "test-menu" }, { children: _jsx(MenuContext.Provider, __assign({ value: passedContext }, { children: renderChildren() })) })));
}
Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal",
};
export default Menu;
