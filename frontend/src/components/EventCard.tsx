import { Event } from "../data/events";
import { TicketCounter } from "./TicketCounter";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const priceDisplay = event.price === 0 ? "Free" : `$${event.price}`;

  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h2 style={{ margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
  {event.title}

  {event.price === 0 && (
    <span
      style={{
        background: "green",
        color: "white",
        padding: "4px 8px",
        borderRadius: "6px",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      Max 4 per person
    </span>
  )}
</h2>


      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p style={{ color: "#555" }}>{event.description}</p>

      <p>
        <strong>Price:</strong>{" "}
        {event.price === 0 ? (
          <span style={{ color: "green", fontWeight: "bold" }}>Free</span>
        ) : (
          `$${event.price}`
        )}
      </p>

      {/* TicketCounter for this specific event */}
      <TicketCounter
        eventTitle={event.title}
        maxTickets={event.price === 0 ? 4 : event.availableTickets}
      />
    </div>
  );
}
