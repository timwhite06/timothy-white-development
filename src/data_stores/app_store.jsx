import { create } from 'zustand';

const useAppStore = create((set) => ({
  isMobile: false,
  setIsMobile: (bool) => set(() => ({ isMobile: bool }))
}));

export default useAppStore;
