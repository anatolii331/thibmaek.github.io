import React from 'react';
import { object } from 'prop-types';

import { Tags } from '../components/post/';

import { PostHelmet } from '../components/helmet/';

import styles from './Post.module.css';

import computeDateFormat from '../lib/computeDateFormat';
import getFirstImageFromHTML from '../lib/getFirstImageFromHTML';

const PostPage = ({ data }) => {
  const { title, date, body, tags } = data.contentfulPost;
  const { childMarkdownRemark: post } = body;
  const ogImageSrc = getFirstImageFromHTML(post.html);

  return (
    <section>
      <PostHelmet
        meta={{ content: ogImageSrc, name: `og:image` }}
        title={title}
      />
      <header className={styles.header}>
        <h1>{title}</h1>
        <time>
          {computeDateFormat(date)} — {post.timeToRead} min. read
        </time>
        {tags ? (
          <div className={styles.tags}>
            <span>Filed under:</span>
            <Tags tags={tags} />
          </div>
        ) : null}
      </header>
      <article className={styles.articleContainer} dangerouslySetInnerHTML={{ __html: post.html }} />
    </section>
  );
};

PostPage.propTypes = {
  data: object.isRequired,
};

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      date
      tags
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`;

export default PostPage;
