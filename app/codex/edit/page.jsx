"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

function EditContent() {
  const searchParams = useSearchParams();
  const incomingCode = searchParams.get("code");

  const defaultCode = `<!-- 1) Write HTML here -->
<!-- 2) Add CSS inside <style> -->
<!-- 3) Add JS inside <script> -->

<h1>Hello Codex</h1>
`;

  const [code, setCode] = useState(incomingCode || defaultCode);
  const [result, setResult] = useState(incomingCode || defaultCode);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const { loader } = await import("@monaco-editor/react");
      const monaco = await loader.init();
      if (!mounted) return;

      monaco.editor.defineTheme("codex-custom", {
        base: "vs-dark",
        inherit: true,
        rules: [],
        colors: {
          "editor.background": "#1b1c1d",
        },
      });
    })();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (incomingCode) {
      setCode(incomingCode);
      setResult(incomingCode);
    }
  }, [incomingCode]);

  return (
    <div className="h-screen flex flex-col  bg-[#0b0b10]   ">
      <div className="h-12  flex codex_e  items-center px-6 border-b border-white/10  text-white">
        <span className="font-semibold ">Codex Editor</span>
      </div>

      <div className="flex w-full h-full edit_codex ">
        <div className="w-1/2 relative">
          <div className="absolute top-3 right-15 z-50 flex gap-5">
            <Link
              href="/codex"
              className="bg-red-700  whitespace-nowrap  edit_b hover:scale-105 transition-all duration-700 rounded text-white px-[3%] py-1"
            >
              Back Codex
            </Link>
            <button
              onClick={() => setResult(code)}
              className="bg-green-600 edit_b_1 whitespace-nowrap hover:scale-105 transition-all duration-700 text-white px-[5%] py-1 rounded opacity-90 hover:opacity-100"
            >
              Run ▶
            </button>
          </div>

          <Editor
            height="100%"
            defaultLanguage="html"
            theme="codex-custom"
            value={code}
            onChange={(v) => setCode(v ?? "")}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: "Fira Code, monospace",
              automaticLayout: true,
              scrollBeyondLastLine: false,
            }}
          />
        </div>

        <div className="w-1/2 bg-white border-l">
          <iframe
            className="w-full h-full"
            srcDoc={result}
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
}

export default function EditPage() {
  return (
    <Suspense fallback={<div className="text-white p-6">Loading editor…</div>}>
      <EditContent />
    </Suspense>
  );
}
