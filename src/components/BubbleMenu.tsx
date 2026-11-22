'use client'

import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { MenuItem } from '@/types/menu';
import { MENU_ITEMS } from '@/lib/menu';
import { useApp } from '@/context/AppContext';
import TextType from './TextType';

export type BubbleMenuProps = {
  logo: ReactNode | string;
  greeting: string;
  greetingShort?: string;
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  items?: MenuItem[];
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
};

export default function BubbleMenu({
  logo,
  greeting,
  greetingShort,
  onMenuClick,
  className,
  style,
  menuAriaLabel = 'Toggle menu',
  menuBg = '#fff',
  menuContentColor = '#111',
  useFixedPosition = false,
  items,
  animationEase = 'back.out(1.5)',
  animationDuration = 0.5,
  staggerDelay = 0.12
}: BubbleMenuProps) {
  const { lang } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLAnchorElement[]>([]);
  const labelRefs = useRef<HTMLSpanElement[]>([]);

  const menuItems = items?.length ? items : MENU_ITEMS;

  const containerClassName = [
    'bubble-menu',
    useFixedPosition ? 'fixed' : 'absolute',
    'left-0 right-0 top-4 sm:top-8',
    'flex items-center justify-between',
    'gap-2 sm:gap-4 px-3 sm:px-8',
    'pointer-events-none',
    'z-[1001]',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);
    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 900;
      gsap.set(overlay, { display: 'flex' });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const item = menuItems[i];
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });
        tl.to(bubble, {
          scale: 1,
          rotation: isDesktop ? (item?.rotation ?? 0) : 0,
          duration: animationDuration,
          ease: animationEase
        });
        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: 'power3.out'
            },
            '-=' + animationDuration * 0.9
          );
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: 'power3.in'
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
          setShowOverlay(false);
        }
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean);
        const isDesktop = window.innerWidth >= 900;
        bubbles.forEach((bubble, i) => {
          const item = menuItems[i];
          if (bubble && item) {
            const rotation = isDesktop ? (item.rotation ?? 0) : 0;
            gsap.set(bubble, { rotation });
          }
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, menuItems]);

  return (
    <>
      {/* Workaround for silly Tailwind capabilities */}
      <style>{`
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):nth-last-child(2) {
          margin-left: calc(100% / 6);
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):last-child {
          margin-left: calc(100% / 3);
        }
        @media (min-width: 900px) {
          .bubble-menu-items .pill-link {
            transform: rotate(var(--item-rot));
          }
          .bubble-menu-items .pill-link:hover {
            transform: rotate(var(--item-rot)) scale(1.06);
            background: var(--hover-bg) !important;
            color: var(--hover-color) !important;
          }
          .bubble-menu-items .pill-link:active {
            transform: rotate(var(--item-rot)) scale(.94);
          }
        }
        @media (max-width: 899px) {
          .bubble-menu-items {
            padding-top: 68px;
            padding-bottom: 24px;
            align-items: flex-start;
            overflow-y: auto;
          }
          .bubble-menu-items .pill-list {
            row-gap: 12px;
            max-width: 440px;
            padding-left: 20px;
            padding-right: 20px;
            margin-top: 8px;
          }
          .bubble-menu-items .pill-list .pill-col {
            flex: 0 0 100% !important;
            margin-left: 0 !important;
            overflow: visible;
          }
          .bubble-menu-items .pill-link {
            font-size: 1.3rem !important;
            padding: 0.85rem 1.5rem !important;
            min-height: 54px !important;
            height: auto !important;
            border-radius: 9999px !important;
            line-height: 1.2 !important;
          }
          .bubble-menu-items .pill-link:hover {
            background: var(--hover-bg);
            color: var(--hover-color);
          }
          .bubble-menu-items .pill-link:active {
            opacity: 0.9;
          }
        }
      `}</style>

      <nav className={containerClassName} style={style} aria-label="Main navigation">
        <div
          className={[
            'bubble logo-bubble',
            'inline-flex items-center justify-center',
            'rounded-full',
            'bg-white',
            'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
            'pointer-events-auto',
            'h-11 sm:h-12 md:h-14',
            'px-3 sm:px-4 md:px-8',
            'gap-1.5 sm:gap-2',
            'max-w-[calc(100vw-76px)] sm:max-w-none',
            'will-change-transform'
          ].join(' ')}
          aria-label="Logo"
          style={{
            background: menuBg,
            minHeight: '44px',
            borderRadius: '9999px'
          }}
        >
          <span
            className={['logo-content', 'inline-flex items-center justify-center', 'w-8 sm:w-10 h-full'].join(' ')}
            style={
              {
                ['--logo-max-height']: '60%',
                ['--logo-max-width']: '100%'
              } as CSSProperties
            }
          >
            {typeof logo === 'string' ? (
              <img src={logo} alt="Logo" className="bubble-logo max-h-[60%] max-w-full object-contain block" />
            ) : (
              logo
            )}
          </span>
          <span
            className='text-xs sm:text-sm md:text-xl font-medium whitespace-nowrap'
            style={{
              color: "#000",
            }}
          >
            {greetingShort ? (
              <>
                <span className="inline sm:hidden">{greetingShort}</span>
                <span className="hidden sm:inline">{greeting}</span>
              </>
            ) : (
              greeting
            )}
          </span>
        </div>

        <button
          type="button"
          className={[
            'bubble toggle-bubble menu-btn',
            isMenuOpen ? 'open' : '',
            'inline-flex flex-col items-center justify-center',
            'rounded-full',
            'bg-white',
            'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
            'pointer-events-auto',
            'w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14',
            'border-0 cursor-pointer p-0',
            'will-change-transform',
            'shrink-0'
          ].join(' ')}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          style={{ background: menuBg }}
        >
          <span
            className="menu-line block mx-auto rounded-[2px]"
            style={{
              width: 26,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none'
            }}
          />
          <span
            className="menu-line short block mx-auto rounded-[2px]"
            style={{
              marginTop: '6px',
              width: 26,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none'
            }}
          />
        </button>
      </nav>

      {showOverlay ? (
        <div
          ref={overlayRef}
          className={[
            'bubble-menu-items',
            useFixedPosition ? 'fixed' : 'absolute',
            'inset-0',
            'flex items-center justify-center',
            'pointer-events-none',
            'z-[1000]'
          ].join(' ')}
          aria-hidden={!isMenuOpen}
        >
          <ul
            className={[
              'pill-list',
              'list-none m-0 px-6',
              'w-full max-w-[1600px] mx-auto',
              'flex flex-wrap',
              'gap-x-0 gap-y-1',
              'pointer-events-auto'
            ].join(' ')}
            role="menu"
            aria-label="Menu links"
          >
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                role="none"
                className={[
                  'pill-col',
                  'flex justify-center items-stretch',
                  '[flex:0_0_calc(100%/3)]',
                  'box-border'
                ].join(' ')}
              >
                <Link
                  role="menuitem"
                  href={item.href}
                  aria-label={item.ariaLabel || item.label}
                  className={[
                    'pill-link',
                    'w-full',
                    'rounded-[999px]',
                    'no-underline',
                    'bg-white',
                    'text-inherit',
                    'shadow-[0_4px_14px_rgba(0,0,0,0.10)]',
                    'flex items-center justify-center',
                    'relative',
                    'transition-[background,color] duration-300 ease-in-out',
                    'box-border',
                    'whitespace-nowrap overflow-hidden'
                  ].join(' ')}
                  style={
                    {
                      ['--item-rot']: `${item.rotation ?? 0}deg`,
                      ['--pill-bg']: menuBg,
                      ['--pill-color']: menuContentColor,
                      ['--hover-bg']: item.hoverStyles?.bgColor || '#f3f4f6',
                      ['--hover-color']: item.hoverStyles?.textColor || menuContentColor,
                      background: 'var(--pill-bg)',
                      color: 'var(--pill-color)',
                      minHeight: 'var(--pill-min-h, 160px)',
                      padding: 'clamp(1.5rem, 3vw, 8rem) 0',
                      fontSize: 'clamp(1.5rem, 4vw, 4rem)',
                      fontWeight: 400,
                      lineHeight: 0,
                      willChange: 'transform',
                      height: 10
                    } as CSSProperties
                  }
                  ref={el => {
                    if (el) bubblesRef.current[idx] = el;
                  }}
                >
                  <span
                    className="pill-label inline-block"
                    style={{
                      willChange: 'transform, opacity',
                      height: '1.2em',
                      lineHeight: 1.2
                    }}
                    ref={el => {
                      if (el) labelRefs.current[idx] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ): (
        <TextType 
          key={lang}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={50}
          cursorBlinkDuration={0.5}
          handleShowOverLay={handleToggle}
        />
      )}
    </>
  );
}
