'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useMemo, useState } from 'react'
import {
    PackageOpen,
    X,
    Phone as PhoneIcon,
    Mail as MailIcon,
} from 'lucide-react'
import contactData from '@/app/api/data/contactitems.json'
import pkg from '../../../package.json'

function usePhoneAndEmail() {
    const { phone, email, emailLink } = useMemo(() => {
        const items = contactData.contactItems || []
        const phoneItem = items.find((i) => i.fontAwesomeIcon === 'phone')
        const emailItem = items.find((i) => i.fontAwesomeIcon === 'at')
        return {
            phone: phoneItem?.displayValue || '',
            email: emailItem?.displayValue || '',
            emailLink:
                emailItem?.linkUrl || `mailto:${emailItem?.displayValue || ''}`,
        }
    }, [])
    return { phone, email, emailLink }
}

const SiteFooter = () => {
    const { phone, email, emailLink } = usePhoneAndEmail()
    const [open, setOpen] = useState(false)

    // Collect versions from package.json
    const dependencies = Object.entries({
        ...pkg.dependencies,
        ...pkg.devDependencies,
    }).sort(([a], [b]) => a.localeCompare(b))

    return (
        <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-6 grid gap-3 md:grid-cols-3 items-center text-sm">
                {/* Left: Phone */}
                <div className="text-gray-700 dark:text-gray-300 flex justify-center md:justify-start">
                    {phone && (
                        <a
                            href={`tel:${phone}`}
                            className="inline-flex items-center gap-1 hover:underline cursor-pointer"
                        >
                            <PhoneIcon className="h-4 w-4" />
                            <span>{phone}</span>
                        </a>
                    )}
                </div>
                {/* Center: Tech stack links + dependencies modal trigger */}
                <div className="text-gray-700 dark:text-gray-300 flex justify-center text-center items-center gap-1 flex-wrap">
                    <span>Site developed with</span>
                    <a
                        href="https://www.cursor.com"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 decoration-dotted hover:decoration-solid text-blue-600 dark:text-blue-400 cursor-pointer"
                    >
                        Cursor.ai
                    </a>
                    <span>in</span>
                    <a
                        href="https://nextjs.org"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 decoration-dotted hover:decoration-solid text-blue-600 dark:text-blue-400 cursor-pointer"
                    >
                        Next.js
                    </a>
                    <span>with</span>
                    <a
                        href="https://radix-ui.com"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 decoration-dotted hover:decoration-solid text-blue-600 dark:text-blue-400 cursor-pointer"
                    >
                        Radix UI
                    </a>
                    <span>and</span>
                    <a
                        href="https://tailwindcss.com"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 decoration-dotted hover:decoration-solid text-blue-600 dark:text-blue-400 cursor-pointer"
                    >
                        Tailwind CSS
                    </a>
                    <span>·</span>
                    <button
                        type="button"
                        className="inline-flex items-center gap-1 underline underline-offset-4 decoration-dotted hover:decoration-solid text-blue-600 dark:text-blue-400 cursor-pointer"
                        onClick={() => setOpen(true)}
                        aria-label="View dependencies"
                    >
                        <PackageOpen className="h-4 w-4" />
                        View dependencies
                    </button>
                </div>
                {/* Right: Email */}
                <div className="text-gray-700 dark:text-gray-300 flex justify-center md:justify-end">
                    {email && (
                        <a
                            href={emailLink}
                            className="inline-flex items-center gap-1 hover:underline cursor-pointer"
                        >
                            <MailIcon className="h-4 w-4" />
                            <span>{email}</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Modal for libraries/frameworks */}
            <Dialog.Root open={open} onOpenChange={setOpen}>
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
                                This site is built with the following
                                dependencies (name and version):
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
                                            {version as string}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </footer>
    )
}

export default SiteFooter
