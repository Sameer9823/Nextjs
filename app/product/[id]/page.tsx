type PageProps = {
  params: {
    id: string;
  };
};

export default async function  ProductPage({ params }: PageProps) {
  const { id } = await params;
  return (
    <div className="min-h-screen text-gray-200 flex items-center justify-center text-xl font-semibold">
      Product ID : {id}
    </div>
  );
}
