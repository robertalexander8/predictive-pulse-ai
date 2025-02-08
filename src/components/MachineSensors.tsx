
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Gauge, Thermometer, Activity } from "lucide-react";

const MachineSensors = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 65,
    pressure: 82,
    vibration: 45
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData({
        temperature: 65 + Math.random() * 10,
        pressure: 82 + Math.random() * 8,
        vibration: 45 + Math.random() * 15
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSensorStatus = (value: number, type: string) => {
    switch (type) {
      case 'temperature':
        return value > 70 ? 'warning' : 'normal';
      case 'pressure':
        return value > 85 ? 'warning' : 'normal';
      case 'vibration':
        return value > 55 ? 'warning' : 'normal';
      default:
        return 'normal';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <SensorCard
        icon={<Thermometer className="h-6 w-6" />}
        title="Temperature"
        value={sensorData.temperature.toFixed(1)}
        unit="°C"
        status={getSensorStatus(sensorData.temperature, 'temperature')}
      />
      <SensorCard
        icon={<Gauge className="h-6 w-6" />}
        title="Pressure"
        value={sensorData.pressure.toFixed(1)}
        unit="PSI"
        status={getSensorStatus(sensorData.pressure, 'pressure')}
      />
      <SensorCard
        icon={<Activity className="h-6 w-6" />}
        title="Vibration"
        value={sensorData.vibration.toFixed(1)}
        unit="Hz"
        status={getSensorStatus(sensorData.vibration, 'vibration')}
      />
    </div>
  );
};

const SensorCard = ({ icon, title, value, unit, status }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
  status: 'normal' | 'warning';
}) => {
  return (
    <Card className={`p-4 transition-all duration-300 ${
      status === 'warning' 
        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700' 
        : 'bg-white/70 dark:bg-gray-800/70'
    }`}>
      <div className="flex items-center space-x-3 mb-2">
        <div className={`${
          status === 'warning' ? 'text-amber-500' : 'text-gray-600 dark:text-gray-400'
        }`}>
          {icon}
        </div>
        <h3 className="font-medium text-gray-700 dark:text-gray-300">{title}</h3>
      </div>
      <div className="flex items-baseline space-x-2">
        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{unit}</span>
      </div>
    </Card>
  );
};

export default MachineSensors;
