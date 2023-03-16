/// <reference types="react" />
import { UploadFile } from "./upload";
interface UploadListProps {
    fileList: UploadFile[];
    onRemove: (_file: UploadFile) => void;
}
export default function UploadList(props: UploadListProps): JSX.Element;
export {};
