import { ComponentMeta } from "@storybook/react"
import Button from "../Button/button"
import Input from "../Input/input"
import Form from "./form"

import FormItem from "./formItem"

export default {
  title: "Form",
  id: "Form",
  component: Form,
  subcomponents: { FormItem: FormItem },
  decorators: [
    (Story) => (
      <div style={{ width: "500px" }}>
        <Story />
      </div>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Form>

// const Template: ComponentStory<typeof Form> = (args) => (
//   <Form {...args}>
//     <FormItem label="用户名">
//       <Input />
//     </FormItem>
//     <FormItem label="密码">
//       <Input type="password" />
//     </FormItem>
//     <FormItem>
//       <Input placeholder="no-lable" />
//     </FormItem>
//     <div className="viking-form-submit-area">
//       <Button type="submit" btnType="primary">
//         登陆
//       </Button>
//     </div>
//   </Form>
// )
// export const DefaultForm = Template.bind({})
// DefaultForm.storyName = "默认Form"

export const ABasicForm = () => {
  return (
    <Form>
      <FormItem label="用户名">
        <Input />
      </FormItem>
      <FormItem label="密码">
        <Input type="password" />
      </FormItem>
      <FormItem>
        <Input placeholder="no-lable" />
      </FormItem>
      <div className="viking-form-submit-area">
        <Button type="submit" btnType="primary">
          登陆
        </Button>
      </div>
    </Form>
  )
}
ABasicForm.storyName = "基本的登陆表单"
