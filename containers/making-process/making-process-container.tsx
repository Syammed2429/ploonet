
import { PloonetQuickserveCardComponent } from '@/components/ploonet-quickserve-card'
import TextWithDot from '@/components/text-with-dot'
import React from 'react'

const MakingProcessContainer = () => {
  return (
      <div className='w-full'>
        <div className="flex justify-center mb-16">
              <TextWithDot title="MAKING PROCESS" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <PloonetQuickserveCardComponent/>
        <PloonetQuickserveCardComponent/>
      </div>
      </div>
  )
}

export default MakingProcessContainer