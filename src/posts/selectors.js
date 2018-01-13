import _ from 'lodash'
import { createSelector } from 'reselect'

const postsState = (state) => state.entities.posts
const usersState = (state) => state.entities.users
const recentState = (state) => state.control.recent
const trendingState = (state) => state.control.trending
const popularsState = (state) => state.control.populars
const readerState = (state) => state.control.postReader

export const recentSelector = createSelector(
  postsState,
  recentState,
  (posts, recent) => {
    return _.map(recent.ids, (id) => posts[id])
  }
)

export const trendingSelector = createSelector(
  postsState,
  trendingState,
  (posts, trending) => {
    return _.map(trending.ids, (id) => posts[id])
  }
)

export const popularsSelector = createSelector(
  postsState,
  popularsState,
  (posts, populars) => {
    return _.map(populars.ids, (id) => posts[id])
  }
)

export const postReadSelector = createSelector(
  readerState,
  postsState,
  (reader, posts) => posts[reader] ? posts[reader].canonical : null
)

export const postOwnerSelector = createSelector(
  readerState,
  postsState,
  usersState,
  (reader, posts, users) => {
    const post = posts[reader]

    if (!post) {
      return null
    }

    return users[post.owner] || null
  }
)
