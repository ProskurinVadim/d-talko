'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, ReactNode, FC } from 'react';

const Modal:FC<{children: ReactNode, className?: string}> = ({ children, className="" }) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        router.back();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [router]);

  return (
    <div className={"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"}>
      <div ref={modalRef} className={`bg-white shadow-lg ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default Modal