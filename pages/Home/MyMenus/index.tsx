import React, { FC } from 'react'
import CommonMenu from '../../../components/CommonMenu';
import MenuItem from '../../../components/CommonMenu/MenuItem';
import SubMenu from '../../../components/CommonMenu/SubMenu';
import styles from './index.module.css'

interface IProps {

}

const MyMenus: FC<IProps> = ({ }) => {
  return (
    <div className={styles['my-btns-container']}>
      <div>
        <div>Menu 最基本样式-横向</div>
        <CommonMenu>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem>
            cool link2
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link3
          </MenuItem>
        </CommonMenu>
      </div>
      <div>
        <div>Menu 最基本样式-纵向</div>
        <CommonMenu mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem>
            cool link2
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link3
          </MenuItem>
        </CommonMenu>
      </div>
      <div>
        <div>Disabled 状态</div>

      </div>
    </div>
  )
}

export default MyMenus;