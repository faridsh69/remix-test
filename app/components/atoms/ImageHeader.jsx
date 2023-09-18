export const ImageHeader = () => {
  return (
    <div className="absolute inset-0">
      <img
        className="h-full w-full object-cover"
        src="https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg"
        alt="Sonic Youth On Stage"
      />
      <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
    </div>
  );
};
