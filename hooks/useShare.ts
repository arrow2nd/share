import { Service } from "@/types/service";

export const useShare = (service: Omit<Service, "icon">) => {
  return service.shareUrlTemplate;
};

