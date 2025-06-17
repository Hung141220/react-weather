import { useDocumentTitleFromRoutes } from "@/hooks/useDocumentTitleFromRoutes";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  useDocumentTitleFromRoutes();
  return (
    <>
      <Outlet />
    </>
  );
}
