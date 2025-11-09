import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold">DocuSense</h1>
      <p className="mt-2">Internal PDF Q&A — Day 1 scaffold</p>
      <ul className="mt-6 list-disc pl-6">
        <li>Upload component coming Day 2</li>
        <li>API base: <code>http://localhost:8000</code></li>
      </ul>
    </main>
  );
}
