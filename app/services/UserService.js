import axios from 'axios'

const url="http://localhost:8080/api/v1/users"
class UserService   {
    getUsers(){
        return axios.get(url);
    }
    createUsers(user){
        return axios.post(url,user);
    }
    
}
export default new UserService()