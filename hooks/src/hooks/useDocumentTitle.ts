// useDocumentTitle.ts
import { useEffect } from 'react';

function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]); // Runs only when title changes
}

export default useDocumentTitle;
