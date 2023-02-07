import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Emisija1 from '../../assets/Emisije/emisija1.jpg';
import Emisija2 from '../../assets/Emisije/emisija2.jpg';
import Emisija3 from '../../assets/Emisije/emisija3.jpg';
import Emisija4 from '../../assets/Emisije/emisija4.jpg';
import Emisija5 from '../../assets/Emisije/emisija5.jpg';
import Emisija6 from '../../assets/Emisije/emisija6.jpg';
import Emisija7 from '../../assets/Emisije/emisija7.jpg';
import Emisija8 from '../../assets/Emisije/emisija8.jpg';
import Emisija9 from '../../assets/Emisije/emisija9.jpg';
import Emisija10 from '../../assets/Emisije/emisija10.jpg';
import Emisija11 from '../../assets/Emisije/emisija11.jpg';
import Emisija12 from '../../assets/Emisije/emisija12.jpg';
import Emisija13 from '../../assets/Emisije/emisija13.jpg';
import Emisija14 from '../../assets/Emisije/emisija14.jpg';
import Emisija15 from '../../assets/Emisije/emisija15.jpg';
import Emisija16 from '../../assets/Emisije/emisija16.jpg';
import Emisija17 from '../../assets/Emisije/emisija17.jpg';
import Emisija18 from '../../assets/Emisije/emisija18.jpg';
import Emisija19 from '../../assets/Emisije/emisija19.jpg';
import Emisija20 from '../../assets/Emisije/emisija20.jpg';
import Emisija21 from '../../assets/Emisije/emisija21.jpg';

/*const YOUTUBE_PLAYPLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';*/

/*export async function getServerSideProps() {
    const res = await fetch(`${YOUTUBE_PLAYPLIST_ITEMS_API}?part=snippet&playlistId=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&key=${process.env.YOUTUBE_API_KEY}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}*/

const EmisijeFeed = () => {
    /*useEffect(() => {
        console.log(data);
    });*/

    const emisije = [
        {
            naziv: "Problemi sa zglobovima i kako si pomoći",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=21",
            image: Emisija1,
        },
        {
            naziv: "Menopauza - kako se nositi s njom",
            url: "https://www.youtube.com/watch?v=mfRmzt_EEeI&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=20",
            image: Emisija2,
        },
        {
            naziv: "Nedostatna cirkulacija u nogama",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=19",
            image: Emisija3,
        },
        {
            naziv: "Problemi s perifernom cirkulacijom",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=18",
            image: Emisija4,
        },
        {
            naziv: "Problemi s hladnim nogama i kako ih riješiti",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=17",
            image: Emisija5,
        },
        {
            naziv: "Bolni zglobovi",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=16",
            image: Emisija6,
        },
        {
            naziv: "Uvećana prostata",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=15",
            image: Emisija7,
        },
        {
            naziv: "Kako se nositi s menopauzom",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=14",
            image: Emisija8,
        },
        {
            naziv: "Snažan imunitet",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=13",
            image: Emisija9,
        },
        {
            naziv: "Dijabetes",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=12",
            image: Emisija10,
        },
        {
            naziv: "Problemi sa zglobovima",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=11",
            image: Emisija11,
        },
        {
            naziv: "Pretilost",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=10",
            image: Emisija12,
        },
        {
            naziv: "Osteoartritis ili artroza",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=9",
            image: Emisija13,
        },
        {
            naziv: "Problemi s prostatom",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=8",
            image: Emisija14,
        },
        {
            naziv: "Problemi s venama",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=7",
            image: Emisija15,
        },
        {
            naziv: "Hladne ruke i noge - cirkulacija",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=6",
            image: Emisija16,
        },
        {
            naziv: "Periferna cirkulacija",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=5",
            image: Emisija17,
        },
        {
            naziv: "Menopauza - Women 50+",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=4",
            image: Emisija18,
        },
        {
            naziv: "Križobolja",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=3",
            image: Emisija19,
        },
        {
            naziv: "Dijabetes",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=2",
            image: Emisija20,
        },
        {
            naziv: "Osteoartritis i problemi sa zglobovima",
            url: "https://www.youtube.com/watch?v=44-afqPpj8Y&list=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&index=1",
            image: Emisija21,
        },
    ]

    return (
    <div className="w-full min-h-screen">
        <div className="grid max-md:grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-8 max-md:px-4 md:px-16 py-12">
            {emisije.map((em) => (
                <div className="flex flex-col items-center gap-4">
                    <Image src={em.image} className="h-full w-full object-contain" />

                    <p className="text-xl text-center font-[600]">{em.naziv}</p>
                    <Link href={em.url} target="_blank" className="bg-primary px-8 py-2">
                        <p>CIJELA EMISIJA...</p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EmisijeFeed