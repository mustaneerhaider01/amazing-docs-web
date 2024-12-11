import Editor from "./editor";
import Toolbar from "./toolbar";

type PageProps = {
  params: Promise<{ documentId: string }>;
};

const DocumentIdPage = async ({ params }: PageProps) => {
  await params;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
