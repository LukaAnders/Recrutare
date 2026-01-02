
// Fix: Added missing React import to resolve the React namespace for ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}