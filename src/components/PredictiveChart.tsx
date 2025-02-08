
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const PredictiveChart = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Generate initial data
    const generateData = () => {
      const newData = [];
      for (let i = 0; i < 24; i++) {
        newData.push({
          time: `${i}:00`,
          health: 85 + Math.random() * 10,
          prediction: 82 + Math.sin(i / 3) * 8
        });
      }
      setData(newData);
    };

    generateData();
    const interval = setInterval(generateData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
          <XAxis 
            dataKey="time" 
            className="text-gray-600 dark:text-gray-400"
          />
          <YAxis 
            className="text-gray-600 dark:text-gray-400"
            domain={[60, 100]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid #ccc',
              borderRadius: '6px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="health" 
            stroke="#6366f1" 
            strokeWidth={2}
            dot={false}
            name="Current Health"
          />
          <Line 
            type="monotone" 
            dataKey="prediction" 
            stroke="#22c55e" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            name="Predicted Health"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PredictiveChart;
