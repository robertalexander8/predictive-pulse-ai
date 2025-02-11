
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, Calendar, Thermometer, Gauge, Activity, Clock } from "lucide-react";
import MachineSensors from "./MachineSensors";
import PredictiveChart from "./PredictiveChart";
import AlertsPanel from "./AlertsPanel";

type MachineStatus = 'healthy' | 'down' | 'maintenance';

interface Machine {
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

const machines: Machine[] = [
  {
    id: 1,
    name: 'Haas VF-2 CNC Machine',
    status: 'healthy',
    image: '/lovable-uploads/26fc2ed9-f956-4cce-924c-d68e839c6d78.png',
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
    image: '/lovable-uploads/26aca310-d104-49a9-9ee1-43ebb7578536.png',
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
    image: '/lovable-uploads/0b473b48-5a43-4b47-9855-a8f1f3e95e24.png',
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
    image: '/lovable-uploads/ea671548-4858-4e0f-a615-f430ecb76e2f.png',
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
    image: '/lovable-uploads/5ae182f5-ee2e-4db7-b112-4ece0b1bd4cf.png',
    location: 'Quality Control Zone',
    temperature: 63.5,
    pressure: 79.8,
    vibration: 41.2,
    nextMaintenance: '2024-04-05'
  }
];

const getStatusIcon = (status: MachineStatus) => {
  switch (status) {
    case 'healthy':
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    case 'down':
      return <XCircle className="h-6 w-6 text-red-500" />;
    case 'maintenance':
      return <Calendar className="h-6 w-6 text-yellow-500" />;
  }
};

const getStatusText = (status: MachineStatus) => {
  switch (status) {
    case 'healthy':
      return 'Operational';
    case 'down':
      return 'Down';
    case 'maintenance':
      return 'Under Maintenance';
  }
};

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="col-span-1 lg:col-span-2 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <h2 className="text-xl font-semibold mb-4">Equipment Health</h2>
        <div className="grid grid-cols-1 gap-4 mb-6">
          {machines.map((machine) => (
            <div 
              key={machine.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{machine.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{machine.location}</p>
                  <div className="flex items-center mt-2">
                    {getStatusIcon(machine.status)}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                      {getStatusText(machine.status)}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <Thermometer className="h-5 w-5 mx-auto text-blue-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 mt-1 block">
                      {machine.temperature}°C
                    </span>
                  </div>
                  <div className="text-center">
                    <Gauge className="h-5 w-5 mx-auto text-purple-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 mt-1 block">
                      {machine.pressure} PSI
                    </span>
                  </div>
                  <div className="text-center">
                    <Activity className="h-5 w-5 mx-auto text-green-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 mt-1 block">
                      {machine.vibration} Hz
                    </span>
                  </div>
                  <div className="text-center">
                    <Clock className="h-5 w-5 mx-auto text-orange-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 mt-1 block">
                      {new Date(machine.nextMaintenance).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <MachineSensors />
      </Card>

      <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <h2 className="text-xl font-semibold mb-4">Critical Alerts</h2>
        <AlertsPanel />
      </Card>

      <Card className="col-span-1 lg:col-span-3 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <h2 className="text-xl font-semibold mb-4">Machine Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {machines.map((machine) => (
            <div 
              key={machine.id} 
              className="relative rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <img 
                src={machine.image} 
                alt={machine.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 p-4 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{machine.name}</h3>
                  {getStatusIcon(machine.status)}
                </div>
                <p className="text-white/80 text-sm mt-1">
                  {getStatusText(machine.status)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="col-span-1 lg:col-span-3 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <h2 className="text-xl font-semibold mb-4">Predictive Analytics</h2>
        <PredictiveChart />
      </Card>
    </div>
  );
};

export default Dashboard;
