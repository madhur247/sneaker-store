import { Category, SubCategory } from '../enums/Category';
import { Product } from '../models/Product';

export const PRODUCTS: Product[] = [
  {
    id: '46d998ea-8c13-445f-bdf2-1453d0d3b5ec',
    name: "Nike Air Force 1 Mid 07 LV8",
    coverImage: 'assets/imgs/products/Nike Air Force 1 Mid \'07 LV8/cover/Nike Air Force 1 Mid 07 LV8 cover.webp',
    category: Category.Men,
    images: [
      'assets/imgs/products/Nike Air Force 1 Mid \'07 LV8/product/Nike Air Force 1 Mid 07 LV8 img1.webp',
      'assets/imgs/products/Nike Air Force 1 Mid \'07 LV8/product/Nike Air Force 1 Mid 07 LV8 img2.webp',
      'assets/imgs/products/Nike Air Force 1 Mid \'07 LV8/product/Nike Air Force 1 Mid 07 LV8 img3.webp',
      'assets/imgs/products/Nike Air Force 1 Mid \'07 LV8/product/Nike Air Force 1 Mid 07 LV8 img4.webp',
    ],
    description:
      'The "Nike Athletic Club", Nike\'s fictional athletics team, brings \'70s inspiration to streetwear staples. Mixing retro fun with iconic hoops style, this AF-1 delivers a fresh spin on what you know best: stitched overlays, bold colours and the perfect amount of hoops style to make heads turn. Era-echoing leather is smoother than backboard glass, while letterman style "AF-1" patching on the heel adds a varsity finish.',
    displayPrice: '10,195',
    price: 10195,
    newest: true,
  },
  {
    id: 'b4ee0c7e-a267-404a-8d44-fe7795525565',
    name: "Nike Air Force 1 Mid '09",
    coverImage: 'assets/imgs/products/Nike Air Force 1 Mid \'07/cover/Nike Air Force 1 Mid 07 cover.webp',
    category: Category.Men,
    images: [
      'assets/imgs/products/Nike Air Force 1 Mid \'07/product/Nike Air Force 1 Mid 07 cover img1.webp',
      'assets/imgs/products/Nike Air Force 1 Mid \'07/product/Nike Air Force 1 Mid 07 cover img2.webp',
      'assets/imgs/products/Nike Air Force 1 Mid \'07/product/Nike Air Force 1 Mid 07 cover img3.webp',
      'assets/imgs/products/Nike Air Force 1 Mid \'07/product/Nike Air Force 1 Mid 07 cover img4.webp',
    ],
    description:
      "The Air Force 1 Mid '07 is everything you know best: crisp overlays, bold accents and the perfect amount of flash to let you shine. The padded, mid-cut collar with classic hook-and-loop closure adds heritage b-ball comfort while perforations on the toe keep you cool.",
    displayPrice: '8,195',
    price: 8195,
    newest: true,
  },
  {
    id: '43e6fa45-8cd1-408b-b48c-d6114043c9ca',
    name: "Jordan 'Why Not?' Zer0.5",
    coverImage: 'assets/imgs/products/Basketball Shoes Jordan Why Not Zer05/cover/Basketball Shoes Jordan Why Not Zer05 cover.webp',
    category: Category.Men,
    images: [
      'assets/imgs/products/Basketball Shoes Jordan Why Not Zer05/product/Basketball Shoes Jordan Why Not Zer05 img1.webp',
      'assets/imgs/products/Basketball Shoes Jordan Why Not Zer05/product/Basketball Shoes Jordan Why Not Zer05 img2.webp',
      'assets/imgs/products/Basketball Shoes Jordan Why Not Zer05/product/Basketball Shoes Jordan Why Not Zer05 img3.webp',
      'assets/imgs/products/Basketball Shoes Jordan Why Not Zer05/product/Basketball Shoes Jordan Why Not Zer05 img4.webp',
    ],
    description:
      "Russell Westbrook is fast. In 48 minutes of play, he's only in the air a few seconds at most, with the bulk of his time spent leaving opponents in the dust. The Jordan Why Not? Zer0.5 optimises Russ' superpower of speed with data-informed traction and a full-foot fit system that keeps him contained and in control. It has the rugged utility look of a trail-running shoe combined with the on-purpose clash of colours and materials at the core of Why Not?",
    displayPrice: '7,495',
    price: 7495,
    newest: true,
  },
  {
    id: '3ca3349e-2c4a-4cd7-a4b0-25513ddbced4',
    name: "Nike Air Force 1 '07 SE",
    coverImage: 'assets/imgs/products/Nike Air Force 1 \'07 SE/cover/Nike Air Force 1 07 SE cover.webp',
    category: Category.Women,
    images: [
      'assets/imgs/products/Nike Air Force 1 \'07 SE/product/Nike Air Force 1 07 SE img1.webp',
      'assets/imgs/products/Nike Air Force 1 \'07 SE/product/Nike Air Force 1 07 SE img2.webp',
      'assets/imgs/products/Nike Air Force 1 \'07 SE/product/Nike Air Force 1 07 SE img3.webp',
      'assets/imgs/products/Nike Air Force 1 \'07 SE/product/Nike Air Force 1 07 SE img4.webp',
    ],
    description:
      "The radiance lives on in the b-ball original that puts a fresh spin on what you know best. Blooming with springtime details, its fun-loving colours and patches add a burst of energy to your day.",
    displayPrice: '9,695',
    price: 9695,
    newest: false,
  },
  {
    id: 'aabb5ca6-9420-4f8f-8687-1269be161268',
    name: "Nike Air Force 1 Crater Flyknit",
    coverImage: 'assets/imgs/products/Nike Air Force 1 Crater Flyknit/cover/Nike Air Force 1 Crater Flyknit cover.webp',
    category: Category.Women,
    images: [
      'assets/imgs/products/Nike Air Force 1 Crater Flyknit/product/Nike Air Force 1 Crater Flyknit img1.webp',
      'assets/imgs/products/Nike Air Force 1 Crater Flyknit/product/Nike Air Force 1 Crater Flyknit img2.webp',
      'assets/imgs/products/Nike Air Force 1 Crater Flyknit/product/Nike Air Force 1 Crater Flyknit img3.webp',
      'assets/imgs/products/Nike Air Force 1 Crater Flyknit/product/Nike Air Force 1 Crater Flyknit img4.webp',
    ],
    description:
      "A modern take on the hoops icon, the Nike Air Force 1 Crater Flyknit updates classic b-ball style with at least 20% recycled materials by weight. The super-airy Flyknit upper features a linen-like texture while the speckled Crater foam midsole adds a modern twist. It's legendary style that's on-point and lets you give a little back with every step.",
    displayPrice: '7,437',
    price: 7437,
    newest: true,
  },
  {
    id: '74cceadf-1a79-48f5-ba46-83b66d177227',
    name: "Nike Air Force 1 '07 LXX",
    coverImage: 'assets/imgs/products/Nike Air Force 1 07 LXX/cover/Nike Air Force 1 07 LXX cover.webp',
    category: Category.Women,
    images: [
      'assets/imgs/products/Nike Air Force 1 07 LXX/product/Nike Air Force 1 07 LXX img1.webp',
      'assets/imgs/products/Nike Air Force 1 07 LXX/product/Nike Air Force 1 07 LXX img2.webp',
      'assets/imgs/products/Nike Air Force 1 07 LXX/product/Nike Air Force 1 07 LXX img3.webp',
      'assets/imgs/products/Nike Air Force 1 07 LXX/product/Nike Air Force 1 07 LXX img4.webp',
    ],
    description:
      "It may be cold outside, but the Nike Air Force 1 '07 LV8, made from at least 20% recycled materials by weight, keeps your style hot.Warm up chilly days with quilted details, a cosy lining and enough hoops swagger to make snow melt.",
    displayPrice: '9,295',
    price: 9295,
    newest: true,
  }
];
