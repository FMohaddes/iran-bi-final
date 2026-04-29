interface Section {
    type: 'heading' | 'paragraph' | 'list' | 'checklist' | 'highlight' | 'stats';
    content: string | string[];
    level?: number;
    icon?: string;
}

interface BlogContentProps {
    content: string;
}

export function BlogContent({content}: BlogContentProps) {
}