<script setup lang="ts">
import { OhVueIcon } from "oh-vue-icons";
import type { IconType } from "oh-vue-icons/types/icons";

const props = defineProps<{
  title: string;
  href: string;
  icon: IconType;
}>();
</script>

<template>
  <a
    class="align-middle
    drop-shadow
    flex
    flex-row
    hover:ring-2
    hover:ring-offset-2
    hover:ring-offset-ctp-crust
    justify-center
    place-items-center
    rounded-md
    shadow
    text-ctp-crust"
    :href="href"
    target="_blank"
  >
    <span
      v-if="props.icon"
      class="bg-transparent flex justify-center ml-3 place-items-center"
    >
      <OhVueIcon
        scale="1.5"
        :name="props.icon.name"
      />
    </span>
    <span class="drop-shadow flex-grow font-semibold text-center">{{
      title
    }}</span>
  </a>
</template>
