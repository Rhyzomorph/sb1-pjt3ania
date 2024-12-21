import React from 'react';
import { Folder, FileCode } from 'lucide-react';
import { useProjectFiles } from '../../hooks/useProjectFiles';

interface FileTreeProps {
  onSelect: (path: string) => void;
}

export function FileTree({ onSelect }: FileTreeProps) {
  const { files, loading } = useProjectFiles();

  if (loading) {
    return <div className="text-gray-400">Loading project structure...</div>;
  }

  return (
    <div className="w-64 border-r border-gray-700/30 overflow-y-auto pr-4">
      <div className="space-y-2">
        {files.map((file) => (
          <div
            key={file.path}
            className="flex items-center gap-2 cursor-pointer hover:text-emerald-400 transition-colors"
            onClick={() => onSelect(file.path)}
          >
            {file.type === 'directory' ? (
              <Folder className="w-4 h-4" />
            ) : (
              <FileCode className="w-4 h-4" />
            )}
            <span className="text-sm truncate">{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}