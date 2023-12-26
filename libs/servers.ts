import { Service } from "@/types/service";

export const fetchServers = async (
  serviceName: Service["name"],
): Promise<string[]> => {
  const res = await fetch(`/${serviceName}.json`);
  if (!res.ok) {
    return [];
  }

  return await res.json() as string[];
};
