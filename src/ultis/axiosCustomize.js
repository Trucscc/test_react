import axios from "axios";

const instance = axios.create({
    baseURL : `http://localhost:3000/admins/`

});

//Add a reuest interceptor
instance.interceptors.request.use(function(config){
    return config ;
},function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function(response){
     console.log('>>> interceptor run', response);
     return response && response.data? response.data : response ;
},function(error){
     console.log('>>> run error', error);
     return (error && error.response && error.response.data? error.response.data : Promise.reject(error)) 
});

export default instance;