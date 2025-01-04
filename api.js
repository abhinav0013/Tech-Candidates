import axios from 'axios';

export const fetchNews = async (query) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query,
        apiKey: 'your-news-api-key'
      }
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export const filterArticles = (articles, filters) => {
  return articles.filter(article => {
    const matchesAuthor = !filters.author || article.author.includes(filters.author);
    const matchesDate = !filters.dateRange || (new Date(article.publishedAt) >= filters.dateRange.start && new Date(article.publishedAt) <= filters.dateRange.end);
    const matchesType = !filters.type || article.type === filters.type;
    return matchesAuthor && matchesDate && matchesType;
  });
};