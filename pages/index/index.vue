
<script setup lang="ts">
import Button from '~/components/Button.vue';
import { websites } from '~/components/websites';

</script>
<template>
  <div class="my-8 flex flex-col md:flex-row place-items-center shadow-lg rounded-md bg-base-200 ring-2 ring-primary ring-offset-base-100 ring-offset-4">
    <div class="flex flex-col gap-6 items-center align-middle justify-center w-64 md:w-80 md:bg-base-300 py-8 md:px-10 drop-shadow">
      <div class="avatar">
        <div class="w-32 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2 m-auto drop-shadow">
          <img src="/avatars/runage.png" />
        </div>
      </div>
      <h1 class="text-primary text-2xl font-semibold drop-shadow">Hi, I'm RunAge.</h1>
      <p class="text-lg text-justify">
        I am a random programmer focused on the backend. 
        I mainly work in TypeScript, but I'm not afraid to use other languages. 
        My free time is spent on serials, games, research and developing random things.
      </p>
    </div>
    <div class="grid place-items-center gap-6 grid-cols-1 p-8 px-16 md:p-16">
      <Button 
        v-for="website of websites" 
        :title="website.title" 
        class="btn-primary" 
        :url="website.url" 
        :icon="website.icon" 
      />
    </div>
  </div>
</template>
