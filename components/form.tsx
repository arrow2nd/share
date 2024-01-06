"use client";

import { useReducer, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiInformationLine } from "react-icons/ri";
import Button from "@/components/button";
import ServiceButton from "@/components/service-button";
import { addHistories, fetchServers } from "@/libs/servers";
import { services } from "@/libs/services";
import { Service } from "@/types/service";
import { createShareURL } from "@/libs/url";
import Card from "./card";

export type FormProps = {
  service: Service;
  serverDomain: string;
  text: string;
};

export default function Form(props: FormProps) {
  const [servers, setServers] = useState<string[]>([]);
  const [isCopied, toggleCopied] = useReducer((prev) => !prev, false);

  const router = useRouter();
  const disabledShare = !props.text ||
    (props.service.instanceVariation && !props.serverDomain);

  const updateURLParams = (p: FormProps) => {
    const url = createShareURL(p);
    router.replace("?" + url.searchParams.toString());
  };

  const handleClickCopy = async () => {
    if (disabledShare) {
      return;
    }

    const url = createShareURL(props);
    await navigator.clipboard.writeText(url.href);

    toggleCopied();
    setTimeout(() => toggleCopied(), 1500);
  };

  const handleClickShare = () => {
    if (disabledShare) {
      return;
    }

    // 履歴に追加
    if (props.service.instanceVariation && props.serverDomain) {
      addHistories(props.service.name, props.serverDomain);
    }

    const shareUrl = props.service.shareUrlTemplate
      .replace("{server}", props.serverDomain)
      .replace("{text}", encodeURIComponent(props.text));

    router.push(shareUrl);
  };

  return (
    <Card className="relative">
      <Link
        className="absolute -top-6 right-1 flex items-center text-sm text-neutral-500 hover:text-blue-500 transition-colors"
        href="/help"
      >
        <RiInformationLine className="w-4 h-4 mr-1" />
        これはなに？
      </Link>
      <div className="flex space-x-2">
        {services.map((s) => (
          <ServiceButton
            key={s.name}
            selected={s.name === props.service.name}
            onClick={async () => {
              if (s.instanceVariation) {
                const res = await fetchServers(s.name);
                setServers(res);
              }

              updateURLParams({ ...props, service: s });
            }}
          >
            {s.icon}
          </ServiceButton>
        ))}
      </div>
      <div
        className={`mt-6 ${
          !props.service.instanceVariation ? "hidden" : undefined
        }`}
      >
        <input
          className="w-full text-neutral-600 rounded-md outline-none"
          placeholder="サーバーのドメインを入力"
          defaultValue={props.serverDomain}
          list="servers"
          onBlur={(e) =>
            updateURLParams({ ...props, serverDomain: e.target.value })}
        />
        <datalist id="servers">
          {servers.map((url) => <option key={url} value={url}></option>)}
        </datalist>
      </div>
      <textarea
        className="w-full min-h-32 mt-6 text-neutral-600 outline-none"
        placeholder="なにをしぇあする？"
        defaultValue={props.text}
        onBlur={(e) => updateURLParams({ ...props, text: e.target.value })}
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
          {props.service.name.slice(0, 1).toUpperCase() +
            props.service.name.slice(1)}でしぇあ
        </Button>
      </div>
    </Card>
  );
}
