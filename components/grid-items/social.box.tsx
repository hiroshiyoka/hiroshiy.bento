import { GridItemInterface } from '@/config/site.config'
import React from 'react'

const socialBox = ({ item }: { item:GridItemInterface }) => {
  return (
    <div>
        <div>
            <div>ICON</div>
            { item.layout === "2x2" && <div>Button</div>}
        </div>
    </div>
  )
}

export default socialBox