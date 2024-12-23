import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://dummyjson.com/',
});

export const loginUser = (dataUser) => httpClient.post('/auth/login', dataUser);

//username: emilys
//password: emilyspass

export const getAllUsers = () => httpClient.get('/users');

export const getOneUser = (id) => httpClient.get(`/users/${id}`);
