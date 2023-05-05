import { useState } from 'react';

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  return { isOpen, toggleModal };
}
