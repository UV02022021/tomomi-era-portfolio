
import React from 'react'
import { motion } from 'framer-motion'
import {Calendar, MapPin, Users, Code, Palette, Target, Clock, Lightbulb, Briefcase, ExternalLink} from 'lucide-react'

const Career: React.FC = () => {
  const experiences = [
    {
      id: 1,
      period: '2025年8月 - 現在',
      company: 'ミステリーショッピング企業',
      position: 'UI/UXデザイナー',
      type: 'リモートワーク',
      status: '進行中',
      overview: '既存ダッシュボードのモバイル最適化プロジェクトを担当。外出先でもミステリーショッピング結果を快適に確認できるレスポンシブデザインを設計中。',
      achievements: [
        'PC向けダッシュボードの課題分析とモバイル利用時の問題点を明確化',
        'ユーザビリティを重視したモバイルファーストのUIプロトタイプを構築',
        'KPIカードやグラフの視認性を向上させるレイアウト設計',
        'アコーディオン形式による詳細データの整理とナビゲーション最適化'
      ],
      skills: ['Figma', 'プロトタイピング', 'ユーザビリティテスト', 'モバイルデザイン'],
      color: 'bg-blue-500'
    },
    {
      id: 2,
      period: '2024年6月 - 2025年7月',
      company: '建設業界向けSaaS企業',
      position: 'UI/UXデザイナー',
      type: 'リモートワーク（一部出社）',
      status: '完了',
      overview: '建設業界向け基幹システムのダッシュボード全面刷新プロジェクト。複雑な業務データを直感的に操作できるインターフェースを設計し、現場での実用性を重視したデザインシステムを構築。',
      achievements: [
        'ユーザーインタビューによる課題抽出とペルソナ設計',
        '建設現場での実用性を重視したモバイル対応ダッシュボード設計',
        '複雑なデータを整理する情報アーキテクチャの構築',
        '開発チームとの連携効率を向上させるデザインシステムの確立'
      ],
      skills: ['Figma', 'ユーザーリサーチ', 'デザインシステム', 'プロトタイピング'],
      color: 'bg-purple-500'
    },
    {
      id: 3,
      period: '2021年 - 2024年',
      company: 'アパレル企業',
      position: 'UI/UXデザイナー・フロントエンド開発',
      type: 'リモートワーク',
      status: '完了',
      overview: 'アパレル企業向けダッシュボードの刷新と新機能開発。在庫管理、売上分析、出荷、生産などの業務フローを考慮したシンプルで一貫性のあるデザインを実現。',
      achievements: [
        'アパレル業界特有の業務フローに最適化されたUI設計',
        '大量のSKUデータを効率的に表示するレイアウト設計',
        'Quasarフレームワークを使用したレスポンシブデザインの実装',
        '色・フォント・レイアウトの統一によるデザインシステムの構築'
      ],
      skills: ['Figma', 'Vue.js', 'Quasar', 'レスポンシブデザイン', 'フロントエンド開発'],
      color: 'bg-green-500'
    },
    {
      id: 4,
      period: '2022年 - 2023年',
      company: '翻訳サービス企業',
      position: 'UI/UXデザイナー',
      type: 'リモートワーク',
      status: '完了',
      overview: '翻訳アプリのユーザーページ、テナント管理、システム管理ページの新機能追加。3つの権限レベルに応じた画面設計と、多様なユーザーを考慮したアクセシブルなデザインを実現。',
      achievements: [
        '3つの権限レベル（ユーザー・テナント管理者・システム管理者）に応じたUI設計',
        '目的別カラーパレットによる権限レベルの視覚的識別システム',
        '翻訳ワークフローの可視化と直感的なインターフェース設計',
        'アクセシビリティガイドラインに準拠したデザイン実装'
      ],
      skills: ['Figma', 'アクセシビリティデザイン', 'カラーシステム設計', 'ワークフロー設計'],
      color: 'bg-indigo-500'
    },
    {
      id: 5,
      period: '2022年 (約3ヶ月)',
      company: '安全運転支援サービス企業',
      position: 'UI/UXデザイナー',
      type: 'リモートワーク',
      status: '完了',
      overview: 'アルコール検知器と連動した安全運転支援アプリのモバイル画面設計。限られた時間内でスムーズなエンジン始動を可能にする直感的なUI/UXを設計。',
      achievements: [
        'IoTデバイス連携を考慮したハードウェア・ソフトウェア境界でのUX最適化',
        '運転前の限られた時間内での操作を想定したシンプルなナビゲーション設計',
        '車内での使用を考慮したモバイルファーストデザイン',
        'エラーハンドリングと復旧手順のユーザーガイダンス設計'
      ],
      skills: ['Figma', 'IoTデバイス連携UX', 'モバイルデザイン', 'エラーハンドリング設計'],
      color: 'bg-red-500'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 sm:space-y-8"
    >
      {/* Header - 左寄せに修正 */}
      <div className="text-left px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
          職務経歴
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          UI/UXデザイナーとしての経験と実績の詳細
        </p>
      </div>

      {/* プロフィール画像とリンクセクション */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 p-3 sm:p-6 lg:p-8 mx-3 sm:mx-0">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-6">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden">
              <img 
                src="https://static.lumi.new/c1/c17ece60ee5ee13d33a8f0ee44bad461.png" 
                alt="恵良友美"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-800 mb-2">恵良 友美</h2>
            <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
              UI/UXデザイナーとして、建設業界、アパレル、翻訳サービス、安全運転支援など
              様々な業界でのダッシュボード設計とユーザーエクスペリエンス向上に従事。
              ユーザーリサーチからプロトタイピング、デザインシステム構築まで幅広く担当。
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a
                href="/projects"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
              >
                <Briefcase className="w-4 h-4" />
                <span>すべてのプロジェクトを見る</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative px-3 sm:px-0">
        {/* Timeline Line - 基準位置：left-8 (32px) / left-12 (48px) */}
        <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-0.5 bg-slate-200"></div>

        <div className="space-y-6 sm:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot - 縦線の中央に正確に配置: 基準位置 - (丸の幅16px ÷ 2) */}
              {/* モバイル: 32px - 8px = 24px (left-3), デスクトップ: 48px - 8px = 40px (left-10) */}
              <div className={`absolute left-3 sm:left-10 w-4 h-4 ${exp.color} rounded-full border-2 border-white shadow-lg z-10`}></div>

              {/* Content Card */}
              <div className="ml-16 sm:ml-20">
                <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg border border-slate-200 p-3 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                        <h3 className="text-base sm:text-xl font-bold text-slate-800">{exp.company}</h3>
                        <span className={`inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${
                          exp.status === '進行中'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {exp.status}
                        </span>
                      </div>
                      <p className="text-sm sm:text-lg font-medium text-slate-700 mb-2">{exp.position}</p>
                      <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-slate-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{exp.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overview */}
                  <p className="text-slate-700 mb-3 sm:mb-6 text-sm sm:text-base leading-relaxed">{exp.overview}</p>

                  {/* Achievements */}
                  <div className="mb-3 sm:mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2 sm:mb-3 flex items-center space-x-2 text-sm sm:text-base">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>主な成果・取り組み</span>
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700 text-xs sm:text-base leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 sm:mb-3 flex items-center space-x-2 text-sm sm:text-base">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>使用スキル・ツール</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 sm:px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Career
