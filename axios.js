import axios from 'axios';
let options = {
    baseURL: '/'
};
if (process.server) {
    options.baseURL = `http://demo-video.snhccm.com`;
}

export default axios.create(options);
