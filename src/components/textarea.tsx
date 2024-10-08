export const Textarea = ({
  placeholder,
  value,
  setValue,
  error,
}: {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
}) => {
  return (
    <div className="flex flex-1 flex-col gap-1 w-full">
      <textarea
        className={`bg-background p-3 px-4 w-full rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent min-h-48 max-h-96 ${
          error && "border-2 border-red-500"
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
