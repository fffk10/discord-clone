'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useModal } from '@/hooks/use-modal-store'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Check, Copy, RefreshCw } from 'lucide-react'
import { useOrigin } from '@/hooks/use-origin'
import { useState } from 'react'
import axios from 'axios'

export const LeaveServerModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal()

  const isModalOpen = isOpen && type === 'leaveServer'
  const { server } = data

  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className='bg-white text-black p-0 overflow-hidden'>
        <DialogHeader className='pt-8 px-6'>
          <DialogTitle className='text-2xl font-bold'>Leave Server</DialogTitle>
          <DialogDescription className='text-center text-zinc-500'>
            Are you sure you want to leave{' '}
            <span className='font-semibold text-indigo-500'>
              {server?.name}
            </span>
            ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
