'use client'
import React from 'react'
import { PauseIcon, PlayIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

interface BackgroundVideoProps {
  src: string
}

export default function BackgroundVideo ({ src }: BackgroundVideoProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const preventContextMenu = (event: React.MouseEvent<HTMLVideoElement>) => event.preventDefault()

  const handleVideo = () => {
    const videoNode = videoRef.current

    if (videoNode) {
      setIsPlaying(!videoNode.paused)
      videoNode.paused ? videoNode.play() : videoNode.pause()
    }
  }

  return (
    <div className='absolute w-1/2 h-3/4 m-auto inset-0 rounded-3xl overflow-hidden z-0 animate-video-bg [animation-delay:1s]'>
      <video
        className='w-full h-full object-cover relative'
        width={1920}
        height={1080}
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList='nodownload noplaybackrate'
        onContextMenu={preventContextMenu}
        ref={videoRef}
      >
        <source src={src} type='video/mp4' />
      </video>
      <Button
        className='group absolute bottom-4 lg:bottom-5 left-4 lg:left-auto border lg:right-5 z-20 bg-black hover:bg-white'
        onClick={handleVideo}
      >
        <span className='flex items-center gap-x-3'>
          {isPlaying
            ? (
              <>
                <PlayIcon className='fill-white w-4 xl:w-4 h-auto group-hover:[&_*]:fill-black' />
                <span className='hidden xl:block text-lg text-white group-hover:text-black'>
                  Reproducir video
                </span>
                <span className='block xl:hidden text-white group-hover:text-black'>
                  Reproducir
                </span>
              </>
              )
            : (
              <>
                <PauseIcon className='fill-white w-4 xl:w-4 h-auto group-hover:[&_*]:fill-black' />
                <span className='hidden xl:block text-lg text-white group-hover:text-black'>
                  Pausar video
                </span>
                <span className='block xl:hidden text-white group-hover:text-black'>
                  Pausar
                </span>
              </>
              )}
        </span>
      </Button>
      <div className='absolute inset-0 bg-black/40 z-10' />
    </div>
  )
}
