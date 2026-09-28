"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib";

export type ToastMessage = {
  id: number;
  title: string;
  description: string;
  variant: "default" | "destructive";
};

type ToastProps = {
  toast: ToastMessage | null;
  closeLabel: string;
  onClose: () => void;
};

/** How long a toast stays up, as Radix's default. */
const DURATION_MS = 5000;
/** The exit animation's length; see `.toast-out` in globals.css. */
const EXIT_MS = 150;

/**
 * The approved site's shadcn toast, class for class: one at a time, bottom
 * right from `sm` up and along the top on phones, gone after five seconds.
 */
export function Toast({ toast, closeLabel, onClose }: ToastProps) {
  const [leaving, setLeaving] = useState(false);
  const [shown, setShown] = useState(toast?.id);

  // A new toast replaces the old one and starts fresh — the same adjustment
  // React's docs recommend over an effect for state derived from a prop.
  if (toast?.id !== shown) {
    setShown(toast?.id);
    setLeaving(false);
  }

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setLeaving(true), DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(onClose, EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [leaving, onClose]);

  if (!toast) return null;

  const destructive = toast.variant === "destructive";

  // Portalled to <body>: the form sits inside an animated card, and a
  // transformed ancestor would pin a `fixed` element to itself, not the screen.
  // A toast only ever exists after a submit, so `document` is always there.
  return createPortal(
    <ol className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      <li
        role={destructive ? "alert" : "status"}
        className={cn(
          "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
          destructive
            ? "destructive border-destructive bg-destructive text-destructive-foreground"
            : "bg-background text-foreground",
          leaving ? "toast-out" : "toast-in",
        )}
      >
        <div className="grid gap-1">
          <div className="text-sm font-semibold">{toast.title}</div>
          <div className="text-sm opacity-90">{toast.description}</div>
        </div>
        <button
          type="button"
          aria-label={closeLabel}
          onClick={() => setLeaving(true)}
          className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600"
        >
          <X aria-hidden className="h-4 w-4" />
        </button>
      </li>
    </ol>,
    document.body,
  );
}
