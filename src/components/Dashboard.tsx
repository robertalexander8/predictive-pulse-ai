
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, Calendar } from "lucide-react";
import MachineSensors from "./MachineSensors";
import PredictiveChart from "./PredictiveChart";
import AlertsPanel from "./AlertsPanel";

type MachineStatus = 'healthy' | 'down' | 'maintenance';

interface Machine {
  id: number;
  name: string;
  status: MachineStatus;
  image: string;
}

const machines: Machine[] = [
  {
    id: 1,
    name: 'CNC Milling Machine',
    status: 'healthy',
    image: 'https://images.unsplash.com/photo-1565439371134-9b3193b8e414',
  },
  {
    id: 2,
    name: 'Industrial Robot Arm',
    status: 'maintenance',
    image: 'https://images.unsplash.com/photo-1624372644188-66d31e3c7f5c',
  },
  {
    id: 3,
    name: 'Production Line',
    status: 'down',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
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
