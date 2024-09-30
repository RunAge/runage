import { SiGithub, SiMastodon, SiMatrix, SiDiscord } from "oh-vue-icons/icons";

import { addIcons } from "oh-vue-icons";

addIcons(SiGithub, SiMastodon, SiMatrix, SiDiscord);

export const websites: {
  title: string;
  url: string;
  proprietary: boolean;
  icon: string;
}[] = [
  {
    title: "Matrix",
    url: "https://matrix.to/#/@runage:matrix.org",
    proprietary: false,
    icon: "si-matrix",
  },
  // {
  //   title: "Telegram",
  //   url: "https://t.me/Runage",
  //   proprietary: false,
  //   icon: IconsTelegram,
  // },
  {
    title: "Mastodon",
    url: "https://mastodon.online/@runage",
    proprietary: false,
    icon: "si-mastodon",
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
    icon: "si-github",
  },
  {
    title: "Discord",
    url: "https://discord.gg/rhzFTumEhK",
    proprietary: true,
    icon: "si-discord",
  },
];
