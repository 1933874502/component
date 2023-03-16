import React from "react";
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
declare function MenuItem(props: MenuItemProps): JSX.Element;
declare namespace MenuItem {
    var displayName: string;
}
export default MenuItem;
