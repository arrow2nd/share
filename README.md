# しぇあ.com

📬 X (旧 Twitter) / Mastodon / Misskey / Threads など、各種 SNS へのシェアリンクを1つにまとまられる Web アプリ

<img width="1280" src="https://github.com/arrow2nd/share/assets/44780846/86a8f249-1862-4020-a9f9-e738d09fe34f" />

## なにこれ

各種 SNS へのシェアを集約できる Web アプリです。 ほしかったので作りました。

## 使い方

`https://しぇあ.com?text=シェアしたいテキスト` でシェアリンクが作成できます。

### 利用できるパラメータ

> [!NOTE]
>
> いずれも省略可能です

| パラメータ名 | 説明                       | 例                     | 備考                                                |
| ------------ | -------------------------- | ---------------------- | --------------------------------------------------- |
| service      | シェア先のサービス名       | `service=x`            | `x` / `mastodon` / `misskey` / `threads` が利用可能 |
| server       | シェア先のサーバードメイン | `server=imastodon.net` |                                                     |
| text         | シェアテキスト             | `text=にゃーん`        |                                                     |
