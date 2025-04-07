import React from "react";
import { Controller } from "react-hook-form";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className="w-full min-h-[300px] border border-gray-300 rounded-xl shadow-sm p-4 bg-white">
            {label && (
                <label className="inline-block mb-2 pl-1 font-medium">
                    {label}
                </label>
            )}

            <Controller
                name={name || "content"}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => {
                    const { quill, quillRef } = useQuill({
                        theme: "snow",
                        modules: {
                            toolbar: [
                                [{ header: [1, 2, false] }],
                                ["bold", "italic", "underline"],
                                ["image", "code-block"],
                            ],
                        },
                    });

                    // Update value on text change
                    React.useEffect(() => {
                        if (quill) {
                            quill.on("text-change", () => {
                                onChange(quill.root.innerHTML);
                            });
                        }
                    }, [quill]);

                    // Set default value
                    React.useEffect(() => {
                        if (quill && defaultValue) {
                            quill.root.innerHTML = defaultValue;
                        }
                    }, [quill]);

                    return <div ref={quillRef} />;
                }}
            />
        </div>
    );
}
