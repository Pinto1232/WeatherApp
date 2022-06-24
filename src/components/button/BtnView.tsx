import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

const BtnView = () => {
  return (
      <div>
          	<div className='bg-black-text'>
			<button
				type='submit'
				className='bg-black border-2 flex 
				   uppercase border-purple md:px-9
               
				   md:py-2.5  text-white  text-sm'>
				     View<FaAngleDown
                
					style={{
						marginTop: '1px',
						marginLeft: '2px',
                        color: ' rgb(63 60 187)'
					}}
				/>
			</button>
		</div>
    </div>
  )
}

export default BtnView