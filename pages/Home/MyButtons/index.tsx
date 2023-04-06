import React, { FC } from 'react'
import CommonButton from '../../../components/CommonButton';
import { ButtonSize, ButtonType } from '../../../components/CommonButton/type';
import styles from './index.module.css'

interface IProps {

}

const MyButtons: FC<IProps> = ({}) => {
  return (
    <div className={styles['my-btns-container']}>
      <div>
        <div>不同的 Button Type</div>
        <CommonButton >
          hello
        </CommonButton>
        <CommonButton btnType={ButtonType.Primary}>
          hello
        </CommonButton>
        <CommonButton btnType={ButtonType.Danger}>
          hello
        </CommonButton>
        <CommonButton btnType={ButtonType.Link} href="www.baidu.com">
          hello
        </CommonButton>
      </div>
      <div>
        <div>不同的 Button Size</div>
        <CommonButton size={ButtonSize.Large}>
          hello
        </CommonButton>
        <CommonButton size={ButtonSize.Small}>
          hello
        </CommonButton>
      </div>
      <div>
        <div>Disabled 状态</div>
        <CommonButton disabled>
          hello
        </CommonButton>
        <CommonButton btnType={ButtonType.Link} disabled href="www.baidu.com">
          hello
        </CommonButton>
      </div>
    </div>
  )
}

export default MyButtons;