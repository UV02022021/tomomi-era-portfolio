import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Eye, Building, Languages, Target, Layers, Rocket, ChevronRight, ExternalLink } from 'lucide-react';

const DashboardV2: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const projects = [
    {
      title: 'Retail Transformation',
      category: 'E-COMMERCE / DASHBOARD',
      impact: '+45% Efficiency',
      description: '既存のダッシュボードをモバイル環境に最適化。外出先でも直感的な操作を可能にし、現場の業務効率を飛躍的に向上。',
      image: '/assets/projects/retail.jpg', // Assuming these exist or will be generated
      color: 'bg-blue-600',
      icon: Eye
    },
    {
      title: 'Industrial SaaS',
      category: 'ENTERPRISE / B2B',
      impact: 'Zero Error Redesign',
      description: '複雑な建築管理データを整理し、ミスを防ぐ情報設計を実現。エンタープライズ向けの堅牢かつモダンなUIを構築。',
      image: '/assets/projects/industrial.jpg',
      color: 'bg-slate-800',
      icon: Building
    },
    {
      title: 'Global Translation',
      category: 'SAAS / PERMISSIONS',
      impact: 'Unified Experience',
      description: '多言語対応と複雑な権限管理を、シンプルで迷いのないデザイン言語で統一。グローバル展開を加速させる基盤を構築。',
      image: '/assets/projects/translation.jpg',
      color: 'bg-indigo-600',
      icon: Languages
    }
  ];

  const metrics = [
    { label: 'PROJECTS', value: '05+', detail: 'Diverse Industry Expertise' },
    { label: 'EXPERIENCE', value: '05Y', detail: 'Digital Product Evolution' },
    { label: 'METHODS', value: '04+', detail: 'Strategic Design Frameworks' },
    { label: 'COLLAB', value: '20+', detail: 'Cross-functional Synergy' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const textReveal = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white font-sans overflow-x-hidden min-h-screen">
      {/* Immersive Hero Section */}
      <section className="relative h-[90vh] flex items-center px-6 sm:px-12 lg:px-24 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0">
          <img 
            src="/assets/backgrounds/professional_hero_bg.png" 
            alt="Abstract Background" 
            className="w-full h-full object-cover scale-110 opacity-60 mix-blend-multiply transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/20 to-slate-50" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-7xl mx-auto">
          
          <div className="overflow-hidden mb-4">
            <motion.p 
              variants={textReveal}
              className="text-xs sm:text-sm font-black tracking-[0.4em] text-indigo-600 uppercase">
              UI/UX DESIGNER & STRATEGIST
            </motion.p>
          </div>

          <div className="overflow-hidden mb-12">
            <motion.h1 
              variants={textReveal}
              className="text-5xl sm:text-7xl lg:text-9xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              CRAFTING DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-600">EXPERIENCES.</span>
            </motion.h1>
          </div>

          <motion.div 
            variants={textReveal}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-16">
            <button className="px-10 py-5 bg-slate-900 text-white font-black text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all duration-300 rounded-full shadow-2xl shadow-indigo-500/20 group flex items-center gap-3">
              Explore Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="max-w-md text-slate-500 font-medium leading-relaxed">
              ユーザー中心の設計思考と、ビジネス目標を融合させた、<br />
              圧倒的に高品質なデジタル・エクスペリエンスを提供します。
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Strategic Impact Section (Metrics) */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="space-y-4">
              <div className="text-xs font-black text-slate-400 tracking-widest uppercase">{metric.label}</div>
              <div className="text-4xl sm:text-6xl font-black text-slate-900 border-b-2 border-indigo-100 pb-4 inline-block">{metric.value}</div>
              <p className="text-sm font-bold text-slate-500 leading-tight">{metric.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Editorial Page Intro */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square sm:aspect-video lg:aspect-square bg-slate-200 rounded-[4rem] overflow-hidden shadow-3xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Layers className="w-32 h-32 text-slate-300 transform -rotate-12" />
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              Beyond Just Design. <br />
              Business <span className="italic font-serif font-light text-indigo-600">Evolution.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              私のデザインアプローチは、単なる美しさの追求ではありません。複雑なビジネスロジックを解きほぐし、ユーザーにとっての「価値」を最優先に設計。データに基づいた確かなUI設計で、革新的な成果をもたらします。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-2xl">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 mb-1">User-Centric</h4>
                  <p className="text-xs text-slate-500">徹底したユーザー理解に基づく設計</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-2xl">
                  <Rocket className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 mb-1">High Impact</h4>
                  <p className="text-xs text-slate-500">目に見える成果と成長の実現</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Showcase Section */}
      <section className="py-32 px-6 sm:px-12 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
            <h2 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              SELECTED <br />
              <span className="text-indigo-600">SHOWCASE</span>
            </h2>
            <p className="text-slate-400 font-black tracking-widest text-xs uppercase mb-2">SCROLL TO DISCOVER</p>
          </div>

          <div className="space-y-48">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`lg:col-span-7 relative group ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                   <div className="absolute -inset-4 bg-slate-100/50 rounded-[3rem] -z-10 transition-all duration-500 group-hover:scale-105" />
                   <div className="aspect-[4/3] rounded-[2.5rem] bg-slate-100 overflow-hidden relative shadow-2xl">
                      <div className={`absolute inset-0 ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <project.icon className="w-40 h-40 text-slate-200 opacity-50 group-hover:scale-110 transition-transform duration-1000" />
                      </div>
                      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <div className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/40 text-white font-black text-xs uppercase tracking-widest">
                          VIEW CASE STUDY
                        </div>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <ExternalLink className="w-5 h-5 text-indigo-600" />
                        </div>
                      </div>
                   </div>
                </div>
                <div className="lg:col-span-5 space-y-8">
                  <div className="text-xs font-black text-indigo-600 tracking-[0.3em] uppercase">{project.category}</div>
                  <h3 className="text-4xl sm:text-5xl font-black text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer">{project.title}</h3>
                  <div className="text-xl font-bold text-slate-400 italic font-serif">"{project.impact}"</div>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  <motion.button 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-900 group">
                    View Project <ChevronRight className="w-4 h-4 text-indigo-600 group-hover:scale-150 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Footer Inspired Section */}
      <section className="py-48 px-6 sm:px-12 lg:px-24 bg-slate-900 text-white text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(79,70,229,0.1)_100%)]" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.8] uppercase">
            Let's Shape <br />
            The Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Together.</span>
          </motion.h2>
          <div className="pt-12">
            <button className="px-12 py-6 bg-white text-slate-900 font-black text-sm uppercase tracking-widest rounded-full hover:bg-slate-100 hover:scale-105 transition-all shadow-3xl">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="font-black text-xl tracking-tighter text-slate-900">
            ERA<span className="text-indigo-600">.</span>PORTFOLIO
          </div>
          <div className="flex gap-8 text-[10px] font-black tracking-widest text-slate-400 uppercase">
            <span className="hover:text-indigo-600 cursor-pointer">Twitter</span>
            <span className="hover:text-indigo-600 cursor-pointer">LinkedIn</span>
            <span className="hover:text-indigo-600 cursor-pointer">Behance</span>
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">© 2024 DESIGNED FOR EVOLUTION</p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardV2;
