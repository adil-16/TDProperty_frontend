import { useEffect } from "react";


const Modal = ({ openModal, setOpenModal, modalOpener, modalContent }) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openModal]);
  return (
    <div>
      <div className="cursor-pointer" onClick={() => setOpenModal(true)}>
        {modalOpener}
      </div>
      {openModal && (
        <div className="bg-black bg-opacity-50 fixed inset-0 z-50 flex justify-center items-center">
          <div className="flex flex-col bg-white rounded">{modalContent}</div>
        </div>
      )}
    </div>
  );
};

export default Modal;
