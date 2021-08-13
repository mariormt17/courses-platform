import { GET_ALL_COURSES, GET_ALL_POSTS, GET_ALL_SPECIALTIES, GET_ALL_TEACHERS, GET_CLASS, GET_COURSE, GET_POST, GET_SPECIALTY } from "./actions"

export const postReducer = (state = {}, action) => {
  if (action.type === GET_ALL_POSTS) {
    return {
      ...state,
      posts: action.posts
    }
  }

  if (action.type === GET_POST) {
    return {
      ...state,
      post: action.post
    }
  }

  return state
}

export const specialtyReducer = (state = {}, action) => {
  if (action.type === GET_ALL_SPECIALTIES) {
    return {
      ...state,
      specialties: action.specialties
    }
  }

  if (action.type === GET_SPECIALTY) {
    return {
      ...state,
      specialty: action.specialty
    }
  }

  return state
}

export const courseReducer = (state = {}, action) => {
  if (action.type === GET_ALL_COURSES) {
    return {
      ...state,
      courses: action.courses
    }
  }

  if (action.type === GET_COURSE) {
    return {
      ...state,
      course: action.course
    }
  }

  return state
}

export const teacherReducer = (state = {}, action) => {
  if (action.type === GET_ALL_TEACHERS) {
    return {
      ...state,
      teachers: action.teachers
    }
  }

  return state
}

export const classReducer = (state = {}, action) => {
  if (action.type === GET_CLASS) {
    return {
      ...state,
      class_data: action.class_data
    }
  }

  return state
}
