import type { Component } from "vue";
import IconsMastodon from '~/components/icons/Mastodon.vue';
import IconsDiscord from '~/components/icons/Discord.vue';
import IconsMatrix from '~/components/icons/Matrix.vue'
import IconsGithub from '~/components/icons/Github.vue'
import IconsGit from '~/components/icons/Git.vue'
import IconsTelegram from '~/components/icons/Telegram.vue'

export const websites: {
    title: string,
    url: string,
    proprietary: boolean;
    icon: Component;
  }[] = [
    {
      title: "Matrix",
      url: "https://matrix.to/#/@runage:matrix.org",
      proprietary: false,
      icon: IconsMatrix,
    },
    {
      title: "Telegram",
      url: "https://t.me/Runage",
      proprietary: false,
      icon: IconsTelegram,
    },
    {
      title: "Mastodon",
      url: "https://mastodon.online/@runage",
      proprietary: false,
      icon: IconsMastodon,
    },
    // {
    //   title: "Gitea",
    //   url: "https://git.kmd.re",
    //   proprietary: false,
    //   icon: IconsGit,
    // },
    {
      title: "GitHub",
      url: "https://github.com/RunAge",
      proprietary: true,
      icon: IconsGithub,
    },
    {
      title: "Discord",
      url: "https://discord.gg/rhzFTumEhK",
      proprietary: true,
      icon: IconsDiscord,
    },
  ]