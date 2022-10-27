import React, { useState } from 'react'
import './modal.css'

function Modal({ data, isShow, onCancel }) {
    const [input, setInput] = useState('')
    const [comment, setComment] = useState([])

    const submitComment = (e) => {
        e.preventDefault()
        setComment([...comment, input])
    }

    return (
        <div className={!isShow ? "hidden" : ""} datacy="modal-delete">
            <div className="modal-bg" onClick={onCancel}></div>
            <div className="modal">
                {data && <img className='w-96' src={data} alt="sesuatu" />}
                <div>
                    <form className='mb-8' onSubmit={submitComment}>
                        <input className='border-2 rounded-3xl px-2 py-1 text-base' type="text" placeholder='Post a comment' onChange={(e) => setInput(e.target.value)} />
                        <button type='submit' className='border-2 bg-slate-300 text-gray-900 ml-2 rounded-lg py-0 px-1'>Post</button>
                    </form>
                    {comment.map((el, index) => {
                        return (
                            <div className='border-b-2 mt-4 px-2 w-48' key={index}>
                                <p>
                                    {el}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Modal