import { useState, useEffect } from 'react';
import { fetchNews, filterArticles } from '../utils/api';
import { calculatePayout } from '../utils/payout'; // Assume payout calculation is here

export default function Dashboard() {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({});
  const [payoutRate, setPayoutRate] = useState(0);

  useEffect(() => {
    fetchNews('technology').then(setArticles);
  }, []);

  const filteredArticles = filterArticles(articles, filters);
  const payout = calculatePayout(filteredArticles, payoutRate);

  return (
    <div className="dashboard-container">
      <div className="news-section">
        {/* Render NewsSection component here */}
      </div>
      <div className="payout-section">
        {/* Render PayoutSection component here */}
      </div>
    </div>
  );
}