
import { CheckCircle, XCircle, Calendar } from "lucide-react";
import { MachineStatus } from "@/types/machine";

export const getStatusIcon = (status: MachineStatus) => {
  switch (status) {
    case 'healthy':
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    case 'down':
      return <XCircle className="h-6 w-6 text-red-500" />;
    case 'maintenance':
      return <Calendar className="h-6 w-6 text-yellow-500" />;
  }
};

export const getStatusText = (status: MachineStatus) => {
  switch (status) {
    case 'healthy':
      return 'Operational';
    case 'down':
      return 'Down';
    case 'maintenance':
      return 'Under Maintenance';
  }
};
