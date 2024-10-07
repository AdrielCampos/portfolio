export const Textarea = ({ placeholder }: { placeholder: string }) => {
  return (
    <textarea
      className="bg-background p-3 px-4 w-full rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent min-h-48 max-h-96"
      placeholder={placeholder}
    />
  );
};
