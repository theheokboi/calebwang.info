'use client'

import { useEffect, useState } from 'react'

import DynamicLink from './logo'
import NavBar from './NavBar'
import ThemeSwitch from './ThemeSwitch'

export default function Header({ inconsolata }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between py-6 transition-colors duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-700 backdrop-blur-md border-b border-gray-300/50 dark:border-gray-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center">
        <DynamicLink className="hvr-bounce-to-top" inconsolata={inconsolata} />
      </div>
      <div className="flex items-center space-x-4 text-base leading-5">
        <NavBar />
        <ThemeSwitch />
      </div>
    </header>
  )
}
