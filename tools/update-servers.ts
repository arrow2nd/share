const { writeFileSync } = require("fs");

const fetchServers = async <T>(url: string, f: (json: T) => string[]) => {
  console.log(`[LOG] fetch (${url})`);
  const res = await fetch(url);

  if (!res.ok) {
    return;
  }

  console.log("[LOG] parse");
  const json = await res.json() as T;

  return f(json);
};

type MastodonServers = {
  domain: string;
}[];

type MisskeyServers = {
  instancesInfos: {
    url: string;
  }[];
};

(async () => {
  // Mastodon
  const mastodon = await fetchServers<MastodonServers>(
    "https://api.joinmastodon.org/servers?language=&category=&region=&ownership=&registrations=",
    (json) => json.map(({ domain }) => domain),
  );

  if (mastodon) {
    writeFileSync("./public/mastodon.json", JSON.stringify(mastodon));
  }

  console.log("[DONE] mastodon");

  // Misskey
  const misskey = await fetchServers<MisskeyServers>(
    "https://instanceapp.misskey.page/instances.json",
    (json) => json.instancesInfos.map(({ url }) => url),
  );

  if (misskey) {
    writeFileSync("./public/misskey.json", JSON.stringify(misskey));
  }

  console.log("[DONE] misskey");
})();
