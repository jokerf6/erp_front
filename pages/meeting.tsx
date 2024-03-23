import React from 'react'

// Components
import MeetingHeader from '@/components/meeting/meetingHeader'

export default function Meeting() {
  return (
    <div>
      <MeetingHeader />
      
      <main>
        <div>Left</div>
        <div>Right</div>
      </main>
    </div>
  )
}