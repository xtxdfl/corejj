/**
 * Copyright (c) OpenSpug Organization. https://github.com/opencorejj/corejj
 * Copyright (c) <corejj.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Modal, Form, Input, message } from 'antd';
import http from 'libs/http';
import store from './store';

export default observer(function () {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    setLoading(true);
    const formData = form.getFieldsValue();
    formData['id'] = store.record.id;
    http.post('/api/config/service/', formData)
      .then(res => {
        message.success('操作成功');
        store.formVisible = false;
        store.fetchRecords()
      }, () => setLoading(false))
  }

  return (
    <Modal
      visible
      maskClosable={false}
      title={store.record.id ? '编辑服务' : '新建服务'}
      onCancel={() => store.formVisible = false}
      confirmLoading={loading}
      onOk={handleSubmit}>
      <Form form={form} initialValues={store.record} labelCol={{span: 6}} wrapperCol={{span: 14}}>
        <Form.Item required name="name" label="服务名称" tooltip="服务可以理解为一些配置的集合。">
          <Input placeholder="请输入服务名称"/>
        </Form.Item>
        <Form.Item required name="key" label="唯一标识符" tooltip="服务的唯一标识符，会作为生成配置的前缀。"
                   extra="可以由字母、数字和下划线组成。">
          <Input placeholder="请输入唯一标识符"/>
        </Form.Item>
        <Form.Item name="desc" label="备注信息">
          <Input.TextArea placeholder="请输入备注信息"/>
        </Form.Item>
      </Form>
    </Modal>
  )
})