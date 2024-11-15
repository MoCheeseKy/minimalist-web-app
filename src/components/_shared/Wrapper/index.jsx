export default function WrapperComponent({ children, className }) {
  return (
    <>
      <div
        className={`w-[100%] px-4 box-border flex justify-center bg-white overflow-x-hidden ${className}`}
      >
        <div className='w-full max-w-[1180px]'>{children}</div>
      </div>
    </>
  );
}
