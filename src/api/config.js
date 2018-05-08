import axios from 'axios';
import { Toast } from 'antd-mobile';
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
};
axios.defaults.timeout = 10000;
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = '';
}
// 拦截请求
axios.interceptors.request.use((config)=>{
    Toast.loading('加载中', 0);
    return config
});

// 拦截返回
axios.interceptors.response.use((config)=>{
    Toast.hide();
    return config
});

export function get(url, params={}) {
    return new Promise((resolve, reject)=>{
        axios.get(url, {params: params}).then((res)=>{
            resolve(res)
        }, (err)=>{
            reject(err);
        })
    })
}

export function post(url, params={}) {
    return new Promise((resolve, reject)=>{
        axios.post(url, params).then((res)=>{
            resolve(res)
        }, (err)=>{
            reject(err)
        })
    })
}