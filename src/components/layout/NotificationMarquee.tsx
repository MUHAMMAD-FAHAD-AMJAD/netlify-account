export default function NotificationMarquee() {
  const content = 'Free delivery on orders above Rs. 2000 | Heavy rain may delay operations. Thanks for your cooperation.';
  return (
    <div className="bg-[#1A1A1A] text-white h-10 flex items-center overflow-hidden">
      <div className="w-full flex whitespace-nowrap animate-marquee">
        <span className="mx-12 text-sm font-medium flex items-center gap-4">
            <span className="text-primary font-bold tracking-wider">MAHER ZARAI MARKAZ</span>
            <span className="opacity-75">{content}</span>
        </span>
         <span className="mx-12 text-sm font-medium flex items-center gap-4">
            <span className="text-primary font-bold tracking-wider">MAHER ZARAI MARKAZ</span>
            <span className="opacity-75">{content}</span>
        </span>
         <span className="mx-12 text-sm font-medium flex items-center gap-4">
            <span className="text-primary font-bold tracking-wider">MAHER ZARAI MARKAZ</span>
            <span className="opacity-75">{content}</span>
        </span>
         <span className="mx-12 text-sm font-medium flex items-center gap-4">
            <span className="text-primary font-bold tracking-wider">MAHER ZARAI MARKAZ</span>
            <span className="opacity-75">{content}</span>
        </span>
      </div>
    </div>
  );
}
