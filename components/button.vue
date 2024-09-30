<script lang="ts" setup>
import { OhVueIcon } from "oh-vue-icons";

const props = defineProps<{
  title: string;
  url: string;
  icon: string;
}>();
</script>

<template>
  <a
    :href="url"
    target="_blank"
    class="align-middle
    drop-shadow
    flex
    flex-row
    hover:ring-2
    hover:ring-offset-2
    hover:ring-offset-ctp-mantle
    justify-center
    place-items-center
    pr-6
    rounded-md
    w-60"
  >
    <span
      v-if="props.icon"
      class="bg-transparent flex h-12 justify-center place-items-center w-12"
    >
      <OhVueIcon
        scale="1.5"
        :name="props.icon"
      />
    </span>
    <span class="-ml-6 flex-grow font-semibold text-center">{{
      title
    }}</span>
  </a>
</template>
