'use client';

import { useEffect } from 'react';

export default function BlogInteractive() {
  useEffect(() => {
    // Category filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const articleCards = document.querySelectorAll('.article-card');
    const articleCount = document.getElementById('article-count');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function(this: HTMLButtonElement) {
        const category = this.getAttribute('data-category');
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Filter articles
        let visibleCount = 0;
        articleCards.forEach(card => {
          const cardCategories = card.getAttribute('data-category');
          if (category === 'all' || (cardCategories && category && cardCategories.includes(category))) {
            (card as HTMLElement).style.display = 'block';
            visibleCount++;
          } else {
            (card as HTMLElement).style.display = 'none';
          }
        });
        
        // Update count
        if (articleCount) {
          articleCount.textContent = `${visibleCount} articles found`;
        }
      });
    });
    
    // Search functionality
    const searchInput = document.getElementById('blog-search') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        let visibleCount = 0;
        
        articleCards.forEach(card => {
          const title = card.querySelector('.article-title')?.textContent?.toLowerCase() || '';
          const excerpt = card.querySelector('.article-excerpt')?.textContent?.toLowerCase() || '';
          
          if (title.includes(searchTerm) || excerpt.includes(searchTerm) || searchTerm === '') {
            (card as HTMLElement).style.display = 'block';
            visibleCount++;
          } else {
            (card as HTMLElement).style.display = 'none';
          }
        });
        
        if (articleCount) {
          articleCount.textContent = `${visibleCount} articles found`;
        }
      });
    }
    
    // Sort functionality
    const sortSelect = document.getElementById('sort-select') as HTMLSelectElement;
    if (sortSelect) {
      sortSelect.addEventListener('change', function() {
        const sortBy = this.value;
        const articlesContainer = document.querySelector('.articles-grid');
        const articles = Array.from(articleCards);
        
        articles.sort((a, b) => {
          if (sortBy === 'newest') {
            const dateA = new Date(a.querySelector('.publish-date')?.getAttribute('datetime') || '');
            const dateB = new Date(b.querySelector('.publish-date')?.getAttribute('datetime') || '');
            return dateB.getTime() - dateA.getTime();
          } else if (sortBy === 'oldest') {
            const dateA = new Date(a.querySelector('.publish-date')?.getAttribute('datetime') || '');
            const dateB = new Date(b.querySelector('.publish-date')?.getAttribute('datetime') || '');
            return dateA.getTime() - dateB.getTime();
          } else if (sortBy === 'popular') {
            const viewsA = parseInt(a.querySelector('.views')?.textContent?.replace(/[^\d]/g, '') || '0');
            const viewsB = parseInt(b.querySelector('.views')?.textContent?.replace(/[^\d]/g, '') || '0');
            return viewsB - viewsA;
          }
          return 0;
        });
        
        // Re-append sorted articles
        articles.forEach(article => {
          articlesContainer?.appendChild(article);
        });
      });
    }
    
    // Like button functionality
    document.querySelectorAll('.like-btn').forEach(btn => {
      btn.addEventListener('click', function(this: HTMLButtonElement) {
        const currentLikes = parseInt(this.textContent?.match(/\d+/)?.[0] || '0');
        this.textContent = `👍 ${currentLikes + 1}`;
        this.classList.add('liked');
      });
    });
    
    // Share functionality
    document.querySelectorAll('.share-btn').forEach(btn => {
      btn.addEventListener('click', function(this: HTMLButtonElement) {
        const article = this.closest('.article-card') || this.closest('.featured-post');
        const title = article?.querySelector('.article-title')?.textContent || 
                     article?.querySelector('.post-title')?.textContent || '';
        const url = window.location.href;
        
        if (navigator.share) {
          navigator.share({
            title: title,
            url: url
          });
        } else {
          navigator.clipboard.writeText(url).then(() => {
            alert('Article link copied to clipboard!');
          });
        }
      });
    });
    
    // Newsletter subscription
    const subscribeBtn = document.getElementById('subscribe-btn');
    if (subscribeBtn) {
      subscribeBtn.addEventListener('click', function() {
        const emailInput = document.getElementById('newsletter-email') as HTMLInputElement;
        const email = emailInput?.value || '';
        if (email && /\S+@\S+\.\S+/.test(email)) {
          alert('Thank you for subscribing to our fish nutrition newsletter!');
          if (emailInput) emailInput.value = '';
        } else {
          alert('Please enter a valid email address.');
        }
      });
    }
    
    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', function() {
        // Simulate loading more articles
        alert('More articles coming soon! We\'re adding new content regularly.');
      });
    }
  }, []);

  return null; // This component only adds interactivity, no UI
}