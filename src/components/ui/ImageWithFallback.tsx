import { ImageOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string
}

export function ImageWithFallback({ src, alt, className = '', fallbackLabel = 'Imagem indisponível', ...props }: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [src])

  if (failed || !src) {
    return <div className={`image-fallback ${className}`} role="img" aria-label={alt || fallbackLabel}><ImageOff aria-hidden="true" /><span>{fallbackLabel}</span></div>
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} {...props} />
}
