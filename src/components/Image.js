import React, {useState} from 'react'
import Modal from './Modal';

function Image({ url }) {
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    const handleClick = (url) => {
        setModalShow(!modalShow);
        setModalItem(url);
    };
  return (
      <div className="inline-flex">
          <div className="flex items-center box-border w-40 pb-3" >
              <img className='flex w-full rounded-2xl object-cover' src={url} alt="pic" onClick={() => handleClick(url)} />
          </div>
          <Modal data={modalItem} isShow={modalShow} onCancel={() => setModalShow(false)} />
      </div>
  )
}

export default Image