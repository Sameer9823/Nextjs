type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Number({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen text-gray-200 flex items-center justify-center text-xl font-semibold">
      Contact ID : {id}
    </div>
  );
}
