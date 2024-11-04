import { JSX } from "react";

export type Service = {
  name: string;
  shareUrlTemplate: string;
  icon: JSX.Element;
  instanceVariation: boolean;
};
