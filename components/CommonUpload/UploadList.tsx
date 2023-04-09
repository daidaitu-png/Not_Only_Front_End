import React, { FC } from 'react'
import CommonProgress from '../CommonProgress';
import { IUploadListProps } from './type';

export const UploadList: FC<IUploadListProps> = (props) => {
  const { fileList, onRemove } = props;

  return (
    <ul className="viking-upload-list">
      {
        fileList.map(item => {
          return (
            <li className='upload-list-item' key={item.uid}>
              <span className={`file-name file-name-${item.status}`}>
                <b>icon </b>
                <span>{item.name}</span>
              </span>
              <span className="file-status">
                {(item.status === 'uploading' || item.status === 'ready') && <span>o</span>}
                {item.status === 'success' && <span>√</span>}
                {item.status === 'error' && <span>x</span>}
              </span>
              <span className="file-actions">
                <span onClick={() => { onRemove(item)}}>❌</span>
              </span>
              {item.status === 'uploading' && 
                <CommonProgress 
                  percent={item.percent || 0}
                />
            }
            </li>
          )
        })
      }
    </ul>
  )

}

export default UploadList;