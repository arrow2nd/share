"use client";

import { useRouter } from "next/navigation";
import Card from "./card";
import { RiCloseLine } from "react-icons/ri";

type Section = {
  title: string;
  body: string[];
};

const sections: Section[] = [
  {
    title: "これなに？",
    body: [
      "X (旧 Twitter) / Bluesky / Mastodon / Misskey など、様々な SNS へのシェアリンクをひとつのサイトにまとめることができる Web アプリです。",
      "営利・非営利問わず、どなたでもご自由にご利用いただけます。広告もありません！"
    ]
  },
  {
    title: "入力したサーバー情報について",
    body: [
      "Mastodon / Misskey では、共有先のサーバーのドメインを入力する必要があります。",
      "1度共有したサーバーは直近5件まで記録され、入力補完の上位に表示されます。",
      "これらの情報はすべてお使いのブラウザに保存されています。"
    ]
  }
];

export default function HelpDialog() {
  const router = useRouter();

  const cardSections = sections.map(({ title, body }) => {
    return (
      <div key={title}>
        <h2 className="text-xl font-bold" key={title}>
          {title}
        </h2>
        {body.map((text) => (
          <p className="mt-2 text-slate-700 dark:text-slate-300" key={text}>
            {text}
          </p>
        ))}
      </div>
    );
  });

  return (
    <div className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-black/75 p-6">
      <Card className="relative max-w-2xl text-sm">
        <button
          className="absolute top-0 right-0 p-4 text-lg transition-colors hover:text-slate-600"
          onClick={() => router.back()}
        >
          <RiCloseLine />
        </button>
        <div className="space-y-6">
          {cardSections}
          <div>
            <h2 className="text-xl font-bold">開発者の方へ</h2>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              SNS 共有のリンクとしてサイト等でご利用いただくことができます。
            </p>
            <p className="mt-1 text-slate-700 dark:text-slate-300">
              シェアしたいテキストを入力し「このページのリンクをコピー」をクリックして、URL
              を作成・コピーできます。
            </p>
            <p className="mt-1 text-slate-700 dark:text-slate-300">
              詳しいシェアリンクの形式は
              <a
                className="mx-1 text-slate-600 underline transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-500"
                href="https://github.com/arrow2nd/share/blob/main/README.md#%E4%BD%BF%E3%81%84%E6%96%B9"
              >
                GitHub の README
              </a>
              に記載しています。
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
