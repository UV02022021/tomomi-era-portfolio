import re

# Read the file
with open(r'c:\Users\userv\Downloads\Tomomi-Era-Portfolio\src\pages\Projects.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update imports - remove unused icons
content = content.replace(
    'import {Calendar, Users, Wrench as Tool, ChevronDown, ChevronUp, Smartphone, Building, Shirt, Languages, Shield, Clock, Target, X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Star, Award, TrendingUp, CheckCircle, BarChart3, Eye, Layers, Brain, Lightbulb, Rocket, Globe, Heart, Briefcase, ArrowRight, AlertCircle} from \'lucide-react\'',
    'import {Calendar, Users, Wrench as Tool, ChevronDown, ChevronUp, Smartphone, Building, Shirt, Languages, Shield, Clock, Target, X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Star, TrendingUp, CheckCircle, Lightbulb, Briefcase, AlertCircle} from \'lucide-react\''
)

# 2. Improve process descriptions for Project 1
process1_old = [
    ('現状分析と課題抽出', '既存ダッシュボードを分析し、操作性と情報量の課題を抽出。小さな文字や複雑な表の可読性の低さ、横スクロールが頻発するレイアウト、タップ領域不足による誤操作など、具体的なモバイル利用時の問題点を明確化した。'),
    ('要件定義', 'ユーザー要件と機能要件を定義。店舗管理者が外出先でも重要指標を素早く確認でき、クライアント担当者がKPIや傾向を追跡できることを優先し、KPIカード、グラフ比較、フィルタリング、レポートダウンロードなどの必須機能を設定した。'),
    ('情報設計', 'モバイル最適化された情報の優先度と構造を構築。KPIカードを最上部に配置し、折れ線グラフや棒グラフを使った傾向チャート、詳細データは縦積みとアコーディオンで展開可能に設計。'),
    ('UIデザインとプロトタイピング', '直感的でタップしやすいインターフェースを設計。カードレイアウトで情報を整理し、最小44pxのタップ領域を確保。フィルタはモーダルやドロワーで展開可能にし、グラフのレスポンシブ対応やスワイプ操作を実現。Figmaでワイヤーフレームから高精度デザイン、インタラクションデザインまでを手がけ、実際の利用シーンを想定したプロトタイプを構築した。'),
    ('ユーザーテストと改善', '実際のユーザーとKPIの可読性、フィルタ操作の直感性、グラフの視認性を検証。ログやヒートマップを通じた利用状況の分析を進行中で、得られたデータに基づく定期的なUI更新により、より実用的でストレスフリーなモバイルダッシュボードを目指している。')
]

process1_new = [
    ('現状分析と課題抽出', 'PC向けダッシュボードのモバイル利用における課題を徹底的に分析しました。文字サイズの不足、複雑な表組みの可読性低下、頻繁な横スクロールの発生、タップ領域の狭さによる誤操作など、実際の利用シーンで発生する具体的な問題点を洗い出し、改善の優先順位を明確化しました。'),
    ('要件定義とユーザーストーリー', '店舗管理者とクライアント担当者、それぞれのユーザーニーズを詳細にヒアリングし、要件を定義しました。外出先での素早いKPI確認、傾向分析、データフィルタリング、レポート出力など、モバイル環境で必要とされる機能を優先度順に整理し、実装範囲を決定しました。'),
    ('情報アーキテクチャ設計', 'モバイル画面に最適化された情報階層を設計しました。最重要KPIを画面上部に配置し、一目で状況を把握できるよう工夫。詳細データはアコーディオンで段階的に展開できる構造とし、限られた画面スペースを効率的に活用する設計を行いました。'),
    ('UIデザインとプロトタイピング', 'タップ操作を前提とした直感的なインターフェースを設計しました。最小44pxのタップ領域確保、カードベースのレイアウト、モーダル・ドロワーを活用したフィルタ機能など、モバイルUXのベストプラクティスを適用。Figmaでワイヤーフレームから高精度モックアップ、インタラクティブプロトタイプまで作成し、実際の操作感を事前検証しました。'),
    ('ユーザーテストと継続的改善', '実際のユーザーを対象としたユーザビリティテストを実施し、KPI表示の視認性、フィルタ操作の直感性、グラフの理解しやすさを検証しました。ヒートマップやセッション録画による行動分析も並行して実施し、得られたインサイトをもとに継続的なUI改善を進めています。')
]

for (old_title, old_desc), (new_title, new_desc) in zip(process1_old, process1_new):
    content = content.replace(
        f"title: '{old_title}',\n          description: '{old_desc}'",
        f"title: '{new_title}',\n          description: '{new_desc}'"
    )

# Write the file
with open(r'c:\Users\userv\Downloads\Tomomi-Era-Portfolio\src\pages\Projects.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Changes applied successfully!")
