import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from './ThemeToggle'
import LanguageSelector from './LanguageSelector'

interface HeaderProps {
  onOpenPanel: () => void;
}

export default function Header({ onOpenPanel }: HeaderProps) {
  const { t } = useTranslation();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      {/* Left section */}
      <Link className="flex items-center justify-center" href="#">
        <img src="/logo.png" alt="Yggdrill" className="h-20" />
      </Link>


      {/* Right section */}
      <nav className="flex items-center gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
          {t('header.features')}
        </Link>
        <button
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={onOpenPanel}
        >
          {t('hero.getStarted')}
        </button>
        <LanguageSelector />
        <ThemeToggle />
      </nav>
    </header>
  )
}