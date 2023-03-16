/// <reference types="react" />
import { ThemeProps } from "../Icon/icon";
export interface ProgressProps {
    percent: number;
    strokeHeight?: number;
    showText?: boolean;
    styles?: React.CSSProperties;
    theme?: ThemeProps;
}
declare function Progress(props: ProgressProps): JSX.Element;
declare namespace Progress {
    var defaultProps: {
        strokeHeight: number;
        showText: boolean;
        theme: string;
    };
}
export default Progress;
