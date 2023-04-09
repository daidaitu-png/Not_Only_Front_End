import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import CommomUpload from '../../../components/CommonUpload';
import { UploadFile } from '../../../components/CommonUpload/type';

const defaultFileList: UploadFile[] = [
  { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
  { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
  { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
]

const MyUploads = () => {

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if(files) {
      const uploadedFile = files[0];
      const formData = new FormData();
      formData.append(uploadedFile.name, uploadedFile);
      axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(resp => {
        console.log('resp', resp);
      })
    }
  }

  const checkFileSize =  (file: File) => {
    if(Math.round(file.size / 1024) > 50) {
      // 大于50kb
      alert('file too big');
      return false;
    }
    return true;
  }
  const filePromise = (file: File) => {
    const newFile = new File([file], 'new_name.docx', {
      type: file.type,
    })
    return Promise.resolve(newFile);
  }

  return (
    <div>
      <h2>上传组件生命周期</h2>
      <div>开始-》 点击按钮，选择文件 -》 beforeUpload（file），上传前检查，文件类型大小 -》 onProgress（event，file）-》 </div>
      <div> onChange(file)</div>
      <div> onError(error, file)</div>
      <div> onSuccess(resopnse，file)</div>
      <div> onRemove(file)</div>
      <h2>fetch的缺点</h2>
      <ul>
        <li>
          只对网络请求报错, 对400，500都当做成功的请求
        </li>
        <li>
          默认不会带cookie
        </li>
        <li>
          不支持abort，不支持超时控制
        </li>
        <li>
          没有办法原生监测请求的进度
        </li>
      </ul>
      <form 
        method='post'
        encType='multipart.form-data'
        action='https://jsonplaceholder.typicode.com/posts'
      >
        <input type="file" name='myFile-test' />
        <button type='submit'>Submit</button>
      </form>
      <input type="file" name='myFile' onChange={handleFileChange} />
      <div>
        <CommomUpload
          // action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
          action='https://jsonplaceholder.typicode.com/posts'
          // beforeUpload={checkFileSize}
          // beforeUpload={filePromise}
          data={{'key': 'value'}}
          headers={{'X-Powered-By': 'liuming'}}
          name='fileName'
          accept='.png'
          defaultFileList={defaultFileList}
          onChange={(file) => {
            console.log('onChange', file)
          }}
          onProgress={(percentage, file) => {
            console.log('onProgress', percentage, file)
          }}
          onSuccess={(data, file) => {
            console.log('onSuccess', data, file)
          }}
          onError={console.log}
          multiple
        />
      </div>
    </div>
  )
}

export default MyUploads;