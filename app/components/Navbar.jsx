import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="flex rounded-lg items-center justify-between m-10 p-5 bg-gradient-to-tr from-purple-500 to-yellow-500 text-white mb-10 dark:color-white">
        <div>Greet.bg</div>
        <ThemeToggle/>
      </nav>
  )
}
