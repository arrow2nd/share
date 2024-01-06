import { FormProps } from "@/components/form";

/**
 * シェアURLを作成
 * @param service 共有先のサービス
 * @param serverDomain ドメイン名
 * @param text 本文
 * @returns URL
 */
export const createShareURL = ({ service, serverDomain, text }: FormProps) => {
  const url = new URL("https://しぇあ.com");

  url.searchParams.append("service", service.name);

  if (serverDomain) {
    url.searchParams.append("server", serverDomain);
  }

  if (text) {
    url.searchParams.append("text", text);
  }

  return url;
};
