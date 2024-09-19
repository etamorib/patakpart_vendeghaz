import React, { useEffect, useRef } from "react";
import { Transition } from "@headlessui/react"; // For smooth transitions

const Modal = ({ isOpen, onClose, currentImage, onPrevious, onNext }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  if (!isOpen) return null;

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div
          className="relative bg-black p-4 rounded-lg max-w-5xl w-full h-full"
          ref={modalRef}
        >
          {/* Fullscreen Image */}
          <div
            className={`w-full h-full bg-contain bg-center bg-no-repeat ${currentImage.backgroundImage}`}
          />
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
          {/* Navigation Buttons */}
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
          >
            &#10094;
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
          >
            &#10095;
          </button>
        </div>
      </div>
    </Transition>
  );
};

export default Modal;
