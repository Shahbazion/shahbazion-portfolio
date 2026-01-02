// انواع داده‌ها برای TypeScript
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  ariaLabel: Record<Locale, string>;
}

export interface Project {
  id: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  longDescription: Record<Locale, string>;
  tags: string[];
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  year: number;
  category: 'web' | 'mobile' | 'fullstack' | 'open-source';
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tool';
}

export interface NavItem {
  href: string;
  label: Record<Locale, string>;
  icon?: string;
  external?: boolean;
}

export interface PersonalInfo {
  name: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  bio: Record<Locale, string>;
  email: string;
  phone: string;
  whatsapp: string;
  location: Record<Locale, string>;
  address: Record<Locale, string>;
  availability: boolean;
  cvUrl: string;
}

export type Locale = 'fa' | 'en' | 'fr' | 'ar';

// اطلاعات شخصی چندزبانه
export const PERSONAL_INFO: PersonalInfo = {
  name: {
    fa: 'سعید - علی شهبازی',
    en: 'Saeid - Ali Shahbazi',
    fr: 'Saeid - Ali Shahbazi',
    ar: 'سعید - علي شهبازی'
  },
  title: {
    fa: 'توسعه‌دهنده فول‌استک و مهندس نرم‌افزار',
    en: 'Full Stack Developer & Software Engineer',
    fr: 'Développeur Full Stack & Ingénieur Logiciel',
    ar: 'مطور ستاك كامل ومهندس برمجيات'
  },
  description: {
    fa: 'برنامه‌نویس وب و موبایل با تجربه در توسعه اپلیکیشن‌های مدرن و مقیاس‌پذیر',
    en: 'Web and mobile developer with experience in building modern and scalable applications',
    fr: 'Développeur web et mobile avec expérience dans la création d\'applications modernes et évolutives',
    ar: 'مطور ويب وجوال ذو خبرة في بناء تطبيقات حديثة وقابلة للتوسع'
  },
  bio: {
    fa: 'مهندس نرم‌افزار با بیش از ۵ سال تجربه در توسعه وب و موبایل. متخصص در ساخت اپلیکیشن‌های مدرن با React، Next.js و Node.js. علاقه‌مند به یادگیری مداوم و حل مسائل پیچیده.',
    en: 'Software engineer with over 5 years of experience in web and mobile development. Specialist in building modern applications with React, Next.js, and Node.js. Passionate about continuous learning and solving complex problems.',
    fr: 'Ingénieur logiciel avec plus de 5 ans d\'expérience dans le développement web et mobile. Spécialiste dans la création d\'applications modernes avec React, Next.js et Node.js. Passionné par l\'apprentissage continu et la résolution de problèmes complexes.',
    ar: 'مهندس برمجيات يمتلك أكثر من 5 سنوات خبرة في تطوير الويب والجوال. متخصص في بناء تطبيقات حديثة باستخدام React وNext.js وNode.js. شغوف بالتعلم المستمر وحل المشكلات المعقدة.'
  },
  email: 'shahbazion.dev@gmail.com',
  phone: '+98-930-280-9250',
  whatsapp: 'https://wa.me/989302809250',
  location: {
    fa: 'ایران',
    en: 'Iran',
    fr: 'Iran',
    ar: 'إيران'
  },
  address: {
    fa: 'ایران، تهران',
    en: 'Tehran, Iran',
    fr: 'Téhéran, Iran',
    ar: 'طهران، إيران'
  },
  availability: true,
  cvUrl: '/cv/saeid-ali-shahbazi-cv.pdf'
};

// لینک‌های اجتماعی چندزبانه
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/shahbazion',
    icon: 'github',
    color: 'hover:bg-gray-900 dark:hover:bg-gray-700',
    ariaLabel: {
      fa: 'صفحه گیت‌هاب سعید علی شهبازی',
      en: 'Saeid Ali Shahbazi GitHub profile',
      fr: 'Profil GitHub de Saeid Ali Shahbazi',
      ar: 'ملف سعيد علي شهبازي على جيت هاب'
    }
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shahbazion',
    icon: 'linkedin',
    color: 'hover:bg-blue-700 dark:hover:bg-blue-600',
    ariaLabel: {
      fa: 'صفحه لینکدین سعید علی شهبازی',
      en: 'Saeid Ali Shahbazi LinkedIn profile',
      fr: 'Profil LinkedIn de Saeid Ali Shahbazi',
      ar: 'ملف سعيد علي شهبازي على لينكد إن'
    }
  },
  {
    name: 'Telegram',
    url: 'https://t.me/shahbazion',
    icon: 'send',
    color: 'hover:bg-blue-500 dark:hover:bg-blue-400',
    ariaLabel: {
      fa: 'کانال تلگرام سعید علی شهبازی',
      en: 'Saeid Ali Shahbazi Telegram channel',
      fr: 'Chaîne Telegram de Saeid Ali Shahbazi',
      ar: 'قناة سعيد علي شهبازي على تيليجرام'
    }
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/shahbazion',
    icon: 'instagram',
    color: 'hover:bg-pink-600 dark:hover:bg-pink-500',
    ariaLabel: {
      fa: 'صفحه اینستاگرام سعید علی شهبازی',
      en: 'Saeid Ali Shahbazi Instagram profile',
      fr: 'Profil Instagram de Saeid Ali Shahbazi',
      ar: 'ملف سعيد علي شهبازي على إنستغرام'
    }
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/989302809250',
    icon: 'message-circle',
    color: 'hover:bg-green-500 dark:hover:bg-green-400',
    ariaLabel: {
      fa: 'ارسال پیام از طریق واتس‌اپ',
      en: 'Send message via WhatsApp',
      fr: 'Envoyer un message via WhatsApp',
      ar: 'إرسال رسالة عبر واتساب'
    }
  },
  {
    name: 'Email',
    url: 'mailto:shahbazion.dev@gmail.com',
    icon: 'mail',
    color: 'hover:bg-red-500 dark:hover:bg-red-400',
    ariaLabel: {
      fa: 'ارسال ایمیل',
      en: 'Send email',
      fr: 'Envoyer un email',
      ar: 'إرسال بريد إلكتروني'
    }
  }
];

// پروژه‌های چندزبانه
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: {
      fa: 'سامانه حرفه‌ای مدیریت پروژه و نمونه‌کار',
      en: 'Professional Project & Portfolio Management System',
      fr: 'Système Professionnel de Gestion de Projets et Portefeuille',
      ar: 'نظام احترافي لإدارة المشاريع والمحفظة'
    },
    description: {
      fa: 'یک سامانه مدرن و ایمن برای نمایش نمونه‌کارها و مدیریت پروژه‌ها',
      en: 'A modern and secure system for showcasing portfolios and managing projects',
      fr: 'Un système moderne et sécurisé pour présenter des portfolios et gérer des projets',
      ar: 'نظام حديث وآمن لعرض المحافظ وإدارة المشاريع'
    },
    longDescription: {
      fa: 'یک سامانه مدرن و ایمن برای نمایش نمونه‌کارها و مدیریت پروژه‌ها که با PHP، HTML، MySQL و JavaScript پیاده‌سازی شده است. دارای پنل مدیریت کامل برای ایجاد/ویرایش پروژه‌ها، مدیریت نظرات، ساخت دموی پروژه‌ها، کارت‌های نمایش پروژه‌ها و صفحات جزئیات مستقل است.',
      en: 'A modern and secure system for showcasing portfolios and managing projects, implemented with PHP, HTML, MySQL, and JavaScript. Features a complete admin panel for creating/editing projects, managing comments, building project demos, project display cards, and independent detail pages.',
      fr: 'Un système moderne et sécurisé pour présenter des portfolios et gérer des projets, implémenté avec PHP, HTML, MySQL et JavaScript. Comprend un panneau d\'administration complet pour créer/modifier des projets, gérer les commentaires, créer des démos de projets, des cartes d\'affichage de projets et des pages de détails indépendantes.',
      ar: 'نظام حديث وآمن لعرض المحافظ وإدارة المشاريع، تم تنفيذه باستخدام PHP وHTML وMySQL وJavaScript. يتميز بلوحة إدارة كاملة لإنشاء/تحرير المشاريع، وإدارة التعليقات، وبناء عروض توضيحية للمشاريع، وبطاقات عرض المشاريع، وصفحات تفاصيل مستقلة.'
    },
    tags: ['مدیریت پروژه', 'نمونه‌کار', 'پنل مدیریت', 'دمو'],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Security', 'SEO', 'Responsive'],
    image: '/images/projects/project-management-system.jpg',
    demoUrl: 'https://shahbazion.byethost5.com/',
    githubUrl: 'https://github.com/shahbazion/project-management-system',
    featured: true,
    status: 'completed',
    year: 2023,
    category: 'web'
  },
  {
    id: 2,
    title: {
      fa: 'وبسایت شخصی چندزبانه',
      en: 'Multilingual Personal Website',
      fr: 'Site Web Personnel Multilingue',
      ar: 'موقع ويب شخصي متعدد اللغات'
    },
    description: {
      fa: 'وبسایت شخصی تماماً چندزبانه با سیستم i18n اختصاصی',
      en: 'Fully multilingual personal website with custom i18n system',
      fr: 'Site web personnel entièrement multilingue avec système i18n personnalisé',
      ar: 'موقع ويب شخصي متعدد اللغات بالكامل بنظام i18n مخصص'
    },
    longDescription: {
      fa: 'یک وبسایت شخصی تماماً چندزبانه که با سیستم اختصاصی i18n ساخته شده است. این پروژه از چهار زبان پشتیبانی می‌کند و محتوای هر زبان را به صورت داینامیک بارگذاری می‌کند.',
      en: 'A fully multilingual personal website built with a custom i18n system. This project supports four languages and dynamically loads content for each language.',
      fr: 'Un site web personnel entièrement multilingue construit avec un système i18n personnalisé. Ce projet prend en charge quatre langues et charge dynamiquement le contenu pour chaque langue.',
      ar: 'موقع ويب شخصي متعدد اللغات بالكامل مبني على نظام i18n مخصص. يدعم هذا المشروع أربع لغات ويحمّ المحتوى ديناميكيًا لكل لغة.'
    },
    tags: ['چندزبانه', 'i18n', 'پورتفولیو', 'شخصی'],
    technologies: ['React', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'i18next', 'Framer Motion'],
    image: '/images/projects/multilingual-portfolio.jpg',
    demoUrl: 'https://shahbazion.ir',
    githubUrl: 'https://github.com/shahbazion/portfolio-v3',
    featured: true,
    status: 'completed',
    year: 2024,
    category: 'fullstack'
  },
  {
    id: 3,
    title: {
      fa: 'کلینیک دندانپزشکی دکتر رضوانی',
      en: 'Dr. Rezvani Dental Clinic',
      fr: 'Clinique Dentaire Dr. Rezvani',
      ar: 'عيادة الدكتور رضواني لطب الأسنان'
    },
    description: {
      fa: 'وبسایت کلینیک تخصصی دندانپزشکی با سیستم رزرو آنلاین',
      en: 'Specialized dental clinic website with online booking system',
      fr: 'Site web de clinique dentaire spécialisée avec système de réservation en ligne',
      ar: 'موقع ويب لعيادة أسنان متخصصة بنظام حجز عبر الإنترنت'
    },
    longDescription: {
      fa: 'وبسایت کلینیک تخصصی دندانپزشکی با سیستم رزرو نوبت آنلاین، گالری نمونه کارها و بخش مقالات تخصصی. طراحی واکنش‌گرا و بهینه‌سازی شده برای موتورهای جستجو.',
      en: 'Specialized dental clinic website with online appointment booking system, portfolio gallery, and specialized articles section. Responsive design and optimized for search engines.',
      fr: 'Site web de clinique dentaire spécialisée avec système de réservation de rendez-vous en ligne, galerie de portfolios et section d\'articles spécialisés. Conception responsive et optimisée pour les moteurs de recherche.',
      ar: 'موقع ويب لعيادة أسنان متخصصة بنظام حجز مواعيد عبر الإنترنت، ومعرض للمحفظة، وقسم للمقالات المتخصصة. تصميم متجاوز ومحسن لمحركات البحث.'
    },
    tags: ['دندانپزشکی', 'رزرو آنلاین', 'وبسایت', 'WordPress'],
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'SEO', 'Responsive Design'],
    image: '/images/projects/dr-rezvani-clinic.jpg',
    demoUrl: 'https://dr-rezvani-vet.ir/',
    featured: true,
    status: 'completed',
    year: 2022,
    category: 'web'
  },
  {
    id: 4,
    title: {
      fa: 'اپلیکیشن مدیریت کارهای روزانه',
      en: 'Daily Task Management App',
      fr: 'Application de Gestion des Tâches Quotidiennes',
      ar: 'تطبيق إدارة المهام اليومية'
    },
    description: {
      fa: 'اپلیکیشن موبایل برای مدیریت و پیگیری کارهای روزانه',
      en: 'Mobile application for managing and tracking daily tasks',
      fr: 'Application mobile pour gérer et suivre les tâches quotidiennes',
      ar: 'تطبيق جوال لإدارة ومتابعة المهام اليومية'
    },
    longDescription: {
      fa: 'یک اپلیکیشن موبایل مدرن برای مدیریت کارهای روزانه با قابلیت‌های یادآوری، اولویت‌بندی و گزارش‌گیری. رابط کاربری زیبا و تجربه کاربری عالی.',
      en: 'A modern mobile application for daily task management with reminder features, prioritization, and reporting. Beautiful UI and excellent user experience.',
      fr: 'Une application mobile moderne pour la gestion des tâches quotidiennes avec fonctionnalités de rappel, de priorisation et de rapports. Interface utilisateur magnifique et excellente expérience utilisateur.',
      ar: 'تطبيق جوال حديث لإدارة المهام اليومية بميزات التذكير، والتحديد بالأولوية، وإعداد التقارير. واجهة مستخدم جميلة وتجربة مستخدم ممتازة.'
    },
    tags: ['موبایل', 'مدیریت', 'تسک', 'پروداکتیویتی'],
    technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Expo'],
    image: '/images/projects/task-management-app.jpg',
    githubUrl: 'https://github.com/shahbazion/task-manager-app',
    featured: false,
    status: 'in-progress',
    year: 2024,
    category: 'mobile'
  }
];

// مهارت‌ها
export const SKILLS: Skill[] = [
  { name: 'JavaScript/TypeScript', level: 90, icon: 'code', category: 'frontend' },
  { name: 'React/Next.js', level: 85, icon: 'react', category: 'frontend' },
  { name: 'Node.js', level: 80, icon: 'server', category: 'backend' },
  { name: 'PHP/Laravel', level: 75, icon: 'php', category: 'backend' },
  { name: 'MySQL/MongoDB', level: 85, icon: 'database', category: 'database' },
  { name: 'HTML/CSS/Tailwind', level: 95, icon: 'layout', category: 'frontend' },
  { name: 'Git/GitHub', level: 90, icon: 'git-branch', category: 'tool' },
  { name: 'SEO Optimization', level: 80, icon: 'search', category: 'frontend' },
  { name: 'Docker', level: 70, icon: 'container', category: 'devops' },
  { name: 'AWS/Azure', level: 65, icon: 'cloud', category: 'devops' },
  { name: 'GraphQL', level: 75, icon: 'git-merge', category: 'backend' },
  { name: 'Jest/Cypress', level: 70, icon: 'test-tube', category: 'tool' }
];

// آیتم‌های نویگیشن چندزبانه
export const NAV_ITEMS: NavItem[] = [
  { 
    href: '/', 
    label: {
      fa: 'خانه',
      en: 'Home',
      fr: 'Accueil',
      ar: 'الرئيسية'
    },
    icon: 'home'
  },
  { 
    href: '/projects', 
    label: {
      fa: 'پروژه‌ها',
      en: 'Projects',
      fr: 'Projets',
      ar: 'المشاريع'
    },
    icon: 'folder-kanban'
  },
  { 
    href: '/skills', 
    label: {
      fa: 'مهارت‌ها',
      en: 'Skills',
      fr: 'Compétences',
      ar: 'المهارات'
    },
    icon: 'code'
  },
  { 
    href: '/about', 
    label: {
      fa: 'درباره من',
      en: 'About',
      fr: 'À propos',
      ar: 'عني'
    },
    icon: 'user'
  },
  { 
    href: '/contact', 
    label: {
      fa: 'تماس',
      en: 'Contact',
      fr: 'Contact',
      ar: 'اتصل'
    },
    icon: 'mail'
  },
  { 
    href: '/blog', 
    label: {
      fa: 'بلاگ',
      en: 'Blog',
      fr: 'Blog',
      ar: 'المدونة'
    },
    icon: 'newspaper',
    external: false
  }
];

// خدمات ارائه شده
export const SERVICES = [
  {
    title: {
      fa: 'توسعه وب اپلیکیشن',
      en: 'Web Application Development',
      fr: 'Développement d\'Applications Web',
      ar: 'تطوير تطبيقات الويب'
    },
    description: {
      fa: 'ساخت اپلیکیشن‌های وب مدرن و مقیاس‌پذیر با React و Next.js',
      en: 'Building modern and scalable web applications with React and Next.js',
      fr: 'Construction d\'applications web modernes et évolutives avec React et Next.js',
      ar: 'بناء تطبيقات ويب حديثة وقابلة للتوسع باستخدام React وNext.js'
    },
    icon: 'globe'
  },
  {
    title: {
      fa: 'توسعه موبایل',
      en: 'Mobile Development',
      fr: 'Développement Mobile',
      ar: 'تطوير الجوال'
    },
    description: {
      fa: 'توسعه اپلیکیشن‌های موبایل کراس‌پلتفرم با React Native',
      en: 'Developing cross-platform mobile applications with React Native',
      fr: 'Développement d\'applications mobiles multiplateformes avec React Native',
      ar: 'تطوير تطبيقات جوال متعددة المنصات باستخدام React Native'
    },
    icon: 'smartphone'
  },
  {
    title: {
      fa: 'بهینه‌سازی SEO',
      en: 'SEO Optimization',
      fr: 'Optimisation SEO',
      ar: 'تحسين محركات البحث'
    },
    description: {
      fa: 'بهینه‌سازی وبسایت‌ها برای رتبه‌بندی بهتر در موتورهای جستجو',
      en: 'Optimizing websites for better search engine rankings',
      fr: 'Optimisation des sites web pour un meilleur classement dans les moteurs de recherche',
      ar: 'تحسين مواقع الويب لتحسين الترتيب في محركات البحث'
    },
    icon: 'trending-up'
  }
];

// ثابت‌های عمومی
export const SITE_CONFIG = {
  name: 'Shahbazion Portfolio',
  url: 'https://shahbazion.ir',
  defaultLocale: 'fa' as Locale,
  locales: ['fa', 'en', 'fr', 'ar'] as Locale[],
  themeColors: {
    primary: '#D4AF37',
    secondary: '#C44536',
    dark: '#171717',
    light: '#FFFFFF'
  }
};

// تابع کمکی برای دریافت داده‌ها بر اساس زبان
export function getLocalizedData<T extends Record<string, any>>(
  data: T,
  locale: Locale,
  key: keyof T
): string {
  const value = data[key];
  if (typeof value === 'object' && value !== null && locale in value) {
    return value[locale];
  }
  return String(value);
}

// تابع برای دریافت اطلاعات شخصی بر اساس زبان
export function getPersonalInfo(locale: Locale) {
  return {
    name: PERSONAL_INFO.name[locale],
    title: PERSONAL_INFO.title[locale],
    description: PERSONAL_INFO.description[locale],
    bio: PERSONAL_INFO.bio[locale],
    location: PERSONAL_INFO.location[locale],
    address: PERSONAL_INFO.address[locale],
    email: PERSONAL_INFO.email,
    phone: PERSONAL_INFO.phone,
    whatsapp: PERSONAL_INFO.whatsapp,
    cvUrl: PERSONAL_INFO.cvUrl,
    availability: PERSONAL_INFO.availability
  };
}
