import React from 'react'
import BoxCard from '../../boxcard/BoxCard'
import UI from './../../ui/UI'


export const GridWidget = () => {
  

return (
<div className=" flex  text-center">
  <div className="flex flex-wrap gap-2 ">
      <div className="contents">
        <UI className="bg-transparent">
            <BoxCard />
        </UI>
      </div>
      
      <div className="contents">
        <UI className="bg-transparent">
            <BoxCard />
        </UI>
      </div>
      
      <div className="contents">
        <UI className="bg-transparent">
            <BoxCard />
        </UI>
      </div>
  </div>
</div>
)
  }