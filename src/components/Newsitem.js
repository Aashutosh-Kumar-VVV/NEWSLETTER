import React from "react";

const Newsitem =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date,source } =props;
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"50%"}}>
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://static.chasecdn.com/content/services/structured-image/image.desktopLarge.jpg/articles/thumbnail-image-large/market-volatility-2560x1440.jpg"
            }
            className="card-img-top"
            alt="img"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
