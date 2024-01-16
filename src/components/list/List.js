import React from 'react'

function List({ name, email,  setToClip }) {
    
    const onClick = () => {
         setToClip(name, email)
    }
    
    return (
        <div onClick={onClick}
            className={`px-2 py-1 w-full rounded-md flex justify-start items-center gap-2 hover:bg-slate-200 transition-all cursor-pointer`}
        >
            <img className="w-10 h-10 rounded-full" src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${name}`} alt={name} />
            <div className="flex-1 font-medium dark:text-gray-900 flex justify-start items-center">
                <div className=''>{name}</div>
                <div className="ml-2 text-sm text-gray-600 dark:text-gray-600">{email}</div>
            </div>
        </div>
    )
}

export default List