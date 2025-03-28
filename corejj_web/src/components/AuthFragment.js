/**
 * Copyright (c) OpenSpug Organization. https://github.com/opencorejj/corejj
 * Copyright (c) <corejj.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React from 'react';
import { hasPermission } from 'libs';


export default function AuthFragment(props) {
  return hasPermission(props.auth) ? <React.Fragment>{props.children}</React.Fragment> : null
}
