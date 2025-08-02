
export default function NotificationMarquee() {
  const content = 'MAHER ZARAI MARKAZ';
  return (
    <div className="p-2 bg-white">
        <div className="bg-[#1A1A1A] text-white h-10 flex items-center overflow-hidden rounded-xl">
            <div className="w-full flex whitespace-nowrap animate-marquee">
                <span className="mx-12 text-sm font-medium flex items-center gap-4">
                    <span className="text-primary font-bold tracking-wider">{content}</span>
                </span>
                <span className="mx-12 text-sm font-medium flex items-center gap-4">
                    <span className="text-primary font-bold tracking-wider">{content}</span>
                </span>
                <span className="mx-12 text-sm font-medium flex items-center gap-4">
                    <span className="text-primary font-bold tracking-wider">{content}</span>
                </span>
                <span className="mx-12 text-sm font-medium flex items-center gap-4">
                    <span className="text-primary font-bold tracking-wider">{content}</span>
                </span>
                 <span className="mx-12 text-sm font-medium flex items-center gap-4">
                    <span className="text-primary font-bold tracking-wider">{content}</span>
                </span>
                 <span className="mx-12 text-sm font-medium flex items-center gap-4">
                    <span className="text-primary font-bold tracking-wider">{content}</span>
                </span>
            </div>
        </div>
    </div>
  );
}
