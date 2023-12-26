"use client";

import ServiceButton from "@/components/button";
import { fetchServers } from "@/libs/servers";
import { services } from "@/libs/services";
import { Service } from "@/types/service";
import { useEffect, useState } from "react";

export type FormProps = {
  defaultService: Service;
  defaultServer: string;
  defaultText: string;
};

export default function Form(
  { defaultService, defaultServer, defaultText }: FormProps,
) {
  const [service, setService] = useState<Omit<Service, "icon">>(defaultService);
  const [server, setServer] = useState<string>(defaultServer);
  const [text, setText] = useState<string>(defaultText);
  const [servers, setServers] = useState<string[]>([]);

  const shareUrl = service.shareUrlTemplate.replace("{server}", server).replace(
    "{text}",
    encodeURIComponent(text),
  );

  return (
    <div className="w-full max-w-lg p-8 space-y-6 bg-white shadow-lg rounded-xl">
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
      <div className={!service.instanceVariation ? "hidden" : undefined}>
        <input
          className="w-full text-neutral-600 rounded-md outline-none"
          placeholder="インスタンス・サーバーを選択"
          value={server}
          autoComplete="on"
          list="servers"
          onChange={(e) => setServer(e.target.value)}
        />
        <datalist id="servers">
          {servers.map((url) => <option key={url} value={url}></option>)}
        </datalist>
      </div>
      <div>
        <textarea
          className="w-full min-h-32 text-neutral-600 outline-none"
          placeholder="なにをしぇあする？"
          defaultValue={defaultText}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <a
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-5 py-2 cursor-pointer"
          href={shareUrl}
        >
          しぇあ
        </a>
      </div>
    </div>
  );
}
