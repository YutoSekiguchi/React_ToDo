import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:7121` // baseurlの設定
});