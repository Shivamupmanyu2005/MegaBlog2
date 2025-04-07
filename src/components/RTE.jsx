import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className="w-full min-h-[500px] border border-gray-300 rounded-xl shadow-sm p-4 bg-white">
            {label && <label className="inline-block mb-2 pl-1 font-medium">{label}</label>}
            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        tinymceScriptSrc="/tinymce/tinymce.min.js" // Load from local
                        value={value}
                        onEditorChange={onChange}
                        initialValue={defaultValue}
                        init={{
                            height: 500,
                            width: "100%", // Ensures full width
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "help",
                                "wordcount"
                            ],
                            toolbar:
                                "undo redo | blocks | image media | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table link | code preview fullscreen | removeformat | help",
                            content_style:
                                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                    />
                )}
            />
        </div>
    );
}
