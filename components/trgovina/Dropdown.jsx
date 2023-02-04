import React, { useState } from 'react';

import { useStateContext } from '../../context/StateContext';

const Dropdown = ({ label, values }) => {
    const { sortirajPo, setSortirajPo } = useStateContext();
    const [showOptions, setShowOptions] = useState(false);

  return (
    <div onClick={() => setShowOptions(!showOptions)} className={showOptions ? "flex gap-2 translate-y-3 w-40 border-2 border-[#D0D0D0] rounded-lg px-2 py-1 bg-[#E8E8E8]" : "flex gap-2 w-40 border-2 border-[#D0D0D0] rounded-lg px-2 py-1 bg-[#E8E8E8]"}>
        <p>{label}:</p>

        <div className="flex flex-col">
          <p>{sortirajPo}</p>

          <div className={showOptions ? "flex flex-col" : "hidden"}>
            {values.map((val) => {
              if(val != sortirajPo) return (<p onClick={() => { setSortirajPo(val); setShowOptions(false); }}>{val}</p>);
            })}
          </div>
        </div>
    </div>
  )
}

export default Dropdown