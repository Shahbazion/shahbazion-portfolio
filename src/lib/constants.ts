export const PERSONAL_INFO = {
  name: "سعید علی شهبازی",
  title: "توسعهدهنده فولاستک",
  description: "برنامهنویس وب و موبایل با تجربه در توسعه اپلیکیشنهای مدرن",
  email: "shahbazion.dev@gmail.com",
  phone: "+98-930-280-9250",
  whatsapp: "https://wa.me/989302809250",
  location: "ایران",
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/shahbazion",
    icon: "github",
    color: "hover:bg-gray-900",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shahbazion",
    icon: "linkedin",
    color: "hover:bg-blue-700",
  },
  {
    name: "Telegram",
    url: "https://t.me/shahbazion",
    icon: "telegram",
    color: "hover:bg-blue-500",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/shahbazion",
    icon: "instagram",
    color: "hover:bg-pink-600",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/989302809250",
    icon: "whatsapp",
    color: "hover:bg-green-500",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "سامانه حرفهای مدیریت پروژه و نمونهکار",
    description: "یک سامانه مدرن و ایمن برای نمایش نمونهکارها و مدیریت پروژهها",
    longDescription: `یک سامانه مدرن و ایمن برای نمایش نمونهکارها و مدیریت پروژهها که با PHP HTML MySQL و JavaScript پیادهسازی شده است. دارای پنل مدیریت کامل برای ایجاد/ویرایش پروژهها مدیریت نظرات ساخت دموی پروژهها کارتهای نمایش پروژهها و صفحات جزئیات مستقل است.`,
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Security", "SEO", "Responsive"],
    image: "/images/dr-rezvani-screenshot.png",
    demoUrl: "https://shahbazion.byethost5.com/",
    githubUrl: "https://github.com/shahbazion",
    featured: true,
  },
  {
    id: 2,
    title: "وبسایت شخصی چندزبانه",
    description: "وبسایت شخصی تماما چندزبانه با سیستم i18n اختصاصی",
    longDescription: "یک وبسایت شخصی تماما چندزبانه که با سیستم اختصاصی i18n ساخته شده است. این پروژه از چهار زبان پشتیبانی میکند محتوای هر زبان را بهصورت داینامیک بارگذاری میکند.",
    tags: ["React", "Next.js", "TypeScript", "i18n", "Tailwind"],
    image: "/images/saeed-alishahbazi-2.png",
    demoUrl: "https://shahbazion.github.io/",
    githubUrl: "https://github.com/shahbazion",
    featured: true,
  },
  {
    id: 3,
    title: "بلاگ تخصصی دکتر رضوانی",
    description: "وبسایت و بلاگ تخصصی دندانپزشکی دامپزشکی",
    longDescription: "پیادهسازی وبسایت و بلاگ تخصصی دندانپزشکی دامپزشکی با سیستم مدیریت محتوا فرم نوبتدهی آنلاین و بهینهسازی کامل SEO",
    tags: ["WordPress", "PHP", "MySQL", "SEO", "Responsive"],
    image: "/images/dr-rezvani-screenshot.png",
    demoUrl: "https://dr-rezvani-vet.ir/blog/",
    featured: true,
  },
  {
    id: 4,
    title: "کلینیک دندانپزشکی دکتر رضوانی",
    description: "وبسایت کلینیک تخصصی دندانپزشکی دامپزشکی",
    longDescription: "وبسایت کلینیک تخصصی دندانپزشکی دامپزشکی با سیستم رزرو نوبت آنلاین گالری نمونه کارها و بخش مقالات تخصصی",
    tags: ["PHP", "JavaScript", "MySQL", "SEO", "Responsive"],
    image: "/images/dr-rezvani-screenshot.png",
    demoUrl: "https://dr-rezvani-vet.ir/",
    featured: true,
  },
];

export const SKILLS = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React/Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "PHP/Laravel", level: 75 },
  { name: "MySQL/MongoDB", level: 85 },
  { name: "HTML/CSS/Tailwind", level: 95 },
  { name: "Git/GitHub", level: 90 },
  { name: "SEO Optimization", level: 80 },
];

export const NAV_ITEMS = [
  { href: "/", label: "خانه" },
  { href: "/projects", label: "پروژهها" },
  { href: "/contact", label: "تماس" },
  { href: "/admin", label: "پنل مدیریت" },
];
