import { Service } from "@/types/service";
import { SiMastodon, SiMisskey, SiThreads, SiX } from "react-icons/si";

export const services: Service[] = [
  {
    name: "x",
    shareUrlTemplate: "https://twitter.com/intent/tweet?text={text}",
    icon: <SiX />,
    instanceVariation: false
  },
  {
    name: "mastodon",
    shareUrlTemplate: "https://{server}/share?text={text}",
    icon: <SiMastodon />,
    instanceVariation: true
  },
  {
    name: "misskey",
    shareUrlTemplate: "https://{server}/share?text={text}",
    icon: <SiMisskey />,
    instanceVariation: true
  },
  {
    name: "threads",
    shareUrlTemplate: "barcelona://create?text={text}",
    icon: <SiThreads />,
    instanceVariation: false
  }
];
