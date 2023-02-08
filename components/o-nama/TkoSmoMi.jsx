import React from 'react';
import Image from 'next/image';

import TkoSmoMiSlika from '../../assets/o-nama/TkoSmoMi.png';

const TkoSmoMi = () => {
  return (
    <div className="w-full flex md:px-72 max-md:px-6 py-12">
        <div className="flex flex-col gap-4">
            <h3 className="text-3xl">TKO SMO MI?</h3>
            <p className="text-[#828181]">Emisija Odaberi zdravlje nastala je kao odgovor na različite emisije o zdravlju kako bi na što pristupačniji način objasnila gledateljima što se dešava kod različitih dijagnoza ili zdravstvenih poteškoća, pomogla im da sami prepoznaju simptome i na vrijeme reagiraju.</p>
            <p className="text-[#828181]">U emisiji se konstantno naglašava važnost prevencije, pravilne i zdrave ishrane kao i tjelovježbe. Informiranje i edukacija s naglaskom na prevenciju, su naše osnovne vodilje. Uz pregršt informacija, interesantnih i aktualnih tema tu možete pronaći i zdrave i jednostavne recepte, različite vježbe kao i proizvode na prirodnoj bazi.</p>
        </div>
        
        <Image src={TkoSmoMiSlika} alt="Odaberi zdravlje logo.png" className="md:w-[30rem] md:h-[30rem] max-md:hidden object-contain" />
    </div>
  )
}

export default TkoSmoMi