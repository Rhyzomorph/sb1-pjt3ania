import React from 'react';
import { Code2 } from 'lucide-react';
import { FileTree } from './FileTree';
import { FileContent } from './FileContent';

export function CodePanel() {
  const [selectedFile, setSelectedFile] = React.useState<string | null>(null);

  return (
    <div className="glassmorphism rounded-lg p-4 text-white h-[calc(100vh-2rem)]">
      <div className="flex items-center gap-2 mb-4">
        <Code2 className="w-6 h-6 text-emerald-400" />
        <h2 className="text-lg font-bold">System Architecture</h2>
      </div>
      <div className="flex h-[calc(100%-3rem)] gap-4">
        <FileTree onSelect={setSelectedFile} />
        <FileContent filePath={selectedFile} />
      </div>
    </div>
  );
}