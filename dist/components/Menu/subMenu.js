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
import React, { useContext, useState } from "react";
import Icon from "../Icon/icon";
import { MenuContext } from "./menu";
export default function SubMenu(props) {
    var _a = useState(false), menuOpen = _a[0], setOpen = _a[1];
    var index = props.index, title = props.title, className = props.className, children = props.children;
    var context = useContext(MenuContext);
    var classes = classNames("menu-item submenu-item", className, {
        "is-active": context.index === index,
        "is-opened": menuOpen,
        "is-vertical": context.mode === "vertical",
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var clickEvents = context.mode === "vertical"
        ? {
            onClick: handleClick,
        }
        : {};
    var hoverEvents = context.mode !== "vertical"
        ? {
            onMouseEnter: function (e) {
                handleMouse(e, true);
            },
            onMouseLeave: function (e) {
                handleMouse(e, false);
            },
        }
        : {};
    var renderChildren = function () {
        var subMenuClasses = classNames("viking-submenu", {
            "menu-opened": menuOpen,
        });
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === "MenuItem") {
                return React.cloneElement(childElement, {
                    index: "".concat(index, "-").concat(i),
                });
            }
            else {
                console.error("not a menuItem");
            }
        });
        return _jsx("ul", __assign({ className: subMenuClasses }, { children: childrenComponent }));
    };
    return (_jsxs("li", __assign({ className: classes }, hoverEvents, { children: [_jsxs("div", __assign({ className: "submenu-title", onClick: clickEvents.onClick }, { children: [title, _jsx(Icon, { icon: "angle-down", className: "arrow-icon" })] })), renderChildren()] }), index));
}
SubMenu.displayName = "SubMenu";
