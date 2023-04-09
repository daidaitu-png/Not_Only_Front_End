import axios from "axios";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import CommonButton from "../CommonButton";
import { ButtonType } from "../CommonButton/type";
import { ICommonUploadProps, UploadFile } from "./type";
import UploadList from "./UploadList";

const CommomUpload: FC<ICommonUploadProps> = (props) => {
  const { name='file', headers, data, withCredentials, accept, 
    action, multiple, defaultFileList, beforeUpload, onProgress, onChange, onSuccess, onError, onRemove} = props;
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])

  const handleClick = () => {
    if(fileInput.current) {
      fileInput.current.click();
    }
  }

  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach(file => {
      if(!beforeUpload) {
        post(file);
      }else {
        const result = beforeUpload(file);
        if(result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile);
          })
        } else if(result !== false) {
          post(file);
        }
      }
    })
  }

  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    }
    //setFileList([_file, ...fileList])
    setFileList(prevList => {
      return [_file, ...prevList]
    })
    const formData = new FormData();
    formData.append(name || 'file', file);
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    } 
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      onUploadProgress: (e) => {
        let percentage;
        if(e.total) {
          percentage = Math.round((e.loaded * 100) / e.total) || 0; 
        }
        if(percentage && percentage < 100) {
          updateFileList(_file, {
            percent: percentage,
            status: 'uploading',
          });
          if(onProgress) {
            onProgress(percentage, file);
          }
        }
      }
    }).then(resp => {
      console.log("resp", resp);
      updateFileList(_file, {
        status: 'success',
        response: resp.data,
      });
      if(onSuccess) {
        onSuccess(resp.data, file);
      }
      if(onChange) {
        onChange(file);
      }
    }).catch(err => {
      console.error(err);
      updateFileList(_file, {
        status: 'error',
        error: err,
      });
      if(onError) {
        onError(err, file);
      }
      if(onChange) {
        onChange(file);
      }
    })
  }

  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    console.log("updateFile", updateFile);
    
    setFileList((prevList) => {
      return prevList.map(file => {
        if(file.uid === updateFile.uid) {
          return {
            ...file,
            ...updateFile
          }
        } else {
          return file
        }
      })
    })
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if(!files) {
      return
    }
    uploadFiles(files);
    if(fileInput.current) {
      fileInput.current.value = '';
    }
  }

  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }
  

  return (
    <div className="upload-component">
      <CommonButton 
        btnType={ButtonType.Primary}
        onClick={handleClick}
      > Upload File </CommonButton>
      <input 
        className="file-input"
        style={{display: 'none'}}
        ref={fileInput}
        onChange={handleFileChange}
        type="file"
        multiple={multiple}
        accept={accept}
      />
      <UploadList 
        fileList={fileList}
        onRemove={handleRemove}
      />
    </div>
  )
}

export default CommomUpload;