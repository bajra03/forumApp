class User {
    login(data) {
        // checking there is an error or not
        axios.post('/api/auth/login', data)
            .then(res => console.log(res.data))
            .catch(error => console.log(error.response.data));
    }
}

export default User = new User();
