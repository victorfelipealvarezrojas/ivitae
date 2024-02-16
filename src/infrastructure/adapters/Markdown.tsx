import Markdown from 'react-markdown';

export const AdapterMarkdown = (text: any) => {
  const markdownContent = typeof text === 'object' && text.text ? text.text : text;
  return (

    <div>
      <Markdown>{markdownContent}</Markdown>
    </div>
  )
}
