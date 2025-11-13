/**
 * EDITABLE ROUTE COMPONENT - Shop
 * Página de tienda con filtros
 */

import { useParams } from 'react-router-dom'
import { ShopUI } from './ui/ShopUI'

export default function Shop() {
  const { category, subcategory } = useParams()
  
  return <ShopUI category={category} subcategory={subcategory} />
}