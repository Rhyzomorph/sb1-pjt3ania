import { useState, useEffect } from 'react';

export interface MemoryStats {
  usagePercent: number;
  used: number;
  total: number;
  modelSize: number;
  contextSize: number;
}

// Memory constants in MB
const TOTAL_MEMORY = 7168; // 7GB
const BASE_MODEL_SIZE = 4096; // 4GB for the base model
const MAX_CONTEXT_SIZE = 2048; // 2GB for context window

export function calculateMemoryUsage(activeContexts: number): MemoryStats {
  const contextSize = Math.min(activeContexts * 128, MAX_CONTEXT_SIZE); // 128MB per active context
  const used = BASE_MODEL_SIZE + contextSize;
  const usagePercent = (used / TOTAL_MEMORY) * 100;

  return {
    usagePercent: Math.round(usagePercent),
    used: Math.round(used),
    total: TOTAL_MEMORY,
    modelSize: BASE_MODEL_SIZE,
    contextSize
  };
}