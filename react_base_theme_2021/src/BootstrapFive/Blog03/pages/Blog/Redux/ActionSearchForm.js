import { actionTypes } from './ActionTypes'

export const ActionSearchForm = (query) => (
  {
    type: actionTypes.BLOG_THREE_SEARCH_FORM,
    query: query
  }
)