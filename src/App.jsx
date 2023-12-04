import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error('データの取得エラー:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>日本大学文理学部情報科学科 Webプログラミングの演習課題</h1>
      <p>張松</p>
      <p>5421005</p>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div>
          <h2>サードパーティWeb APIから取得したデータ</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
