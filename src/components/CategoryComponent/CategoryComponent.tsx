import React from "react";

export default function CategoryComponent() {
  return (

    <section>
      <div className="mt-16">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full bg-cover">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </button>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase">Chanel</h3>
              <span className="text-gray-500 mt-2">$12</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full bg-cover" >
              <img src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="" />
              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </button>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase">Man Mix</h3>
              <span className="text-gray-500 mt-2">$12</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full bg-cover">
              <img src="https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </button>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase">classNameic watch</h3>
              <span className="text-gray-500 mt-2">$12</span>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full bg-cover">
              <img src="https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80" alt="" />
              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </button>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase">woman mix</h3>
              <span className="text-gray-500 mt-2">$12</span>
            </div>
          </div>
        </div>
      </div>
    </section>



  );
}




