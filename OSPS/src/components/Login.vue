<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
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

      const login = async () => {
        try {
          const response = await axios.post('/api/accounts/login', {
            email: email.value,
            password: password.value,
          });
          console.log('Logged in:', response.data);
        } catch (error) {
          console.error('Login failed:', error);
        }
      };

      return { email, password, login };
    },
  };
  </script>