'use client';

import { useEffect } from 'react';

export default function ExpandableCards() {
  useEffect(() => {
    // Make toggleCard function available globally
    (window as any).toggleCard = function(cardId: string) {
      const cardContent = document.getElementById(cardId);
      const cardHeader = cardContent?.previousElementSibling as HTMLElement;
      const expandIcon = cardHeader?.querySelector('.expand-icon') as HTMLElement;
      const expandText = cardHeader?.querySelector('.expand-text') as HTMLElement;
      
      if (cardContent && cardHeader) {
        const isExpanded = cardContent.style.maxHeight && cardContent.style.maxHeight !== '0px';
        
        if (isExpanded) {
          // Collapse
          cardContent.style.maxHeight = '0px';
          cardContent.style.opacity = '0';
          cardHeader.classList.remove('expanded');
          if (expandIcon) expandIcon.style.transform = 'rotate(0deg)';
          if (expandText) expandText.textContent = 'Read More';
        } else {
          // Expand
          cardContent.style.maxHeight = cardContent.scrollHeight + 'px';
          cardContent.style.opacity = '1';
          cardHeader.classList.add('expanded');
          if (expandIcon) expandIcon.style.transform = 'rotate(180deg)';
          if (expandText) expandText.textContent = 'Show Less';
        }
      }
    };

    // Add CSS for smooth transitions
    const style = document.createElement('style');
    style.textContent = `
      .expandable-card {
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        margin-bottom: 24px;
        overflow: hidden;
        transition: all 0.3s ease;
        background: white;
      }

      .expandable-card:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-color: #d1d5db;
      }

      .card-header {
        padding: 24px;
        cursor: pointer;
        transition: all 0.3s ease;
        border-bottom: 1px solid transparent;
      }

      .card-header:hover {
        background-color: #f9fafb;
      }

      .card-header.expanded {
        border-bottom-color: #e5e7eb;
        background-color: #f9fafb;
      }

      .card-meta {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 12px;
      }

      .category-tag {
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .category-tag.nutrition { background: #dcfce7; color: #166534; }
      .category-tag.recipes { background: #fef3c7; color: #92400e; }
      .category-tag.guide { background: #dbeafe; color: #1e40af; }
      .category-tag.health { background: #fce7f3; color: #be185d; }
      .category-tag.farming { background: #d1fae5; color: #065f46; }
      .category-tag.cooking { background: #fed7d7; color: #c53030; }

      .read-time {
        color: #6b7280;
        font-size: 14px;
      }

      .card-title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 12px;
        color: #111827;
        line-height: 1.3;
      }

      .card-excerpt {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 16px;
      }

      .card-expand {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #059669;
        font-weight: 600;
        font-size: 14px;
      }

      .expand-icon {
        transition: transform 0.3s ease;
        color: #059669;
      }

      .card-content {
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: all 0.4s ease;
        background-color: #fafafa;
      }

      .content-sections {
        padding: 24px;
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

      .value, .varal, .tilapia, .benefit, .practice-item span:last-child, .method-item span:last-child {
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

      .article-actions {
        display: flex;
        gap: 12px;
        margin-top: 24px;
        flex-wrap: wrap;
      }

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

      .icon {
        font-size: 24px;
        margin-bottom: 8px;
        display: block;
      }

      @media (max-width: 768px) {
        .card-header {
          padding: 16px;
        }
        
        .content-sections {
          padding: 16px;
        }
        
        .card-title {
          font-size: 20px;
        }
        
        .nutrition-grid, .comparison-grid, .benefits-grid, .practices-grid, .methods-grid {
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 12px;
        }
        
        .article-actions {
          flex-direction: column;
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.head.removeChild(style);
      delete (window as any).toggleCard;
    };
  }, []);

  return null; // This component only adds functionality and styles
}