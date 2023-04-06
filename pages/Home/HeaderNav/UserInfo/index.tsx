import React, { FC } from 'react'
import { KINDS_OF_LEARNING } from '../const';
import styles from './index.module.css'

interface IProps {
  avatar: string;
  avatarAltText: string;
}

const Userinfo: FC<IProps> = ({avatar,avatarAltText}) => {
  return (
    <div className={styles.header}>
      <a href='#'>
        <img className={styles.avatar} src={avatar} alt={avatarAltText} />
      </a>
    </div>
  )
}

export default Userinfo