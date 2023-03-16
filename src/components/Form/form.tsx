import { ReactNode } from "react"

export interface FormProps {
  /**表单名称，会作为表单字段 id 前缀使用 */
  name?: string
  /**表单默认值，只有初始化以及重置时生效 */
  initialValues?: Record<string, any>
  children?: ReactNode
  /**提交表单且数据验证成功后回调事件 */
  onFinish?: (values: Record<string, any>) => void
  /**提交表单且数据验证失败后回调事件 */
  //onFinishFailed?: (values: Record<string, any>, errors: Record<string, ValidateError[]>) => void;
}

export function Form(props: FormProps) {
  const { name, children } = props
  return (
    <form name={name} className="viking-form">
      {children}
    </form>
  )
}

Form.defaultProps = {
  name: "viking_form",
}
export default Form
