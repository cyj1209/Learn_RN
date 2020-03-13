import AsyncStorage from '@react-native-community/async-storage';

  // 保存的是每次url请求的数据
  // 缓存策略
  // 1 查找本地是否有有效的数据
  // 2 没找到有效的数据在去服务器获取数据
  // 只涉及到数据展示所有请求都是get

export default class DataStore {

  /**
   * 获取数据，入口方法
   * @param {string} url
   */
  async fetchData(url) {
    try {
      let res = await this.fetchLocalData(url);
      if (res !== undefined) {
        return res;
      } else {
        res = await this.fetchNetData(url);
        return res;
      }
    } catch (err) {
      console.log('dataStore error!!!');
      console.error(err);
    }
  }

  /**
   * 判断数据的时间戳是否过期
   * @param {number} timestamp
   */
  static isTimestampValid(timestamp) {
    let nowTime = Date.now();
    return nowTime - timestamp < 1000 * 60 * 60;
  }

  /**
   * 获取本地数据
   * @param {string} url
   */
  async fetchLocalData(url) {
    let res = JSON.parse(await AsyncStorage.getItem(url));
    if (res && DataStore.isTimestampValid(res.timestamp)) {
      return res.value;
    }
    return undefined;
  }

  /**
   * 将数据存储到本地
   * @param {string} url
   * @param {*} data
   */
  async savaData(url, data) {
    let nowTime = Date.now();
    await AsyncStorage.setItem(
      url,
      JSON.stringify({
        value: data,
        timestamp: nowTime,
      }),
    );
    return 'success';
  }

  /**
   * 获取服务器数据
   * @param {string} url
   */
  async fetchNetData(url) {
    let res = await fetch(url);
    if (res.ok) {
      let data = await res.json();
      await this.savaData(url, data);
      return data;
    } else {
      throw new Error('network response was not ok');
    }
  }
}
