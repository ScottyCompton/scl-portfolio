import { create } from 'zustand'

interface UIState {
  theme: 'light' | 'dark'
  sidebarOpen: boolean
  modalOpen: boolean
  isMobile: boolean
  setTheme: (theme: 'light' | 'dark') => void
  toggleSidebar: () => void
  setModalOpen: (open: boolean) => void
  setIsMobile: (isMobile: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  theme: typeof window !== 'undefined' ? localStorage.getItem('theme') as 'light' | 'dark' || 'light' : 'light',
  sidebarOpen: false,
  modalOpen: false,
  isMobile: false,
  setTheme: (theme) => set({ theme }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setModalOpen: (open) => set({ modalOpen: open }),
  setIsMobile: (isMobile) => set({ isMobile })
})) 