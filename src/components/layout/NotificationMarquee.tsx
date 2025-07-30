export default function NotificationMarquee() {
  const content = 'Free delivery on orders above Rs. 2000 | Heavy rain may delay operations. Thanks for your cooperation.';
  return (
    <div className="bg-primary text-primary-foreground h-10 flex items-center overflow-hidden">
      <div className="w-full flex whitespace-nowrap animate-marquee">
        <span className="mx-12 text-sm font-medium">{content}</span>
        <span className="mx-12 text-sm font-medium">{content}</span>
        <span className="mx-12 text-sm font-medium">{content}</span>
        <span className="mx-12 text-sm font-medium">{content}</span>
      </div>
    </div>
  );
}
