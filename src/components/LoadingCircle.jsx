const LoadingCircle = () => {
  return (
    <div className="flex flex-1 items-center justify-center bg-slate-200/80 z-50">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingCircle;
