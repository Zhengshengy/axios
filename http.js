import qs from 'qs';
import axios from '@/servers/axios';


export const prefix = '/api/';
export const HTTP_VERBS = {
    post: 'post',
    get: 'get',
    put: 'put',
    delete: 'delete'
};

export function getAPIHeaders() {
    const headers = ({
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json'
    });
    // if (auth) {
    //     headers['Authorization'] = auth;
    // }
    return headers;
}



function callAxios(url, type, data, options = {}) {
    let rv;
    let headers = getAPIHeaders();
    if (options.headers) {
        headers = Object.assign({}, headers, options.headers);
    }

    if (type === HTTP_VERBS.post) {
        rv = axios.post(prefix + url, data, { headers });
    }
    else if (type === HTTP_VERBS.put) {
        rv = axios.put(prefix + url, data, { headers });
    }
    else if (type === HTTP_VERBS.delete) {
        rv = axios.delete(prefix + url, { headers });
    }
    else if (type === HTTP_VERBS.get) {
        if (data && data.length > 0) {
            if (url.indexOf('?') > 0) {
                rv = axios.get(prefix + url + '&' + data, { headers });
            } else {
                rv = axios.get(prefix + url + '?' + data, { headers });
            }
        } else {
            rv = axios.get(prefix + url, { headers });
        }
    }
    return rv;
}

export function callAPI(url, type, params, options = {}) {
    let data = params;
    if (!(typeof params === 'string' || params instanceof String) && !(Object.prototype.toString.call(params) === '[object FormData]')) {
        data = qs.stringify(params);
    }
    let responseCode = 200;
    return callAxios(url, type, data, options)
        .then((response) => {
            if (response.status !== undefined) {
                responseCode = response.status;
            }
            if (responseCode == 200 && response.data) {
                if (response.data.code !== undefined) {
                    responseCode = response.data.code;
                }
            }
            if (responseCode !== 200 && response.data) {
                let message;
                if (response.data.data && response.data.data.length > 0) {
                    message = response.data.msg;
                }

                return Promise.reject(Object.assign(
                    response.data,
                    { code: responseCode, message }
                ));
            }
            return Promise.resolve(Object.assign(
                (response.data) || {},
                { code: responseCode, }
            ));
        }).catch((error) => {
            if (error && error.response) {
                return Promise.reject(Object.assign(
                    error.response.data,
                    {
                        code: error.response.status
                    }
                ));
            } else if (error && error.code) {
                return Promise.reject(error);
            } else {
                return Promise.reject(new Error(error && error.message));
            }
        });
}