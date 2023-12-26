import { Service } from "@/types/service";
import { SiMastodon, SiMisskey, SiThreads, SiX } from "react-icons/si";

export const services: Service[] = [
  {
    name: "X",
    shareUrlTemplate: "https://twitter.com/intent/tweet?text={text}",
    icon: <SiX />,
    hiddenSelectServer: true,
  },
  {
    name: "Mastodon",
    shareUrlTemplate: "{server}/share?text={text}",
    icon: <SiMastodon />,
    hiddenSelectServer: false,
  },
  {
    name: "Misskey",
    shareUrlTemplate: "{server}/share?text={text}",
    icon: <SiMisskey />,
    hiddenSelectServer: false,
  },
  {
    name: "Threads",
    shareUrlTemplate: "barcelona://create?text={text}",
    icon: <SiThreads />,
    hiddenSelectServer: true,
  },
];
