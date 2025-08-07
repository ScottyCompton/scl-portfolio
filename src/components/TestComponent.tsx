'use client'

import { Button } from '@radix-ui/themes'
import classNames from 'classnames'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

interface TestComponentProps {
    className?: string
}

export function TestComponent({ className }: TestComponentProps) {
    return (
        <div
            className={classNames(
                'p-6 bg-white rounded-lg shadow-md',
                className
            )}
        >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Component Test
            </h2>
            <p className="text-gray-600 mb-6">
                This component tests Radix UI, Tailwind CSS, and React Icons
                integration.
            </p>

            <div className="flex gap-4 mb-6">
                <Button size="3" variant="solid">
                    <FiGithub className="mr-2" />
                    GitHub
                </Button>
                <Button size="3" variant="outline">
                    <FiLinkedin className="mr-2" />
                    LinkedIn
                </Button>
                <Button size="3" variant="soft">
                    <FiMail className="mr-2" />
                    Email
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-md">
                    <h3 className="font-semibold text-blue-900">
                        Mobile First
                    </h3>
                    <p className="text-blue-700 text-sm">
                        This layout adapts to mobile screens first.
                    </p>
                </div>
                <div className="p-4 bg-green-50 rounded-md">
                    <h3 className="font-semibold text-green-900">
                        Responsive Design
                    </h3>
                    <p className="text-green-700 text-sm">
                        Grid layout changes on different screen sizes.
                    </p>
                </div>
            </div>
        </div>
    )
}
