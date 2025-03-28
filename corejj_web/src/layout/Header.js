/**
 * Copyright (c) OpenSpug Organization. https://github.com/opencorejj/corejj
 * Copyright (c) <corejj.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Dropdown, Menu, Avatar, Divider } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, LogoutOutlined, CodeOutlined } from '@ant-design/icons';
import { AuthDiv } from 'components';
import Notification from './Notification';
import styles from './layout.module.less';
import http from '../libs/http';
import history from '../libs/history';
import avatar from './avatar.png';

export default function (props) {

  function handleLogout() {
    history.push('/');
    http.get('/api/account/logout/')
  }

  function openTerminal() {
    window.open('/ssh')
  }

  const UserMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/welcome/info">
          <UserOutlined style={{marginRight: 10}}/>个人中心
        </Link>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item onClick={handleLogout}>
        <LogoutOutlined style={{marginRight: 10}}/>退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.trigger} onClick={props.toggle}>
        {props.collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
      </div>
      <div className={styles.right}>
        <div className={styles.link} onClick={() => window.open('https://corejj.cc/')}>官网</div>
        <div className={styles.link} onClick={() => window.open('https://ops.corejj.cc/docs/about-corejj/')}>文档</div>
        <div className={styles.link} onClick={() => window.open('https://ssl.corejj.cc/')}>证书申请</div>
        <Divider type="vertical"/>
        <Notification/>
        <AuthDiv className={styles.terminal} auth="host.console.view|host.console.list" onClick={openTerminal}>
          <CodeOutlined style={{fontSize: 16}}/>
        </AuthDiv>
        <div className={styles.user}>
          <Dropdown overlay={UserMenu} style={{background: '#000'}}>
            <span className={styles.action}>
              <Avatar size="small" src={avatar} style={{marginRight: 8}}/>
              {localStorage.getItem('nickname')}
            </span>
          </Dropdown>
        </div>
      </div>
    </Layout.Header>
  )
}