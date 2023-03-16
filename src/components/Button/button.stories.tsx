import { ComponentMeta, ComponentStory } from "@storybook/react"
import Button from "./button"

export default {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>默认按钮</Button>
)
Default.storyName = "默认按钮样式"

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ADefault = Template.bind({})
ADefault.args = {
  children: "Default Button",
}
ADefault.storyName = "默认按钮样式"
export const Large = Template.bind({})
Large.args = {
  size: "lg",
  children: "Large Button",
}
export const Small = Template.bind({})
Small.args = {
  size: "sm",
  children: "Small Button",
}
export const Primary = Template.bind({})
Primary.args = {
  btnType: "primary",
  children: "Primary Button",
}
export const Danger = Template.bind({})
Danger.args = {
  btnType: "danger",
  children: "Danger Button",
}
export const Link = Template.bind({})
Link.args = {
  btnType: "link",
  children: "Link Button",
  href: "https://google.com",
}

// export const ButtonWithSize: ComponentStory<typeof Button> = (args) => (
//   <>
//     <Button size="lg" {...args}>
//       large button
//     </Button>
//     <Button size="sm" {...args}>
//       small button
//     </Button>
//   </>
// )
// ButtonWithSize.storyName = "不同尺寸的按钮"
// export const ButtonWithType: ComponentStory<typeof Button> = (args) => (
//   <>
//     <Button btnType="primary" {...args}>
//       primary button
//     </Button>
//     <Button btnType="danger" {...args}>
//       danger button
//     </Button>
//     <Button btnType="link" href="http://www.baidu.com" {...args}>
//       link button
//     </Button>
//   </>
// )
// ButtonWithType.storyName = "不同类型的按钮"
