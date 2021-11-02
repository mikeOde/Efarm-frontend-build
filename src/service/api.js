import axios from 'axios';

const BASE_URL = 'https://efarm.ml/api';

const cookie = localStorage.getItem('access_token'); // gets the token that is saved in the local storage

const token = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + cookie
    },
}

const api = {

    checkLogin: (loginData) =>
    axios.post(`${BASE_URL}/login`, loginData),

    checkSignup: (signupData) =>
    axios.post(`${BASE_URL}/register`, signupData),

    getFarmerVegetables: () =>
    axios.get(`${BASE_URL}/get_vegetables`, token),

    getFarmerTrees: () =>
    axios.get(`${BASE_URL}/get_trees`, token),

    getFarmerProfile: () =>
    axios.get(`${BASE_URL}/profile`, token),
    
    editFarmerProfile: (editProfileData) =>
    axios.post(`${BASE_URL}/edit_profile`, editProfileData, token),
    
    addVegetable: (addItemData) =>
    axios.post(`${BASE_URL}/add_vegetables`, addItemData, token),

    addTree: (addItemData) =>
    axios.post(`${BASE_URL}/add_trees`, addItemData, token)
}
export default api;