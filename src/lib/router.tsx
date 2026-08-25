/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'

interface RouterValue {
  pathname: string
  navigate: (to: string, replace?: boolean) => void
}

const RouterContext = createContext<RouterValue | null>(null)

function normalizePath(path: string) {
  if (path === '/') return path
  return path.replace(/\/+$/, '') || '/'
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setPathname(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const value = useMemo<RouterValue>(() => ({
    pathname,
    navigate: (to, replace = false) => {
      const url = new URL(to, window.location.origin)
      const nextPath = normalizePath(url.pathname)
      window.history[replace ? 'replaceState' : 'pushState']({}, '', `${nextPath}${url.search}${url.hash}`)
      setPathname(nextPath)
      window.scrollTo({ top: 0, behavior: 'instant' })
    },
  }), [pathname])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) throw new Error('useRouter must be used inside RouterProvider')
  return context
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> { to: string }

export function Link({ to, onClick, target, children, ...props }: LinkProps) {
  const { navigate } = useRouter()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || target === '_blank') return
    event.preventDefault()
    navigate(to)
  }

  return <a href={to} target={target} onClick={handleClick} {...props}>{children}</a>
}
