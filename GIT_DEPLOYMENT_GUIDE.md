# 🚀 Git デプロイメントガイド

## 📋 **概要**
GitリポジトリからVercelに自動デプロイする方法を説明します。一度設定すれば、コードをpushするだけで自動的にサイトが更新されます。

## ✅ **現在の状況**
- ✅ Gitリポジトリ初期化済み
- ✅ 初期コミット完了 (commit: 4a869b3)
- ✅ Viteビルド設定済み (`npm run build`)
- ✅ 出力ディレクトリ: `dist/`
- ✅ Vercel設定ファイル: `vercel.json` 作成済み

## 🎯 **方法1: GitHub + Vercel (推奨)**

### ステップ1: GitHubリポジトリ作成
1. [GitHub.com](https://github.com) にログイン
2. 「New repository」をクリック
3. リポジトリ名: `tomomi-era-portfolio` (または任意の名前)
4. 「Public」を選択 (無料プランの場合)
5. 「Create repository」をクリック

### ステップ2: ローカルからGitHubにプッシュ
```bash
# リモートリポジトリを追加
git remote add origin https://github.com/[ユーザー名]/tomomi-era-portfolio.git

# メインブランチに変更（推奨）
git branch -M main

# GitHubにプッシュ
git push -u origin main
```

### ステップ3: Vercelで自動デプロイ設定
1. [Vercel.com](https://vercel.com) にアクセス
2. 「Continue with GitHub」でログイン
3. 「New Project」をクリック
4. GitHubリポジトリ一覧から `tomomi-era-portfolio` を選択
5. 「Import」をクリック

### ステップ4: Vercel設定確認
Vercelが自動で以下を検出します：
- ✅ **Framework**: Vite
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `dist`
- ✅ **Install Command**: `npm install`

「Deploy」をクリックで完了！

## 🎯 **方法2: GitLab + Netlify**

### ステップ1: GitLabリポジトリ作成
```bash
git remote add origin https://gitlab.com/[ユーザー名]/tomomi-era-portfolio.git
git push -u origin main
```

### ステップ2: Netlify連携
1. [Netlify.com](https://netlify.com) にアクセス
2. 「New site from Git」をクリック
3. 「GitLab」を選択
4. リポジトリを選択
5. ビルド設定:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

## 🔄 **自動デプロイの仕組み**

### デプロイフロー
```
コード変更 → git push → 自動ビルド → サイト更新
```

### 更新手順
```bash
# 1. ファイルを編集
# 2. 変更をコミット
git add .
git commit -m "機能追加: 新しいプロジェクトを追加"

# 3. GitHubにプッシュ（自動デプロイ開始）
git push origin main
```

## 📊 **デプロイ設定詳細**

### Vercel設定 (`vercel.json`)
```json
{
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ]
}
```

### ビルド設定
- **Node.js Version**: 18.x (推奨)
- **Package Manager**: npm
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite (自動検出)

## 🌟 **メリット**

### 自動デプロイ
- ✅ コードプッシュで即座にデプロイ
- ✅ ビルドエラーの自動検出
- ✅ プレビューURL生成

### 無料機能
- ✅ HTTPS自動対応
- ✅ グローバルCDN
- ✅ カスタムドメイン対応
- ✅ 無制限のデプロイ回数

### 開発効率
- ✅ プルリクエストでプレビュー環境
- ✅ ロールバック機能
- ✅ デプロイ履歴管理

## 🔧 **実行コマンド**

### 初回デプロイ
```bash
# 1. GitHubリポジトリのURLを確認して実行
git remote add origin https://github.com/[ユーザー名]/[リポジトリ名].git
git branch -M main
git push -u origin main
```

### 更新デプロイ
```bash
# ファイル変更後
git add .
git commit -m "更新内容の説明"
git push origin main
```

## 🚨 **注意点**

### Gitignore設定済み
以下は自動的に除外されます：
- ❌ `node_modules/`
- ❌ `dist/` (ローカルビルド)
- ❌ 環境変数ファイル

### ブランチ運用
- `main`: 本番環境 (自動デプロイ)
- `develop`: 開発環境 (プレビューデプロイ)

## 🆘 **トラブルシューティング**

### ビルドエラー
```bash
# ローカルでビルドテスト
npm run build

# エラーがあれば修正してからプッシュ
```

### デプロイ失敗
1. Vercelダッシュボードでログ確認
2. ビルドコマンドの設定確認
3. Node.jsバージョン確認

## 📈 **デプロイ後の管理**

### URL確認
- **本番URL**: `https://[プロジェクト名].vercel.app`
- **カスタムドメイン**: 設定可能

### 分析機能
- ✅ アクセス解析
- ✅ パフォーマンス監視
- ✅ エラー追跡

---

**🎉 設定完了後は `git push` するだけで自動デプロイされます！**