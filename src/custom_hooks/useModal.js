import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  return { isOpen, toggleModal };
};
