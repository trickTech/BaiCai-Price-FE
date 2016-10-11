/**
 * Created by echao on 2016/10/3.
 */

const requestDomain = 'http://vegetable.xkcd.com.cn/';

var requestConfig = {
  vegetable: requestDomain + 'api/record/today',
  search: requestDomain + 'api/vegetable/search/',
  history: requestDomain + 'api/record/todayhistory/date'
};

module.exports = requestConfig;
