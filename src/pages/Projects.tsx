
import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, Wrench as Tool, ChevronDown, ChevronUp, Smartphone, Building, Shirt, Languages, Shield, Clock, Target, X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Star, CheckCircle, Lightbulb, Briefcase, AlertCircle } from 'lucide-react'

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentProjectImages, setCurrentProjectImages] = useState<string[]>([])
  const [imageScale, setImageScale] = useState(1)
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const projectsContainerRef = useRef<HTMLDivElement | null>(null)

  const projects = [
    {
      id: 1,
      title: '覆面調査（ミステリーショッピング） ダッシュボード レスポンシブデザイン',
      shortTitle: 'ミステリーショッピング ダッシュボード',
      status: '進行中',
      priority: 'high',
      period: '2025/08 - 現在 (月80時間)',
      duration: '5ヶ月+',
      team: '役員: 2名, 開発リーダー: 1名, 営業: 1名, プログラマー: 1名, デザイナー: 1名 (私)',
      teamSize: 6,
      tools: ['Figma', 'SpreadSheet', 'Meet', 'Slack'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      responsibilities: ['UI/UXデザイン', 'Webアプリ・モバイルアプリデザイン', 'プロトタイピング'],
      icon: Smartphone,
      color: 'bg-blue-500',
      gradientColor: 'from-blue-500 to-blue-600',
      category: 'モバイル最適化',
      industry: 'リテール・調査',
      complexity: 'high',
      challenges: ['レガシーシステムの制約', 'モバイル画面サイズの制限', 'リアルタイムデータ表示'],
      solutions: ['段階的リファクタリング', 'アダプティブデザイン', '効率的なデータ取得'],
      learnings: ['モバイルファーストの重要性', 'ユーザーテストの価値', 'アジャイル開発プロセス'],
      images: [
        '/assets/projects/project1_1.png'
      ],
      overview: '既存のダッシュボードをモバイル環境に最適化し、外出先でもミステリーショッピング結果の可視化を快適に利用できるようにする。',
      keyPoints: [
        '既存のPC向けダッシュボードを分析し、モバイル利用時の課題を整理',
        '優先度の高い指標を上部に配置し、直感的なユーザー操作を実現',
        '詳細データはアコーディオン形式で整理したUIプロトタイプを構築',
        'ユーザーテストを通じて、より実用的でストレスフリーなモバイルダッシュボードを目指す'
      ],
      process: [
        {
          title: '現状分析と課題抽出',
          description: 'PC向けダッシュボードのモバイル利用における課題を徹底的に分析。文字サイズの不足、複雑な表組みの可読性低下、頻繁な横スクロールの発生、タップ領域の狭さによる誤操作など、実際の利用シーンで発生する具体的な問題点を洗い出し、改善の優先順位を明確化。効果的な改善施策の基盤を構築しました。'
        },
        {
          title: '要件定義とユーザーストーリー',
          description: '店舗管理者とクライアント担当者、それぞれのユーザーニーズを詳細にヒアリングし、要件を定義。外出先での素早いKPI確認、傾向分析、データフィルタリング、レポート出力など、モバイル環境で必要とされる機能を優先度順に整理し、開発チームと合意した実装範囲を明確に設定。'
        },
        {
          title: '情報アーキテクチャ設計',
          description: 'モバイル画面に最適化された情報階層を設計。最重要KPIを画面上部に配置し、一目で状況を把握できるよう工夫。詳細データはアコーディオンで段階的に展開できる構造とし、限られた画面スペースを効率的に活用できる設計を実現。'
        },
        {
          title: 'UIデザインとプロトタイピング',
          description: 'タップ操作を前提とした直感的なインターフェースを設計。最小44pxのタップ領域確保、カードベースのレイアウト、モーダル・ドロワーを活用したフィルタ機能など、モバイルUXのベストプラクティスを適用。Figmaでワイヤーフレームから高精度モックアップ、インタラクティブプロトタイプまで作成し、実際の操作感を事前に検証することで開発前の課題発見を可能に。'
        },
        {
          title: 'ユーザーテストと継続的改善',
          description: '実際のユーザーを対象としたユーザビリティテストを実施し、KPI表示の視認性、フィルタ操作の直感性、グラフの理解しやすさを検証。ヒートマップやセッション録画による行動分析も並行して実施し、得られたインサイトをもとに継続的なUI改善を進めることで、より実用的でストレスフリーなモバイルダッシュボードを目指しています。'
        }
      ]
    },
    {
      id: 2,
      title: '建設業界向けSaaSダッシュボード',
      shortTitle: '建設業界向けSaaS',
      status: '完了',
      priority: 'high',
      period: '2024/06 - 2025/07 (約1年2ヶ月)',
      duration: '14ヶ月',
      team: 'PM: 1名,チームリーダー: 1名,各事業部リーダー: 4名,デザイナー: 2名',
      teamSize: 8,
      tools: ['Figma', 'Backlog', 'Outlook', 'Teams', 'Excel', 'PowerPoint'],
      technologies: ['React', 'TypeScript', 'Material-UI', 'Azure'],
      responsibilities: ['UI/UXデザイン', 'Webアプリ・モバイルアプリデザイン', 'プロトタイピング'],
      icon: Building,
      color: 'bg-blue-500',
      gradientColor: 'from-blue-500 to-blue-600',
      category: 'エンタープライズSaaS',
      industry: '建設・不動産',
      complexity: 'high',
      challenges: ['複雑な業務フロー', '多様なユーザー権限', 'レガシーシステム連携'],
      solutions: ['段階的なUXリニューアル', 'ロールベース設計', 'API連携最適化'],
      learnings: ['エンタープライズUXの重要性', 'ステークホルダー調整', '長期プロジェクト管理'],
      images: [
        '/assets/projects/project2_1.png',
        '/assets/projects/project2_2.png',
        '/assets/projects/project2_3.png',
        '/assets/projects/project2_4.png'
      ],
      overview: '建設業界向け基幹システムのダッシュボード改修と新機能作成。',
      keyPoints: [
        'ユーザーの行動心理を可視化して課題を特定し、結果に基づいたデザインを作成',
        'ユーザーの学習コストを最小限に抑え、目標達成までのスムーズなナビゲーション設計に注力',
        '建設現場での実用性を重視したインターフェース設計',
        'デザインシステム構築により、開発チームとの連携効率を向上'
      ],
      process: [
        {
          title: 'リサーチ・分析',
          description: '既存システムのユーザビリティ評価とヒューリスティック評価を実施。事業部を通じて建設現場スタッフに詳細なインタビューを行い、日常業務での課題やペインポイントを特定。現場での実際の利用シーンを観察し、PC環境とモバイル環境での使い分けパターンを分析。また、競合他社のダッシュボードの並行分析も実施し、業界のベストプラクティスを体系的に調査。'
        },
        {
          title: 'ペルソナ・カスタマージャーニー作成',
          description: '現場監督、作業員、管理者の3つの主要ペルソナを作成。それぞれの業務フロー、システム利用シーン、利用頻度、デバイス環境を詳細にマッピング。各タッチポイントでの課題と改善機会を明確化し、ペルソナごとの優先機能とUIニーズを整理。特に現場監督のモバイル利用シーンを重点的に分析し、外出先での情報確認ニーズに対応する設計方針を策定することで、ユーザー中心の設計基盤を確立。'
        },
        {
          title: '情報アーキテクチャ設計',
          description: '複雑な建設業務データを整理し、優先度に基づいた情報階層を構築。ダッシュボード上での情報表示順序やグルーピングを最適化し、ユーザーが必要な情報に素早くアクセスできる構造を設計。カードソート法を用いてメニュー構造を検証し、直感的なナビゲーション設計を実現。さらに、権限レベルに応じた情報の出し分けルールも設計することで、セキュリティと使いやすさを両立。'
        },
        {
          title: 'ワイヤーフレーム・プロトタイプ作成',
          description: 'Figmaを使用し、ローファイからハイファイまで段階的にプロトタイプを作成。各機能の操作フローをインタラクティブに表現し、ステークホルダーとの認識合わせを効率的に実施。特に複雑なデータ入力フローや承認プロセスについては、実際の操作感を確認できる高精度プロトタイプを作成し、開発前に課題を洗い出すことで、後工程での修正コストを大幅に削減。'
        },
        {
          title: 'デザインシステム構築',
          description: '再利用可能なコンポーネントライブラリを構築。カラーパレット、タイポグラフィ、アイコンセット、ボタンスタイル、フォーム要素などを統一し、開発チームとの連携効率を大幅に向上。デザイントークンを定義し、一貫性のあるビジュアルデザインを実現。また、コンポーネントの使用ガイドラインも作成し、開発チームが迷わず実装できる環境を整備することで、プロジェクト全体の品質と効率を向上。'
        },
        {
          title: 'ユーザビリティテスト・改善',
          description: '実際のユーザーを対象としたタスクベースのユーザビリティテストを実施。操作ログ分析とユーザーフィードバックに基づき、ナビゲーション最適化とインターフェースの微調整を繰り返し実行。特にタスク完了率が低かった機能については、UIを再設計し、2回目のテストで大幅な改善を確認。継続的な改善サイクルを確立し、リリース後も定期的にユーザビリティ評価を実施することで、高い品質を維持。'
        }
      ]
    },
    {
      id: 3,
      title: 'アパレル企業ダッシュボード',
      shortTitle: 'アパレル企業ダッシュボード',
      status: '完了',
      priority: 'medium',
      period: '2021 - 2024 (約1年6ヶ月)',
      duration: '18ヶ月',
      team: 'デザイナー: 1名 (私), プログラマー: 2名',
      teamSize: 3,
      tools: ['Figma', 'Notion', 'Quasar', 'VScode', 'Slack'],
      technologies: ['Vue.js', 'Quasar', 'JavaScript', 'Node.js'],
      responsibilities: ['UI/UXデザイン', 'デザイン', 'プロトタイピング', 'コーディング（一部）'],
      icon: Shirt,
      color: 'bg-blue-500',
      gradientColor: 'from-blue-500 to-blue-600',
      category: 'ECダッシュボード',
      industry: 'アパレル・ファッション',
      complexity: 'medium',
      challenges: ['大量SKUデータ表示', '在庫情報の複雑性', '売上分析の視認性'],
      solutions: ['データグリッド最適化', '階層的情報設計', 'ビジュアル分析ツール'],
      learnings: ['ECサイト特有のUX', 'Vue.jsフレームワーク', 'データ可視化技法'],
      images: [
        '/assets/projects/project3_1.png',
        '/assets/projects/project3_2.png'
      ],
      overview: 'アパレル企業向けダッシュボードの刷新と新機能作成。',
      keyPoints: [
        '情報量が多いため、色・フォント・レイアウトなどを統一',
        'シンプルなUIを重視し、無駄のない明確なナビゲーションで一貫性のあるデザインを作成',
        'アパレル業界特有の業務フロー（在庫管理、売上分析、出荷、生産）を考慮',
        'Quasarフレームワークを使用したレスポンシブデザインの実装'
      ],
      process: [
        {
          title: 'ヒアリング・リサーチ',
          description: 'アパレル業界特有の在庫管理、売上分析、出荷、生産などの円滑な業務運営のためのナビゲーションとニーズを詳細にヒアリング。商品企画から販売までのバリューチェーン全体を理解し、各部門のスタッフが日常的に確認する情報と操作フローを洗い出し。特にシーズン切り替え時の在庫管理や、SKU単位での売上分析ニーズを重点的に調査し、業界特有の課題を明確化することで、実務に即した設計の土台を構築。'
        },
        {
          title: 'データ構造分析',
          description: '商品データ、売上データ、在庫データの関係性を詳細に分析し、効率的な情報表示方法を検討。大量のSKUデータ（色・サイズ・店舗別の組み合わせ）に対する見やすいレイアウトを研究し、階層的な情報設計を採用。ドリルダウン方式で詳細情報にアクセスできる構造を設計し、画面の情報密度を最適化することで、ユーザーが必要な情報に迅速に到達できる環境を整備。'
        },
        {
          title: 'UIデザイン・一貫性確保',
          description: '大量の情報を考慮した明確な視覚階層でのレイアウト設計を実施。色、タイポグラフィ、余白の統一により、複雑な情報を整理・表示できるデザインシステムを構築。カラーパレットは売上状況や在庫状態を直感的に理解できるよう設計し、重要な情報が一目で分かるビジュアルデザインを実現。さらに、データテーブルの可読性を高めるため、行の高さやセル内の余白も細かく調整することで、長時間の使用でも目が疲れにくいデザインを実現。'
        },
        {
          title: 'インタラクションデザイン',
          description: 'フィルタリング、ソート、ドリルダウン機能など、データ探索に必要なインタラクションを設計。直感的な操作で深い分析を可能にするナビゲーションを実現し、複数条件での絞り込みやクロス集計も簡単に実行できるUIを構築。特に頻繁に使用される操作については、ショートカットやクイックアクセス機能を設け、業務効率を大幅に向上させることで、日々の業務をスムーズに。'
        },
        {
          title: 'フロントエンド実装（一部）',
          description: 'Quasarフレームワークを使用したレスポンシブデザインの実装を担当。Vue.jsベースのコンポーネント開発により、保守性の高いコードベースを構築。特にデータテーブルコンポーネントやフィルタリング機能については、再利用性を考慮した設計を行い、開発チームと密接に連携しながら実装を進捗。パフォーマンスにも配慮し、大量データの表示でもスムーズな操作感を実現することで、ユーザー体験を大きく向上。'
        }
      ]
    },
    {
      id: 4,
      title: '翻訳アプリダッシュボード',
      shortTitle: '翻訳アプリダッシュボード',
      status: '完了',
      priority: 'medium',
      period: '2022 - 2023 (約1年)',
      duration: '12ヶ月',
      team: 'デザイナー: 1名 (私), プログラマー: 2名',
      teamSize: 3,
      tools: ['Figma', 'Notion', 'Slack'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      responsibilities: ['UI/UXデザイン', 'デザイン', 'プロトタイピング'],
      icon: Languages,
      color: 'bg-blue-500',
      gradientColor: 'from-blue-500 to-blue-600',
      category: '権限管理システム',
      industry: '翻訳・多言語',
      complexity: 'medium',
      challenges: ['複雑な権限設計', '多言語対応', 'ワークフロー管理'],
      solutions: ['ロールベースアクセス制御', 'カラーコーディングシステム', 'ステータス可視化'],
      learnings: ['権限設計のベストプラクティス', 'アクセシビリティ設計', 'グローバルUX考慮'],
      images: [
        '/assets/projects/project4_1.png',
        '/assets/projects/project4_2.png'
      ],
      overview: '翻訳アプリのユーザーページ（新機能追加）、テナント管理、システム管理ページを作成。',
      keyPoints: [
        '目的別に合わせた色彩設計、視認性の高いUIデザイン',
        '混乱なく操作できる明確なUX設計に注力',
        '3つの権限レベルに応じた画面設計',
        '多様なユーザーを考慮したアクセシビリティ対応'
      ],
      process: [
        {
          title: '権限別UI設計',
          description: 'ユーザー、テナント管理者、システム管理者の3つの権限レベルに応じた画面設計を実施。それぞれの役割に最適化された情報表示とアクセス制御を設計し、各権限レベルで利用できる機能を明確化。誤操作や情報漏洩を防ぐ設計を実現しました。また、権限変更時のスムーズな画面遷移も考慮し、ユーザーが混乱しないナビゲーションを設計することで、安全で使いやすいシステムを構築。'
        },
        {
          title: 'カラーシステム設計',
          description: '目的別カラーパレットを詳細に設計（一般ユーザー：青、管理者：緑、システム：紺）。権限レベルを視覚的に識別できるデザインシステムを構築し、各カラーのWCAGアクセシビリティ基準への準拠も確認済み。ステータス表示やアラートにも一貫したカラールールを適用し、直感的な理解を促進することで、ユーザーが一目で状況を把握できるインターフェースを実現。'
        },
        {
          title: '翻訳ワークフロー設計',
          description: '翻訳依頼から完了までのワークフローを詳細に可視化。進行状況、品質チェック、承認プロセスを直感的に理解できるインターフェースを設計。タイムライン表示やステータスバッジを活用し、複数の翻訳案件を同時に管理できるUIを実現しました。また、差し戻し時のフィードバック機能も設計し、コミュニケーションの効率化を図ることで、プロジェクト全体の生産性を向上。'
        },
        {
          title: 'アクセシビリティ対応',
          description: '多様なユーザーを考慮したアクセシブルなデザインを実装。WCAG 2.1 AAレベルに準拠した色のコントラスト比を確保し、キーボード操作でも全機能にアクセス可能な設計を実現しました。スクリーンリーダー対応のための適切なaria-labelやrole属性を追加し、フォーカス状態の視覚的フィードバックも強化することで、すべてのユーザーが快適に利用できるシステムを構築。'
        }
      ]
    },
    {
      id: 5,
      title: '安全運転支援サービスダッシュボード',
      shortTitle: '安全運転支援サービス',
      status: '完了',
      priority: 'high',
      period: '約3ヶ月',
      duration: '3ヶ月',
      team: 'デザイナー: 1名 (私), プログラマー: 2名',
      teamSize: 3,
      tools: ['Figma', 'Notion', 'Slack'],
      technologies: ['React Native', 'IoT SDK', 'Firebase'],
      responsibilities: ['UI/UXデザイン', 'デザイン', 'プロトタイピング'],
      icon: Shield,
      color: 'bg-blue-500',
      gradientColor: 'from-blue-500 to-blue-600',
      category: 'IoT連携アプリ',
      industry: '自動車・安全',
      complexity: 'high',
      challenges: ['IoTデバイス連携', '限られた操作時間', '緊急時対応'],
      solutions: ['ワンタップ操作', 'エラーハンドリング', 'リアルタイム状態表示'],
      learnings: ['IoT UX設計', 'ハードウェア連携', '緊急時UI設計'],
      images: [
        '/assets/projects/project5_1.png',
        '/assets/projects/project5_2.png'
      ],
      overview: '安全運転支援サービス（自動制御アプリ）のモバイル画面設計とダッシュボード新機能追加設計。',
      keyPoints: [
        '運転前のアルコールチェック完了後にエンジンが始動可能になるアルコール検知器と連動したシステム',
        '限られた時間内でスムーズなエンジン始動ができるよう、直感的で操作しやすいUI/UXを設計',
        'IoTデバイス連携の最適化',
        '車内での使用を想定したモバイルファーストデザイン'
      ],
      process: [
        {
          title: 'IoTデバイス連携設計',
          description: 'アルコール検知器からの信号受信とアプリ連携機構を詳細に設計。ハードウェアとソフトウェアの境界でのユーザーエクスペリエンスを最適化し、デバイス接続状態のリアルタイム表示や、検知結果の即座フィードバックを実現。Bluetooth接続の安定性を考慮したエラーハンドリングも設計。'
        },
        {
          title: 'シンプル操作フロー設計',
          description: '運転前の限られた時間内での操作を想定し、最小タップでアルコールチェックが完了するナビゲーションを設計。ワンタップでの機能起動を実現し、複雑なメニュー階層を排除することで、緊急時や時間がない状況でもストレスなく操作できるUIを実現。ユーザビリティテストでも操作時間の短縮を検証済み。'
        },
        {
          title: 'ダッシュボード管理機能',
          description: 'ドライバーの検査履歴、車両管理、アラート管理を管理者ダッシュボードに集約。記録管理機能の並行設計も実施し、法的要件を満たすデータ保存とレポート出力機能を設計。異常検知時のアラート通知システムも構築し、管理者が迅速に対応できる体制を整備。'
        },
        {
          title: 'モバイル最適化',
          description: '車内での使用を想定したモバイルファーストデザインを実装。片手操作を考慮したボタン配置、大きなタップ領域（最小44px）、高コントラストな色使いなど、車内環境での視認性を重視した設計を実現。また、直射日光下でも読みやすい画面設計や、振動環境でも誤タップを防ぐ工夫を反映。'
        },
        {
          title: 'エラーハンドリング設計',
          description: 'デバイス接続エラー、検査失敗、システム障害に対する適切なエラーメッセージと復旧手順を詳細に設計。ユーザーが混乱なく問題解決できるガイダンスを提供し、エラー状況を視覚的に分かりやすく表示。緊急時のサポート連絡先や、オフラインでも使用できるバックアップ手順も設計し、安心して利用できるシステムを構築。'
        }
      ]
    }
  ]

  const toggleProject = (projectId: number) => {
    if (expandedProject === projectId) {
      // 詳細を閉じる場合
      setExpandedProject(null)
    } else {
      // 詳細を開く場合
      setExpandedProject(projectId)
      // 該当プロジェクトの位置を取得してスクロール
      setTimeout(() => {
        const projectElement = document.getElementById(`project - ${projectId} `)
        if (projectElement) {
          const elementTop = projectElement.offsetTop
          const offset = 20 // 少し余白を持たせる
          window.scrollTo({
            top: elementTop - offset,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }

  const openImageModal = (imageSrc: string, projectId: number) => {
    const project = projects.find(p => p.id === projectId)
    if (project) {
      setCurrentProjectImages(project.images)
      const imageIndex = project.images.indexOf(imageSrc)
      setCurrentImageIndex(imageIndex)
      setSelectedImage(imageSrc)
      setImageScale(1)
      setImagePosition({ x: 0, y: 0 })
    }
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setCurrentProjectImages([])
    setCurrentImageIndex(0)
    setImageScale(1)
    setImagePosition({ x: 0, y: 0 })
  }

  const goToPreviousImage = () => {
    if (currentProjectImages.length > 1) {
      const newIndex = currentImageIndex === 0 ? currentProjectImages.length - 1 : currentImageIndex - 1
      setCurrentImageIndex(newIndex)
      setSelectedImage(currentProjectImages[newIndex])
      setImageScale(1)
      setImagePosition({ x: 0, y: 0 })
    }
  }

  const goToNextImage = () => {
    if (currentProjectImages.length > 1) {
      const newIndex = currentImageIndex === currentProjectImages.length - 1 ? 0 : currentImageIndex + 1
      setCurrentImageIndex(newIndex)
      setSelectedImage(currentProjectImages[newIndex])
      setImageScale(1)
      setImagePosition({ x: 0, y: 0 })
    }
  }

  const handleZoomIn = () => {
    setImageScale(prev => Math.min(prev * 1.5, 5))
  }

  const handleZoomOut = () => {
    setImageScale(prev => Math.max(prev / 1.5, 0.5))
  }

  const handleResetZoom = () => {
    setImageScale(1)
    setImagePosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (imageScale > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && imageScale > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (imageScale > 1 && e.touches.length === 1) {
      setIsDragging(true)
      setDragStart({
        x: e.touches[0].clientX - imagePosition.x,
        y: e.touches[0].clientY - imagePosition.y
      })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && imageScale > 1 && e.touches.length === 1) {
      setImagePosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4 sm:space-y-6"
      ref={projectsContainerRef}
    >
      {/* Header */}
      <div className="px-0 sm:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
              プロジェクト
            </h1>
            <p className="text-slate-600 text-base sm:text-lg">
              これまでに手がけたUI/UXデザインプロジェクトの詳細
            </p>
          </div>

          {/* Project Stats */}
          <div className="flex flex-wrap gap-4 lg:gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-slate-700">完了: {projects.filter(p => p.status === '完了').length}件</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">進行中: {projects.filter(p => p.status === '進行中').length}件</span>
            </div>
            <div className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700">総プロジェクト: {projects.length}件</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4 sm:space-y-6 px-0 sm:px-0">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            id={`project - ${project.id} `}
            layout
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Project Header */}
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Enhanced Header with badges and metrics */}
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${project.gradientColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <project.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    {/* Title and Status */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 leading-tight">
                            {project.shortTitle || project.title}
                          </h2>
                          <span className={`inline-flex items-center px-2.5 py-0.5 text-[10px] font-semibold rounded-full ${project.status === '進行中'
                            ? 'bg-orange-500 text-white shadow-sm'
                            : 'bg-green-500 text-white shadow-sm'
                            }`}>
                            {project.status === '進行中' && <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />}
                            {project.status}
                          </span>
                        </div>

                        {/* Category and Industry badges */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.category && (
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-medium rounded-md">
                              {project.category}
                            </span>
                          )}
                          {project.industry && (
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-medium rounded-md">
                              {project.industry}
                            </span>
                          )}
                          {project.complexity && (
                            <span className={`px-2 py-0.5 text-[10px] font-medium rounded-md ${project.complexity === 'high' ? 'bg-red-100 text-red-700' :
                              project.complexity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-green-100 text-green-700'
                              }`}>
                              複雑度: {project.complexity === 'high' ? '高' : project.complexity === 'medium' ? '中' : '低'}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4 text-sm sm:text-base leading-relaxed">{project.overview}</p>

                    {/* Enhanced Project Meta */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
                      <div className="flex items-center space-x-2 text-slate-600 p-2 bg-slate-50 rounded-lg">
                        <Calendar className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <div>
                          <div className="font-medium">期間</div>
                          <div className="text-xs">{project.duration || '計算中'}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-600 p-2 bg-slate-50 rounded-lg">
                        <Users className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <div>
                          <div className="font-medium">チーム</div>
                          <div className="text-xs">{project.teamSize || '未定'}名</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-600 p-2 bg-slate-50 rounded-lg">
                        <Tool className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        <div>
                          <div className="font-medium">メインツール</div>
                          <div className="text-xs">{project.tools[0]}</div>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    {project.technologies && (
                      <div className="mt-4">
                        <div className="text-xs font-medium text-slate-700 mb-2">技術スタック:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-0.5 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-[10px] font-medium rounded-md border border-indigo-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Images Preview */}
              <div className="mb-4 sm:mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden cursor-pointer group p-2 sm:p-3"
                      onClick={() => openImageModal(image, project.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openImageModal(image, project.id);
                        }
                      }}
                      aria-label={`${project.title} - 制作物 ${index + 1} を拡大表示`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - 制作物 ${index + 1} `}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 sm:w-6 sm:h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expand Button */}
              <button
                onClick={() => toggleProject(project.id)}
                className="w-full flex items-center justify-center space-x-2 py-2 sm:py-3 px-4 bg-slate-50 hover:bg-slate-100 rounded-lg sm:rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-expanded={expandedProject === project.id}
                aria-label={expandedProject === project.id ? `${project.shortTitle || project.title} の詳細を閉じる` : `${project.shortTitle || project.title} の詳細を見る`}
              >
                <span className="font-medium text-slate-700 text-sm sm:text-base">
                  {expandedProject === project.id ? '詳細を閉じる' : '詳細を見る'}
                </span>
                {expandedProject === project.id ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedProject === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-slate-200"
                >
                  <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">


                    {/* Challenges & Solutions */}
                    {project.challenges && project.solutions && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-red-50 rounded-xl p-6">
                          <h4 className="font-semibold text-slate-800 mb-4 flex items-center space-x-2">
                            <AlertCircle className="w-5 h-5 text-red-600" />
                            <span>主な課題</span>
                          </h4>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-slate-700">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-green-50 rounded-xl p-6">
                          <h4 className="font-semibold text-slate-800 mb-4 flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span>解決アプローチ</span>
                          </h4>
                          <ul className="space-y-2">
                            {project.solutions.map((solution, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-slate-700">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Key Learnings */}
                    {project.learnings && (
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                        <h4 className="font-semibold text-slate-800 mb-4 flex items-center space-x-2">
                          <Lightbulb className="w-5 h-5 text-indigo-600" />
                          <span>学び・気づき</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {project.learnings.map((learning, index) => (
                            <div key={index} className="flex items-start space-x-2 p-3 bg-white rounded-lg">
                              <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-700">{learning}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Points */}
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center space-x-2">
                        <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>制作ポイント</span>
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {project.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700 text-sm sm:text-base leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Team & Tools */}
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">制作体制</h3>
                        <p className="text-slate-700 bg-slate-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-sm sm:text-base leading-relaxed">{project.team}</p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">担当業務</h3>
                        <div className="space-y-2">
                          {project.responsibilities.map((responsibility, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                              <span className="text-slate-700 text-sm sm:text-base">{responsibility}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Process */}
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-4 sm:mb-6 flex items-center space-x-2">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>制作プロセス</span>
                      </h3>
                      <div className="space-y-4 sm:space-y-6">
                        {project.process.map((step, index) => (
                          <div key={index} className="relative">
                            <div className="flex items-start space-x-3 sm:space-x-4">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">{step.title}</h4>
                                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{step.description}</p>
                              </div>
                            </div>
                            {index < project.process.length - 1 && (
                              <div className="absolute left-3 sm:left-4 top-6 sm:top-8 w-px h-4 sm:h-6 bg-slate-200"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 詳細を閉じるボタン（下部にも配置） */}
                    <div className="pt-4 border-t border-slate-200">
                      <button
                        onClick={() => toggleProject(project.id)}
                        className="w-full flex items-center justify-center space-x-2 py-2 sm:py-3 px-4 bg-slate-50 hover:bg-slate-100 rounded-lg sm:rounded-xl transition-colors"
                      >
                        <span className="font-medium text-slate-700 text-sm sm:text-base">
                          詳細を閉じる
                        </span>
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Image Modal with Navigation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Control Bar */}
              <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
                <div className="flex space-x-2">
                  <button
                    onClick={handleZoomIn}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                    title="拡大"
                    aria-label="画像を拡大"
                  >
                    <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                  </button>
                  <button
                    onClick={handleZoomOut}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                    title="縮小"
                    aria-label="画像を縮小"
                  >
                    <ZoomOut className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                    title="リセット"
                    aria-label="ズームをリセット"
                  >
                    <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                  </button>
                </div>
                <button
                  onClick={closeImageModal}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors"
                  title="閉じる"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Navigation Arrows */}
              {currentProjectImages.length > 1 && (
                <>
                  <button
                    onClick={goToPreviousImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 sm:w-16 sm:h-16 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors"
                    title="前の画像"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                  <button
                    onClick={goToNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 sm:w-16 sm:h-16 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors"
                    title="次の画像"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {currentProjectImages.length > 1 && (
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {currentProjectImages.length}
                </div>
              )}

              {/* Zoom Level Indicator */}
              <div className="absolute top-20 left-4 z-20 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                {Math.round(imageScale * 100)}%
              </div>

              {/* Image Container */}
              <div className="flex-1 overflow-hidden flex items-center justify-center p-4 pt-24">
                <div
                  className="relative w-full h-full flex items-center justify-center"
                  style={{ cursor: imageScale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
                >
                  <img
                    src={selectedImage}
                    alt="プロジェクト詳細画像"
                    className="max-w-[90vw] max-h-[70vh] object-contain transition-transform duration-200 select-none"
                    style={{
                      transform: `scale(${imageScale}) translate(${imagePosition.x / imageScale}px, ${imagePosition.y / imageScale}px)`,
                      transformOrigin: 'center center'
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    draggable={false}
                  />
                </div>
              </div>

              {/* Instructions */}
              <div className="absolute bottom-4 left-4 right-4 z-20 text-center">
                <p className="text-white text-sm bg-black bg-opacity-70 px-4 py-2 rounded-full inline-block">
                  {currentProjectImages.length > 1 ? '← → で画像切り替え • ' : ''}
                  {imageScale > 1 ? 'ドラッグして移動 • ' : ''}拡大/縮小ボタンで調整 • タップで閉じる
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Projects
