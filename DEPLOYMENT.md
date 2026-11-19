# Webサイトの公開・更新

公開先：https://sinty0506.github.io/Tja-editor-releases/

このリポジトリの main ブランチ、docs フォルダーをGitHub Pagesで配信しています。ChatGPTやSitesの認証・サーバー・APIは使いません。アプリ、描画素材、紹介動画は同じ公開先に置いています。音源・動画・編集中の譜面は訪問者のブラウザー内で処理します。

## 通常の更新

1. 開発用リポジトリで npm run build:web を実行します。公開用サイトURLと配布情報は packages/web/site-config.json で指定します。
2. 出力された web-site/dist の内容を、このリポジトリの docs へコピーします。開発用TypeScript、ソースマップ、利用者の譜面・音源、個人用素材、認証情報はコピーしません。
3. docs の変更を確認してコミットし、mainへpushします。GitHub Pagesが自動で反映します。

GitHubの Settings → Pages → Build and deployment は Deploy from a branch、main、/docs を指定します。.nojekyllは削除しないでください。

## Windows版のDLリンク

サイトは Releasesの最新版への固定リンクを使用します。新しいWindows配布版を公開するときは、ZIPのアセット名を Tja-Editor3-Windows-x64.zip、照合用ファイルを Tja-Editor3-Windows-x64.zip.sha256.txt とし、そのリリースをLatestにします。ZIPのSHA-256を照合し、公開後はログインしていないブラウザーからダウンロードを確認してください。紹介ページの版番号・容量も、次のWebビルド時に更新します。

## 別のサーバーへ移す場合

docs は静的ファイルだけで動きます。HTTPS対応の静的ホスティングへフォルダーの内容をそのまま配置し、サイトURLのcanonical・sitemapを移転先に合わせて再ビルドします。ChatGPT用の資格情報は不要です。
