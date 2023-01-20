import React from 'react';

const ListaProdukata = () => {
  return (
    <div className="px-40">
        <div className="w-full h-16 items-center flex justify-between">
            <div className="flex h-full items-center w-64 border-b-[1px] border-gray-300 justify-between">
                <p>Filters:</p>
                <p>Clean All</p>
            </div>

            <p className="text-gray-400 w-96">Showing <span className="text-black">5 of 48</span> Products</p>
        
            <div className="flex gap-4">
                <p>Sort by:</p>
                <p>Default</p>
            </div>
        </div>

        <div className="flex w-full min-h-screen">
            <div className="w-96 flex flex-col py-12">
                <div className="flex flex-col gap-2 border-b-[1px] border-gray-300 pb-8">
                    <h4 className="text-2xl mb-4">Kategorija</h4>
                    <p className="text-gray-400">Furniture</p>
                    <p className="text-gray-400">Coffee & Tables</p>
                    <p className="text-gray-400">Lighting</p>
                    <p className="text-gray-400">Decoration</p>
                    <p className="text-gray-400">Electronics</p>
                    <p className="text-gray-400">Beds</p>
                    <p className="text-gray-400">Armchairs & Chaises</p>
                    <p className="text-gray-400">Sofas & Sleeper Sofas</p>
                </div>

                <div className="flex flex-col gap-2 pt-4 border-b-[1px] border-gray-300 pb-8">
                    <h4 className="text-2xl mb-4">Veličina</h4>
                    <p className="">Extra Small</p>
                    <p className="">Small</p>
                    <p className="">Medium</p>
                    <p className="">Large</p>
                    <p className="">Extra Large</p>
                </div>
            </div>

            <div className="w-full bg-red-400">

            </div>
        </div>
    </div>
  )
}

export default ListaProdukata