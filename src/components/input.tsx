export const Input = ({
  placeholder,
  value,
  setValue,
  type = "text",
  error,
}: {
  type?: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
}) => {
  return (
    <div className="flex flex-1 flex-col gap-1 min-w-36 h-fit">
      <input
        className={`bg-background p-3 px-4 flex-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent ${
          error && "border-2 border-red-500"
        }`}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
