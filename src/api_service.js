import axios from 'axios';

class ApiService{

    //POST
    post(endPoint,data){
        return axios.post('http://localhost:5000/'+endPoint,{"data":data},{
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Content-Type":"application/json"}
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
