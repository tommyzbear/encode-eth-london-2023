import React, { useState, useRef } from 'react';

const modal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<null | string>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
      setModalOpen(false);
    }
  };

  const handleSubmit = () => {
    // Get the selected option
    const selectedOption = document.querySelector('#select-option') as HTMLSelectElement;

    // Set the selected option in state
    setSelectedOption(selectedOption.value);

    // Close the modal
    closeModal();
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>Open Modal</button>
      <dialog id="my_modal_1" ref={modalRef} className={`modal ${isModalOpen ? "open" : ""}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Select an option and press submit to close the modal</p>
          <form onSubmit={handleSubmit}>
            <select id="select-option">
            <div className="form-control">
                <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" checked="checked" className="checkbox checkbox-primary" />
                </label>
              </div>
            </div>
            </select>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default modal;
