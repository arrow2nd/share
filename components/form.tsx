"use client";

import { useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import { RiInformationLine } from "react-icons/ri";
import Button from "@/components/button";
import ServiceButton from "@/components/service-button";
import { addHistories, fetchServers } from "@/libs/servers";
import { services } from "@/libs/services";
import { Service } from "@/types/service";
import Card from "./card";

export type FormProps = {
  defaultService: Service;
  defaultServer: string;
  defaultText: string;
};

export default function Form(
  { defaultService, defaultServer, defaultText }: FormProps,
) {
  const [service, setService] = useState<Omit<Service, "icon">>(defaultService);
  const [serverDomain, setServer] = useState<string>(defaultServer);
  const [text, setText] = useState<string>(defaultText);
  const [servers, setServers] = useState<string[]>([]);
  const [isCopied, toggleCopied] = useReducer((prev) => !prev, false);

  const router = useRouter();

  const disabledShare = !text || (service.instanceVariation && !serverDomain);

  const handleClickCopy = async () => {
    if (disabledShare) {
      return;
    }

    const url = new URL("https://しぇあ.com");

    url.searchParams.append("service", service.name);

    if (serverDomain) {
      url.searchParams.append("server", serverDomain);
    }

    url.searchParams.append("text", text);

    await navigator.clipboard.writeText(url.href);

    toggleCopied();
    setTimeout(() => toggleCopied(), 1500);
  };

  const handleClickShare = () => {
    if (disabledShare) {
      return;
    }

    // 履歴に追加
    if (service.instanceVariation && serverDomain) {
      addHistories(service.name, serverDomain);
    }

    const shareUrl = service.shareUrlTemplate
      .replace("{server}", serverDomain)
      .replace("{text}", encodeURIComponent(text));

    router.push(shareUrl);
  };

  return (
    <Card className="relative">
      <a
        className="absolute -top-6 right-1 flex items-center text-sm text-neutral-500 hover:text-blue-500 transition-colors"
        href="/help"
      >
        <RiInformationLine className="w-4 h-4 mr-1" />
        これはなに？
      </a>
      <div className="flex space-x-2">
        {services.map((s) => (
          <ServiceButton
            key={s.name}
            selected={s.name === service.name}
            onClick={async () => {
              setService(s);
              setServer("");

              if (s.instanceVariation) {
                const res = await fetchServers(s.name);
                setServers(res);
              }
            }}
          >
            {s.icon}
          </ServiceButton>
        ))}
      </div>
      <div
        className={`mt-6 ${!service.instanceVariation ? "hidden" : undefined}`}
      >
        <input
          className="w-full text-neutral-600 rounded-md outline-none"
          placeholder="サーバーのドメインを入力"
          value={serverDomain}
          list="servers"
          onChange={(e) => setServer(e.target.value)}
        />
        <datalist id="servers">
          {servers.map((url) => <option key={url} value={url}></option>)}
        </datalist>
      </div>
      <textarea
        className="w-full min-h-32 mt-6 text-neutral-600 outline-none"
        placeholder="なにをしぇあする？"
        defaultValue={defaultText}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-end mt-6 space-y-2 sm:space-y-0 sm:space-x-2 flex-col sm:flex-row">
        <Button
          onClick={handleClickCopy}
          disabled={disabledShare}
        >
          {isCopied ? "コピーしました！" : "シェアリンクをコピー"}
        </Button>
        <Button
          onClick={handleClickShare}
          disabled={disabledShare}
        >
          {service.name.slice(0, 1).toUpperCase() +
            service.name.slice(1)}でしぇあ
        </Button>
      </div>
    </Card>
  );
}
