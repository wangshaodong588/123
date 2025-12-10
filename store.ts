import { create } from 'zustand';
import { AppState } from './types';

interface StoreState {
  appState: AppState;
  viewOffset: { x: number; y: number };
  setAppState: (state: AppState) => void;
  setViewOffset: (x: number, y: number) => void;
  toggleState: () => void;
}

export const useStore = create<StoreState>((set) => ({
  appState: AppState.CHAOS, // Start unleashed
  viewOffset: { x: 0, y: 0 },
  setAppState: (state) => set({ appState: state }),
  setViewOffset: (x, y) => set({ viewOffset: { x, y } }),
  toggleState: () =>
    set((state) => ({
      appState: state.appState === AppState.FORMED ? AppState.CHAOS : AppState.FORMED,
    })),
}));