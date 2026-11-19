import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

/**
 * Renders Indonesian physics prose with inline ($...$) and block ($$...$$) KaTeX math.
 */
export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  const renderedHtml = useMemo(() => {
    const segments: string[] = [];
    // Split on $$...$$ first, then $...$
    const blockRegex = /\$\$([\s\S]+?)\$\$/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    const renderInline = (chunk: string): string => {
      const inlineRegex = /\$([^$]+?)\$/g;
      let iLast = 0;
      let iMatch: RegExpExecArray | null;
      let out = '';

      while ((iMatch = inlineRegex.exec(chunk)) !== null) {
        if (iMatch.index > iLast) {
          out += escapeHtml(chunk.slice(iLast, iMatch.index));
        }
        try {
          out += katex.renderToString(iMatch[1], {
            displayMode: false,
            throwOnError: false,
            strict: false,
          });
        } catch {
          out += escapeHtml(iMatch[1]);
        }
        iLast = iMatch.index + iMatch[0].length;
      }
      if (iLast < chunk.length) {
        out += escapeHtml(chunk.slice(iLast));
      }
      return out;
    };

    while ((match = blockRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        segments.push(renderInline(text.slice(lastIndex, match.index)));
      }
      try {
        segments.push(
          `<span class="block my-2 overflow-x-auto py-1">${katex.renderToString(match[1], {
            displayMode: true,
            throwOnError: false,
            strict: false,
          })}</span>`
        );
      } catch {
        segments.push(escapeHtml(match[1]));
      }
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      segments.push(renderInline(text.slice(lastIndex)));
    }

    return segments.join('');
  }, [text]);

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

interface MathBlockProps {
  latex: string;
  className?: string;
}

export const MathBlock: React.FC<MathBlockProps> = ({ latex, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode: true,
        throwOnError: false,
        strict: false,
      });
    } catch {
      return escapeHtml(latex);
    }
  }, [latex]);

  return (
    <div
      className={`overflow-x-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
