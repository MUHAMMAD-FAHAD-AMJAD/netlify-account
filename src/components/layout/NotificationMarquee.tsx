
export default function NotificationMarquee() {
  const notifications = [
    "Heavy rain may delay operations. Thanks for your cooperation.",
    "Free Shipping on all orders above Rs. 2500",
    "Eid Sale! Get 20% off on all products."
  ];

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="h-10 flex items-center overflow-hidden">
            <div className="w-full flex whitespace-nowrap animate-marquee">
              {notifications.map((notification, index) => (
                <span key={index} className="mx-12 text-sm font-medium">
                  {notification}
                </span>
              ))}
               {notifications.map((notification, index) => (
                <span key={`duplicate-${index}`} className="mx-12 text-sm font-medium">
                  {notification}
                </span>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
