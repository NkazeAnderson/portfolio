function Button({ text, action }: { text: string; action?: () => void }) {
  return (
    <button
      className="px-[32px] py-[16px] gradientBGPrimary rounded-[16px]"
      onClick={() => {
        action && action();
      }}
    >
      <p className=" font-bold"> {text}</p>
    </button>
  );
}

export default Button;
