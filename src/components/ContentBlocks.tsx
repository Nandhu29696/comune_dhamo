import type { ContentBlock } from '@/types';

/** Renders the structured long-form copy used by product pages and blog articles. */
export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return <h2 key={i} className="font-bold" dangerouslySetInnerHTML={{ __html: b.html ?? '' }} />;
          case 'h3':
            return <h3 key={i} className="font-bold" dangerouslySetInnerHTML={{ __html: b.html ?? '' }} />;
          case 'ol':
            return (
              <ol key={i}>
                {b.items?.map((it, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </ol>
            );
          case 'ul':
            return (
              <ul key={i}>
                {b.items?.map((it, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </ul>
            );
          case 'table':
            return (
              <table key={i} className="mb-4">
                <tbody>
                  {b.rows?.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, c) => (
                        <td key={c}>
                          <p className="mb-0" dangerouslySetInnerHTML={{ __html: cell }} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          default:
            return <p key={i} dangerouslySetInnerHTML={{ __html: b.html ?? '' }} />;
        }
      })}
    </>
  );
}
