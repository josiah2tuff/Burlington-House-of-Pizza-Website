export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  category: 'pizza' | 'wings' | 'pasta' | 'subs' | 'salads' | 'desserts';
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
