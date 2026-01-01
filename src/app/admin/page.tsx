'use client'

import { useState } from 'react'
import { Lock, User, Eye, EyeOff, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function AdminPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple validation
    if (!credentials.username || !credentials.password) {
      setError('لطفاً نام کاربری و رمز عبور را وارد کنید')
      return
    }
    // In a real app, you would send this to your backend
    console.log('Login attempt:', credentials)
    setError('در حال توسعه... به زودی فعال می‌شود')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">ورود به پنل مدیریت</h1>
            <p className="text-gray-600 mt-2">سایت شخصی سعید شهبازی</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-700 text-center">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                نام کاربری
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="نام کاربری خود را وارد کنید"
                />
                <User className="absolute right-4 top-3.5 text-gray-400" size={20} />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                رمز عبور
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="رمز عبور خود را وارد کنید"
                />
                <Lock className="absolute right-4 top-3.5 text-gray-400" size={20} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 rounded-xl font-medium hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              ورود به پنل
            </button>
          </form>

          {/* Back Link */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-gray-900 font-medium"
            >
              <ArrowLeft className="rtl:rotate-180" size={20} />
              <span>بازگشت به سایت</span>
            </Link>
          </div>

          {/* Note */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 text-center">
              این پنل برای مدیریت محتوای سایت استفاده می‌شود.
              <br />
              دسترسی فقط برای مدیر سایت.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}