export const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className={`${className} px-12 w-full max-w-screen-xl`}>
        {children}
      </div>
    </div>
  );
};
