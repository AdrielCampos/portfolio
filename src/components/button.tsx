export const Button = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: boolean;
}) => {
  return (
    <button
      className={`flex h-min gap-2 bg-transparent border border-accent text-accent text-sm font-semibold uppercase px-7 py-3 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground ${
        icon &&
        "!px-0 !py-0 items-center justify-center aspect-square w-10 h-10"
      }`}
    >
      {children}
    </button>
  );
};
