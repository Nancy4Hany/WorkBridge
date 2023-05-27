import axios from "axios"

const user_url = "http://localhost:8803/users/1";

class UserService {

    getUser()
    {
        axios.get(user_url)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
    }

}

export default new UserService()