import { combineReducers } from 'redux';
import userReducer from './userReducer'
import tourDatesReducer from './tourDatesReducer'
import videosReducer from './videosReducer'
import photosReducer from './photosReducer'
import newsReducer from './newsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  tourDates: tourDatesReducer,
  videos: videosReducer,
  photos: photosReducer,
  news: newsReducer
})

export default rootReducer