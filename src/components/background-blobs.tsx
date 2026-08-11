export function BackgroundBlobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(14,90,93,0.16),transparent_65%)] blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(224,138,60,0.16),transparent_65%)] blur-3xl" />
      <div className="absolute -bottom-48 left-1/4 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(14,90,93,0.12),transparent_65%)] blur-3xl" />
      <div className="absolute top-2/3 left-1/2 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(224,138,60,0.1),transparent_65%)] blur-3xl" />
    </div>
  );
}
