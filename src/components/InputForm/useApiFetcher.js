import { useState, useEffect } from "react";

export default function useApiFetcher(encodedValue) {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (encodedValue) {
      const decodedValue = decodeURIComponent(encodedValue);
      let apiUrl;

      if (decodedValue.indexOf("youtube.com") !== -1) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/ytdl?url=${encodedValue}`;
      } else if (decodedValue.indexOf("facebook.com") !== -1) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/fbdl?url=${encodedValue}`;
      } else if (decodedValue.indexOf("instagram.com") !== -1) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/igdl?url=${encodedValue}`;
      } else if (decodedValue.indexOf("x.com") !== -1) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/twitter?url=${encodedValue}`;
      } else if (decodedValue.indexOf("tiktok.com") !== -1) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/ttdl?url=${encodedValue}`;
      } else {
        alert("Invalid URL");
        return;
      }

      setLoading(true);
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setApiData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [encodedValue]);

  return { apiData, loading, error };
}
