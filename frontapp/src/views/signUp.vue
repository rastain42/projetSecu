<template>
<!-- This is an example component -->
<div class="h-screen font-sans login bg-cover">
<div class="container mx-auto h-full flex flex-1 justify-center items-center">
    <div class="w-full max-w-lg">
      <div class="leading-loose">
            <p class="text-white font-medium text-center text-lg font-bold mb-4">Inscription</p>
              <div class="">
                <input v-model="username" class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"  id="email"  placeholder="Adresse e-mail.." aria-label="email" required>
              </div>
              <div class="my-4">
                 <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password" id="password" v-model="password" placeholder="Mot de passe.." arial-label="password" required>
              </div>
              <div class="my-4 w-full items-center flex justify-between">
                <div class="my-4 items-center flex flex-col justify-between">
                  <button @click="signup" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                    type="submit">S'inscrire</button>
                </div>
                <div class="text-center my-2">
                  <a @click="test" href="/login" class="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                      Se connecter
                  </a>
                </div>
              </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import axios from 'axios';
import { Options, Vue } from 'vue-class-component';
import store from '../store';

@Options({
  components: {
  },
})
export default class Login extends Vue {
  username = ''

  password = ''

  async signup() {
    console.log(this);
    const newUser = { username: this.username, password: this.password };
    axios.post('http://localhost:3000/signUp', newUser)
    // .then(response => this.articleId = response.data.id)
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }
}
</script>

<style>
  .login{
  background: url('http://bit.ly/2gPLxZ4');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
