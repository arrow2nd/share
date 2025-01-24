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
import { useDebounce } from "react-use";

export type FormProps = {
  service: Service;
  serverDomain: string;
  text: string;
};

export default function Form(props: FormProps) {
  const [servers, setServers] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [isCopied, toggleCopied] = useReducer((prev) => !prev, false);

  const router = useRouter();

  useDebounce(
    () => {
      if (text !== "") {
        updateURLParams({ ...props, text });
      }
    },
    250,
    [text]
  );

  const disabledShare =
    !props.text || (props.service.instanceVariation && !props.serverDomain);

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
        className="absolute -top-6 right-1 flex items-center text-sm text-neutral-500 transition-colors hover:text-blue-500"
        href="/help"
      >
        <RiInformationLine className="mr-1 h-4 w-4" />
        これはなに？
      </Link>
      <div className="flex space-x-2">
        {services.map((s) => (
          <ServiceButton
            key={s.name}
            selected={s.name === props.service.name}
            onClick={async () => {
              updateURLParams({ ...props, service: s, serverDomain: "" });
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
          className="w-full rounded-md text-neutral-600 outline-hidden"
          placeholder="サーバーのドメインを入力"
          defaultValue={props.serverDomain}
          list="servers"
          onFocus={async () => {
            if (props.service.instanceVariation) {
              const res = await fetchServers(props.service.name);
              setServers(res);
            }
          }}
          onBlur={(e) =>
            updateURLParams({ ...props, serverDomain: e.target.value })
          }
        />
        <datalist id="servers">
          {servers.map((url) => (
            <option key={url} value={url}></option>
          ))}
        </datalist>
      </div>
      <textarea
        className="mt-6 min-h-32 w-full text-neutral-600 outline-hidden"
        placeholder="なにをしぇあする？"
        defaultValue={props.text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className="mt-6 flex flex-col justify-end space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
        <Button secondary onClick={handleClickCopy} disabled={disabledShare}>
          {isCopied ? "コピーしました！" : "シェアリンクをコピー"}
        </Button>
        <Button onClick={handleClickShare} disabled={disabledShare}>
          {props.service.name.slice(0, 1).toUpperCase() +
            props.service.name.slice(1)}
          でしぇあ
        </Button>
      </div>
    </Card>
  );
}
