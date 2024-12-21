import { useState, useEffect } from 'react';

interface ProjectFile {
  name: string;
  path: string;
  type: 'file' | 'directory';
}

export function useProjectFiles() {
  const [files, setFiles] = useState<ProjectFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would fetch the project structure
    // For demo purposes, we'll show some key files
    setFiles([
      { name: 'src', path: 'src', type: 'directory' },
      { name: 'components', path: 'src/components', type: 'directory' },
      { name: 'hooks', path: 'src/hooks', type: 'directory' },
      { name: 'utils', path: 'src/utils', type: 'directory' },
      { name: 'services', path: 'src/services', type: 'directory' },
      { name: 'App.tsx', path: 'src/App.tsx', type: 'file' },
      { name: 'main.tsx', path: 'src/main.tsx', type: 'file' },
    ]);
    setLoading(false);
  }, []);

  return { files, loading };
}