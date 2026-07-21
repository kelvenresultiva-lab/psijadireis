"use client";

import { useRef, useState, type ReactNode } from "react";

/**
 * Carrossel horizontal.
 *
 * No toque, quem rola é o próprio navegador (overflow-x + touch-action padrão),
 * o que preserva a inércia nativa. O JS abaixo existe só para permitir arrastar
 * com o mouse no desktop, onde não há gesto de swipe — por isso todo handler
 * ignora ponteiros que não sejam mouse.
 */
export default function DragScroll({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });

  const onPointerDown = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    drag.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
    setIsDragging(true);
    try {
      el.setPointerCapture(e.pointerId);
    } catch {
      // pointer capture can legitimately fail (e.g. already captured elsewhere)
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || !drag.current.active || e.pointerType !== "mouse") return;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.scrollLeft - delta;
  };

  const endDrag = () => {
    drag.current.active = false;
    setIsDragging(false);
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      onClickCapture={(e) => {
        // impede que soltar o arrasto sobre um link dispare a navegação
        if (drag.current.moved) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      className={`scrollbar-none flex overflow-x-auto ${
        isDragging ? "cursor-grabbing select-none" : "cursor-grab"
      } ${className}`}
    >
      {children}
    </div>
  );
}
