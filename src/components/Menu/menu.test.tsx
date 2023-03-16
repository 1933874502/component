import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import Menu, { MenuProps } from "./menu"
import MenuItem from "./menuItem"
import SubMenu from "./subMenu"

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "test",
  children: "0",
}
const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
  children: "1",
}
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyz</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
      </SubMenu>
    </Menu>
  )
}
let menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement
describe("test menu and menuItem", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(generateMenu(testProps))
    menuElement = screen.getByTestId("test-menu")
    activeElement = screen.getByText("active")
    disabledElement = screen.getByText("disabled")
  })
  it("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass("menu test")
    // eslint-disable-next-line testing-library/no-node-access

    // eslint-disable-next-line testing-library/no-node-access
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(4)
    expect(activeElement).toHaveClass("menu-item is-active")
    expect(disabledElement).toHaveClass("menu-item is-disabled")
  })
  it("click items should change active and call the right callback", () => {
    const thirdItem = screen.getByText("xyz")
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass("is-active")
    expect(activeElement).not.toHaveClass("is-active")
    expect(testProps.onSelect).toHaveBeenCalledWith("2")
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass("is-active")
    expect(testProps.onSelect).not.toHaveBeenCalledWith("1")
  })
  it("should show dropdown items when hover on subMenu", () => {
    cleanup()
    render(generateMenu(testVerProps))
    const menuElement = screen.getByTestId("test-menu")
    expect(menuElement).toHaveClass("menu-vertical")
  })
})
