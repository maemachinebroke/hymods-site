import { HomeLayout } from "@/components/layout/home";
import { baseOptions } from "@/lib/layout.shared";
import { ViewTransition } from "react";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <ViewTransition update="none">
      <HomeLayout {...baseOptions()}>{children}</HomeLayout>
    </ViewTransition>
  );
}
