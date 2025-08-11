import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fish Farming & Nutrition Blog Kerala | Appoose Farm Muthukulam - Fresh Fish Tips & Recipes",
  description: "Expert insights on fresh fish nutrition, tilapia farming, cooking tips from Appoose farm Kerala. Learn about chemical-free fish farming, Kerala fish varieties, healthy recipes.",
  keywords: ["fish farming kerala", "tilapia farming alappuzha", "fresh fish nutrition kerala", "kerala fish varieties", "chemical free fish farming", "fish cooking tips kerala", "varal fish benefits"],
  openGraph: {
    title: "Fish Farming & Nutrition Blog - Appoose Farm Kerala", 
    description: "Expert insights on fresh fish from our Muthukulam farm. Nutrition tips, farming practices, and recipes from Kerala's premium fish farm.",
    images: ["/images/farm-hero.jpg"],
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Article Schema for Blog Content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Fresh Fish & Kerala Farming Blog - Appoose",
            "description": "Expert insights on fresh fish nutrition, sustainable aquaculture, Kerala fish varieties, and healthy cooking from Appoose farm Muthukulam.",
            "publisher": {
              "@type": "Organization",
              "name": "Appoose Fresh Fish Farm",
              "logo": {
                "@type": "ImageObject",
                "url": "https://appoose.com/images/logo.png"
              }
            },
            "url": "https://appoose.com/blog",
            "inLanguage": "en-IN",
            "about": [
              "Fresh Fish Nutrition Kerala",
              "Sustainable Fish Farming",
              "Kerala Fish Varieties",
              "Chemical-Free Aquaculture",
              "Tilapia Fish Benefits",
              "Varal Fish Cooking",
              "Healthy Fish Recipes"
            ],
            "keywords": "kerala fish blog, fresh fish nutrition, sustainable aquaculture, tilapia farming, varal fish cooking, fish farming kerala"
          })
        }}
      />
      
      {/* Sample Recipe Schema for Fish Recipes */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Recipe",
            "name": "Kerala Style Fresh Tilapia Curry",
            "description": "Traditional Kerala fish curry made with fresh tilapia from Appoose farm. Chemical-free, authentic recipe perfect for traditional Malayalam taste.",
            "image": "https://appoose.com/images/tilapia-curry.jpg",
            "author": {
              "@type": "Organization",
              "name": "Appoose Fresh Fish Farm"
            },
            "prepTime": "PT15M",
            "cookTime": "PT25M", 
            "totalTime": "PT40M",
            "recipeCuisine": "Kerala Cuisine",
            "recipeCategory": "Fish Curry",
            "keywords": "kerala fish curry, fresh tilapia recipe, malayalam fish curry, chemical free fish cooking",
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "280 calories",
              "freshness": "Same day harvest fish",
              "fatContent": "12g per serving"
            },
            "recipeIngredient": [
              "500g Fresh Tilapia from Appoose Farm",
              "2 cups Coconut Milk",
              "2 tsp Red Chilli Powder",
              "1 tsp Turmeric Powder",
              "10-12 Curry Leaves",
              "2 Green Chillies",
              "1 Onion sliced",
              "3 cloves Garlic",
              "1 inch Ginger",
              "Salt to taste"
            ],
            "recipeInstructions": [
              {
                "@type": "HowToStep",
                "text": "Clean fresh tilapia fish and marinate with turmeric and salt for 15 minutes"
              },
              {
                "@type": "HowToStep", 
                "text": "Heat coconut oil in Kerala traditional cooking pot, add curry leaves and green chillies"
              },
              {
                "@type": "HowToStep",
                "text": "Add sliced onions, ginger-garlic paste and cook until golden"
              },
              {
                "@type": "HowToStep",
                "text": "Add red chilli powder, turmeric and mix well"
              },
              {
                "@type": "HowToStep",
                "text": "Pour coconut milk and bring to gentle boil"
              },
              {
                "@type": "HowToStep",
                "text": "Gently add marinated tilapia pieces and cook for 15 minutes"
              },
              {
                "@type": "HowToStep",
                "text": "Serve hot with steamed Kerala red rice"
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}