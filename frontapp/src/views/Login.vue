<template>
<!-- This is an example component -->
<div class="h-screen font-sans login bg-cover">
<div class="container mx-auto h-full flex flex-1 justify-center items-center">
    <div class="w-full max-w-lg">
      <div class="leading-loose">
            <p class="text-white font-medium text-center text-lg font-bold mb-4">Connexion</p>
              <div class="">
                <input v-model="username" class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"  id="email"  placeholder="Adresse e-mail.." aria-label="email" required>
              </div>
              <div class="my-4">
                 <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password" id="password" v-model="password" placeholder="Mot de passe.." arial-label="password" required>
              </div>
              <div class="my-4 w-full items-center flex justify-between">
                <div class="my-4 items-center flex flex-col justify-between">
                  <button @click="login" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                    type="submit">Se connecter</button>
                </div>
                <div class="text-center my-2">
                  <a @click="test"  class="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                      S'inscrire
                  </a>
                </div>
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
  target = new EventTarget()

  username = ''

  password = ''

  test() {
    console.log('hello', store.state.user, this.$router);
  }

  mounted() {
    console.log('hello', this.$router);
  }

  async login() {
    console.log(this);
    try {
      await store.dispatch('login', { username: this.username, password: this.password });
      this.$router.replace('/home');
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
