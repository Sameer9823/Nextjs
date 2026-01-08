import React from 'react'

type DocPageProps = {
    params: {
        slug: string[];
    };
}

async function Doc({ params }: DocPageProps) {
  const { slug } = await params;
  return (
    <div className="min-h-screen text-gray-200 flex items-center justify-center text-xl font-semibold flex-col">
      <h1 className="text-3xl font-bold">Welcome to the documentation</h1>
      
      <div className="mt-4">
        Path:
      {slug?.join('/')}
      </div>
    </div>
  )
}

export default Doc