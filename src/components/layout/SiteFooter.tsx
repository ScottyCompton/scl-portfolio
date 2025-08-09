'use client'

import { useMemo, useState } from 'react'
import { PackageOpen, Phone as PhoneIcon, Mail as MailIcon } from 'lucide-react'
import contactData from '@/app/api/data/contactitems.json'
import AppLibrariesModal from '@/components/AppLibrariesModal'
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
                        App Libraries & Frameworks
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
            <AppLibrariesModal
                open={open}
                onOpenChange={setOpen}
                dependencies={dependencies}
            />
        </footer>
    )
}

export default SiteFooter
