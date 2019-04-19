const tourDatesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TOUR_DATES':
      return action.dates
    default:
      return state
  }
}

export default tourDatesReducer