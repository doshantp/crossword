import React from "react";

function Subscibe() {
  return (
    <>
      <div>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box bg-black">
            <h3 className="font-bold text-sky-400  text-2xl">
              Successfully Submited!!
            </h3>
            <p className="py-4 text-xs text-white">
              Press ESC key or click outside to close
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default Subscibe;
