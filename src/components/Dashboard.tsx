
import { Card } from "@/components/ui/card";
import MachineSensors from "./MachineSensors";
import PredictiveChart from "./PredictiveChart";
import AlertsPanel from "./AlertsPanel";
import EquipmentHealthCard from "./EquipmentHealthCard";
import MachineStatusCard from "./MachineStatusCard";
import { machines } from "@/types/machine";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="col-span-1 lg:col-span-2 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <h2 className="text-xl font-semibold mb-4">Equipment Health</h2>
        <div className="grid grid-cols-1 gap-4 mb-6">
          {machines.map((machine) => (
            <EquipmentHealthCard key={machine.id} machine={machine} />
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
            <MachineStatusCard key={machine.id} machine={machine} />
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
