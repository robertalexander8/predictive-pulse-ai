
import { useEffect, useState } from "react";
import { AlertCircle, AlertTriangle, Bell } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type AlertType = {
  id: number;
  severity: 'critical' | 'warning';
  message: string;
  timestamp: Date;
};

const AlertsPanel = () => {
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  useEffect(() => {
    // Simulate incoming alerts
    const generateAlert = () => {
      const newAlert: AlertType = {
        id: Date.now(),
        severity: Math.random() > 0.7 ? 'critical' : 'warning',
        message: Math.random() > 0.7 
          ? 'High temperature detected in main bearing'
          : 'Unusual vibration pattern detected',
        timestamp: new Date()
      };
      
      setAlerts(prev => [newAlert, ...prev].slice(0, 4));
    };

    generateAlert();
    const interval = setInterval(generateAlert, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          variant={alert.severity === 'critical' ? 'destructive' : 'default'}
          className={`transition-all duration-300 ${
            alert.severity === 'critical'
              ? 'border-red-500/50 dark:border-red-900/50'
              : 'border-amber-500/50 dark:border-amber-900/50'
          }`}
        >
          <div className="flex items-start space-x-3">
            {alert.severity === 'critical' ? (
              <AlertCircle className="h-5 w-5" />
            ) : (
              <AlertTriangle className="h-5 w-5" />
            )}
            <div>
              <AlertTitle className="text-sm font-semibold">
                {alert.severity === 'critical' ? 'Critical Alert' : 'Warning'}
              </AlertTitle>
              <AlertDescription className="text-sm mt-1">
                {alert.message}
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {alert.timestamp.toLocaleTimeString()}
                </div>
              </AlertDescription>
            </div>
          </div>
        </Alert>
      ))}
      
      {alerts.length === 0 && (
        <div className="flex items-center justify-center h-32 text-gray-500 dark:text-gray-400">
          <Bell className="h-5 w-5 mr-2" />
          <span>No active alerts</span>
        </div>
      )}
    </div>
  );
};

export default AlertsPanel;
