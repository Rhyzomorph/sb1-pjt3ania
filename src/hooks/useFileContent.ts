import { useState, useEffect } from 'react';

export function useFileContent(filePath: string | null) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!filePath) {
      setContent('');
      return;
    }

    setLoading(true);
    // In a real implementation, this would fetch the file contents
    // For demo purposes, we'll show a placeholder
    setContent(`// File: ${filePath}\n\n// Content would be displayed here`);
    setLoading(false);
  }, [filePath]);

  return { content, loading };
}