'use client';

import { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/types/blog';

// Sample blog data - this would typically come from a CMS or API
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Complete Guide to Tilapia Fish Nutrition Facts',
    excerpt: 'Discover why tilapia is considered one of the best high-protein fish for bodybuilding and healthy eating. Complete breakdown of nutrition facts and health benefits.',
    category: 'Nutrition',
    categoryColor: 'green',
    readTime: '8 min read',
    author: 'Dr. Nutritionist',
    date: 'Jan 15, 2025',
    tags: ['Nutrition', 'Tilapia', 'Protein', 'Health'],
    featured: true
  },
  {
    id: '2', 
    title: '5 Best Grilled Tilapia Recipes for Healthy Eating',
    excerpt: 'Master the art of grilled tilapia with these healthy, delicious preparations that preserve nutritional value while delivering amazing taste.',
    category: 'Recipes',
    categoryColor: 'yellow',
    readTime: '12 min read',
    author: 'Chef Priya',
    date: 'Jan 12, 2025',
    tags: ['Recipes', 'Grilling', 'Cooking', 'Healthy']
  },
  {
    id: '3',
    title: 'What is Varal Fish? Complete Guide to This Local Favorite',
    excerpt: 'Everything you need to know about varal fish - from nutritional benefits to cooking methods and where to source the freshest varieties.',
    category: 'Fish Guide',
    categoryColor: 'blue',
    readTime: '10 min read',
    author: 'Aquaculture Expert',
    date: 'Jan 10, 2025',
    tags: ['Varal Fish', 'Guide', 'Local Fish']
  },
  {
    id: '4',
    title: 'Omega-3 Benefits: Why Fresh Fish Should Be in Your Daily Diet',
    excerpt: 'Understanding the powerful health benefits of omega-3 fatty acids and how fresh fish can transform your approach to healthy eating.',
    category: 'Health',
    categoryColor: 'pink',
    readTime: '15 min read',
    author: 'Dr. Health Expert',
    date: 'Jan 8, 2025',
    tags: ['Omega-3', 'Health Benefits', 'Diet']
  },
  {
    id: '5',
    title: 'Sustainable Aquaculture: Farm vs Wild Fish Comparison',
    excerpt: 'Discover the truth about farm-raised fish and why premium aquaculture practices can deliver superior quality and sustainability.',
    category: 'Farming',
    categoryColor: 'green',
    readTime: '18 min read',
    author: 'Sustainable Farming Expert',
    date: 'Jan 5, 2025',
    tags: ['Sustainable', 'Farming', 'Environment']
  },
  {
    id: '6',
    title: 'Professional Fish Cooking Techniques: From Beginner to Expert',
    excerpt: 'Master professional fish cooking techniques used by top chefs. Learn the secrets to perfectly cooked fish every time with proven methods.',
    category: 'Cooking Tips',
    categoryColor: 'red',
    readTime: '14 min read',
    author: 'Professional Chef',
    date: 'Jan 3, 2025',
    tags: ['Cooking', 'Techniques', 'Professional']
  }
];

export default function BlogPage() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return (
    <div className="blog-page">
      {/* Page Header - Similar to Screenshot */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Knowledge & Insights Blog</h1>
            <p className="page-subtitle">
              Discover stories, insights, and knowledge about fresh fish, sustainable farming, and healthy living
            </p>
            <nav className="breadcrumb">
              <a href="/">Home</a>
              <span className="separator">/</span>
              <span className="current">Blog</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="blog-main-content">
        <div className="container">
          <div className="blog-articles">
            
            <div className="articles-list">
              {blogPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      title={post.title}
                      excerpt={post.excerpt}
                      category={post.category}
                      categoryColor={post.categoryColor}
                      readTime={post.readTime}
                      author={post.author}
                      date={post.date}
                      tags={post.tags}
                      isExpanded={expandedCards[post.id]}
                      onToggle={() => toggleCard(post.id)}
                      actionButtons={
                        <>
                          <button className="btn btn-primary">
                            Read Full Article
                          </button>
                          <button className="btn btn-outline">
                            Share Article
                          </button>
                          <button className="btn btn-outline">
                            Order Fresh Fish
                          </button>
                        </>
                      }
                    >
                      <div className="expanded-content">
                        {post.id === '1' && (
                          <div className="content-sections">
                            <div className="nutrition-highlights">
                              <h4>Key Nutrition Facts (per 100g)</h4>
                              <div className="nutrition-grid">
                                <div className="nutrition-item">
                                  <span className="nutrient">Protein</span>
                                  <span className="value">22g</span>
                                </div>
                                <div className="nutrition-item">
                                  <span className="nutrient">Calories</span>
                                  <span className="value">128</span>
                                </div>
                                <div className="nutrition-item">
                                  <span className="nutrient">Fat</span>
                                  <span className="value">3.2g</span>
                                </div>
                                <div className="nutrition-item">
                                  <span className="nutrient">Omega-3</span>
                                  <span className="value">240mg</span>
                                </div>
                              </div>
                            </div>
                            <div className="content-preview">
                              <h5>What You&apos;ll Learn:</h5>
                              <ul>
                                <li>Complete nutritional breakdown with daily values</li>
                                <li>Why tilapia is perfect for high-protein diets</li>
                                <li>Health benefits and cooking recommendations</li>
                                <li>Comparison with other fish varieties</li>
                              </ul>
                            </div>
                          </div>
                        )}
                        
                        {post.id === '2' && (
                          <div className="content-sections">
                            <div className="recipe-preview">
                              <h4>Featured Recipe: Lemon Herb Grilled Tilapia</h4>
                              <div className="recipe-stats">
                                <span>⏱️ 25 min</span>
                                <span>👥 Serves 4</span>
                                <span>🔥 165 cal</span>
                                <span>💪 22g protein</span>
                              </div>
                            </div>
                            <div className="content-preview">
                              <h5>Recipes Include:</h5>
                              <ul>
                                <li>Classic Lemon Herb Grilled Tilapia</li>
                                <li>Spicy Cajun Style with Vegetables</li>
                                <li>Mediterranean Herb Crusted</li>
                                <li>Asian Teriyaki Glazed</li>
                                <li>Garlic Butter with Fresh Herbs</li>
                              </ul>
                            </div>
                          </div>
                        )}

                        {post.id === '3' && (
                          <div className="content-sections">
                            <div className="fish-comparison">
                              <h4>Varal vs Tilapia Comparison</h4>
                              <div className="comparison-grid">
                                <div className="comparison-item">
                                  <span className="metric">Protein</span>
                                  <span className="varal">24g</span>
                                  <span className="vs">vs</span>
                                  <span className="tilapia">22g</span>
                                </div>
                                <div className="comparison-item">
                                  <span className="metric">Omega-3</span>
                                  <span className="varal">280mg</span>
                                  <span className="vs">vs</span>
                                  <span className="tilapia">240mg</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {post.id === '4' && (
                          <div className="content-sections">
                            <div className="health-benefits">
                              <h4>Key Health Benefits</h4>
                              <div className="benefits-grid">
                                <div className="benefit-item">
                                  <span className="icon">❤️</span>
                                  <span className="benefit">Heart Health</span>
                                </div>
                                <div className="benefit-item">
                                  <span className="icon">🧠</span>
                                  <span className="benefit">Brain Function</span>
                                </div>
                                <div className="benefit-item">
                                  <span className="icon">👁️</span>
                                  <span className="benefit">Eye Health</span>
                                </div>
                                <div className="benefit-item">
                                  <span className="icon">💪</span>
                                  <span className="benefit">Anti-Inflammatory</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {(post.id === '5' || post.id === '6') && (
                          <div className="content-sections">
                            <div className="generic-preview">
                              <h5>Article Preview:</h5>
                              <p>This article contains comprehensive information about {post.category.toLowerCase()}. Click &quot;Read Full Article&quot; to explore the complete content.</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </BlogCard>
                  ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="blog-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Fresh Fish?</h2>
            <p>While you wait for our blog content, explore our premium fresh fish selection.</p>
            <div className="cta-buttons">
              <a href="/fish" className="btn btn-primary">Shop Fresh Fish</a>
              <a href="/contact" className="btn btn-outline">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          cursor: pointer;
          font-size: 14px;
        }

        .btn-primary {
          background: #059669;
          color: white;
          border-color: #059669;
        }

        .btn-primary:hover {
          background: #047857;
          border-color: #047857;
        }

        .btn-outline {
          background: white;
          color: #059669;
          border-color: #059669;
        }

        .btn-outline:hover {
          background: #059669;
          color: white;
        }

        .nutrition-grid, .comparison-grid, .benefits-grid, .practices-grid, .methods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .nutrition-item, .comparison-item, .benefit-item, .practice-item, .method-item {
          text-align: center;
          padding: 16px;
          background: white;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .nutrient, .metric {
          display: block;
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 4px;
          text-transform: uppercase;
          font-weight: 600;
        }

        .value, .varal, .tilapia, .benefit {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: #059669;
        }

        .vs {
          color: #9ca3af;
          font-weight: 400;
          font-size: 14px;
        }

        .recipe-stats {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .recipe-stats span {
          background: #f3f4f6;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 14px;
          color: #374151;
        }

        .content-preview h5 {
          margin-bottom: 12px;
          color: #374151;
          font-weight: 600;
        }

        .content-preview ul {
          list-style: none;
          padding: 0;
        }

        .content-preview li {
          padding: 8px 0;
          border-bottom: 1px solid #f3f4f6;
          color: #6b7280;
          position: relative;
          padding-left: 20px;
        }

        .content-preview li:before {
          content: "•";
          color: #059669;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .content-preview li:last-child {
          border-bottom: none;
        }

        .icon {
          font-size: 24px;
          margin-bottom: 8px;
          display: block;
        }

        .generic-preview {
          padding: 24px;
          background: #f8fafc;
          border-radius: 8px;
          text-align: center;
        }

        .generic-preview h5 {
          color: #374151;
          margin-bottom: 12px;
        }

        .generic-preview p {
          color: #6b7280;
          line-height: 1.6;
        }


        .articles-header h2 {
          font-size: 32px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 8px;
        }

        .articles-header p {
          color: #6b7280;
          font-size: 16px;
          margin-bottom: 32px;
        }

        @media (max-width: 968px) {
          .nutrition-grid, .comparison-grid, .benefits-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}