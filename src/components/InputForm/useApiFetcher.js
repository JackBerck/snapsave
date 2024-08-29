import { useState, useEffect } from "react";

export default function useApiFetcher(encodedValue) {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (encodedValue) {
      const decodedUrl = decodeURIComponent(encodedValue);
      let apiUrl = "";
      if (decodedUrl.includes("facebook.com")) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/fbdl?url=${encodedValue}`;
      } else if (decodedUrl.includes("instagram.com")) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/igdl?url=${encodedValue}`;
      } else if (decodedUrl.includes("tiktok.com")) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/ttdl?url=${encodedValue}`;
      } else if (decodedUrl.includes("twitter.com")) {
        apiUrl = `https://api.ryzendesu.vip/api/downloader/twitter?url=${encodedValue}`;
      } else {
        alert("URL tidak valid. Hanya mendukung URL dari facebook.com.");
      }
      setLoading(true);
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setApiData(data);
          setLoading(false);
          console.log(encodedValue);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [encodedValue]);

  return { apiData, loading, error };
}
