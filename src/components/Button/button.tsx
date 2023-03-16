import classNames from "classnames"
import React from "react"

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}
export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}
interface BaseButtonProps {
  className?: string
  /**设置 Button 的禁用 */
  disabled?: boolean
  /**设置 Button 的尺寸 */
  size?: "lg" | "sm"
  /**设置 Button 的类型 */
  btnType?: "primary" | "default" | "danger" | "link"
  children: React.ReactNode
  href?: string
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
function Button(props: ButtonProps) {
  const { btnType, className, disabled, size, children, href, ...restProps } =
    props
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  })
  if (btnType === ButtonType.Link) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}
export default Button
