'use client'

import { useEffect } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscapeKey)
    return () => window.removeEventListener('keydown', handleEscapeKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/90 z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0">
        <div
          className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl animate-in fade-in scale-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Video Container */}
          <div className="relative bg-black aspect-video">
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full"
              title={title}
            />
          </div>

          {/* Title */}
          {/* <div className="bg-gradient-to-t from-black/80 to-transparent p-6">
            <h2 className="text-white text-xl font-semibold">{title}</h2>
          </div> */}
        </div>
      </div>
    </>
  )
}
