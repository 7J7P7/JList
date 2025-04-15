import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function StatsTab() {
  const data = [
    { name: "Sun", tasks: 2 },
    { name: "Mon", tasks: 4 },
    { name: "Tue", tasks: 1 },
    { name: "Wed", tasks: 3 },
    { name: "Thu", tasks: 5 },
    { name: "Fri", tasks: 2 },
    { name: "Sat", tasks: 3 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Weekly Stats</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="tasks" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
