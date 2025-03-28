/**
 * Copyright (c) OpenSpug Organization. https://github.com/opencorejj/corejj
 * Copyright (c) <corejj.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React from 'react';
import { AuthDiv } from 'components';
import StatisticsCard from './StatisticCard';
import AlarmTrend from './AlarmTrend';
import RequestTop from './RequestTop';

class HomeIndex extends React.Component {
  render() {
    return (
      <AuthDiv auth="dashboard.dashboard.view">
        <StatisticsCard/>
        <AlarmTrend/>
        <RequestTop/>
      </AuthDiv>
    )
  }
}

export default HomeIndex
