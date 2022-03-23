<template>

<body class="bg-black-alt font-sans leading-normal tracking-normal h-screen">
  <nav id="header" class="bg-gray-900 fixed w-full z-10 top-0 shadow">
    <div class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
      <div class="w-1/2 md:pl-0 text-left">
          <a @click="test" class="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold " >
              <i class="fas fa-moon text-blue-400 pr-6 "></i> XSS secured ;)
          </a>
      </div>

      <div class="w-1/2 pr-0">
          <div class="flex relative inline-block float-right">
            <div class="relative text-sm text-gray-100 mt-2">
              <button id="userButton" class="flex items-center focus:outline-none mr-3">
                  <img class="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of User">
                  <span class="hidden md:inline-block text-gray-100">Hi, User</span>
              </button>
            </div>
          </div>
        </div>

       <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-900 z-20"
           id="nav-content">
           <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
               <li class="mr-6 my-2 md:my-0">
                   <a href="/"
                       class="block py-1 md:py-3 pl-1 align-middle text-blue-400 no-underline hover:text-gray-100 border-b-2 border-blue-400 hover:border-blue-400">
                       <i class="fas fa-home fa-fw mr-3 text-blue-400"></i><span
                           class="pb-1 md:pb-0 text-sm">Home</span>
                   </a>
               </li>
               <li class="mr-6 my-2 md:my-0">
                   <a href="/profil"
                       class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-pink-400">
                       <i class="fas fa-address-card fa-fw mr-3"></i><span
                           class="pb-1 md:pb-0 text-sm">Profil</span>
                   </a>
               </li>
               <li class="mr-6 my-2 md:my-0">
                   <a href="/notifications"
                       class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-purple-400">
                       <i class="fa fa-envelope fa-fw mr-3"></i><span
                           class="pb-1 md:pb-0 text-sm">Notifications</span>
                   </a>
               </li>
               <li class="mr-6 my-2 md:my-0">
                   <a href="/disconnect"
                       class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-red-400">
                       <i class="fas fa-key mr-3"></i><span class="pb-1 md:pb-0 text-sm">Déconnexion</span>
                   </a>
               </li>
           </ul>
        </div>
      </div>
  </nav>

  <div class="container w-full mx-auto pt-28">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
      <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
        <h1 class="text-gray-100">Publier un article : </h1>
      </div>
      <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
        <div class="py-2">
          <input v-model="title" type="text" class="py-2 rounded-lg" placeholder="    Titre de l'article..">
        </div>

        <textarea v-model="content" class="w-full box-border rounded-lg" placeholder="  Contenu de votre article..">

        </textarea>
        <div class="justify-center flex">
          <div class="text-center my-2  hover:bg-gray-5
          00 bg-gray-700 rounded-lg w-1/4 text-center p-2">
            <a @click="postArticle" class="inline-block right-0 align-baseline font-light text-sm text-800 hover:text-red-400">
                Publier
            </a>
          </div>
        </div>
      </div>

      <div class="bg-gray-900 border border-gray-800 rounded shadow p-2 mt-4">
        <h1 class="text-gray-100">Derniers articles :</h1>
      </div>

      <div class="w-full w-2/3 p-3">
        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
          <div class="flex flex-row items-center ">
                <div class="flex-1 text-left md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">title</h5>
                    <h3 class="font-bold text-3xl text-gray-600">article exeeemple<br>gud exemple</h3>
                </div>
            </div>
        </div>
        <div v-for="article in articleList" :key="article.title" class="bg-gray-900 border border-gray-800 rounded shadow p-2">
          <!--article  -->
            <div class="flex flex-row items-center ">
                <div class="flex-1 text-left md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">{{ article.title }}</h5>
                    <h3 class="font-bold text-3xl text-gray-600">{{article.content}}</h3>
                </div>
            </div>
          <!--article  -->
          </div>
        </div>
      </div>
    </div>
</body>
</template>

<script lang="ts">
import axios from 'axios';
import { Options, Vue } from 'vue-class-component';
import store from '../store';
import axiosApiInstance from '../utils/axios';

@Options({
  components: {},
})

export default class Home extends Vue {
 title = ''

 content = ''

  articleList= []

  test() {
    console.log(this.articleList);
  }

  async postArticle() {
    console.log(this);
    const headers = {
      Authorization: 'Bearer my-token',
    };
    try {
      await axiosApiInstance.post('http://localhost:3000/articles', { title: this.title, content: this.content });
      await this.getArticles();
    } catch (e) {
      console.log(e);
    }
  }

  async mounted() {
    this.getArticles();
  }

  async getArticles() {
    try {
      const res = await axiosApiInstance.get('http://localhost:3000/articles');
      this.articleList = res.data;
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style>
  .bg-black-alt {
      background: #191919;
  }
  .text-black-alt {
      color: #191919;
  }
  .border-black-alt {
      border-color: #191919;
  }
</style>
