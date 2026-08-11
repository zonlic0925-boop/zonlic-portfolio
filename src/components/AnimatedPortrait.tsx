import { motion } from 'framer-motion'

interface AnimatedPortraitProps {
  src: string
  alt: string
  className?: string
}

export function AnimatedPortrait({ src, alt, className = '' }: AnimatedPortraitProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 -z-10 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(182, 0, 168, 0.35) 0%, rgba(118, 33, 176, 0.2) 40%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full object-contain drop-shadow-[0_20px_60px_rgba(182,0,168,0.35)]"
          animate={{
            filter: [
              'brightness(1) saturate(1)',
              'brightness(1.05) saturate(1.1)',
              'brightness(1) saturate(1)',
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  )
}
