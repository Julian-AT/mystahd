interface ProductImage {
  id: number;
  name: string;
  type: string;
  uniqid: string;
  shop_id: number;
  storage: string;
  extension: string;
  created_at: number;
  product_id: number;
  original_name: string;
  cloudflare_image_id: string;
}

interface Product {
  id: number;
  uniqid: string;
  slug: string;
  shop_id: number;
  type: string;
  subtype: string;
  title: string;
  currency: string;
  pay_what_you_want: number;
  price: number;
  price_display: number;
  price_discount: number;
  affiliate_revenue_percent: number;
  description: string;
  image_attachment: ProductImage | undefined;
  recurring_interval_count: number;
  recurring_interval: string;
  category: ProductCategory;
  grade: ProductGrade;
  image: string | undefined;
}

interface StoreData {
  status: number;
  data: {
    products: Product[];
  };
  error: null | string;
  message: null | string;
  env: string;
}

interface PricingPlan {
  name: string;
  desc: string;
  price: number;
  isMostPop: boolean;
  isMonthlySubscription: boolean;
  features: string[];
}
