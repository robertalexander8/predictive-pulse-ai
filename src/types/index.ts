
export type SensorData = {
  temperature: number;
  pressure: number;
  vibration: number;
};

export type AlertSeverity = 'critical' | 'warning';

export type MaintenanceAlert = {
  id: number;
  severity: AlertSeverity;
  message: string;
  timestamp: Date;
};

export type ChatMessage = {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};
