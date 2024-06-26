'use client'

import { ChatWelcome } from '@/components/chat/chat-welcome'
import { Member } from '@prisma/client'

interface ChatMessagesProps {
  name: string
  member: Member
  chatId: string
  apiUrl: string
  socketUrl: string
  socketQuery: Record<string, any>
  paramKey: 'channelId' | 'conversationId'
  paramValue: string
  type: 'channel' | 'conversation'
}

export const ChatMessages = ({
  name,
  member,
  chatId,
  apiUrl,
  socketUrl,
  socketQuery,
  paramKey,
  paramValue,
  type,
}: ChatMessagesProps) => {
  return (
    <div className='flex-1 flex flex-col py-4 overflow-y-auto'>
      <div className='flex-1' />
      <ChatWelcome type={type} name={name} />
    </div>
  )
}
