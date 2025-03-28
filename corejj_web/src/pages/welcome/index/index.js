/**
 * Copyright (c) OpenSpug Organization. https://github.com/opencorejj/corejj
 * Copyright (c) <corejj.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React from 'react';
import {Card } from 'antd';

export default function (props) {
  return (
    <Card>
      <div>{localStorage.getItem('nickname')}, 欢迎你</div>
    </Card>
  )
}
