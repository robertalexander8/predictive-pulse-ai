
import { Machine } from "@/types/machine";
import { getStatusIcon, getStatusText } from "@/utils/machineStatus";

interface MachineStatusCardProps {
  machine: Machine;
}

const MachineStatusCard = ({ machine }: MachineStatusCardProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
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
  );
};

export default MachineStatusCard;
