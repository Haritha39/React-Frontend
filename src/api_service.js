import axios from 'axios';

class ApiService{

    //POST
    post(endPoint,data){
        return axios.post('http://localhost:5000/'+endPoint,JSON.stringify({data:data}),{
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Content-Type":"application/json",
                }
        })
    }

    //GET
    get(endPoint){
        return axios.get('http://localhost:5000/'+endPoint,{
            "Access-Control-Allow-Origin": "*"
        })
    }
}

export const APIService = new ApiService();
