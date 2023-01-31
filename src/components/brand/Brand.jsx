import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand  section__padding">
      <div>
        <img src={google} alt="Google logo" />
      </div>
      <div>
        <img src={slack} alt="Slack logo" />
      </div>
      <div>
        <img src={google} alt="Atlassian logo" />
      </div>
      <div>
        <img src={dropbox} alt="Dropbox logo" />
      </div>
      <div>
        <img src={shopify} alt="Shopify logo" />
      </div>
    </div>
  );
};

export default Brand;
