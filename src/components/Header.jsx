import { Search, ShoppingCart, User, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">7</span>
          </div>
          <h1 className="text-xl font-bold text-primary">car</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </a>
          <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </a>
          <a href="#listing" className="text-sm font-medium transition-colors hover:text-primary">
            Listing
          </a>
          <a href="#car" className="text-sm font-medium transition-colors hover:text-primary">
            Car
          </a>
          <a href="#pages" className="text-sm font-medium transition-colors hover:text-primary">
            Pages
          </a>
          <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </a>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <span>EUR</span>
          </Button>
          <Button variant="ghost" size="sm">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
