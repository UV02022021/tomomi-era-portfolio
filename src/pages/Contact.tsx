import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Mail, Phone, MapPin, Send, User, MessageSquare, Clock, Calendar, CheckCircle, AlertCircle, Wifi} from 'lucide-react'
import { lumi } from '../lib/lumi'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // エラーをクリア
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // メール送信
      await lumi.tools.email.send({
        to: 'tomomini0815@gmail.com', // あなたのメールアドレス
        subject: `【ポートフォリオサイト】${formData.subject}`,
        fromName: formData.name,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              ポートフォリオサイトからのお問い合わせ
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #475569; margin-top: 0;">送信者情報</h3>
              <p><strong>お名前:</strong> ${formData.name}</p>
              <p><strong>メールアドレス:</strong> ${formData.email}</p>
              <p><strong>件名:</strong> ${formData.subject}</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="color: #475569; margin-top: 0;">メッセージ内容</h3>
              <p style="line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                このメールはポートフォリオサイトの問い合わせフォームから送信されました。
              </p>
            </div>
          </div>
        `,
        replyTo: formData.email
      })

      // 成功時の処理
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // 3秒後にフォームを再表示
      setTimeout(() => setIsSubmitted(false), 5000)
      
    } catch (error: any) {
      console.error('メール送信エラー:', error)
      
      if (error.message?.includes('not registered')) {
        setError('申し訳ございません。現在、問い合わせフォームは準備中です。直接メール（tomomini0815@gmail.com）にてお問い合わせください。')
      } else {
        setError('送信中にエラーが発生しました。しばらくしてから再度お試しいただくか、直接メール（tomomini0815@gmail.com）にてお問い合わせください。')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'メールアドレス',
      value: 'tomomini0815@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: '電話番号',
      value: '090-5889-0815',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      label: '最寄り駅',
      value: '小田急線 渋沢駅',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const availabilityInfo = [
    {
      icon: Clock,
      label: '対応時間',
      value: '平日 9:00-18:00'
    },
    {
      icon: Calendar,
      label: '現在の状況',
      value: '新規プロジェクト相談可能'
    },
    {
      icon: Wifi,
      label: '勤務形態',
      value: 'リモートワーク対応可能'
    }
  ]

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
          コンタクト
        </h1>
        <p className="text-slate-600 text-lg">
          プロジェクトのご相談やお問い合わせはこちらから
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Basic Contact Info */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">連絡先情報</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl border border-slate-200"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium">{info.label}</p>
                    <p className="text-slate-800 font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">対応可能時間・勤務形態</h2>
            <div className="space-y-4">
              {availabilityInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium">{info.label}</p>
                    <p className="text-slate-800 font-semibold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Summary */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">プロフィール</h2>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">恵良友美（えらともみ）</h3>
                <p className="text-slate-600 leading-relaxed">
                  UI/UXデザイナーとして、SaaSサービスのダッシュボード制作を中心に、
                  ユーザーの行動心理を可視化し、直感的で使いやすいインターフェースを設計しています。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">お問い合わせフォーム</h2>
            
            {/* エラーメッセージ */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-800 text-sm font-medium">送信エラー</p>
                  <p className="text-red-700 text-sm mt-1">{error}</p>
                </div>
              </motion.div>
            )}
            
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">送信完了</h3>
                <p className="text-slate-600">
                  お問い合わせありがとうございます。<br />
                  24時間以内にご返信いたします。
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-slate-50 disabled:text-slate-500"
                      placeholder="山田太郎"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-slate-50 disabled:text-slate-500"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-slate-50 disabled:text-slate-500"
                  >
                    <option value="">選択してください</option>
                    <option value="新規プロジェクトのご相談">新規プロジェクトのご相談</option>
                    <option value="業務委託・協業について">業務委託・協業について</option>
                    <option value="ポートフォリオについて">ポートフォリオについて</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:bg-slate-50 disabled:text-slate-500"
                    placeholder="プロジェクトの詳細やご質問などをお聞かせください..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>送信中...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>送信する</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact