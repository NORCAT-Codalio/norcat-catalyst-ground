import { Fragment } from 'react';

// Keep existing markdown links intact while linking addresses in article copy.
export function renderInlineMarkdown(text: string): React.ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|(?:https?:\/\/|www\.)[^\s<>]+|\b(?:[a-z0-9-]+\.)+(?:org|com|ca|net)\b(?:\/[^\s<>]*)?)/gi);
  return parts.map((part, i) => {
    const markdownLink = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i} className="font-bold">{renderInlineMarkdown(bold[1])}</strong>;

    const isAddress = /^(?:https?:\/\/|www\.|(?:[a-z0-9-]+\.)+(?:org|com|ca|net)\b)/i.test(part);
    if (!markdownLink && !isAddress) return <Fragment key={i}>{part}</Fragment>;

    const label = markdownLink ? markdownLink[1] : part.replace(/[.,;:!?]+$/, '');
    const rawUrl = markdownLink ? markdownLink[2] : label;
    const url = /^(?:https?:\/\/|\/)/i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;
    if (!/^(?:https?:\/\/|\/(?!\/))/i.test(url)) return <Fragment key={i}>{part}</Fragment>;
    const external = /^https?:\/\//i.test(url);
    return (
      <Fragment key={i}>
        <a href={url} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
          className="text-primary underline underline-offset-2 hover:text-foreground transition-colors break-words">
          {label}
        </a>
        {!markdownLink && part.slice(label.length)}
      </Fragment>
    );
  });
}