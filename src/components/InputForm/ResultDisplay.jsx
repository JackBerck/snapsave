import React from "react";
import FacebookResultDisplay from "../ResultDisplay/facebook";
import InstagramResultDisplay from "../ResultDisplay/instagram";
import TwitterResultDisplay from "../ResultDisplay/twitter";
import TiktokResultDisplay from "../ResultDisplay/tiktok";

export default function ResultDisplay({ url, apiData }) {
  return (
    <>
      {url.indexOf("facebook.com") !== -1 && (
        <FacebookResultDisplay apiData={apiData} />
      )}
      {url.indexOf("instagram.com") !== -1 && (
        <InstagramResultDisplay apiData={apiData} />
      )}
      {url.indexOf("x.com") !== -1 && (
        <TwitterResultDisplay apiData={apiData} />
      )}
      {url.indexOf("tiktok.com") !== -1 && (
        <TiktokResultDisplay apiData={apiData} />
      )}
    </>
  );
}
