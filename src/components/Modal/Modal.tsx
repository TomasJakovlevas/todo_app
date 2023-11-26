'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProp = {
  children: React.ReactNode;
  toggle?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ children, toggle }: ModalProp) => {
  // Hooks
  // -- state
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(
        <div
          className='fixed inset-0 bg-gray-900 dark:bg-gray-500 dark:bg-opacity-40 bg-opacity-40 transition-opacity flex justify-center items-center'
          onClick={() => {
            toggle && toggle((prev) => !prev);
          }}
        >
          {children}
        </div>,
        document.body
      )
    : null;
};

export default Modal;
