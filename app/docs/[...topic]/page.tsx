// export async function generateStaticParams() {
//     const topics = await getTopics()

//     return topics.map((topic)=>({
//         topic : topic.slug,
//     }))
// }


export default async function DocsTopicPage({params}:TopicProps){
  const { topic } = await params;
  return <h1>{topic.join("/")}</h1>;
}
