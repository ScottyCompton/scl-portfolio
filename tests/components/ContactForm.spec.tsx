import React from 'react'
import {
    renderWithProviders,
    screen,
    fireEvent,
} from '@/../tests/utils/test-utils'
import { vi } from 'vitest'
import { act } from 'react'
import ContactForm from '@/components/ContactForm'

describe('ContactForm', () => {
    it('submits and shows success state', async () => {
        vi.useFakeTimers()
        renderWithProviders(<ContactForm />)
        fireEvent.change(screen.getByLabelText(/name/i), {
            target: { value: 'John' },
        })
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'john@example.com' },
        })
        fireEvent.change(screen.getByLabelText(/phone/i), {
            target: { value: '123-456-7890' },
        })
        fireEvent.change(screen.getByLabelText(/message/i), {
            target: { value: 'Hello' },
        })

        fireEvent.click(screen.getByRole('button', { name: /send message/i }))
        await act(async () => {
            await vi.advanceTimersByTimeAsync(1100)
        })
        expect(
            screen.getByText(/message sent successfully/i)
        ).toBeInTheDocument()
        vi.useRealTimers()
    })
})
