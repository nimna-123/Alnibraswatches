export const SIDE_MENU = {
  "Main Menu": [
    {
      title: "dashboard",
      path: "/dashboard",
      icon: "solar:home-smile-outline",
    },
    {
      title: "order management ",
      path: "order",
      icon: "flowbite:cart-outline",
    },
    {
      title: "Advertisment",
      path: "ad",
      icon: "lucide:coins",
    },
    {
      title: "Banner",
      path: "banner",
      icon: "lucide:circle-fading-plus",
    },
    {
      title: "categories",
      path: "categories",
      icon: "tabler:circle-square",
    },
    {
      title: "Colors",
      path: "colors",
      icon: "lucide:paint-bucket",
    },
    {
      title: "brand",
      path: "brand",
      icon: "material-symbols:star-outline",
    },
    {
      title: "Customize Sizes",
      path: "size",
      icon: "lucide:cuboid",
    },
    {
      title: "Payment Integration",
      path: "payment",
      icon: "bxl:stripe",
    },
  ],
  Products: [
    {
      title: "product list",
      path: "productList",
      icon: "lucide:box",
    },
  ],
  Admin: [
    {
      title: "admin",
      path: "admin",
      icon: "material-symbols-light:account-circle-outline",
    },
    {
      title: "settings",
      path: "settings",
      icon: "clarity:settings-line",
    },
  ],
};

export const HEADER_TITLE = [
  {
    title: "dashboard",
  },
  {
    title: "order management ",
  },
  {
    title: "Adveritsment",
  },
  {
    title: "Banner",
  },
  {
    title: "categories ",
  },
  {
    title: "Colors details",
  },
  {
    title: "brands",
  },
  {
    title: "Size Customization",
  },
  {
    title: "add product",
  },
  {
    title: "product list",
  },
  {
    title: "admin",
  },
  {
    title: "settings",
  },
];
export const REPORTS_GRAPH_NAV = [
  {
    title: "customers",
    option: "totalCustomers",
    metric: "customers",
  },
  {
    title: "total products",
    option: "totalProducts",
    metric: "totalProducts",
  },
  {
    title: "stock products",
    option: "productsInStock",
    metric: "productsInStock",
  },
  {
    title: "total sold ",
    option: "totalsoldProducts",
    metric: "soldProducts",
  },
  {
    title: "revenue",
    option: "totalRevenue",
    metric: "totalRevenue",
  },
];

export const BANNER_INITIAL_VALUE = {
  desktop: [
    {
      imgurl_1: "",
      imgurl_2: "",
      imgurl_3: "",
      imgurl_4: "",
      imgurl_5: "",
      imgurl_6: "",
    },
  ],
  mobile: [
    {
      imgurl_1: "",
      imgurl_2: "",
      imgurl_3: "",
      imgurl_4: "",
      imgurl_5: "",
      imgurl_6: "",
    },
  ],
  tab: [
    {
      imgurl_1: "",
      imgurl_2: "",
      imgurl_3: "",
      imgurl_4: "",
      imgurl_5: "",
      imgurl_6: "",
    },
  ],
  settings: "",
};
export const BANNER_DEV_CONFIG = {
  desktop: {
    title: "Desktop Banners",
    description: "Display ONLY on desktop and large screens",
    aspectRatio: "aspect-[16/5]", // Widescreen aspect ratio for desktop
    maxWidth: "max-w-4xl",
    recommendedWidth: 1920,
    recommendedHeight: 800,
    previewWidth: "1200px",
    displayName: "Desktop",
  },
  mobile: {
    title: "Mobile Banners",
    description: "Display ONLY on mobile devices",
    aspectRatio: "aspect-[4/5]", // Portrait aspect ratio for mobile
    maxWidth: "max-w-md",
    recommendedWidth: 800,
    recommendedHeight: 1000,
    previewWidth: "375px",
    displayName: "Mobile",
  },
  tab: {
    title: "Tablet Banners",
    description: "Display ONLY on tablet devices",
    aspectRatio: "aspect-[4/3]", // Standard tablet aspect ratio
    maxWidth: "max-w-2xl",
    recommendedWidth: 1024,
    recommendedHeight: 768,
    previewWidth: "768px",
    displayName: "Tablet",
  },
};

export const INITIAL_PRODUCT_DETAILS = {
  productName: undefined,
  description: undefined,
  categoryId: undefined,
  taxCode: "",
  images: [],
  brandID: undefined,
  price: undefined,
  stockQty: undefined,
  discountPrice: undefined,
  variants: [],
};

export const STATUS_OPTIONS = [
  { value: "", label: "All Statuses" },
  { value: "ordered", label: "Ordered" },
  { value: "processing", label: "Processing" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];
// Date preset options
export const DATE_PRESET = [
  { value: "all", label: "All Time" },
  { value: "custom", label: "Custom Range" },
  { value: "last30days", label: "Last 30 Days" },
  { value: "thisMonth", label: "This Month" },
  { value: "lastMonth", label: "Last Month" },
  { value: "thisQuarter", label: "This Quarter" },
  { value: "lastQuarter", label: "Last Quarter" },
  { value: "twoQuartersAgo", label: "2 Quarters Ago" },
  { value: "thisYear", label: "This Year" },
  { value: "lastYear", label: "Last Year" },
];

export const DATE_OPTIONS = [
  "Today",
  "Yesterday",
  "Last 7 Days",
  "Last 30 Days",
  "This Month",
  "Last Month",
  "This Year",
  "Last Year",
];
