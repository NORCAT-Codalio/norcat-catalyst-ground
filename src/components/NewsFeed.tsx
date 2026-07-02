import { useState } from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { newsItems } from '@/pages/insights/News';

const iconContainerStyle: React.CSSProperties = {
  background: 'linear-gradient(145deg, hsla(220, 15%, 88%, 0.6) 0%, hsla(220, 15%, 82%, 0.3) 100%)',
  border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
  boxShadow:
    'inset 0 2px 4px 0 hsla(0, 0%, 100%, 0.7), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.15), 0 4px 8px -2px hsla(220, 15%, 30%, 0.15), 0 2px 4px -2px hsla(220, 15%, 30%, 0.1)',
};

const categories = ['All', ...Array.from(new Set(newsItems.map(item => item.category)))];

const NAVY = '#001A4D';
const TEAL = '#00B398';


export function NewsFeed() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedNews, setSelectedNews] = useState<string | null>(null);

  const filtered = activeCategory === 'All' ? newsItems : newsItems.filter(i => i.category === activeCategory);

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.14em] transition-all whitespace-nowrap relative"
            style={{ color: activeCategory === cat ? NAVY : '#5b6478' }}
          >
            {activeCategory === cat && (
              <motion.div
                layoutId="news-cat-pill-merged"
                className="absolute inset-0 rounded-full"
                style={{ background: TEAL }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => {
          const Icon = item.icon;
          const isExpanded = selectedNews === item.id;
          return (
            <motion.div
              key={item.id}
              layout
              transition={{ layout: { type: 'spring', stiffness: 350, damping: 30 } }}
              className={`cursor-pointer ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}
              style={{ zIndex: isExpanded ? 10 : 1 }}
              onClick={() => !isExpanded && setSelectedNews(item.id)}
            >
              <motion.div
                layout
                className="relative rounded-[20px] overflow-hidden"
                style={{
                  background: 'linear-gradient(165deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 75%, 0.18) 50%, hsla(168, 15%, 82%, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid hsla(168, 25%, 85%, 0.35)',
                  boxShadow: '0 8px 32px hsla(168, 20%, 30%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                }}
              >
                {!isExpanded && (
                  <motion.div layout="position" className="p-6 pt-12">
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider" style={{
                      background: 'hsl(168 100% 35% / 0.1)',
                      color: 'hsl(168, 100%, 28%)',
                      border: '0.5px solid hsl(168 100% 35% / 0.2)',
                    }}>{item.category}</span>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center" style={iconContainerStyle}>
                        <Icon className="w-5 h-5" style={{ color: 'hsl(168, 100%, 35%)' }} />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs mb-3" style={{ color: 'hsl(220, 15%, 50%)' }}>
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </div>
                    <h3 className="text-lg font-bold mb-3 leading-snug line-clamp-2" style={{ color: 'hsl(220, 15%, 20%)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm font-light line-clamp-3 mb-4" style={{ color: 'hsl(220, 15%, 40%)' }}>
                      {item.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: 'hsl(168, 100%, 28%)' }}>
                      Read More <ArrowRight className="h-4 w-4" />
                    </span>
                  </motion.div>
                )}

                {isExpanded && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.3 }}>
                    <div className="relative p-8 md:p-12 pb-0 pt-16">
                      <span className="absolute top-4 left-4 md:top-6 md:left-6 inline-block px-3 py-1 rounded-full text-xs font-bold" style={{
                        background: 'hsl(168 100% 35% / 0.1)', color: 'hsl(168, 100%, 28%)', border: '0.5px solid hsl(168 100% 35% / 0.2)',
                      }}>{item.category}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedNews(null); }}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-20 transition-transform hover:scale-110"
                        style={{ background: 'hsla(220, 15%, 85%, 0.5)', border: '1px solid hsla(220, 15%, 80%, 0.4)' }}
                      >
                        <X className="w-5 h-5" style={{ color: 'hsl(220, 15%, 30%)' }} />
                      </button>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={iconContainerStyle}>
                          <Icon className="w-6 h-6" style={{ color: 'hsl(168, 100%, 35%)' }} />
                        </div>
                        <span className="text-xs" style={{ color: 'hsl(220, 15%, 50%)' }}>{item.date}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-3xl" style={{ color: 'hsl(220, 15%, 15%)' }}>
                        {item.title}
                      </h2>
                    </div>
                    <div className="p-8 md:p-12 pt-4">
                      <div className="max-w-3xl">
                        {item.fullContent.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="text-base leading-relaxed mb-4 last:mb-0" style={{ color: 'hsl(220, 15%, 25%)' }}>
                            {paragraph}
                          </p>
                        ))}
                        {item.aboutSections && item.aboutSections.length > 0 && (
                          <>
                            <div className="my-8" style={{ borderTop: '1px solid hsla(220, 15%, 75%, 0.4)' }} />
                            {item.aboutSections.map((about, idx) => (
                              <div key={idx} className="mb-6 last:mb-0">
                                <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(220, 15%, 15%)' }}>{about.title}</h4>
                                <p className="text-base leading-relaxed" style={{ color: 'hsl(220, 15%, 25%)' }}>{about.text}</p>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
