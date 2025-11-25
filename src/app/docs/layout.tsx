import { DocsLayout } from "@/components/layout/docs";
import { source } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";
import { DocsBanner } from "./docs-banner"; // Adjust path as needed
import { ViewTransition } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition update="none">
      <div className="flex min-h-screen flex-col">
        <DocsBanner />
        <DocsLayout
          tree={source.pageTree}
          {...baseOptions()}
          githubUrl="https://github.com/HytaleModding/site"
        >
          {children}
        </DocsLayout>
      </div>
    </ViewTransition>
  );
}
