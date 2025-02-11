
import { Thermometer, Gauge, Activity, Clock } from "lucide-react";
import { Machine } from "@/types/machine";
import { getStatusIcon, getStatusText } from "@/utils/machineStatus";

interface EquipmentHealthCardProps {
  machine: Machine;
}

const EquipmentHealthCard = ({ machine }: EquipmentHealthCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
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
  );
};

export default EquipmentHealthCard;
