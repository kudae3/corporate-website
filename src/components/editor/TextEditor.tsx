"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import MenuBar from "./Menu";

interface TextEditorProps {
  value?: string;
  onChange?: (value: any) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export default function TextEditor({
  value = "",
  onChange,
  placeholder = "Start typing...",
  required,
  disabled,
}: TextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-3",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-3",
          },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: value,
    editable: !disabled,
    editorProps: {
      attributes: {
        class:
          "min-h-[156px] border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
        placeholder: placeholder,
        "data-required": required ? "true" : "false",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange?.(html);
    },
  });

  // Update editor content when value prop changes
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [editor, value]);

  return (
    <div className="w-full">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
