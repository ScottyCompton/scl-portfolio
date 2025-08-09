'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import React from 'react'

type AppLibrariesModalProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
    dependencies: Array<[string, unknown]>
}

const AppLibrariesModal: React.FC<AppLibrariesModalProps> = ({
    open,
    onOpenChange,
    dependencies,
}) => {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl">
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 px-4 py-3">
                        <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            Libraries & Frameworks
                        </Dialog.Title>
                        <Dialog.Close asChild>
                            <button
                                aria-label="Close"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 cursor-pointer"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </Dialog.Close>
                    </div>
                    <div className="max-h-[60vh] overflow-y-auto p-4">
                        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                            This site is built with the following dependencies
                            (name and version):
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            {dependencies.map(([name, version]) => (
                                <li
                                    key={name}
                                    className="flex items-center justify-between rounded border border-gray-200 dark:border-gray-800 px-3 py-2"
                                >
                                    <span className="text-gray-800 dark:text-gray-200 break-all">
                                        {name}
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-400 ml-3">
                                        {(version as string) ?? ''}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default AppLibrariesModal
