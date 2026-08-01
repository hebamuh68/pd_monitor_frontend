export default async function DocsTopicPage({
  params,
}: {
  params: Promise<{ topic: string[] }>;
}) {
  const { topic } = await params;
  return <h1>{topic.join("/")}</h1>;
}
