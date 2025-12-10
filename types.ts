import * as THREE from 'three';

export enum AppState {
  CHAOS = 'CHAOS',
  FORMED = 'FORMED',
}

export interface DualPosition {
  target: Float32Array; // The tree shape
  chaos: Float32Array;  // The random sphere shape
}

export interface OrnamentData {
  position: THREE.Vector3;
  color: string;
  type: 'box' | 'ball' | 'light';
  scale: number;
}