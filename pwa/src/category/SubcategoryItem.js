import React from 'react'
import { Link } from 'react-router-dom'

export default function SubcategoryItem({ subcategory }) {
  return (
    <li><Link to={`/subcategory/${subcategory.id}`}>{subcategory.name}</Link></li>
  )
}
