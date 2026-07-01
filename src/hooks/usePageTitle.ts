import { useEffect } from "react";

/**
 * Sets document.title to a descriptive, page-specific value for screen readers
 * and browser tabs. Restores the previous title on unmount.
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} - NORCAT Innovation`;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
