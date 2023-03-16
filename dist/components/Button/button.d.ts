import React from "react";
export declare enum ButtonSize {
    Large = "lg",
    Small = "sm"
}
export declare enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link"
}
interface BaseButtonProps {
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button 的尺寸 */
    size?: "lg" | "sm";
    /**设置 Button 的类型 */
    btnType?: "primary" | "default" | "danger" | "link";
    children: React.ReactNode;
    href?: string;
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
declare function Button(props: ButtonProps): JSX.Element;
declare namespace Button {
    var defaultProps: {
        disabled: boolean;
        btnType: ButtonType;
    };
}
export default Button;
