import { NAME_EN } from '@/constants'

export function Footer() {
  return (
    <footer className="text-center mt-8 text-gray-500 text-sm animate-fade-in animation-delay-600" role="contentinfo">
      <p>&copy; 2025 {NAME_EN}. All rights reserved.</p>
    </footer>
  )
}
