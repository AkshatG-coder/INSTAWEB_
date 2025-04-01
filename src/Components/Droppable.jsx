import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable({ id, children, style: propStyle = {} }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const style = {
    ...propStyle,
    backgroundColor: isOver ? 'rgba(0, 255, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)', 
    borderColor: isOver ? 'green' : 'rgba(0, 0, 0, 0.1)', 
    transition: 'background-color 0.2s ease, border-color 0.2s ease', 
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="droppable-area w-full min-h-[500px] border-2 border-dashed p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300"
    >
      {children}
    </div>
  );
}
