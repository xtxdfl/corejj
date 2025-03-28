/**
 * Copyright (c) OpenSpug Organization. https://github.com/opencorejj/corejj
 * Copyright (c) <corejj.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React from 'react';
import { Card, List } from 'antd';

function TodoIndex(props) {
  return (
    <Card title="待办事项" bodyStyle={{height: 234, padding: '0 24px'}}>
      <List/>
    </Card>
  )
}

export default TodoIndex