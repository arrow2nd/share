"use client";

import ServiceButton from "@/components/button";
import { services } from "@/libs/services";
import { Service } from "@/types/service";
import { useState } from "react";

export default function Form() {
  const [service, setService] = useState<Omit<Service, "icon">>(services[0]);
  const [server, setServer] = useState<string>("");
  const [text, setText] = useState<string>("");

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
            onClick={() => setService(s)}
          >
            {s.icon}
          </ServiceButton>
        ))}
      </div>
      <div className={service.hiddenSelectServer ? "hidden" : ""}>
        <input
          className="w-full text-neutral-600 rounded-md outline-none"
          placeholder="インスタンス・サーバーを選択"
          onChange={(e) => setServer(e.target.value)}
        />
      </div>
      <div>
        <textarea
          className="w-full min-h-32 text-neutral-600 outline-none"
          placeholder="なにをしぇあする？"
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
