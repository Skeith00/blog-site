"use client";

import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

interface RichTextProps {
    content: SerializedEditorState;
}

export default function RichTextComponent({ content }: RichTextProps) {
    if (!content) return null;

    return (
        <div className="prose prose-lg max-w-none dark:prose-invert prose-a:text-blue-600">
        <RichText data={content} />
    </div>
);
}
