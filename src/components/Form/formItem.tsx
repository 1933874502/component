import classNames from "classnames"
import { ReactNode } from "react"

export interface FormItemProps {
  /**字段名 */
  name?: string
  /**label 标签的文本 */
  label?: string
  children?: ReactNode
  /**子节点的值的属性，如 checkbox 的是 'checked' */
  valuePropName?: string
  /**设置收集字段值变更的时机 */
  trigger?: string
  /**设置如何将 event 的值转换成字段值 */
  getValueFromEvent?: (event: any) => any
  /**校验规则，设置字段的校验逻辑。请看 async validator 了解更多规则 */
  //rules?: CustomRule[];
  /**设置字段校验的时机 */
  validateTrigger?: string
}

export function FormItem(props: FormItemProps) {
  const { label, children } = props
  const rowClass = classNames("viking-row", {
    "viking-row-no-label": !label,
  })
  return (
    <div className={rowClass}>
      {label && (
        <div className="viking-form-item-label">
          <label title={label}>{label}</label>
        </div>
      )}
      <div className="viking-form-item">{children}</div>
    </div>
  )
}
export default FormItem
