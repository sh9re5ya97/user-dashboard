import axios from 'axios';

const API_URL = 'http://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};

export const getPostsByUserId = async (userId) => {
  try {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching posts for user with id ${userId}:`, error);
    throw error;
  }
};
