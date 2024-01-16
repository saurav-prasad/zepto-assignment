import React from 'react'

function Clip({ name, email, moveToList, highlight }) {
    const onClick = (e) => {
        e.preventDefault()
        moveToList(name, email)
    }
    return (
        <>
            <div
                className={`mt-2 mb-1 h-fit w-fit pr-2 flex items-center gap-1 bg-gray-100 rounded-full ${highlight && 'border border-red-600'}`}
            >
                <img className="w-8 h-8 rounded-full border" src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${name}`} alt="" />
                <div className="text-base dark:text-gray-900 flex justify-center items-center">
                    {name}
                    <button onClick={onClick} className='ml-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Clip