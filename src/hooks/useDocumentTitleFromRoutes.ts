import { useEffect } from "react";
import { useMatches } from "react-router-dom";

type HandleWithTitle = {
  title?: string;
};

const useDocumentTitleFromRoutes = (): void => {
  const matches = useMatches();

  useEffect(() => {
    const matchWithTitle = matches.find(
      (m) => (m.handle as HandleWithTitle)?.title,
    );

    if (matchWithTitle) {
      document.title = (matchWithTitle.handle as HandleWithTitle).title!;
    }
  }, [matches]);
};

export { useDocumentTitleFromRoutes };
