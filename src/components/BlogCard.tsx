import { ReactNode } from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  categoryColor?: string;
  readTime: string;
  author?: string;
  date: string;
  image?: string;
  tags?: string[];
  isExpanded?: boolean;
  onToggle?: () => void;
  children?: ReactNode;
  actionButtons?: ReactNode;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  categoryColor = 'blue',
  readTime,
  author,
  date,
  image,
  tags,
  isExpanded = false,
  onToggle,
  children,
  actionButtons
}: BlogCardProps) {
  return (
    <article className={`blog-card ${isExpanded ? 'expanded' : ''}`}>
      {/* Card Header */}
      <div className="blog-card-header" onClick={onToggle}>
        {image && (
          <div className="blog-card-image">
            <img src={image} alt={title} loading="lazy" />
          </div>
        )}
        
        <div className="blog-card-content">
          <div className="blog-card-meta">
            <span className={`category-badge category-${categoryColor}`}>
              {category}
            </span>
            <span className="read-time">{readTime}</span>
            <span className="publish-date">{date}</span>
            {author && <span className="author">By {author}</span>}
          </div>
          
          <h3 className="blog-card-title">{title}</h3>
          <p className="blog-card-excerpt">{excerpt}</p>
          
          {tags && tags.length > 0 && (
            <div className="blog-card-tags">
              {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          )}
          
          {onToggle && (
            <div className="blog-card-toggle">
              <span className="toggle-text">
                {isExpanded ? 'Show Less' : 'Read More'}
              </span>
              <svg 
                className={`toggle-icon ${isExpanded ? 'rotated' : ''}`} 
                width="20" 
                height="20" 
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5z" fill="currentColor"/>
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Expandable Content */}
      {children && (
        <div className={`blog-card-expanded-content ${isExpanded ? 'show' : ''}`}>
          <div className="expanded-content-wrapper">
            {children}
            
            {actionButtons && (
              <div className="blog-card-actions">
                {actionButtons}
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .blog-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          margin-bottom: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .blog-card:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-color: #d1d5db;
          transform: translateY(-2px);
        }

        .blog-card-header {
          padding: 24px;
          cursor: ${onToggle ? 'pointer' : 'default'};
          transition: background-color 0.3s ease;
        }

        .blog-card-header:hover {
          background-color: ${onToggle ? '#f9fafb' : 'transparent'};
        }

        .blog-card.expanded .blog-card-header {
          border-bottom: 1px solid #e5e7eb;
          background-color: #f9fafb;
        }

        .blog-card-image {
          width: 100%;
          height: 200px;
          margin-bottom: 16px;
          border-radius: 12px;
          overflow: hidden;
        }

        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-card-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .category-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .category-blue { background: #dbeafe; color: #1e40af; }
        .category-green { background: #dcfce7; color: #166534; }
        .category-yellow { background: #fef3c7; color: #92400e; }
        .category-red { background: #fecaca; color: #dc2626; }
        .category-purple { background: #f3e8ff; color: #7c3aed; }
        .category-pink { background: #fce7f3; color: #be185d; }
        .category-gray { background: #f3f4f6; color: #374151; }

        .read-time, .publish-date, .author {
          font-size: 14px;
          color: #6b7280;
        }

        .blog-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
          margin-bottom: 12px;
        }

        .blog-card-excerpt {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .blog-card-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .tag {
          background: #f3f4f6;
          color: #374151;
          padding: 4px 10px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 500;
        }

        .blog-card-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #059669;
          font-weight: 600;
          font-size: 14px;
        }

        .toggle-icon {
          transition: transform 0.3s ease;
          color: #059669;
        }

        .toggle-icon.rotated {
          transform: rotate(180deg);
        }

        .blog-card-expanded-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s ease;
          background: #fafafa;
        }

        .blog-card-expanded-content.show {
          max-height: 1000px;
          opacity: 1;
        }

        .expanded-content-wrapper {
          padding: 24px;
        }

        .blog-card-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .blog-card-header {
            padding: 16px;
          }

          .expanded-content-wrapper {
            padding: 16px;
          }

          .blog-card-title {
            font-size: 20px;
          }

          .blog-card-meta {
            gap: 8px;
          }

          .blog-card-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </article>
  );
}