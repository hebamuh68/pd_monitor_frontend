import { Sidebar } from "@/components/sidebar"


export default function DocsTopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Sidebar>{children}</Sidebar>;
}
