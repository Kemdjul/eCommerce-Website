import React, { useState } from 'react';

const Dropdown = ({ label, values }) => {
    const [sort, setSort] = useState(0);

  return (
    <div className="flex items-center">
        <p>{label}</p>
        <p>{values[0]}</p>
    </div>
  )
}

export default Dropdown