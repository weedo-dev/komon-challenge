"use  client"

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children } : {
    children: React.ReactNode;
  }) {
    const elRef = useRef<HTMLElement | null>(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot: HTMLElement | null = document.getElementById("modal");
  
    if (modalRoot) {
      modalRoot.appendChild(elRef.current!);
  
      return () => {
        if (elRef.current) {
          modalRoot.removeChild(elRef.current);
        }
      };
    }
  
    console.log(modalRoot, " is undefined");
  }, []);
  

  return createPortal(<div>{children}</div>, elRef.current);
}
