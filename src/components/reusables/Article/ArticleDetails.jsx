// react libraries
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @desc renders author's detail
 * @return author
*/
const ArticleDetails = ({
  publishedDate,
  readTime,
  authorThumbnail,
  authorUsername
}) => (
  <div className="details d-flex justify-content-flex-start align-items-center">
    <div>
      <div className="thumbnail">{authorThumbnail}</div>
    </div>
    <div>
      <div className="username">{authorUsername}</div>
    </div>
    <div className="notice d-flex justify-content-flex-start align-items-center">
      <div className="date">{publishedDate}</div>
      <div className="read-time">{readTime}</div>
    </div>
</div>
);

ArticleDetails.propTypes = {
  publishedDate: PropTypes.string.isRequired,
  authorUsername: PropTypes.string,
  authorThumbnail: PropTypes.string,
  readTime: PropTypes.string.isRequired,
};

export default ArticleDetails;
