import classNames from "classnames"
import React, { createContext, useState } from "react"
import { MenuItemProps } from "./menuItem"

type MenuMode = "horizontal" | "vertical"
export interface MenuProps {
  defaultIndex?: string
  className?: string
  mode?: "horizontal" | "vertical"
  style?: React.CSSProperties
  children: React.ReactNode
  onSelect?: (selectedIndex: string) => void
}
interface IMenuContext {
  index: string
  onSelect?: (selectedIndex: string) => void
  mode?: MenuMode
}
export const MenuContext = createContext<IMenuContext>({ index: "0" })
function Menu(props: MenuProps) {
  const { className, mode, style, defaultIndex, children, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const handldeClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handldeClick,
    mode: mode,
  }
  const classes = classNames("menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  })

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        })
      } else {
        console.error("not a menuItem")
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
}
export default Menu
