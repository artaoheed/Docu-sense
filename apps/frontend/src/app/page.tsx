import PdfUpload from "../components/PdfUpload";

export default function Home() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold">DocuSense</h1>
      <p className="mt-2 text-gray-600">Upload a PDF and ask questions about it</p>

      {/* 👇 This will render your drag-and-drop box */}
      <PdfUpload />
    </main>
  );
}
