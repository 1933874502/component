import React from "react";
type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: "horizontal" | "vertical";
    style?: React.CSSProperties;
    children: React.ReactNode;
    onSelect?: (selectedIndex: string) => void;
}
interface IMenuContext {
    index: string;
    onSelect?: (selectedIndex: string) => void;
    mode?: MenuMode;
}
export declare const MenuContext: React.Context<IMenuContext>;
declare function Menu(props: MenuProps): JSX.Element;
declare namespace Menu {
    var defaultProps: {
        defaultIndex: string;
        mode: string;
    };
}
export default Menu;
