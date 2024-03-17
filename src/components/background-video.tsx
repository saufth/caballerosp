'use client'
import { useRef, useState, type MouseEvent } from 'react'
import { Button } from '@/components/ui/button'
import { PauseIcon, PlayIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

interface BackgroundVideoProps {
  src: string
}

export default function BackgroundVideo ({ src }: BackgroundVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const preventContextMenu = (event: MouseEvent<HTMLVideoElement>) => event.preventDefault()

  const handleVideo = () => {
    const videoNode = videoRef.current

    if (videoNode) {
      setIsPlaying(!videoNode.paused)
      videoNode.paused ? videoNode.play() : videoNode.pause()
    }
  }

  return (
    <div className='absolute inset-0 overflow-hidden z-0'>
      <motion.div
        initial={{
          width: '50%',
          height: '75%',
          borderRadius: 24,
          y: '200%'
        }}
        animate={{
          width: ['50%', '50%', '50%', '100%', '100%', '100%', '100%'],
          height: ['75%', '75%', '75%', '75%', '100%', '100%', '100%'],
          borderRadius: [24, 24, 24, 0, 0],
          y: ['200%', '0%', '0%', '0%']
        }}
        transition={{
          duration: 2
        }}
        className='absolute m-auto inset-0 overflow-hidden'
      >
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
        <div className='absolute inset-0 bg-black/40 z-10' />
      </motion.div>
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
    </div>
  )
}
