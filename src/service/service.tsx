import axios, { AxiosResponse } from "axios";

var API_URL = 'http://localhost:8080/Gemini';

export default class ApiService {

    // Method to set the API URL
    setApiUrl(url: string) {
        API_URL = url;
    }

    // Method to get data from the API
    async getData(endpoint: string) {

        const url = `${API_URL}/${endpoint}`;

        try {
            const response: AxiosResponse = await axios.get(url, {
                headers:
                    { 'Content-Type': 'application/json' }
            });

            return response.data;
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    // Method to post data to the API
    async postData(endpoint: string, data: string) {
        const url = `${API_URL}/${endpoint}`;

        try {
            const response: AxiosResponse = await axios.post(url, data, {
                headers: { 'Content-Type': 'text/plain' }
            });
            return response.data;
        } catch (error) {
            console.error('Error posting data: ', error);
        }
    }
}