
export type MachineStatus = 'healthy' | 'down' | 'maintenance';

export interface Machine {
  id: number;
  name: string;
  status: MachineStatus;
  image: string;
  location?: string;
  temperature: number;
  pressure: number;
  vibration: number;
  nextMaintenance: string;
}

export const machines: Machine[] = [
  {
    id: 1,
    name: 'Haas VF-2 CNC Machine',
    status: 'healthy',
    image: '/lovable-uploads/7fe28181-fe1b-47de-b012-a09dc0b9abbd.png',
    location: 'Precision Machining Bay',
    temperature: 65.2,
    pressure: 82.5,
    vibration: 45.3,
    nextMaintenance: '2024-04-15'
  },
  {
    id: 2,
    name: 'KUKA KR-150 Robot',
    status: 'maintenance',
    image: '/lovable-uploads/182cef34-c940-4d2b-a588-364a06600242.png',
    location: 'Robotic Assembly Cell 3',
    temperature: 58.7,
    pressure: 78.9,
    vibration: 42.1,
    nextMaintenance: '2024-03-20'
  },
  {
    id: 3,
    name: 'Automated Assembly Line',
    status: 'down',
    image: '/lovable-uploads/bf317941-2e13-4146-816d-8db0c6ad0bcb.png',
    location: 'Final Assembly Zone',
    temperature: 72.4,
    pressure: 88.2,
    vibration: 56.8,
    nextMaintenance: '2024-03-25'
  },
  {
    id: 4,
    name: 'Laser Cutting System',
    status: 'healthy',
    image: '/lovable-uploads/7398fc5d-7b0c-4676-9ffb-d7f1b66407f3.png',
    location: 'Metal Fabrication Area',
    temperature: 68.9,
    pressure: 80.1,
    vibration: 44.5,
    nextMaintenance: '2024-04-10'
  },
  {
    id: 5,
    name: 'Quality Inspection Robot',
    status: 'healthy',
    image: '/lovable-uploads/643c9b39-b398-4166-8dad-f3d1f4fa76bf.png',
    location: 'Quality Control Zone',
    temperature: 63.5,
    pressure: 79.8,
    vibration: 41.2,
    nextMaintenance: '2024-04-05'
  }
];
