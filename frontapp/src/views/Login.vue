<template>
<!-- This is an example component -->
<div class="h-screen font-sans login bg-cover">
<div class="container mx-auto h-full flex flex-1 justify-center items-center">
    <div class="w-full max-w-lg">
      <div class="leading-loose">
            <p class="text-white font-medium text-center text-lg font-bold">LOGIN</p>
              <div class="">
                <label class="block text-sm text-white" for="email">Username</label>
                <input v-model="username" class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"  id="email"  placeholder="Digite o e-mail" aria-label="email" required>
              </div>
              <div class="mt-2">
                <label class="block  text-sm text-white">Password</label>
                 <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password" id="password" v-model="password" placeholder="Digite a sua senha" arial-label="password" required>
              </div>

              <div class="mt-4 items-center flex justify-between">
                <button @click="login" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit">Submit</button>
              </div>
              <div class="text-center">
                <a @click="test" class="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                    Criar uma conta
                </a>
              </div>

      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import VueRouter from 'vue-router';
import store from '../store';

@Options({
  components: {
  },
})
export default class Login extends Vue {
  username = ''

  password = ''

  user = {
    username: this.username,
    password: this.password,
  }

  test() {
    console.log('hello', store.state.user, this.$router);
  }

  mounted() {
    console.log('hello', this.$router);
  }

  async login() {
    console.log(this);
    try {
      store.dispatch('login', { username: this.username, password: this.password });
      this.$router.replace('/');
    } catch (e) {
      console.log('error', e);
    }
  }
}
</script>

<style>
  .login{
  /*
    background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
  */
  background: url('http://bit.ly/2gPLxZ4');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
