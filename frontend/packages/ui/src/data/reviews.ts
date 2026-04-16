export type Review = {
  id: string
  productId: string
  author: string
  avatar?: string
  rating: number
  title: string
  body: string
  verified: boolean
  helpful: number
  createdAt: string
  images?: string[]
}

export const SAMPLE_REVIEWS: Review[] = [
  {
    id: "rev_01",
    productId: "prod_01",
    author: "Priya M.",
    rating: 5,
    title: "Absolutely intoxicating",
    body: "The oud note in this is incredibly rich without being overwhelming. I get compliments every time I wear it. Lasts a solid 8+ hours on skin. Worth every rupee.",
    verified: true,
    helpful: 34,
    createdAt: "2024-05-10",
  },
  {
    id: "rev_02",
    productId: "prod_01",
    author: "Rahul K.",
    rating: 5,
    title: "My signature scent now",
    body: "I've tried dozens of niche fragrances and this stands alongside the best. The amber dry-down is spectacular. Projection is moderate, perfect for the office.",
    verified: true,
    helpful: 22,
    createdAt: "2024-04-18",
  },
  {
    id: "rev_03",
    productId: "prod_01",
    author: "Sneha R.",
    rating: 4,
    title: "Beautiful but wish it lasted longer",
    body: "The opening is gorgeous — bergamot and pepper really pop. On my skin it fades after about 5 hours. I reapply once and then it's perfect for the evening.",
    verified: true,
    helpful: 11,
    createdAt: "2024-03-22",
  },
  {
    id: "rev_04",
    productId: "prod_02",
    author: "Ananya S.",
    rating: 5,
    title: "The perfect evening candle",
    body: "This candle transforms my living room. The black fig note is warm without being sweet. Burns cleanly with no tunnelling. The ceramic vessel is stunning — I'll reuse it as a planter.",
    verified: true,
    helpful: 19,
    createdAt: "2024-06-15",
  },
  {
    id: "rev_05",
    productId: "prod_02",
    author: "Vikram T.",
    rating: 5,
    title: "Gift hit",
    body: "Bought this as a housewarming gift and the recipients loved it so much I ordered one for myself. The throw is impressive for the size. Packaging is premium quality.",
    verified: true,
    helpful: 8,
    createdAt: "2024-06-28",
  },
  {
    id: "rev_06",
    productId: "prod_03",
    author: "Meera P.",
    rating: 5,
    title: "Gentlest soap I've ever used",
    body: "My skin is very sensitive and this soap works beautifully. The neroli scent is delicate and lingers on skin after showering. The handmade paper wrapping is a lovely touch.",
    verified: true,
    helpful: 15,
    createdAt: "2024-04-02",
  },
  {
    id: "rev_07",
    productId: "prod_05",
    author: "Dr. Suresh N.",
    rating: 5,
    title: "Authentic Kannauj quality",
    body: "As someone who's bought attars from Kannauj for over 20 years, I can confirm this is the real deal. The sandalwood base aging is clearly evident. A treasure.",
    verified: true,
    helpful: 45,
    createdAt: "2024-01-08",
  },
  {
    id: "rev_08",
    productId: "prod_05",
    author: "Fatima A.",
    rating: 5,
    title: "One drop = all day fragrance",
    body: "I was sceptical about the price for 3ml but one tiny drop behind each ear truly lasts from morning to night. This is the most economical luxury fragrance I own.",
    verified: true,
    helpful: 38,
    createdAt: "2024-02-14",
  },
  {
    id: "rev_09",
    productId: "prod_06",
    author: "Ravi S.",
    rating: 4,
    title: "Genuine chandan fragrance",
    body: "Finally found charcoal-free dhoop sticks that actually smell like real sandalwood. The burn time is solid. Only complaint is I wish the pack had more sticks.",
    verified: true,
    helpful: 12,
    createdAt: "2024-03-30",
  },
  {
    id: "rev_10",
    productId: "prod_08",
    author: "Deepak & Nisha",
    rating: 5,
    title: "Perfect anniversary gift",
    body: "Ordered this as our anniversary gift exchange. The wooden box presentation is exquisite. Each product inside is individually wrapped. It felt like opening a treasure chest.",
    verified: true,
    helpful: 7,
    createdAt: "2024-07-20",
  },
  {
    id: "rev_11",
    productId: "prod_11",
    author: "Formulation Labs Ltd.",
    rating: 5,
    title: "Consistent quality, fast dispatch",
    body: "We've been ordering linalool from Rebo for our soap line for 6 months now. Quality is consistently high, purity matches the CoA, and dispatch is always within 24 hours.",
    verified: true,
    helpful: 3,
    createdAt: "2024-04-01",
  },
  {
    id: "rev_12",
    productId: "prod_12",
    author: "AromaWorks India",
    rating: 5,
    title: "Best DPG price in the market",
    body: "Competitive pricing, IFRA-compliant quality, and reliable supply. We use their DPG for all our fragrance dilutions. 25L drums arrive well-sealed and on time.",
    verified: true,
    helpful: 5,
    createdAt: "2024-05-22",
  },
]

export function getReviewsByProduct(productId: string): Review[] {
  return SAMPLE_REVIEWS.filter((r) => r.productId === productId).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export function getAverageRating(productId: string): number {
  const reviews = getReviewsByProduct(productId)
  if (reviews.length === 0) return 0
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
}
