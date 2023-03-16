var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from "axios";
import { useRef, useState } from "react";
import Button from "../Button/button";
import UploadList from "./UploadList";
export default function Upload(props) {
    var action = props.action, defaultFileList = props.defaultFileList, onProgress = props.onProgress, onSuccess = props.onSuccess, onError = props.onError, beforeUpload = props.beforeUpload, onChange = props.onChange, onRemove = props.onRemove;
    var _a = useState(defaultFileList || []), fileList = _a[0], setFileList = _a[1];
    var updateFileList = function (updateFile, updateObj) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), updateObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var fileInput = useRef(null);
    var handleClick = function () {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };
    var handleRemove = function (file) {
        setFileList(function (prevList) {
            return prevList.filter(function (item) { return item.uid !== file.uid; });
        });
        if (onRemove) {
            onRemove(file);
        }
    };
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (!files) {
            return;
        }
        uploadFiles(files);
        if (fileInput.current) {
            fileInput.current.value = "";
        }
    };
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            if (!beforeUpload) {
                post(file);
            }
            else {
                var result = beforeUpload(file);
                if (result && result instanceof Promise) {
                    result.then(function (res) {
                        post(res);
                    });
                }
                else if (result !== false) {
                    post(file);
                }
            }
        });
    };
    var post = function (file) {
        var _file = {
            uid: Date.now() + "upload-file",
            status: "ready",
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file,
        };
        setFileList(__spreadArray([_file], fileList, true));
        var formData = new FormData();
        formData.append(file.name, file);
        axios
            .post(action, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: function (e) {
                var percentage = Math.round((e.loaded * 100) / e.total) || 0;
                if (percentage < 100) {
                    updateFileList(_file, { percent: percentage, status: "uploading" });
                    if (onProgress) {
                        onProgress(percentage, file);
                    }
                }
            },
        })
            .then(function (res) {
            console.log(res);
            updateFileList(_file, { status: "success", response: res.data });
            if (onSuccess) {
                onSuccess(res.data, file);
            }
            if (onChange) {
                onChange(file);
            }
        })
            .catch(function (err) {
            updateFileList(_file, { status: "error", error: err });
            console.error(err);
            if (onError) {
                onError(err, file);
            }
            if (onChange) {
                onChange(file);
            }
        });
    };
    return (_jsxs("div", __assign({ className: "viking-upload-component" }, { children: [_jsx(Button, __assign({ btnType: "primary", onClick: handleClick }, { children: "Upload File" })), _jsx("input", { className: "viking-file-input", style: { display: "none" }, ref: fileInput, onChange: handleFileChange, type: "file" }), _jsx(UploadList, { fileList: fileList, onRemove: handleRemove })] })));
}
