import axios, { AxiosInstance } from "axios";

let instance: AxiosInstance

const osBaseUrl = 'https://www.googleapis.com/books/v1/'

function dumpRequest (data: any, headers: any) {
    return data;
}

function dumpResponse (data: any) {
    // console.log(data)
    return data;
}

export const getAxiosInstance = (baseURL = osBaseUrl): AxiosInstance => {
    if (instance && instance.defaults.baseURL == baseURL)
        return instance

    instance = axios.create({
        baseURL: baseURL,
        timeout: 10000,
        // transformRequest: [dumpRequest]
    });

    return instance
}