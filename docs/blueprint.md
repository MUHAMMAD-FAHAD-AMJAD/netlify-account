# **App Name**: Maher Zarai Markaz E-Commerce Website

## Core Features:

- Pure White Theme Foundation: Pure white theme (#FFFFFF) with light gray borders (#F0F0F0) and soft shadows (rgba(0,0,0,0.08)). Clean sans-serif fonts (Inter/Roboto) in charcoal gray (#2C2C2C).
- Rounded Design Language: Rounded design elements with border-radius (16px-24px for cards, 12px for buttons, 50px for pill-shaped buttons). Rounded corners on product cards, buttons, input fields, and navigation elements.
- Interactive Shadow System: Subtle shadow (0 4px 12px rgba(0,0,0,0.05)) in default state. Enhanced shadow (0 8px 25px rgba(0,0,0,0.15)) on hover. All interactive elements lift on hover with smooth transitions. Shadow color adapts to primary brand color with transparency.
- Social Media Bar: Dark background (#1A1A1A) social media bar with white icons for Facebook, Instagram, YouTube, TikTok. Left-aligned social links with hover effects.
- Notification Marquee: Scrolling announcement banner with content: 'Free delivery on orders above Rs. 2000 | Heavy rain may delay operations. Thanks for your cooperation.' Background: Agriculture green (#2E7D32). White text with smooth scrolling animation. Height: 40px with centered text.
- Main Header Structure: Main header structure with height: 80px. Pure white background with subtle bottom border. Logo: 'MAHER ZARAI MARKAZ' - left-aligned, bold typography. Center: Horizontal navigation menu. Right: Search icon, User account icon, Shopping cart icon (with count badge).
- Navigation Menu: Navigation menu with Insecticides, Herbicides, Fungicides, Fertilizers, Seeds categories. Insecticides → Contact Insecticides, Systemic Insecticides, Biological Control. Herbicides → Pre-emergence, Post-emergence, Non-selective. Fungicides → Preventive, Curative, Systemic. Fertilizers → NPK, Urea, DAP, Organic. Seeds → Wheat, Rice, Cotton, Vegetables.
- Navigation Interactions: Menu items with clean typography, medium font weight. Hover: Items turn black (#000000) with smooth transition. Dropdown menus: White background, rounded corners, soft shadow. Active state: Selected category highlighted with agriculture green.
- Icon Behaviors: Search icon expands to search bar on click. User account dropdown with login/register options. Cart slide-out panel showing cart contents + 'Recently viewed' section.
- Carousel Structure: Full-width hero section (height: 600px) with 4 rotating slides with automatic progression. Navigation arrows: Circular, white background. Pagination dots: Bottom center, white dots.
- Carousel Navigation: Left/Right arrows: Circular white buttons with black icons. Arrows turn black background on hover. Smooth hover transition (0.3s ease). Arrow positioning: Absolute, center-aligned vertically.
- Slide Content: Carousel slides showcasing premium agricultural tools, fabric/textile agricultural covers, agricultural fragrances/pesticides, and equipment storage/tool organizers.
- Category Grid Layout: 2x3 grid layout (6 categories total) with equal-height cards and rounded corners (24px border-radius). Categories: Shop All, Insecticides, Herbicides, Fungicides, Fertilizers, Seeds.
- Category Cards: High-quality agricultural imagery with overlay gradient for text readability. Category name: Large, bold typography. 'Shop All' button: Prominent, rounded design. Card lifts with enhanced shadow on hover.
- Category Mappings: Category mappings: Shop All → All Agricultural Products. Insecticides → Pest Control Solutions. Herbicides → Weed Control Products. Fungicides → Disease Prevention. Fertilizers → Plant Nutrition. Seeds → Quality Seeds & Seedlings.
- Product Card Design: Product card design with rounded corners (20px border-radius), pure white background, square aspect ratio product image, brand name (small gray text), product title (bold, black text), price (large, prominent display), and star ratings (yellow stars with review count).
- Product Card Interactions: Image carousel with multiple product images and smooth transitions. 'Add to Cart' button is BLACK background by default, changes to WHITE background with black border on hover. Smooth transition animation (0.3s ease). Button text remains visible in both states. Image cycling on hover/click with fade transition.
- Product Status Indicators: 'Sold Out' badge: Light gray, rounded pill shape. 'Add to Cart' button: Rounded pill, black-to-white hover transition. Button inverts colors on hover (black→white, white→black).
- Cart Sidebar: Cart sidebar slides in from right side with two tabs: 'Cart' (active) and 'Recently viewed'. Cart tab has blue underline when active. Recently viewed tab has gray text when inactive.
- Cart Content: Cart content with product thumbnails, product details (name, price, quantity controls), quantity adjusters (plus/minus buttons with black to white on hover), remove links (subtle gray text), free shipping progress bar, and subtotal calculation. Checkout button: Black background, white text, full width. View cart button: White background, black border, outline style.
- Recently Viewed Section: Recently viewed section with list of previously browsed products, small product images with 'Add' buttons. Add buttons: Black circular buttons with plus icon, same hover behavior (black→white transition).
- Chat Button: Chat button fixed bottom-left corner (20px from edges). Design: Black rounded pill button with chat icon. Text: 'Chat' with message icon. Hover: Slight scale increase (1.05x) with enhanced shadow.
- Chat Modal: Chat modal size: 320px width, 500px height. Position: Bottom-left, above chat button. Design: Rounded corners (16px), white background, elegant shadow. Header: Green dot (online status), 'Support Chat' title, close X button.
- Chat Interface: Chat interface with two-tone design (user: agriculture green, agent: light gray). Message bubbles: Rounded corners, proper padding. Input field: Rounded input with send button. Scrollable content: Smooth scrolling message history. Default message: 'Hello! How can I help you with your agricultural needs today?'
- Checkout Page Layout: Checkout page layout with left side (delivery and payment forms) and right side (order summary with product images). Background: White with subtle form sections.
- Form Design: Form design with rounded corners, clean borders on input fields. Clear, properly positioned labels. Sections for delivery info, shipping method, payment options. Primary button: Blue background, rounded, full-width. Secondary actions: Outlined buttons.
- Payment Options: Payment options: PAYFAST/RPAY integration with debit/credit/wallet. Cash on Delivery (COD) alternative payment method. Visual cards: Payment method icons and descriptions. Billing address checkbox for same as shipping.
- Breakpoint Strategy: Responsive design system with breakpoints for Desktop (1200px+), Tablet (768px-1199px), and Mobile (<768px).
- Mobile Adaptations: Mobile adaptations: Header with hamburger menu, simplified navigation. Hero with reduced height, single column content. Product grid with 2 columns on mobile, 3-4 on tablet. Chat widget with responsive sizing and positioning.
- Hover Animations: Hover animations: Product cards lift effect (translateY(-4px)). Buttons color inversion (black↔white) with smooth transition. Navigation arrows background color change to black. Shadows enhanced on hover (deeper, more spread).
- Transition Specifications: Transition specifications: Duration: 0.3s for most interactions. Easing: cubic-bezier(0.4, 0, 0.2, 1) for smooth feel. Transform: Use translate3d for hardware acceleration. Color transitions: Smooth fade between states.
- Loading States: Loading states: Skeleton screens for product loading. Button states: Loading spinners in buttons. Image loading: Placeholder with blur-to-sharp transition.
- Image Optimization: Image optimization: WebP format, responsive images, lazy loading, product galleries preload next/previous images.
- SEO & Accessibility: SEO & accessibility: Semantic HTML, alt text, focus management, screen reader compatibility.
- Agricultural Content Strategy: Agricultural content strategy: Scientifically accurate product categories, technical specifications, usage instructions, safety guidelines, seasonal relevance.

## Style Guidelines:

- Pure white (#FFFFFF) theme foundation.
- Light gray borders (#F0F0F0) for subtle element separation.
- Clean sans-serif fonts (Inter/Roboto) in charcoal gray (#2C2C2C).
- Minimalist aesthetic with abundant white space.
- Smooth transitions for all interactive elements.