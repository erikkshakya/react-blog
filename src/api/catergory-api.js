import axios from 'axios'
import {baseUrl} from './articles-api'

export const fetchCategories = () => axios.get(`${baseUrl}/category/`)