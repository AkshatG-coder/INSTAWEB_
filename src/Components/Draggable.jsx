import React from "react";
import { useDraggable } from "@dnd-kit/core";

export function Draggable({ id, children, style: propStyle = {} }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = {
    ...propStyle,
    transform: transform 
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    cursor: 'grab',
    touchAction: 'none', // Prevent scrolling on touch devices
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      {...listeners} 
      {...attributes}
      className="draggable-item"
    >
      {children}
    </div>
  );
}