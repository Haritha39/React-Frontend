import axios from 'axios';

class ApiService{

    //POST
    post(data){
        return axios.post('https://jsonplaceholder.typicode.com/todos/',{
            data: data
        })
    }
}

export const APIService = new ApiService();
