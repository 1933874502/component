import classNames from "classnames"
import React, { FunctionComponentElement, useContext, useState } from "react"
import Icon from "../Icon/icon"
import { MenuContext } from "./menu"
import { MenuItemProps } from "./menuItem"

export interface SubMenuProps {
  index?: string
  title: string
  className?: string
  children: React.ReactNode
}

export default function SubMenu(props: SubMenuProps) {
  const [menuOpen, setOpen] = useState(false)
  const { index, title, className, children } = props
  const context = useContext(MenuContext)
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
    "is-opened": menuOpen,
    "is-vertical": context.mode === "vertical",
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }
  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {}
  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true)
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false)
          },
        }
      : {}
  const renderChildren = () => {
    const subMenuClasses = classNames("viking-submenu", {
      "menu-opened": menuOpen,
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        })
      } else {
        console.error("not a menuItem")
      }
    })
    return <ul className={subMenuClasses}>{childrenComponent}</ul>
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" onClick={clickEvents.onClick}>
        {title}
        <Icon icon="angle-down" className="arrow-icon"></Icon>
      </div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = "SubMenu"
