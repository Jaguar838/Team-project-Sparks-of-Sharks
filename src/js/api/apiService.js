import axios from 'axios'; // дока https://github.com/klesarev/axios-rus-docs/tree/master/docs

export default class apiService {
    constructor() {

        this.searchQuery = '';
    }

    async makeRequest() {

        const config = {
            method: 'get',
            url: 'http://webcode.me'
        }

        let res = await axios(config)

        console.log(res.status);
    }

}