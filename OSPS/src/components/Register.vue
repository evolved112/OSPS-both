<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const register = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/accounts/register', {
          email: email.value,
          password: password.value,
        });
        console.log('Registered:', response.data);
      } catch (error) {
        console.error('Registration failed:', error.response.data);
      }
    };

    return { email, password, register };
  },
};

  </script>
  