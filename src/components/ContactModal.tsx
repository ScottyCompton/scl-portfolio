'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

interface ContactModalProps {
    open: boolean
    onClose: () => void
}

const ContactModal = ({ open, onClose }: ContactModalProps) => {
    return (
        <Dialog.Root open={open} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:duration-300 data-[state=closed]:duration-200 data-[state=open]:ease-out data-[state=closed]:ease-in" />
                <Dialog.Content className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 w-[92vw] max-w-2xl max-h-[90vh] overflow-y-auto md:overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl ring-1 ring-black/5 dark:ring-white/5 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=open]:duration-300 data-[state=closed]:duration-200 data-[state=open]:ease-out data-[state=closed]:ease-in">
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 px-4 py-3">
                        <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            Contact Me
                        </Dialog.Title>
                        <Dialog.Close asChild>
                            <button
                                aria-label="Close"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-colors cursor-pointer"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </Dialog.Close>
                    </div>
                    <div className="p-4 flex justify-center">
                        <ContactForm />
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default ContactModal
