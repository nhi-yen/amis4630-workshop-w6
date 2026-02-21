import { useState } from "react";

interface TicketCounterProps {
  eventTitle: string;
  maxTickets: number;
}

export function TicketCounter({ eventTitle, maxTickets }: TicketCounterProps) {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    if (count < maxTickets) {
      setCount(count + 1);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "12px",
        borderRadius: "8px",
        marginTop: "12px",
        width: "fit-content",
      }}
    >
      <h3>Ticket Counter</h3>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button onClick={decrease}>−</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </div>

      {count > 0 && (
        <p style={{ marginTop: "8px" }}>
          {count} tickets selected for {eventTitle}.
        </p>
      )}
    </div>
  );
}
