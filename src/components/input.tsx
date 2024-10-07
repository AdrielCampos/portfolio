export const Input = ({ placeholder }: { placeholder: string }) => {
  return (
    <input
      className="bg-background p-3 px-4 flex-1 min-w-36 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
      type="text"
      placeholder={placeholder}
    />
  );
};
