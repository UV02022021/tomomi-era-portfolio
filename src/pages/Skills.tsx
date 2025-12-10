import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Code, Smartphone, Monitor, Users, Target, Figma, Layers, Eye, Zap, Brain, TestTube, Lightbulb, Search, BarChart3, MessageSquare, Globe, Shield, Award, TrendingUp, Clock, CheckCircle, ArrowRight, Star, Briefcase } from 'lucide-react'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'デザインツール',
      icon: Palette,
      color: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'Figma', level: 95, description: 'プロトタイピング、デザインシステム構築' },
        { name: 'Adobe XD', level: 90, description: 'UI/UXデザイン、プロトタイプ作成' },
        { name: 'Photoshop', level: 75, description: '画像編集、グラフィックデザイン' },
        { name: 'Illustrator', level: 70, description: 'ベクターグラフィック、アイコン制作' }
      ]
    },
    {
      title: '開発・コーディング',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
      skills: [
        { name: 'HTML/CSS', level: 65, description: 'レスポンシブデザイン、モダンCSS' },
        { name: 'WordPress', level: 80, description: 'テーマ開発、カスタマイズ' },
        { name: 'Vue.js', level: 55, description: 'Quasarフレームワーク使用経験' },
        { name: 'JavaScript', level: 50, description: 'フロントエンド開発' }
      ]
    },
    {
      title: 'UI/UX設計',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'ユーザビリティテスト', level: 95, description: 'タスクベーステスト、分析' },
        { name: 'プロトタイピング', level: 90, description: 'インタラクティブプロトタイプ' },
        { name: 'レスポンシブデザイン', level: 90, description: 'モバイルファースト設計' },
        { name: 'デザインシステム', level: 85, description: 'コンポーネントライブラリ構築' }
      ]
    },
    {
      title: 'プロジェクト管理',
      icon: Target,
      color: 'from-purple-500 to-violet-600',
      skills: [
        { name: 'ユーザーリサーチ', level: 90, description: 'インタビュー、行動分析' },
        { name: 'ペルソナ設計', level: 85, description: 'カスタマージャーニーマップ' },
        { name: 'チーム連携', level: 90, description: '開発チームとの協業' },
        { name: '要件定義', level: 85, description: 'ステークホルダー調整' }
      ]
    }
  ]

  const specialties = [
    {
      title: 'ユーザビリティテスト・分析',
      description: 'タスクベースのテストを実施し、ユーザーの行動データを分析してUIの改善点を特定。ヒートマップ分析やA/Bテストも活用して定量的な改善を実現。',
      icon: Eye,
      color: 'from-emerald-500 to-teal-600',
      achievements: ['平均85%のタスク完了率改善', '操作時間30%短縮を実現', '5プロジェクトでテスト実施'],
      methods: ['タスクベーステスト', 'ヒートマップ分析', 'A/Bテスト', 'ユーザーインタビュー'],
      projects: ['建築業界向けSaaS', '覆面調査ダッシュボード', 'アパレル企業ダッシュボード'],
      experience: '4年+'
    },
    {
      title: 'デザインシステム構築',
      description: '再利用可能なコンポーネントライブラリを構築し、開発効率と一貫性を向上。トークン管理からドキュメント化まで一貫したシステム設計を提供。',
      icon: Layers,
      color: 'from-purple-500 to-violet-600',
      achievements: ['開発効率50%向上', '3プロジェクトで構築', 'チーム生産性大幅改善'],
      methods: ['コンポーネント設計', 'デザイントークン', 'スタイルガイド', 'ドキュメント化'],
      projects: ['建築業界向けSaaS', 'アパレル企業ダッシュボード', '翻訳アプリダッシュボード'],
      experience: '3年+'
    },
    {
      title: 'レスポンシブ・モバイルデザイン',
      description: 'モバイルファーストのアプローチで、あらゆるデバイスに最適化されたUIを設計。タッチ操作の最適化とパフォーマンスを重視した設計。',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-600',
      achievements: ['100%レスポンシブ対応', 'モバイル利用率70%向上', '全プロジェクトで実装'],
      methods: ['モバイルファースト', 'タッチ最適化', 'パフォーマンス設計', 'クロスプラットフォーム'],
      projects: ['覆面調査ダッシュボード', '安全運転支援サービス', '翻訳アプリダッシュボード'],
      experience: '4年+'
    },
    {
      title: 'プロトタイピング・インタラクション',
      description: 'Figmaを活用してインタラクティブなプロトタイプを作成し、ステークホルダーとの認識合わせを効率化。複雑な操作フローも直感的に表現。',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      achievements: ['認識齟齬90%削減', '開発前検証率100%', '複雑フロー可視化'],
      methods: ['高精度プロトタイプ', 'インタラクション設計', 'マイクロアニメーション', 'フロー可視化'],
      projects: ['翻訳アプリ', '建築業界向けSaaS', '覆面調査ダッシュボード'],
      experience: '4年+'
    },
    {
      title: 'ユーザーリサーチ・分析',
      description: 'ユーザーインタビューから定量調査まで、幅広いリサーチ手法でユーザーニーズを深掘り。データドリブンな意思決定をサポート。',
      icon: Search,
      color: 'from-indigo-500 to-purple-600',
      achievements: ['20+名インタビュー実施', 'ペルソナ精度95%向上', 'ニーズ特定率大幅改善'],
      methods: ['ユーザーインタビュー', 'アンケート調査', 'ペルソナ設計', 'ジャーニーマップ'],
      projects: ['建築業界向けSaaS', 'アパレル企業ダッシュボード', '翻訳アプリダッシュボード'],
      experience: '3年+'
    },
    {
      title: 'アクセシビリティ・インクルーシブデザイン',
      description: '多様なユーザーが快適に利用できるデザインを実現。WCAGガイドラインに準拠し、バリアフリーなインターフェースを設計。',
      icon: Globe,
      color: 'from-green-500 to-emerald-600',
      achievements: ['WCAG準拠率100%', '多様性考慮設計', '利用しやすさ大幅向上'],
      methods: ['WCAGガイドライン', 'カラーコントラスト', 'キーボード操作', 'スクリーンリーダー対応'],
      projects: ['翻訳アプリダッシュボード', '建築業界向けSaaS'],
      experience: '2年+'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
          スキル
        </h1>
        <p className="text-slate-600 text-lg">
          UI/UXデザインにおける技術スキルと専門分野
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">{category.title}</h2>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-800">{skill.name}</span>
                    <span className="text-sm text-slate-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                    />
                  </div>
                  <p className="text-sm text-slate-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Specialties Section */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 flex items-center space-x-3">
            <Star className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-500" />
            <span>専門分野・強み</span>
          </h2>
          <div className="text-sm text-slate-500">
            {specialties.length}つのコアスキル
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${specialty.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <specialty.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                      {specialty.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600 font-medium">経験 {specialty.experience}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 mb-6 leading-relaxed text-sm lg:text-base">
                {specialty.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm">主な実績</span>
                </h4>
                <div className="space-y-2">
                  {specialty.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methods */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center space-x-2">
                  <Target className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">手法・アプローチ</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {specialty.methods.map((method, methodIndex) => (
                    <span
                      key={methodIndex}
                      className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-full hover:bg-slate-50 transition-colors"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Projects */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">関連プロジェクト</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {specialty.projects.map((project, projectIndex) => (
                    <span
                      key={projectIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${specialty.color} text-white text-xs font-medium rounded-full shadow-sm`}
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">6+</div>
              <div className="text-sm text-slate-600">専門分野</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">15+</div>
              <div className="text-sm text-slate-600">手法・アプローチ</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">12+</div>
              <div className="text-sm text-slate-600">関連プロジェクト</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">5年+</div>
              <div className="text-sm text-slate-600">経験年数</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tools Overview */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">使用ツール一覧</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'Figma', 'Adobe XD', 'Photoshop', 'Illustrator',
            'WordPress', 'Quasar', 'VScode', 'Git', 'GitHub', 'Notion',
            'Slack', 'Teams', 'Backlog', 'SpreadSheet'
          ].map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center hover:shadow-md transition-all duration-200"
            >
              <span className="font-medium text-slate-700">{tool}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Skills