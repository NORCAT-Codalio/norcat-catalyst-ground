import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TunnelEntranceProps {
  onComplete: () => void;
}

export const TunnelEntrance = ({ onComplete }: TunnelEntranceProps) => {
  const [phase, setPhase] = useState<'approaching' | 'entering' | 'revealing' | 'complete'>('approaching');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('entering'), 1500),
      setTimeout(() => setPhase('revealing'), 3500),
      setTimeout(() => {
        setPhase('complete');
        onComplete();
      }, 5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          className="fixed inset-0 z-50 bg-gray-950 overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tunnel depth layers */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-gray-800 rounded-lg"
                style={{
                  width: `${100 - i * 10}%`,
                  height: `${100 - i * 10}%`,
                  borderColor: `hsl(173 83% ${20 + i * 5}% / ${0.3 + i * 0.05})`,
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                  scale: phase === 'entering' ? [1, 2, 4] : 1,
                  opacity: phase === 'entering' ? [1, 0.5, 0] : 1,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Rock texture overlay */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
          </div>

          {/* Tunnel lights */}
          {(phase === 'approaching' || phase === 'entering') && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`light-${i}`}
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-400"
                  style={{
                    top: `${20 + i * 15}%`,
                    boxShadow: '0 0 30px 15px hsl(173 83% 44% / 0.4)',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: phase === 'entering' ? [0.8, 0] : [0, 0.8, 0],
                    scale: phase === 'entering' ? [1, 3] : [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: phase === 'entering' ? 1.5 : 2,
                    delay: i * 0.2,
                    repeat: phase === 'approaching' ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </>
          )}

          {/* Central portal */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{
              scale: phase === 'revealing' ? 50 : phase === 'entering' ? 1.5 : 1,
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <div className="relative">
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 via-teal-500 to-teal-700"
                animate={{
                  boxShadow: [
                    '0 0 60px 30px hsl(173 83% 44% / 0.3)',
                    '0 0 100px 50px hsl(173 83% 44% / 0.5)',
                    '0 0 60px 30px hsl(173 83% 44% / 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Text overlays */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: phase === 'approaching' ? 1 : 0, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-teal-400 text-sm tracking-[0.3em] uppercase mb-2">
                Entering
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                The Underground
              </h2>
            </motion.div>

            <motion.p
              className="text-teal-300/80 text-lg tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'entering' ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              Discover Innovation Below
            </motion.p>
          </div>

          {/* Scan lines effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="w-full h-1 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
              animate={{ y: ['0vh', '100vh'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
