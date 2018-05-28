import { Provider, observable, action, autorun, runInAction, computed } from 'mobx';
import axios from 'axios';
import React from 'react';
import LaunchDetails from '../view/LaunchDetails';
import LaunchesList from '../view/LaunchesList';

class MainStore {
  @observable currentViewName = 'list';
  @observable viewName = 'list'; // 'list' / 'details'
  @observable rocketFilter = null
  @observable launchesData = []
  @observable state = 'pending'
  @observable error = false
  @observable rocketFilter = ''
  @observable rocketNames = ['Falcon 1', 'Falcon 9', 'Falcon 10', 'Falcon Heavy'];
  @observable missionData = []
  @observable rocketData = []
  @observable view

  constructor() {
    this.activeViewComponent('list');
    this.disposeAutorun = autorun (() => {
      if (this.currentViewName === 'list') {
        this.fetchFilteredLaunches();
      } else {
        this.fetchMissionDetails();
      }
    });
    // autorun fetching data
    // depends on currentViewName and rocketFilter
  }

  @action
  setFilter(value) {
    this.fetchFilteredLaunches(value);
  }

  @action
  handleLaunchClick = (key) => {
    this.viewName = 'details';
    this.fetchMissionDetails(key);
  }
  @action
  handleBackClick = () => {
    this.viewName = 'list';
  }
  @action
  activeViewComponent = (data) => {
    if (data === 'list') {
      this.currentViewName = data;
      this.view =
        <LaunchesList />;
    } else if (data === 'details') {
      window.scrollTo(0, 0);
      this.currentViewName = data;
      this.view = <LaunchDetails />;
    }
  }

  @action
  async fetchMissionDetails(key) {
    this.missionData = [];
    this.error = false;
    this.state = 'pending';
    let filter = `?flight_number=${key}`;
    if (!key) filter = '?flight_number=1';
    const axiosInstnce2 = axios.create({
      baseURL: 'https://api.spacexdata.com/v2',
    });
    try {
      const response = await axiosInstnce2.get(`/launches/all/${filter}`);
      if (response.data.length === 0) this.error = true;
      runInAction(() => {
        this.missionData = response.data;
        this.state = response.status;
        this.fetchRocketDetails(this.missionData.rocket.rocket_id);
      });
    } catch (e) {
      runInAction(() => {
        this.state = 'error in mission fetch'; // 💩
      });
    }
  }
  @action
  async fetchRocketDetails(id) {
    this.rocketData = [];
    this.error = false;
    this.state = 'pending';
    let filter = `?rocket_id=${id}`;
    if (!id) filter = '?rocket_id=bfs';
    const axiosInstnce3 = axios.create({
      baseURL: 'https://api.spacexdata.com/v2',
    });
    try {
      const response = await axiosInstnce3.get(`/rockets/${filter}`);
      if (response.data.length === 0) this.error = true;
      runInAction(() => {
        this.rocketData = response.data;
        this.state = 'done';
      });
    } catch (e) {
      runInAction(() => {
        this.state = 'error in rocket fetch'; // 💩
      });
    }
  }

  @action
  async fetchFilteredLaunches(value) {
    this.launchesData = [];
    this.error = false;
    this.state = 'pending';
    let filter = `?rocket_name=${value}`;
    if (!value) filter = '';
    const axiosInstnce = axios.create({
      baseURL: 'https://api.spacexdata.com/v2',
    });
    try {
      const response = await axiosInstnce.get(`/launches/all/${filter}`);
      if (response.data.length === 0) this.error = true;
      runInAction(() => {
        this.launchesData = response.data;
        this.state = 'done';
      });
    } catch (e) {
      runInAction(() => {
        this.state = 'error in launches fetch'; // 💩
      });
    }
  }
}

const store = new MainStore();
export default store;
