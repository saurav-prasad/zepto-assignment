import React, { useState } from 'react'
import Clip from '../clip/Clip'
import List from '../list/List'
import runDebounce from '../../functions/debounce'

function Search({ list }) {

    const [clip, setClip] = useState([])
    const [listData, setListData] = useState(list)
    const [preValue, setPreValue] = useState()
    const [toggleList, setToggleList] = useState(false)
    const [filterList, setFilterList] = useState(list)
    const [highlightedChip, setHighlightedChip] = useState(null);

    // handle input and filter list item accordingly
    const onChange = (e) => {
        const value = e.target.value
        // when user starts typing
        if (value.length >= 1) {
            runDebounce(() => { filterValues(value) }, 400)
            setPreValue(value.length)
        }
        // when user press backspace
        else if (value.length < preValue) {
            runDebounce(() => { filterValues(value) }, 400)
            setPreValue(value.length)
            setFilterList(listData)
        }
        else if (value.length === 0) {
            setFilterList(listData)
        }
    }

    // filter list items based on value
    const filterValues = (value) => {
        setFilterList(listData.filter((data) => {
            return data.name.toLowerCase().includes(value.toLowerCase())
        }))
    }

    // handle the backspace click to move clip to list
    const onBackspace = (e) => {
        const valueLength = e.target.value.length

        if (valueLength === 0 && e.key === 'Backspace' && clip.length > 0) {
            if (highlightedChip === null) {
                const clipCopy = [...clip]
                const lastObject = clipCopy[clip.length - 1];
                lastObject.highlight = true
                setClip(clipCopy)
                setHighlightedChip(clip.length - 1)
                setToggleList(false)
            } else if (highlightedChip === clip.length - 1) {
                const newData = {
                    name: clip[clip.length - 1].name, email: clip[clip.length - 1].email
                }
                setFilterList([...filterList, { ...newData }])
                setListData([...listData, { ...newData }])

                setClip(clip.slice(0, clip.length - 1))
                setHighlightedChip(null);
                setToggleList(true)
            } else {
                const clipCopy = [...clip]
                const lastObject = clipCopy[highlightedChip];
                lastObject.highlight = false
                setClip(clipCopy)
                setHighlightedChip(null)
            }
        }
    }

    // move a list to clip
    const setToClip = (name, email) => {
        setClip([...clip, { name, email }])
        setListData(listData.filter((data) => {
            return !data.name.includes(name) && !data.email.includes(email)
        }))

        setFilterList(filterList.filter((data) => {
            return !data.name.includes(name) && !data.email.includes(email)
        }))
    }
    // move a clip to list
    const moveToList = (name, email) => {
        setClip(clip.filter((data) => {
            return !data.name.includes(name) && !data.email.includes(email)
        }))

        setFilterList([...filterList, { name, email }])
        setListData([...listData, { name, email }])
    }

    return (
        <div className='lg:mx-16 lg:p-0 px-2 mx-auto flex flex-row flex-wrap items-start justify-start lg:justify-center'>
            <div className={`flex flex-row space-x-2 flex-wrap border-b-2 transition-all ${toggleList ? 'border-pink-500' : 'border-gray-500'}`}>
                {/* clip */}
                {
                    clip && clip.map((e, index) => <Clip highlight={e.highlight} key={index} moveToList={moveToList} name={e.name} email={e.email} />)
                }

                {/* search bar and dropdown lists */}
                <div className='relative flex justify-center items-end ml-3 mb-1'>
                    {/* Search bar */}
                    <input
                        onKeyDown={onBackspace}
                        onClick={() => { setToggleList(true) }}
                        onChange={onChange}
                        placeholder="Find here..."
                        className="h-fit w-auto bg-transparent font-sans p-1 text-lg font-normal text-blue-gray-700 outline outline-0 transition-all"
                    />
                    {/* dropdown lists */}
                    {
                        (toggleList && listData.length > 0) &&
                        <div className='absolute rounded-lg top-[50px] w-max left-0 border-2 px-1 py-2 transition-all'>
                            <button onClick={() => setToggleList(false)} className='float-right'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                            <div className='gap-3 max-h-96 overflow-auto w-full flex flex-col'>
                                {
                                    filterList.length > 0 ?
                                        filterList.map((e, index) =>
                                            <List key={index}
                                                setToClip={setToClip} name={e.name} email={e.email} />
                                        ) :
                                        <div className="px-2 py-1 w-full rounded-md flex justify-start items-center gap-2  transition-all cursor-pointer">
                                            <div className="flex-1 font-medium dark:text-gray-900 flex justify-start items-center">
                                                <div className=''>Not found</div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Search