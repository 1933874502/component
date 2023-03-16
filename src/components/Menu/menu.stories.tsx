import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Menu from "./menu"
import SubMenu from "./subMenu"
import MenuItem from "./menuItem"

export default {
  title: "Menu",
  id: "Menu",
  component: Menu,
  subcomponents: { SubMenu: SubMenu, Item: MenuItem },
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <SubMenu title="下拉选项">
      <MenuItem>下拉选项一</MenuItem>
      <MenuItem>下拉选项二</MenuItem>
    </SubMenu>
  </Menu>
)

export const DefaultMenu = Template.bind({})
DefaultMenu.storyName = "默认Menu"

export const ClickMenu = Template.bind({})
ClickMenu.args = {
  defaultIndex: "1",
  mode: "vertical",
}
ClickMenu.storyName = "纵向的Menu"
