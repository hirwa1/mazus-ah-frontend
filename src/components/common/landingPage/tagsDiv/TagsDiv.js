/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tag from '../tag/Tag';
import './TagsDiv.scss';

const TagsDiv = (props) => {
  const { article: { tags } } = props;
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    setAllTags(tags);
  }, [tags]);

  return (
    <div className="tags-container">
      <p>Tags</p>
      <div className="article-tags">
        {allTags.map(tag => <Tag key={tag} tagName={tag} />)}
      </div>
    </div>
  );
};


TagsDiv.propTypes = {
  article: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  article: state.article,
});

export default connect(
  mapStateToProps,
  null,
)(TagsDiv);
