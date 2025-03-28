/**
 * Copyright (c) OpenSpug Organization. https://github.com/opencorejj/corejj
 * Copyright (c) <corejj.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import { observable, computed } from 'mobx';
import http from 'libs/http';

class Store {
  @observable records = [];
  @observable isFetching = false;

  @observable f_name;
  @observable f_status = '';

  @computed get dataSource() {
    let records = this.records;
    if (this.f_name) records = records.filter(x => x.name.toLowerCase().includes(this.f_name.toLowerCase()));
    if (this.f_status) records = records.filter(x => x.status === this.f_status);
    return records
  }

  fetchRecords = () => {
    this.isFetching = true;
    http.get('/api/alarm/alarm/')
      .then(res => this.records = res)
      .finally(() => this.isFetching = false)
  };
}

export default new Store()
