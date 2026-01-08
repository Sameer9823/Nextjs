import React from 'react'

type ReviewPageProps = {
    params: {
        id: string;
        reviewId: string;
    };
}


async function  Review({params}: ReviewPageProps) {
  const { id, reviewId } = await params;
  return (
    <div className="min-h-screen text-gray-200 flex items-center justify-center text-xl font-semibold">
      Review {reviewId} for Product {id}
    </div>
  )
}

export default Review