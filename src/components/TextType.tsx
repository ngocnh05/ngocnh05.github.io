'use client';

import { ElementType, useEffect, useRef, useState, createElement, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import SoftButton from './SoftButton';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text?: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
  handleShowOverLay?: () => void | undefined;
}

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  handleShowOverLay,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const { lang, t } = useApp();
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const activeText = text ?? t.landing.typing;
  const textArray = useMemo(() => (Array.isArray(activeText) ? activeText : [activeText]), [activeText]);

  // Reset immediately whenever language or textArray changes
  const prevLangRef = useRef(lang);
  useEffect(() => {
    if (prevLangRef.current !== lang) {
      prevLangRef.current = lang;
      setDisplayedText('');
      setCurrentCharIndex(0);
      setCurrentTextIndex(0);
      setIsDeleting(false);
    }
  }, [lang]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const handleExploreMe = () => {
    if (handleShowOverLay != undefined){
      handleShowOverLay();
    }
    else {
      router.push('/home');
    }
  };

  const handleContactMe = () => {
    router.push('/contact');
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: ReturnType<typeof setTimeout>;

    const safeIndex = currentTextIndex < textArray.length ? currentTextIndex : 0;
    const currentText = textArray[safeIndex] || '';
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          if (safeIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[safeIndex], safeIndex);
          }

          setCurrentTextIndex((safeIndex + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(processedText.slice(0, currentCharIndex + 1));
              setCurrentCharIndex(prev => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length >= 1) {
          if (!loop && safeIndex === textArray.length - 1) return;
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete
  ]);

  const safeIndex = currentTextIndex < textArray.length ? currentTextIndex : 0;
  const currentSentence = textArray[safeIndex] || '';
  const shouldHideCursor =
    hideCursorWhileTyping && (currentCharIndex < currentSentence.length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `
        absolute
        w-full
        px-4 sm:px-10
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        inline-block
        whitespace-pre-wrap
        tracking-normal
        ${className}
      `,
      ...props
    },
    <div className="flex flex-col items-center gap-6 sm:gap-10 md:gap-14 lg:gap-16 text-center max-w-4xl mx-auto">
      <h1 className="
        text-center
        text-2xl sm:text-4xl lg:text-5xl
        font-bold
        tracking-normal sm:tracking-wide
        text-slate-900 dark:text-white
        drop-shadow-none dark:drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]
        leading-snug sm:leading-tight
      ">
        {t.landing.welcome}
      </h1>

      <div className="flex items-center justify-center min-h-[36px] sm:min-h-[44px]">
        <h2 className="inline font-medium text-slate-800 dark:text-slate-100 text-base sm:text-2xl md:text-3xl tracking-normal">
          {displayedText}
        </h2>

        {showCursor && (
          <span
            ref={cursorRef}
            className={`ml-1 inline-block ${shouldHideCursor ? "hidden" : ""} ${cursorClassName} text-sky-600 dark:text-cyan-300 font-bold text-base sm:text-2xl md:text-3xl`}
          >
            {cursorCharacter}
          </span>
        )}
      </div>

      <div className="flex flex-row justify-center gap-3 sm:gap-6 md:gap-10 items-center mt-2 sm:mt-4 w-full max-w-sm sm:max-w-none">
        <SoftButton label={t.landing.exploreMe} onClick={handleExploreMe} />
        <SoftButton label={t.landing.contactMe} onClick={handleContactMe} />
      </div>
    </div>
  );
};

export default TextType;
