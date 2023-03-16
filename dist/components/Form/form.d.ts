import { ReactNode } from "react";
export interface FormProps {
    /**表单名称，会作为表单字段 id 前缀使用 */
    name?: string;
    /**表单默认值，只有初始化以及重置时生效 */
    initialValues?: Record<string, any>;
    children?: ReactNode;
    /**提交表单且数据验证成功后回调事件 */
    onFinish?: (values: Record<string, any>) => void;
}
export declare function Form(props: FormProps): JSX.Element;
export declare namespace Form {
    var defaultProps: {
        name: string;
    };
}
export default Form;
