import React from 'react';
import { useFileContent } from '../../hooks/useFileContent';

interface FileContentProps {
  filePath: string | null;
}

export function FileContent({ filePath }: FileContentProps) {
  const { content, loading } = useFileContent(filePath);

  if (!filePath) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Select a file to view its contents
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Loading file contents...
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <pre className="text-sm">
        <code className="font-mono">{content}</code>
      </pre>
    </div>
  );
}