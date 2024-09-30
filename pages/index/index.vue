<script setup lang="ts">
import Button from "~/components/button.vue";
import { websites } from "~/components/websites";
</script>

<template>
  <div
    class="bg-ctp-mantle
    flex
    flex-col
    md:flex-row
    my-8
    place-items-stretch
    ring-2
    ring-offset-4
    ring-offset-ctp-mantle
    rounded-md
    shadow-lg"
    :class="`ring-ctp-lavender hover:ring-ctp-lavender`"
  >
    <div
      class="drop-shadow
      flex
      flex-col
      gap-6
      items-center
      justify-center
      md:bg-ctp-crust
      md:px-10
      md:w-80
      mx-auto
      py-8
      rounded-l-md
      w-64"
    >
      <div>
        <div
          class="drop-shadow m-auto ring-2 ring-offset-2 ring-offset-ctp-crust rounded-full w-32"
          :class="`ring-ctp-lavender hover:ring-ctp-lavender`"
        >
          <img
            class="rounded-full"
            src="/avatars/runage.png"
          >
        </div>
      </div>
      <h1 class="drop-shadow font-semibold text-2xl text-ctp-text">
        Hi, I'm RunAge.
      </h1>
      <p class="text-ctp-text text-justify text-lg">
        I am a random programmer focused on the backend. I mainly work in
        TypeScript, but I'm not afraid to use other languages. My free time is
        spent on serials, games, research and developing random things.
      </p>
    </div>
    <div class="gap-6 grid grid-cols-1 md:p-16 p-8 place-items-center px-16">
      <Button
        v-for="website of websites"
        :key="website.url"
        :title="website.title"
        :class="`ring-ctp-lavender hover:ring-ctp-lavender bg-ctp-lavender`"
        :url="website.url"
        :icon="website.icon"
      />
    </div>
  </div>
</template>
