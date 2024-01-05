import Link from "next/link";
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
      "X (旧 Twitter) / Mastodon / Misskey など、様々な SNS へのシェアリンクをひとつのサイトにまとめることができる Web アプリです。",
      "営利・非営利問わず、どなたでもご自由にご利用いただけます。広告もありません！",
    ],
  },
  {
    title: "入力したサーバー情報について",
    body: [
      "Mastodon / Misskey では、共有先のサーバーのドメインを入力する必要があります。",
      "1度共有したサーバーは直近5件まで記録され、入力補完の上位に表示されます。",
      "これらの情報はすべてお使いのブラウザに保存されています。",
    ],
  },
];

export default function HelpDialog() {
  const cardSections = sections.map(({ title, body }) => {
    return (
      <div key={title}>
        <p className="text-lg font-bold" key={title}>{title}</p>
        {body.map((text) => <p className="mt-1" key={text}>{text}</p>)}
      </div>
    );
  });

  return (
    <div className="fixed top-0 left-0 z-10 w-screen h-screen flex justify-center items-center bg-black/75">
      <Card className="relative text-neutral-800 text-sm">
        <Link
          className="absolute top-0 right-0 text-lg p-4 hover:text-blue-500 transition-colors"
          href="/"
        >
          <RiCloseLine />
        </Link>
        <div className="space-y-4">
          {cardSections}
          <div>
            <p className="text-lg font-bold">開発者の方へ</p>
            <p className="mt-1">
              URL を作成し、サイトにシェアリンクとして埋め込むことができます。
            </p>
            <p className="mt-1">
              基本的にはシェアしたいテキストを入力し「シェアリンクをコピー」をクリックすれば、URL
              を作成・コピーできます。
            </p>
            <p className="mt-1">
              詳しいシェアリンクの形式は
              <a
                className="underline text-neutral-500 hover:text-blue-500 transition-colors"
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
