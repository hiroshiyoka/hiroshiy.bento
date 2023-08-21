import { GridItemInterface } from '@/config/site.config'
import React from 'react'

const SocialBox = ({ item }: { item:GridItemInterface }) => {
  return (
    <div>
        <div>
            <div>ICON</div>
            { item.layout === "2x2" && <div>Button</div> }
        </div>
        <div>
            <div>{item.title}</div>
            <div>{item.username}</div>
            <div>{item.description}</div>
        </div>
    </div>
  )
}

export default SocialBox