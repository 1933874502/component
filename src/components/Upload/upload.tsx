import axios from "axios"
import { ChangeEvent, useRef, useState } from "react"
import Button from "../Button/button"
import UploadList from "./UploadList"

export type UploadFileStatus = "ready" | "uploading" | "success" | "error"
export interface UploadFile {
  uid: string
  size: number
  name: string
  status?: UploadFileStatus
  percent: number
  raw?: File
  response?: any
  error?: any
}
export interface UploadProps {
  action: string
  defaultFileList?: UploadFile[]
  beforeUpload?: (file: File) => boolean | Promise<File>
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
  onChange?: (file: File) => void
  onRemove?: (file: UploadFile) => void
}

export default function Upload(props: UploadProps) {
  const {
    action,
    defaultFileList,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
    onRemove,
  } = props
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }
  const fileInput = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ""
    }
  }
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then((res) => {
            post(res)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + "upload-file",
      status: "ready",
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    }
    setFileList([_file, ...fileList])
    const formData = new FormData()
    formData.append(file.name, file)
    axios
      .post(action, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => {
          let percentage =
            Math.round((e.loaded * 100) / (e.total as number)) || 0
          if (percentage < 100) {
            updateFileList(_file, { percent: percentage, status: "uploading" })
            if (onProgress) {
              onProgress(percentage, file)
            }
          }
        },
      })
      .then((res) => {
        console.log(res)
        updateFileList(_file, { status: "success", response: res.data })
        if (onSuccess) {
          onSuccess(res.data, file)
        }
        if (onChange) {
          onChange(file)
        }
      })
      .catch((err) => {
        updateFileList(_file, { status: "error", error: err })
        console.error(err)
        if (onError) {
          onError(err, file)
        }
        if (onChange) {
          onChange(file)
        }
      })
  }
  return (
    <div className="viking-upload-component">
      <Button btnType="primary" onClick={handleClick}>
        Upload File
      </Button>
      <input
        className="viking-file-input"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={handleFileChange}
        type="file"
      />
      <UploadList fileList={fileList} onRemove={handleRemove}></UploadList>
    </div>
  )
}
