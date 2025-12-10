
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, FolderOpen, Settings, Mail, Menu, X, MapPin, Phone, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'ダッシュボード' },
    { path: '/projects', icon: FolderOpen, label: 'プロジェクト' },
    { path: '/skills', icon: Settings, label: 'スキル' },
    { path: '/career', icon: FileText, label: '職務経歴' },
    { path: '/contact', icon: Mail, label: 'コンタクト' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Header - 固定表示 */}
      <div className="lg:hidden bg-white shadow-sm border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden">
            <img
              src="/LOGO.svg"
              alt="恵良友美"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold text-slate-800">Tomomi Era</h1>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0 bg-slate-800 shadow-xl">
          {/* Profile Section */}
          <div className="p-8 border-b border-slate-700">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-slate-600">
                <img
                  src="https://static.lumi.new/47/47c58cea288aa340f01af79ca581ab77.svg"
                  alt="恵良友美"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Tomomi Era</h1>
              <p className="text-slate-300 font-medium mb-4">UI/UXデザイナー</p>

              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>小田急線 渋沢駅</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>tomomini0815@gmail.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>090-5889-0815</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50"
              onClick={toggleMobileMenu}
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="w-80 h-full bg-slate-800 shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-slate-700">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden ring-4 ring-slate-600">
                      <img
                        src="https://static.lumi.new/47/47c58cea288aa340f01af79ca581ab77.svg"
                        alt="恵良友美"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h1 className="text-xl font-bold text-white mb-1">Tomomi Era</h1>
                    <p className="text-slate-300 text-sm">UI/UXデザイナー</p>
                  </div>
                </div>

                <nav className="p-6">
                  <ul className="space-y-2">
                    {navItems.map((item) => {
                      const isActive = location.pathname === item.path
                      return (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            onClick={toggleMobileMenu}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                              }`}
                          >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 lg:ml-80">
          <main className="p-6 lg:p-8">
            {children}

            {/* Footer */}
            <footer className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
              <p>© {new Date().getFullYear()} Tomomi Era. All Rights Reserved.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
