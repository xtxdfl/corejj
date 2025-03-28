/**
 * Copyright (c) OpenSpug Organization. https://github.com/opencorejj/corejj
 * Copyright (c) <corejj.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import { observable, computed } from "mobx";

class Store {
  @observable outputs = {};
  @observable tag = '';

  @computed get items() {
    const items = Object.entries(this.outputs)
    if (this.tag === '') {
      return items
    } else if (this.tag === '0') {
      return items.filter(([_, x]) => x.status === -2)
    } else if (this.tag === '1') {
      return items.filter(([_, x]) => x.status === 0)
    } else {
      return items.filter(([_, x]) => ![-2, 0].includes(x.status))
    }
  }

  @computed get counter() {
    const counter = {'0': 0, '1': 0, '2': 0}
    for (let item of Object.values(this.outputs)) {
      if (item.status === -2) {
        counter['0'] += 1
      } else if (item.status === 0) {
        counter['1'] += 1
      } else {
        counter['2'] += 1
      }
    }
    return counter
  }

  updateTag = (tag) => {
    if (tag === this.tag) {
      this.tag = ''
    } else {
      this.tag = tag
    }
  }
}

export default new Store()
