import axios from 'axios';

class ApiService{

    //POST
    post(data){
        // return axios.post('https://127.0.0.1:5000/',{
        //     data: data
        // })

        return axios.get('http://localhost:5000/',{
            "Access-Control-Allow-Origin": "*"
        })
    }
}

export const APIService = new ApiService();
