// Simple Loading Component using DaisyUI spinner
const Loading = ({ name, loading = true }) => {
  if (loading) {
    return (
      <div className="flex items-center gap-2 text-error">
        <span className="loading loading-spinner text-error"></span>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <span className="font-semibold text-gray-900 dark:text-gray-100">
      {name || "—"}
    </span>
  );
};

export default Loading;
