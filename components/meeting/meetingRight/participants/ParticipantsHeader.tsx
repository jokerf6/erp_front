import React, { useContext } from 'react'

import { Icon } from '@iconify/react'

// Components
import AsideSectionHeader from '../AsideSectionHeader/AsideSectionHeader'

// Context
import { MeetingContext } from '@/pages/meeting'

export default function ParticipantsHeader() {
  const { showParticipants, setShowParticipants } = useContext(MeetingContext)
  return (
    <AsideSectionHeader>
        <AsideSectionHeader.Title>participants</AsideSectionHeader.Title>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-primary-purple bg-[#F2EBFE] rounded-[61px] px-[20px] py-[12px]">
            <span className="capitalize text-[14px] font-[600]">
              add participant
            </span>
            <Icon icon="icons8:add-user" width={20} />
          </button>
          <button
            onClick={() => setShowParticipants((prev: boolean) => !prev)}
            className="text-primary-purple p-1"
          >
            {showParticipants ? (
              <Icon icon="ep:arrow-up-bold" />
            ) : (
              <Icon icon="ep:arrow-down-bold" />
            )}
          </button>
        </div>
      </AsideSectionHeader>
  )
}
