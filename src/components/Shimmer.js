const LoadResCard = () => {
  return (
    <div className="m-4 p-2 bg-slate-200 w-[220px] rounded-2xl">
      <img
        className="m-auto w-[200px] h-[200px] rounded-2xl"
        src="https://static.vecteezy.com/system/resources/thumbnails/005/513/590/small/catering-quality-food-design-premium-logo-vector.jpg"
      />
      <h2 className="text-xl py-2">Getting Restaurant Details</h2>
    </div>
  );
};

export const ResCardShimmer = () => {
  return (
    <>
      <div className="flex flex-wrap" data-testid="shimmer">
        {[1, 2, 3, 4, 5].map((index) => {
          return <LoadResCard key={index} />;
        })}
      </div>
    </>
  );
};

export const LoadShimmer = () => {
  return (
    <div className="text-3xl text-center">
      <h1>Loading Details</h1>
    </div>
  );
};
