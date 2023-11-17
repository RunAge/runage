
<script setup lang="ts">
import Button from '~/components/Button.vue';
import IconsMastodon from '~/components/icons/Mastodon.vue';
import IconsDiscord from '~/components/icons/Discord.vue';
import IconsMatrix from '~/components/icons/Matrix.vue'
import IconsGithub from '~/components/icons/Github.vue'
</script>
<template>
  <div class="grid grid-cols-1 grid-rows-1 place-items-center gap-12 p-16 shadow-lg rounded-md bg-base-200 ring-2 ring-primary ring-offset-base-100 ring-offset-4">
    <div class="flex flex-col gap-6 items-center align-middle justify-center">
      <div class="avatar">
        <div class="w-32 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2 m-auto drop-shadow">
          <img src="/avatars/runage.png" />
        </div>
      </div>
      <h1 class="text-primary text-2xl font-semibold drop-shadow">@RunAge</h1>
    </div>
    <div class="grid grid-cols-1 place-items-center gap-6">
      <Button title="Matrix" class="btn-primary" url="https://matrix.to/#/@runage:matrix.org" :icon="IconsMatrix" />
      <Button title="Mastodon" class="btn-primary" url="https://mastodon.online/@runage" :icon="IconsMastodon" />
      <div class="divider divider-error w-full font-bold uppercase">Proprietary</div>
      <Button title="GitHub" class="btn-primary" url="https://github.com/RunAge" :icon="IconsGithub" />
      <Button title="Discord" class="btn-primary" url="https://discord.gg/rhzFTumEhK" :icon="IconsDiscord" />
    </div>
  </div>
</template>
