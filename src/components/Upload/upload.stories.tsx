import { ComponentMeta, ComponentStory } from "@storybook/react"
import Upload, { UploadFile } from "./upload"
import { action } from "@storybook/addon-actions"

export default {
  title: "Upload",
  component: Upload,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Upload>

const defaultFileList: UploadFile[] = [
  { uid: "1", size: 1234, name: "hello.md", status: "uploading", percent: 30 },
  { uid: "2", size: 1234, name: "he.md", status: "success", percent: 30 },
  { uid: "3", size: 1234, name: "hell.md", status: "error", percent: 30 },
]
const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />

export const SimpleUpload = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleUpload.args = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange: action("changed"),
  defaultFileList: defaultFileList,
  onRemove: action("removed"),
}
