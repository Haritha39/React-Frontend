import axios from 'axios';

class ApiService{

    //POST
    post(data){
        return axios.post('http://localhost:5000/createTicket',{
            "Access-Control-Allow-Origin": "*",
            data:data
        })
    }

    //GET
    get(){
        return axios.get('http://localhost:5000/',{
            "Access-Control-Allow-Origin": "*"
        })
    }
}

export const APIService = new ApiService();
