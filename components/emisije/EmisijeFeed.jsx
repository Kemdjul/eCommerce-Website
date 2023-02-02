import React, { useEffect } from 'react';

const YOUTUBE_PLAYPLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
    const res = await fetch(`${YOUTUBE_PLAYPLIST_ITEMS_API}?part=snippet&playlistId=PL9mI_UhGCTbLCkmRgFuU_zrlREsFTykXe&key=${process.env.YOUTUBE_API_KEY}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

const EmisijeFeed = ({ data }) => {
    useEffect(() => {
        console.log(data);
    });

    return (
    <div className="w-full min-h-screen bg-red-400">
        
    </div>
  )
}

export default EmisijeFeed