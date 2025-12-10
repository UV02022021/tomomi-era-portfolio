
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Calendar, ArrowRight, Smartphone, Building, Shirt, Languages, Shield, Activity, Clock, CheckCircle, AlertCircle, Circle, Star, Target, Users2, Brain, PieChart, Eye, Search, Lightbulb, Pencil, TestTube, Rocket, ArrowDown, Timer, Info, Layers, Code } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: TrendingUp, label: 'プロジェクト完了', value: '5+', color: 'bg-blue-500', change: '+2 今年', description: '多様な業界でのUI/UX改善実績' },
    { icon: Timer, label: 'デザイナー歴', value: '5年+', color: 'bg-slate-500', change: '継続中', description: '継続的なスキルアップと学習' },
    { icon: Award, label: '専門分野', value: '4領域+', color: 'bg-green-500', change: '拡張中', description: 'SaaS・モバイル・ダッシュボード・IoT' },
    { icon: Calendar, label: '現在参画中', value: '1件+個人開発', color: 'bg-orange-500', change: 'アクティブ', description: 'ミステリーショッピングダッシュボード' }];

  const achievements = [
    {
      title: 'ユーザビリティ向上',
      value: '平均85%',
      description: 'タスク完了率の改善実績',
      icon: Target,
      color: 'bg-emerald-500'
    },
    {
      title: 'デザインシステム構築',
      value: '3プロジェクト',
      description: '開発効率50%向上',
      icon: Layers,
      color: 'bg-purple-500'
    },
    {
      title: 'レスポンシブ対応',
      value: '100%',
      description: 'モバイル・タブレット完全対応',
      icon: Smartphone,
      color: 'bg-cyan-500'
    },
    {
      title: 'チーム協業',
      value: '20+名',
      description: '様々な職種との連携経験',
      icon: Users,
      color: 'bg-pink-500'
    }
  ];




  const projectsData = [
    {
      title: '覆面調査ダッシュボード',
      subtitle: 'モバイル最適化デザイン',
      status: '進行中',
      period: '2025年8月〜現在',
      progress: 75,
      team: '6名',
      icon: Eye,
      color: 'bg-blue-500',
      technologies: ['Figma', 'SpreadSheet', 'Meet', 'Slack'],
      description: '既存のダッシュボードをモバイル環境に最適化し、外出先でも快適に利用できるようにする',
      achievements: ['ユーザビリティ向上', 'レスポンシブ対応', 'アクセシビリティ向上']
    },
    {
      title: '建築業界向けSaaS',
      subtitle: 'エンタープライズダッシュボード',
      status: '完了',
      period: '2024年6月〜2025年7月',
      progress: 100,
      team: '8名',
      icon: Building,
      color: 'bg-blue-500',
      technologies: ['Figma', 'Backlog', 'Teams', 'Excel'],
      description: '建築業界向け基幹システムのダッシュボード改修と新機能作成',
      achievements: ['デザインシステム構築', 'UXリニューアル', '業務効率化']
    },
    {
      title: 'アパレル企業ダッシュボード',
      subtitle: 'ECサイト管理システム',
      status: '完了',
      period: '2021年〜2024年',
      progress: 100,
      team: '3名',
      icon: Shirt,
      color: 'bg-blue-500',
      technologies: ['Figma', 'Quasar', 'Vue.js', 'Notion'],
      description: 'アパレル企業向けダッシュボードの刷新と新機能作成',
      achievements: ['情報設計最適化', 'UI統一化', 'フロントエンド開発']
    },
    {
      title: '翻訳アプリダッシュボード',
      subtitle: '権限管理システム',
      status: '完了',
      period: '2022年〜2023年',
      progress: 100,
      team: '3名',
      icon: Languages,
      color: 'bg-blue-500',
      technologies: ['Figma', 'Notion', 'React', 'PostgreSQL'],
      description: '翻訳アプリのユーザーページ、テナント管理、システム管理ページを作成',
      achievements: ['権限設計', 'カラーシステム設計', 'アクセシビリティ対応']
    },
    {
      title: '安全運転支援サービス',
      subtitle: 'IoT連携アプリ',
      status: '完了',
      period: '約3ヵ月',
      progress: 100,
      team: '3名',
      icon: Shield,
      color: 'bg-blue-500',
      technologies: ['Figma', 'React Native', 'IoT SDK', 'Firebase'],
      description: '安全運転支援サービスのモバイル画面設計とダッシュボード新機能追加設計',
      achievements: ['IoT連携最適化', '緊急時UI設計', 'モバイルファースト']
    }];


  const designProcessData = [
    { name: 'ユーザーリサーチ', percentage: 15, color: '#3b82f6', bgColor: 'bg-blue-500' },
    { name: 'ワイヤーフレーム・デザイン', percentage: 40, color: '#10b981', bgColor: 'bg-green-500' },
    { name: 'プロトタイピング', percentage: 25, color: '#f97316', bgColor: 'bg-orange-500' },
    { name: 'ユーザビリティテスト', percentage: 10, color: '#8b5cf6', bgColor: 'bg-purple-500' },
    { name: 'デザインシステム', percentage: 10, color: '#ec4899', bgColor: 'bg-pink-500' }];


  const designProcessFlow = [
    {
      step: 1,
      title: 'リサーチ・分析',
      description: 'ユーザーニーズと市場調査',
      icon: Search,
      color: 'bg-blue-500',
      duration: '1-2週間',
      deliverables: ['ユーザーペルソナ', '競合分析', '要件定義']
    },
    {
      step: 2,
      title: 'アイデア創出',
      description: 'コンセプト設計とアイデア発想',
      icon: Lightbulb,
      color: 'bg-yellow-500',
      duration: '1週間',
      deliverables: ['コンセプト案', 'ユーザージャーニー', '情報設計']
    },
    {
      step: 3,
      title: 'デザイン制作',
      description: 'ワイヤーフレーム・UI設計',
      icon: Pencil,
      color: 'bg-green-500',
      duration: '2-3週間',
      deliverables: ['ワイヤーフレーム', 'UIデザイン', 'プロトタイプ']
    },
    {
      step: 4,
      title: 'テスト・検証',
      description: 'ユーザビリティテストと改善',
      icon: TestTube,
      color: 'bg-purple-500',
      duration: '1-2週間',
      deliverables: ['テスト結果', '改善提案', 'A/Bテスト']
    },
    {
      step: 5,
      title: 'リリース・運用',
      description: '実装サポートと運用改善',
      icon: Rocket,
      color: 'bg-red-500',
      duration: '継続サポート可能',
      deliverables: ['デザインガイド', '実装支援', '効果測定']
    }];


  const skillsData = [
    { skill: 'UI/UXデザイン', level: 95, color: 'bg-blue-500' },
    { skill: 'プロトタイピング', level: 90, color: 'bg-slate-500' },
    { skill: 'ユーザビリティテスト', level: 85, color: 'bg-green-500' },
    { skill: 'デザインシステム', level: 88, color: 'bg-orange-500' },
    { skill: 'レスポンシブデザイン', level: 92, color: 'bg-pink-500' },
    { skill: 'アクセシビリティ', level: 80, color: 'bg-indigo-500' }];


  const getStatusIcon = (status: string) => {
    switch (status) {
      case '進行中':
        return <Circle className="w-4 h-4 text-orange-500 fill-current" />;
      case '完了':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const handleProjectsLinkClick = () => {
    // ページトップにスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4 sm:space-y-6 lg:space-y-8 p-3 sm:p-4 lg:p-0">

      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
              ダッシュボード
            </h1>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
              UI/UXデザイナーとしての実績と現在の取り組み
            </p>
          </div>


        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-6">
        {stats.map((stat, index) =>
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-slate-200">

            <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${stat.color} rounded-lg lg:rounded-xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4`}>
              <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-1">
              {stat.value}
            </div>
            <div className="text-slate-600 text-xs sm:text-sm lg:text-base mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-slate-500 mb-2">
              {stat.change}
            </div>
            <div className="text-xs text-slate-400 leading-tight">
              {stat.description}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Achievements Section */}
      <motion.div variants={itemVariants} className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-slate-200">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 flex items-center space-x-2">
            <Star className="w-5 h-5 lg:w-6 lg:h-6" />
            <span>実績・成果</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="p-4 lg:p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-md transition-all duration-200"
            >
              <div className={`w-12 h-12 ${achievement.color} rounded-xl flex items-center justify-center mb-4`}>
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">
                {achievement.value}
              </div>
              <h3 className="font-semibold text-slate-700 mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>



      {/* Design Process Flow */}
      <motion.div variants={itemVariants} className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-slate-200">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 flex items-center space-x-2">
            <Brain className="w-5 h-5 lg:w-6 lg:h-6" />
            <span>制作プロセスフロー</span>
          </h2>
        </div>

        {/* 注意書き */}
        <div className="flex items-center space-x-2 mb-4 p-3 bg-slate-50 rounded-lg">
          <Info className="w-4 h-4 text-slate-500 flex-shrink-0" />
          <p className="text-slate-600 text-sm">プロジェクトによって期間や順序が前後します。

          </p>
        </div>

        {/* Desktop Flow View */}
        <div className="hidden lg:block">
          <div className="relative bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6">
            {/* Process Steps */}
            <div className="flex items-center justify-between space-x-8">
              {designProcessFlow.map((process, index) =>
                <div key={index} className="flex-1 relative">
                  {/* Step Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white border-2 border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300">

                    {/* Step Header */}
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 ${process.color} rounded-lg flex items-center justify-center`}>
                        <process.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs font-semibold text-slate-500">STEP {process.step}</span>
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">{process.title}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs mb-3">{process.description}</p>

                    {/* Duration */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span className="text-xs text-slate-500">{process.duration}</span>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-1">
                      <span className="text-xs font-medium text-slate-700">成果物:</span>
                      {process.deliverables.map((deliverable, idx) =>
                        <div key={idx} className="text-xs text-slate-600">• {deliverable}</div>
                      )}
                    </div>
                  </motion.div>

                  {/* Arrow - 中央に配置 */}
                  {index < designProcessFlow.length - 1 &&
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="bg-white rounded-full p-1 shadow-sm border border-slate-200">
                        <ArrowRight className="w-4 h-4 text-slate-500" />
                      </div>
                    </div>
                  }
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Flow View */}
        <div className="block lg:hidden space-y-4">
          <div className="bg-gradient-to-b from-slate-50 to-blue-50 rounded-lg p-4">
            {designProcessFlow.map((process, index) =>
              <div key={index} className="relative">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-white border-2 border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300">

                  {/* Step Header */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-8 h-8 ${process.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <process.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-semibold text-slate-500">STEP {process.step}</span>
                      </div>
                      <h3 className="font-bold text-slate-800 text-sm">{process.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs mb-3">{process.description}</p>

                  {/* Duration */}
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span className="text-xs text-slate-500">{process.duration}</span>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-slate-700">成果物:</span>
                    <div className="flex flex-wrap gap-1">
                      {process.deliverables.map((deliverable, idx) =>
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">

                          {deliverable}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow for mobile - 中央に配置 */}
                {index < designProcessFlow.length - 1 &&
                  <div className="flex justify-center py-2">
                    <div className="bg-white rounded-full p-1 shadow-sm border border-slate-200">
                      <ArrowDown className="w-4 h-4 text-slate-500" />
                    </div>
                  </div>
                }
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Charts Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Design Process Chart - 完全レスポンシブ対応版 */}
        <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg border border-slate-200">
          <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800 flex items-center space-x-1 sm:space-x-2">
              <PieChart className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              <span>デザインプロセス配分</span>
            </h2>
          </div>

          {/* ユニファイド・レスポンシブ・レイアウト */}
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-6 xl:gap-8">

            {/* 円グラフセクション */}
            <div className="relative flex justify-center flex-shrink-0">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 xl:w-64 xl:h-64">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* 背景円 */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="transparent"
                    stroke="#f1f5f9"
                    strokeWidth="8"
                  />

                  {/* データセグメント */}
                  {designProcessData.reduce((acc, item, index) => {
                    const previousPercentage = designProcessData.slice(0, index).reduce((sum, prev) => sum + prev.percentage, 0);
                    const circumference = 2 * Math.PI * 35;
                    const strokeDasharray = `${item.percentage / 100 * circumference} ${circumference}`;
                    const strokeDashoffset = -(previousPercentage / 100 * circumference);

                    acc.push(
                      <motion.circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="35"
                        fill="transparent"
                        strokeWidth="8"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        stroke={item.color}
                        strokeLinecap="round"
                        initial={{ strokeDasharray: `0 ${circumference}` }}
                        animate={{ strokeDasharray }}
                        transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                        className="drop-shadow-sm hover:drop-shadow-lg transition-all duration-300"
                      />
                    );
                    return acc;
                  }, [] as JSX.Element[])}

                  {/* 中央背景 */}
                  <defs>
                    <radialGradient id="centerGradientUnified" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#e2e8f0" />
                    </radialGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="20"
                    fill="url(#centerGradientUnified)"
                    className="drop-shadow-sm"
                  />
                </svg>

                {/* 中央テキスト */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      100%
                    </motion.div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium">配分率</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 凡例セクション */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4">
                {designProcessData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border border-slate-200 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >

                    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                      <div
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-sm border-2 border-white flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      >
                      </div>
                      <span className="text-sm sm:text-base font-semibold text-slate-700">{item.name}</span>
                    </div>

                    <div className="flex items-center space-x-3 w-full sm:w-auto mt-1 sm:mt-0">
                      <span className="text-base sm:text-lg font-bold text-slate-800 min-w-[2.5rem] text-right">{item.percentage}%</span>
                      <div className="flex-1 sm:w-20 md:w-24 h-2 sm:h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          className="h-full rounded-full shadow-sm"
                          style={{ backgroundColor: item.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
                        >
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-slate-200">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 flex items-center space-x-2">
              <Target className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>スキル評価</span>
            </h2>
            <Link to="/skills" onClick={handleProjectsLinkClick}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm lg:text-base">
                <span className="text-base">詳細を見る</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </Link>
          </div>
          <div className="space-y-3 lg:space-y-4">
            {skillsData.map((skill, index) =>
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-slate-700">{skill.skill}</span>
                  <span className="text-xs sm:text-sm text-slate-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`${skill.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${skill.level}%` }}>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Projects Table */}
      <motion.div variants={itemVariants} className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-4 sm:p-6 lg:p-8 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 flex items-center space-x-2">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <span>プロジェクト一覧</span>
            </h2>
            <Link to="/projects" onClick={handleProjectsLinkClick}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm lg:text-base">

                <span className="text-base">詳細を見る</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Enhanced Mobile Card View */}
        <div className="block xl:hidden">
          <div className="space-y-4 p-4 sm:p-6">
            {projectsData.map((project, index) =>
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  navigate('/projects');
                  setTimeout(() => {
                    const projectElement = document.getElementById(`project-${index + 1}`);
                    if (projectElement) {
                      projectElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
                className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">

                {/* Project Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-slate-800 text-base sm:text-lg mb-1 leading-tight">{project.title}</div>
                    <div className="text-sm text-slate-600 mb-2 leading-tight">{project.subtitle}</div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(project.status)}
                      <span className={`text-sm font-semibold ${project.status === '進行中' ? 'text-orange-600' : 'text-green-600'}`
                      }>
                        {project.status}
                      </span>
                      {project.status === '進行中' && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                          アクティブ
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="mb-4">
                  <p className="text-sm text-slate-700 leading-relaxed">{project.description}</p>
                </div>

                {/* Impact Metrics */}


                {/* Achievements */}
                {project.achievements && (
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-slate-700 mb-2">主な成果:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span className="font-medium">進捗:</span>
                      <span className="font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <div
                        className={`${project.status === '進行中' ? 'bg-gradient-to-r from-orange-400 to-orange-500' : 'bg-gradient-to-r from-green-400 to-green-500'} h-2.5 rounded-full transition-all duration-500 shadow-sm`}
                        style={{ width: `${project.progress}%` }}>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Users2 className="w-4 h-4" />
                      <span>チーム: {project.team}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs">{project.period}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-sm font-semibold text-slate-700 mb-2">使用技術:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) =>
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200">
                        <Code className="w-3 h-3 mr-1" />
                        {tech}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left py-3 lg:py-4 px-4 lg:px-6 font-semibold text-slate-700 text-sm lg:text-base">プロジェクト</th>
                <th className="text-left py-3 lg:py-4 px-4 lg:px-6 font-semibold text-slate-700 text-sm lg:text-base">ステータス</th>
                <th className="text-left py-3 lg:py-4 px-4 lg:px-6 font-semibold text-slate-700 text-sm lg:text-base">進捗</th>

                <th className="text-left py-3 lg:py-4 px-4 lg:px-6 font-semibold text-slate-700 text-sm lg:text-base">期間</th>
                <th className="text-left py-3 lg:py-4 px-4 lg:px-6 font-semibold text-slate-700 text-sm lg:text-base">チーム</th>
                <th className="text-left py-3 lg:py-4 px-4 lg:px-6 font-semibold text-slate-700 text-sm lg:text-base">使用ツール</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project, index) =>
                <motion.tr
                  key={index}
                  whileHover={{ backgroundColor: '#f8fafc' }}
                  onClick={() => {
                    navigate('/projects');
                    setTimeout(() => {
                      const projectElement = document.getElementById(`project-${index + 1}`);
                      if (projectElement) {
                        projectElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                  className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors duration-200 cursor-pointer">

                  {/* Project Info */}
                  <td className="py-6 px-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-slate-800 text-base mb-1 leading-tight">{project.title}</div>
                        <div className="text-sm text-slate-600 mb-2">{project.subtitle}</div>
                        <div className="text-xs text-slate-500 leading-relaxed">{project.description.substring(0, 80)}...</div>
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-6 px-6">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(project.status)}
                        <span className={`text-sm font-bold ${project.status === '進行中' ? 'text-orange-600' : 'text-green-600'}`
                        }>
                          {project.status}
                        </span>
                      </div>
                      {project.status === '進行中' && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-orange-100 text-orange-700 w-fit">
                          <Activity className="w-3 h-3 mr-1" />
                          アクティブ
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Progress */}
                  <td className="py-3 lg:py-4 px-4 lg:px-6">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`${project.status === '進行中' ? 'bg-orange-500' : 'bg-green-500'} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${project.progress}%` }}>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* 評価 */}


                  {/* Period */}
                  <td className="py-3 lg:py-4 px-4 lg:px-6">
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs lg:text-sm">{project.period}</span>
                    </div>
                  </td>
                  <td className="py-3 lg:py-4 px-4 lg:px-6">
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Users2 className="w-4 h-4" />
                      <span>{project.team}</span>
                    </div>
                  </td>
                  <td className="py-3 lg:py-4 px-4 lg:px-6">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech, techIndex) =>
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-700">

                          {tech}
                        </span>
                      )}
                      {project.technologies.length > 2 &&
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
                          +{project.technologies.length - 2}
                        </span>
                      }
                    </div>
                  </td>
                </motion.tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>);

};

export default Dashboard;