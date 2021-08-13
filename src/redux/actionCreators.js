import Axios from "Axios";
import {
  GET_ALL_COURSES,
  GET_ALL_POSTS,
  GET_ALL_SPECIALTIES,
  GET_ALL_TEACHERS,
  GET_CLASS,
  GET_COURSE,
  GET_POST,
  GET_SPECIALTY
} from "./actions";

const API_URL = process.env.REACT_APP_API_URL;

export const getAllPosts = () => dispatch => {
  Axios.get(`${API_URL}/posts`)
  .then(response => {
      return dispatch({
        type: GET_ALL_POSTS,
        posts: response.data
      })
    }
  )
}

export const getAllSpecialties = () => dispatch => {
  Axios.get(`${API_URL}/specialties`)
  .then(response => {
      return dispatch({
        type: GET_ALL_SPECIALTIES,
        specialties: response.data
      })
    }
  )
}

export const getAllCourses = () => dispatch => {
  Axios.get(`${API_URL}/courses`)
  .then(response => {
      return dispatch({
        type: GET_ALL_COURSES,
        courses: response.data
      })
    }
  )
}

export const getAllTeachers = () => dispatch => {
  Axios.get(`${API_URL}/teachers`)
  .then(response => {
      return dispatch({
        type: GET_ALL_TEACHERS,
        teachers: response.data
      })
    }
  )
}

export const getPost = (id) => dispatch => {
  Axios.get(`${API_URL}/posts/${id}`)
  .then(response => {
      return dispatch({
        type: GET_POST,
        post: response.data
      })
    }
  )
}

export const getSpecialty = (id) => dispatch => {
  Axios.get(`${API_URL}/specialties/${id}`)
  .then(response => {
      return dispatch({
        type: GET_SPECIALTY,
        specialty: response.data
      })
    }
  )
}

export const getCourses = (id) => dispatch => {
  Axios.get(`${API_URL}/courses/${id}`)
  .then(response => {
      return dispatch({
        type: GET_COURSE,
        course: response.data
      })
    }
  )
}

export const getClass = (id) => dispatch => {
  Axios.get(`${API_URL}/classes/${id}`)
  .then(response => {
      return dispatch({
        type: GET_CLASS,
        class_data: response.data
      })
    }
  )
}
