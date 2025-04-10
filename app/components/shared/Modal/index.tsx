'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, ReactNode, FC, useState } from 'react';

const Modal: FC<{ children: ReactNode, className?: string }> = ({ children, className = "" }) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.back();
    }, 300);
  };


  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 10)
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [router, closeModal]);

  return (
      <div
          className={`fixed inset-0 z-40 flex items-center justify-center transition-opacity duration-300 ${
              isVisible ? 'bg-black bg-opacity-50 opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
            ref={modalRef}
            className={`transform transition-all duration-300 ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} bg-white shadow-lg ${className}`}
        >
          {children}
        </div>
      </div>
  );
};

export default Modal;
