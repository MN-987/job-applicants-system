import React from 'react';
function InputBox({ children }) {
  return (
    <div className="px-10 py-7 bg-white flex flex-col gap-3 border-[0.5px] border-[#ece0d5] rounded-md">
      {children}
    </div>
  );
}

export default InputBox;
