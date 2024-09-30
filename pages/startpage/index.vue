<script setup lang="ts">
import { addIcons } from "oh-vue-icons";
import { SiMusicbrainz, SiYoutube, MdDashboard, SiDocsdotrs, SiTailwindcss, SiDocker, SiOpenai } from "oh-vue-icons/icons";
import Link from "./components/link.vue";

addIcons(SiYoutube, SiMusicbrainz, MdDashboard, SiDocsdotrs, SiTailwindcss, SiDocker, SiOpenai);

const randomPoster = ref<number>(0);
onMounted(() => {
  randomPoster.value = (new Date().getDay() % 19) + 1;
});
</script>

<template>
  <div
    class="2xl:max-w-7xl
      2xl:min-w-7xl
      2xl:w-[80rem]
      flex
      flex-row
      gap-1
      h-96
      lg:max-w-4xl
      lg:min-w-4xl
      lg:w-[56rem]
      max-w-xl
      md:max-w-2xl
      md:min-w-2xl
      md:w-[42rem]
      min-w-fit
      min-w-xl
      text-ctp-text
      xl:max-w-6xl
      xl:min-w-6xl
      xl:w-[72rem]"
  >
    <div class="hidden sm:block w-[360px]">
      <img
        class="bg-ctp-crust h-full object-cover rounded-md shadow-md text-ctp-pink w-full"
        :src="`/bg/bg-${randomPoster}.png`"
      >
    </div>
    <div class="bg-ctp-crust flex flex-col flex-grow gap-10 p-10 rounded-md shadow-md w-full">
      <span class="font-semibold text-2xl">Search</span>
      <div class="flex-grow gap-10 grid grid-cols-4 grid-rows-3">
        <div class="col-span-4 grid grid-cols-subgrid">
          <Link
            class="bg-ctp-blue ring-ctp-blue"
            href="https://dash.kmd.re"
            :icon="SiDocker"
            title="Docker"
          />
          <Link
            class="bg-ctp-green ring-ctp-green"
            href="https://dashmc.kmd.re"
            :icon="MdDashboard"
            title="Mc Dashboard"
          />
        </div>
        <div class="col-span-4 grid grid-cols-subgrid">
          <Link
            class="bg-ctp-red ring-ctp-red"
            href="https://youtube.com"
            :icon="SiYoutube"
            title="YouTube"
          />
          <Link
            class="bg-ctp-peach ring-ctp-peach"
            href="https://listenbrainz.org/user/RunAge/"
            :icon="SiMusicbrainz"
            title="ListenBrainz"
          />
        </div>
        <div class="col-span-4 grid grid-cols-subgrid">
          <Link
            class="bg-ctp-pink ring-ctp-pink"
            href="https://devdocs.io/"
            :icon="SiDocsdotrs"
            title="DevDocs"
          />
          <Link
            class="bg-ctp-blue ring-ctp-blue"
            href="https://tailwindcss.com/docs/container"
            :icon="SiTailwindcss"
            title="Tailwindcss"
          />
          <Link
            class="bg-ctp-rosewater ring-ctp-rosewater"
            href="https://chatgpt.com/"
            :icon="SiOpenai"
            title="ChatGPT"
          />
        </div>
      </div>
    </div>
  </div>
</template>
