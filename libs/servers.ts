import { Service } from "@/types/service";

export const fetchServers = async (
  serviceName: Service["name"]
): Promise<string[]> => {
  // 履歴を読み込む
  const histories: string[] = JSON.parse(
    localStorage.getItem(serviceName) || "[]"
  );

  // リストを取得
  const res = await fetch(`/${serviceName}.json`);
  if (!res.ok) {
    return [];
  }

  const servers = (await res.json()) as string[];

  // 重複を除きつつマージ
  return [...new Set(histories.concat(servers))];
};

export const addHistories = (
  serviceName: Service["name"],
  serverDomain: string
) => {
  const histories: string[] = JSON.parse(
    localStorage.getItem(serviceName) || "[]"
  );

  const newHistories = [...new Set([serverDomain].concat(histories))];
  localStorage.setItem(serviceName, JSON.stringify(newHistories));
};
