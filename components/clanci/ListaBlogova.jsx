import React from 'react';

const ListaBlogova = ({ blogovi }) => {
  return (
    <div className="w-full min-h-screen grid grid-cols-3">

    </div>
  )
}

export const getServerSideProps = async () => {
    const blogoviQuery = `*[_type == "blogovi"]`;
    const produkti = await client.fetch(blogoviQuery);
  
    return {
      props: {
        blogovi,
      },
    };
  }

export default ListaBlogova