import { Service } from "@/types/service";
import { SiMastodon, SiMisskey, SiThreads, SiX } from "react-icons/si";

export const services: Service[] = [
  {
    name: "x",
    shareUrlTemplate: "https://twitter.com/intent/tweet?text={text}",
    icon: <SiX />,
    hiddenSelectServer: true,
  },
  {
    name: "mastodon",
    shareUrlTemplate: "{server}/share?text={text}",
    icon: <SiMastodon />,
    hiddenSelectServer: false,
  },
  {
    name: "misskey",
    shareUrlTemplate: "{server}/share?text={text}",
    icon: <SiMisskey />,
    hiddenSelectServer: false,
  },
  {
    name: "threads",
    shareUrlTemplate: "barcelona://create?text={text}",
    icon: <SiThreads />,
    hiddenSelectServer: true,
  },
];
