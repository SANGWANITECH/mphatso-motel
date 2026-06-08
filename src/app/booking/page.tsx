import { Suspense } from "react";
import BookingContent from "./BookingContent";

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
            <p className="font-body text-sm text-on-surface-variant tracking-wider">
              Loading...
            </p>
          </div>
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}