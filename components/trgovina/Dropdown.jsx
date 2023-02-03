import React, { useState } from 'react';

const Dropdown = ({ label, values }) => {
    const [currentValue, setCurrentValue] = useState(values[0]);
    const [showOptions, setShowOptions] = useState(false);

  return (
    <div className={showOptions ? "flex gap-2 translate-y-3 w-40 border-2 border-[#D0D0D0] rounded-lg px-2 py-1 bg-[#E8E8E8]" : "flex gap-2 w-40 border-2 border-[#D0D0D0] rounded-lg px-2 py-1 bg-[#E8E8E8]"}>
        <p>{label}:</p>

        <div onClick={() => setShowOptions(!showOptions)} className="flex flex-col">
          <p>{currentValue}</p>

          <div className={showOptions ? "flex flex-col" : "hidden"}>
            {values.map((val) => {
              if(val != currentValue) return (<p onClick={() => { setCurrentValue(val); setShowOptions(false); }}>{val}</p>);
            })}
          </div>
        </div>
    </div>
  )
}

export default Dropdown