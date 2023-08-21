import { GridItemInterface } from '@/config/site.config'
import React from 'react'

const SocialBox = ({ item }: { item:GridItemInterface }) => {
  return (
    <div className="flex items-center justify-between">
        <div>
            <div>ICON</div>
            { item.layout === "2x2" && <div>Button</div> }
        </div>
        <div className="mt-2">
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="text-sm text-neutral-500">{item.username}</div>
            <div className="text-sm text-neutral-500">{item.description}</div>
        </div>
        {item.layout === '1x2' && <div>Button</div>}
    </div>
  )
}

export default SocialBox