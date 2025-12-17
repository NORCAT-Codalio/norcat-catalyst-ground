import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface MineChamberProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  position: { x: number; y: number };
  details: {
    features: string[];
    stat?: { value: string; label: string };
  };
  isActive: boolean;
  onActivate: () => void;
  onClose: () => void;
}

export const MineChamber = ({
  title,
  description,
  icon: Icon,
  color,
  position,
  details,
  isActive,
  onActivate,
  onClose,
}: MineChamberProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Chamber node on the map */}
      <motion.div
        className="absolute cursor-pointer group"
        style={{ left: `${position.x}%`, top: `${position.y}%` }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onActivate}
      >
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: color }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Main node */}
        <motion.div
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 backdrop-blur-sm"
          style={{
            backgroundColor: `${color}20`,
            borderColor: color,
            boxShadow: isHovered ? `0 0 40px ${color}60` : `0 0 20px ${color}40`,
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </motion.div>

        {/* Label */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-sm font-semibold text-white bg-gray-900/80 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            {title}
          </span>
        </motion.div>

        {/* Hover preview */}
        <AnimatePresence>
          {isHovered && !isActive && (
            <motion.div
              className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-64 bg-gray-900/95 backdrop-blur-md rounded-xl p-4 border border-white/10 z-20"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <p className="text-sm text-gray-300 mb-2">{description}</p>
              <span className="text-xs text-teal-400 flex items-center gap-1">
                Click to explore <ArrowRight className="w-3 h-3" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Full detail modal */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-gray-950/90 backdrop-blur-md"
              onClick={onClose}
            />

            {/* Modal content */}
            <motion.div
              className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl border border-white/10 overflow-hidden"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              {/* Header glow */}
              <div
                className="absolute top-0 left-0 right-0 h-40 opacity-30"
                style={{
                  background: `radial-gradient(ellipse at top, ${color}, transparent 70%)`,
                }}
              />

              <div className="relative p-8 md:p-10">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${color}30`, border: `2px solid ${color}` }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>

                {/* Title & description */}
                <h3 className="text-3xl font-bold text-white mb-3">{title}</h3>
                <p className="text-lg text-gray-300 mb-8">{description}</p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-wider text-teal-400 mb-4">
                    What's Included
                  </h4>
                  <div className="grid gap-3">
                    {details.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-gray-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stat */}
                {details.stat && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
                    <div className="text-4xl font-bold text-white mb-1">
                      {details.stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{details.stat.label}</div>
                  </div>
                )}

                {/* CTA */}
                <Button asChild className="w-full btn-primary-lg">
                  <Link to="/apply">
                    Apply for Access
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
