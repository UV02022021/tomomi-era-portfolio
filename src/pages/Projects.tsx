
import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {Calendar, Users, Wrench as Tool, ChevronDown, ChevronUp, Smartphone, Building, Shirt, Languages, Shield, Clock, Target, X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Star, Award, TrendingUp, CheckCircle, BarChart3, Eye, Layers, Brain, Lightbulb, Rocket, Globe, Heart, Briefcase, ArrowRight, AlertCircle} from 'lucide-react'

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
      impact: {
        users: '1000+',
        improvement: '40%',
        satisfaction: '85%'
      },
      challenges: ['レガシーシステムの制約', 'モバイル画面サイズの制限', 'リアルタイムデータ表示'],
      solutions: ['段階的リファクタリング', 'アダプティブデザイン', '効率的なデータ取得'],
      learnings: ['モバイルファーストの重要性', 'ユーザーテストの価値', 'アジャイル開発プロセス'],
      images: [
        'https://static.lumi.new/5a/5a05a32d59f8a277336b3170c5464a79.png'
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
          description: '既存ダッシュボードを分析し、操作性と情報量の課題を抽出。小さな文字や複雑な表の可読性の低さ、横スクロールが頻発するレイアウト、タップ領域不足による誤操作など、具体的なモバイル利用時の問題点を明確化した。'
        },
        {
          title: '要件定義',
          description: 'ユーザー要件と機能要件を定義。店舗管理者が外出先でも重要指標を素早く確認でき、クライアント担当者がKPIや傾向を追跡できることを優先し、KPIカード、グラフ比較、フィルタリング、レポートダウンロードなどの必須機能を設定した。'
        },
        {
          title: '情報設計',
          description: 'モバイル最適化された情報の優先度と構造を構築。KPIカードを最上部に配置し、折れ線グラフや棒グラフを使った傾向チャート、詳細データは縦積みとアコーディオンで展開可能に設計。'
        },
        {
          title: 'UIデザインとプロトタイピング',
          description: '直感的でタップしやすいインターフェースを設計。カードレイアウトで情報を整理し、最小44pxのタップ領域を確保。フィルタはモーダルやドロワーで展開可能にし、グラフのレスポンシブ対応やスワイプ操作を実現。Figmaでワイヤーフレームから高精度デザイン、インタラクションデザインまでを手がけ、実際の利用シーンを想定したプロトタイプを構築した。'
        },
        {
          title: 'ユーザーテストと改善',
          description: '実際のユーザーとKPIの可読性、フィルタ操作の直感性、グラフの視認性を検証。ログやヒートマップを通じた利用状況の分析を進行中で、得られたデータに基づく定期的なUI更新により、より実用的でストレスフリーなモバイルダッシュボードを目指している。'
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
      color: 'bg-purple-500',
      gradientColor: 'from-purple-500 to-purple-600',
      category: 'エンタープライズSaaS',
      industry: '建設・不動産',
      complexity: 'high',
      impact: {
        users: '500+',
        improvement: '60%',
        satisfaction: '92%'
      },
      challenges: ['複雑な業務フロー', '多様なユーザー権限', 'レガシーシステム連携'],
      solutions: ['段階的なUXリニューアル', 'ロールベース設計', 'API連携最適化'],
      learnings: ['エンタープライズUXの重要性', 'ステークホルダー調整', '長期プロジェクト管理'],
      images: [
        'https://static.lumi.new/7b/7bc253d4d171c364db8031c099d5feaf.png',
        'https://static.lumi.new/95/95e0cf1ed7968e0934d8b5f381099f46.png',
        'https://static.lumi.new/ea/eaa44a901ac60b81d27d0ba2f70fc323.png',
        'https://static.lumi.new/10/10261ace96f0388c3ef2d15927cf24f9.png'
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
          description: '既存システムのユーザビリティ評価とヒューリスティック評価を実施。事業部を通じて建設現場スタッフにインタビューを行い、日常業務での課題やペインポイントを特定。また、競合他社のダッシュボードの並行分析も実施した。'
        },
        {
          title: 'ペルソナ・カスタマージャーニー作成',
          description: '現場監督、作業員、管理者の3つのペルソナを作成。それぞれの業務フローとシステム利用シーンをマッピングし、各タッチポイントでの課題と改善機会を明確化した。'
        },
        {
          title: '情報アーキテクチャ設計',
          description: '複雑な建設業務データを整理し、優先度に基づいた情報階層を構築。ダッシュボード上での情報表示順序やグルーピングを最適化し、ユーザーが必要な情報に素早くアクセスできる構造を設計した。'
        },
        {
          title: 'ワイヤーフレーム・プロトタイプ作成',
          description: 'Figmaを使用し、ローファイからハイファイまで段階的にプロトタイプを作成。各機能の操作フローをインタラクティブに表現し、ステークホルダーとの認識合わせを効率的に実施した。'
        },
        {
          title: 'デザインシステム構築',
          description: '再利用可能なコンポーネントライブラリを構築。カラーパレット、タイポグラフィ、アイコンセット、ボタンスタイルなどを統一し、開発チームとの連携効率を向上させた。'
        },
        {
          title: 'ユーザビリティテスト・改善',
          description: '実際のユーザーとタスクベースのテストを実施。操作ログ分析とユーザーフィードバックに基づき、ナビゲーション最適化とインターフェースの微調整を繰り返し実行した。'
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
      color: 'bg-green-500',
      gradientColor: 'from-green-500 to-green-600',
      category: 'ECダッシュボード',
      industry: 'アパレル・ファッション',
      complexity: 'medium',
      impact: {
        users: '200+',
        improvement: '45%',
        satisfaction: '88%'
      },
      challenges: ['大量SKUデータ表示', '在庫情報の複雑性', '売上分析の視認性'],
      solutions: ['データグリッド最適化', '階層的情報設計', 'ビジュアル分析ツール'],
      learnings: ['ECサイト特有のUX', 'Vue.jsフレームワーク', 'データ可視化技法'],
      images: [
        'https://static.lumi.new/5d/5d033d0d2b014d0205c3e448285d3fdb.png',
        'https://static.lumi.new/fd/fd0bc53629186857978f89bc93212934.png'
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
          description: 'アパレル業界特有の在庫管理、売上分析、出荷、生産などの円滑な業務運営のためのナビゲーションとニーズを詳細にヒアリングし、アパレル業界における売上に至るまでのフローをリサーチした。'
        },
        {
          title: 'データ構造分析',
          description: '商品データ、売上データ、在庫データの関係性を分析し、効率的な情報表示方法を検討。大量のSKUデータに対する見やすいレイアウトをリサーチした。'
        },
        {
          title: 'UIデザイン・一貫性確保',
          description: '大量の情報を考慮した明確な視覚階層でのレイアウト設計を実施。色、タイポグラフィ、余白の統一により、複雑な情報を整理・表示できるデザインシステムを構築した。'
        },
        {
          title: 'インタラクションデザイン',
          description: 'フィルタリング、ソート、ドリルダウン機能など、データ探索に必要なインタラクションを設計。直感的な操作で深い分析を可能にするナビゲーションを実現した。'
        },
        {
          title: 'フロントエンド実装（一部）',
          description: 'Quasarフレームワークを使用したレスポンシブデザインの実装。Vue.jsベースのコンポーネント開発により、保守性の高いコードベースを構築した。'
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
      color: 'bg-indigo-500',
      gradientColor: 'from-indigo-500 to-indigo-600',
      category: '権限管理システム',
      industry: '翻訳・多言語',
      complexity: 'medium',
      impact: {
        users: '300+',
        improvement: '35%',
        satisfaction: '90%'
      },
      challenges: ['複雑な権限設計', '多言語対応', 'ワークフロー管理'],
      solutions: ['ロールベースアクセス制御', 'カラーコーディングシステム', 'ステータス可視化'],
      learnings: ['権限設計のベストプラクティス', 'アクセシビリティ設計', 'グローバルUX考慮'],
      images: [
        'https://static.lumi.new/fa/fa7105d581f0b4047719bfc3ea0ff69a.png',
        'https://static.lumi.new/5b/5b6c9fb54924fa5587c7a3d828d2d100.png'
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
          description: 'ユーザー、テナント管理者、システム管理者の3つの権限レベルに応じた画面設計。それぞれの役割に最適化された情報表示とアクセス制御を設計した。'
        },
        {
          title: 'カラーシステム設計',
          description: '目的別カラーパレットを設計（一般ユーザー：青、管理者：緑、システム：紺）。権限レベルを視覚的に識別できるデザインシステムを構築した。'
        },
        {
          title: '翻訳ワークフロー設計',
          description: '翻訳依頼から完了までのワークフローを可視化。進行状況、品質チェック、承認プロセスを直感的に理解できるインターフェースを設計した。'
        },
        {
          title: 'アクセシビリティ対応',
          description: '多様なユーザーを考慮したアクセブルなデザインを作成。色のコントラスト最適化を実装した。'
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
      color: 'bg-red-500',
      gradientColor: 'from-red-500 to-red-600',
      category: 'IoT連携アプリ',
      industry: '自動車・安全',
      complexity: 'high',
      impact: {
        users: '150+',
        improvement: '50%',
        satisfaction: '95%'
      },
      challenges: ['IoTデバイス連携', '限られた操作時間', '緊急時対応'],
      solutions: ['ワンタップ操作', 'エラーハンドリング', 'リアルタイム状態表示'],
      learnings: ['IoT UX設計', 'ハードウェア連携', '緊急時UI設計'],
      images: [
        'https://static.lumi.new/9c/9c024d5198a6a7198b2abe4c6b13bcae.png',
        'https://static.lumi.new/e0/e06afa3b0b9dbf5a0980eab87341a1a2.png'
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
          description: 'アルコール検知器からの信号受信とアプリ連携機構を設計。ハードウェアとソフトウェアの境界でのユーザーエクスペリエンスを最適化した。'
        },
        {
          title: 'シンプル操作フロー設計',
          description: '運転前の限られた時間内での操作を想定し、最小タップでアルコールチェックが完了するナビゲーションを設計。ワンタップでの機能起動を実現した。'
        },
        {
          title: 'ダッシュボード管理機能',
          description: 'ドライバーの検査履歴、車両管理、アラート管理を管理者ダッシュボードに集約。記録管理機能の並行設計も実施した。'
        },
        {
          title: 'モバイル最適化',
          description: '車内での使用を想定したモバイルファーストデザイン。片手操作を考慮した画面視認性を重視した設計を実装した。'
        },
        {
          title: 'エラーハンドリング設計',
          description: 'デバイス接続エラー、検査失敗、システム障害に対する適切なエラーメッセージと復旧手順を設計。ユーザーが混乱なく問題解決できるガイダンスを提供した。'
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
        const projectElement = document.getElementById(`project-${projectId}`)
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
      <div className="px-4 sm:px-0">
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
      <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            id={`project-${project.id}`}
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
                          <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${
                            project.status === '進行中'
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
                            <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md">
                              {project.category}
                            </span>
                          )}
                          {project.industry && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-md">
                              {project.industry}
                            </span>
                          )}
                          {project.complexity && (
                            <span className={`px-2 py-1 text-xs font-medium rounded-md ${
                              project.complexity === 'high' ? 'bg-red-100 text-red-700' :
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
                    
                    {/* Quick Stats */}
                    {project.impact && (
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="text-center p-2 bg-slate-50 rounded-lg">
                          <div className="text-lg font-bold text-slate-800">{project.impact.users}</div>
                          <div className="text-xs text-slate-600">ユーザー</div>
                        </div>
                        <div className="text-center p-2 bg-emerald-50 rounded-lg">
                          <div className="text-lg font-bold text-emerald-700">+{project.impact.improvement}</div>
                          <div className="text-xs text-slate-600">改善</div>
                        </div>
                        <div className="text-center p-2 bg-blue-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-700">{project.impact.satisfaction}</div>
                          <div className="text-xs text-slate-600">満足度</div>
                        </div>
                      </div>
                    )}
                    
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
                              className="px-2 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-medium rounded-md border border-indigo-200"
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
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - 制作物 ${index + 1}`}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 sm:w-6 sm:h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expand Button */}
              <button
                onClick={() => toggleProject(project.id)}
                className="w-full flex items-center justify-center space-x-2 py-2 sm:py-3 px-4 bg-slate-50 hover:bg-slate-100 rounded-lg sm:rounded-xl transition-colors"
              >
                <span className="font-medium text-slate-700 text-sm sm:text-base">
                  {expandedProject === project.id ? '詳細を閉じる' : '詳細を見る'}
                </span>
                {expandedProject === project.id ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
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
                    {/* Project Impact & Results */}
                    {project.impact && (
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
                          <TrendingUp className="w-5 h-5 text-emerald-600" />
                          <span>プロジェクト成果・インパクト</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-emerald-600 mb-2">{project.impact.users}</div>
                            <div className="text-sm text-slate-600 font-medium">対象ユーザー数</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-blue-600 mb-2">+{project.impact.improvement}</div>
                            <div className="text-sm text-slate-600 font-medium">パフォーマンス改善</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-purple-600 mb-2">{project.impact.satisfaction}</div>
                            <div className="text-sm text-slate-600 font-medium">ユーザー満足度</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
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
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors"
                    title="拡大"
                  >
                    <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={handleZoomOut}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors"
                    title="縮小"
                  >
                    <ZoomOut className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-70 rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors"
                    title="リセット"
                  >
                    <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
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
