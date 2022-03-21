<template>
<button class='relative bg-blue-500 text-white p-6 rounded text-2xl font-bold overflow-visible'>
Example button
<div class="absolute top-0 right-0 -mt-4 -mr-4 px-4 py-1 bg-red-500 rounded-full">1</div>
</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Home extends Vue {}
</script>
