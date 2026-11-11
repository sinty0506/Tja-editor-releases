# Tja-Editor3 — 無料のTJA譜面エディター

しんてぃ開発のTJA譜面作成・編集アプリです。同名の別ソフトと区別するため、旧称「TJA Editor」から **Tja-Editor3** に改名しました。

音源からの自動採譜、下位難易度の譜面生成、波形を使ったノート編集、多重スクロール、譜面分岐、音源編集、演奏動画のMP4撮影に対応します。

再生中の譜面編集と、画面／GOGO／1小節／4小節のループ再生に対応。ループの待機は1/4小節刻みで、待機中はメトロノームが鳴ります。独立した編集バーと爆弾音符（C）も利用できます。ループ中も↑／↓でグリッドを変更し、←／→で編集バーを移動できます。

## Web版（インストール不要）

[ブラウザーでTja-Editor3を使う](https://tja-editor-web.trueporcupine1.chatgpt.site/) / [Tja-Editor3について](https://tja-editor-web.trueporcupine1.chatgpt.site/about.html)

音源・動画は端末内で処理します。「保存」で音源付きの編集ZIP、「書き出し」でTJA＋OGGのZIPをダウンロードできます。閉じる前に保存してください。
MP4撮影・PNG保存・ローカル動画の読み込み・音源編集・試し叩きに対応します。PC音録音はブラウザーの共有機能に依存します。YouTube URLからの直接読み込みはWindows版をご利用ください。

## Windows版

[Windows版の紹介・インストール案内](https://tja-editor-web.trueporcupine1.chatgpt.site/desktop.html)

最新のループ操作修正版は [20261111-rc4](https://github.com/sinty0506/Tja-editor-releases/releases/tag/windows-20261111-rc4) です。
[Windows x64用ZIPをダウンロード](https://github.com/sinty0506/Tja-editor-releases/releases/download/windows-20261111-rc4/Tja-Editor3-Windows-x64-20261111-rc4.zip)（約184.6MB）。

ZIPをすべて展開し、フォルダー内の **Tja-Editor3.exe** を起動してください。exeだけを取り出さず、フォルダー一式を保持してください。
コード署名はありません。各リリースに照合用SHA-256を添付しています。

既存の `.tjaproj` / `.tjadanproj` を引き続き使用できます。名称変更のためにプロジェクト形式やキー設定の保存キーを変更していません。

Windows版はファイルへの直接保存、YouTubeの音源・動画URLからの読み込み、MP4／MKV撮影、譜面ごとの撮影素材・配置の保存に対応します。
撮影では2譜面比較・全難易度・分岐3／6譜面を表示できます。多重スクロールの追加レーン、個別の表示用BPM・HS、レーン結合とTJA出力にも対応します（通常SCROLL）。

詳しい操作はZIP内の「はじめに.txt」「Windows版操作ガイド.md」「撮影機能ガイド.md」を参照してください。

配布版は独自のCanvas描画を使用し、既存のゲームスキン・ゲーム音源・曲や動画素材を同梱しません。撮影フォントは各PCにインストールされたものを使用します。第三者ソフトウェアのライセンス・出典・FFmpegのソース情報とビルド設定を同梱しています。

このリポジトリは配布専用です。開発用リポジトリの内容や個人用スキン版は公開していません。
