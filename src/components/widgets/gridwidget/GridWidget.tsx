import React from 'react'
import BoxCard from '../../boxcard/BoxCard'
import UI from './../../ui/UI'


export const GridWidget = () => {
  

return (
<div className=" flex items-center md:flex-wrap text-center">
  <div className="flex gap-2 ">
    <div className="contents">
        <UI className="bg-metal">
            <BoxCard />
        </UI>
      </div>
      
      <div className="contents">
        <UI className="bg-bermuda">
            <BoxCard />
        </UI>
      </div>
      
      <div className="contents">
        <UI className="bg-silver">
            <BoxCard />
        </UI>
      </div>
      
      <div className="contents">
        <UI className="bg-purple">
             <BoxCard />
        </UI>
      </div>
    
  </div>
</div>
)
  }