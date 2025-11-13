import { useEffect, useState } from 'react'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { ProductCard } from '@/components/ProductCard'
import { supabase, type Product } from '@/lib/supabase'
import { STORE_ID } from '@/lib/config'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

interface ShopUIProps {
  category?: string
  subcategory?: string
}

export const ShopUI = ({ category, subcategory }: ShopUIProps) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [category, subcategory])

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('status', 'active')
        .eq('store_id', STORE_ID)
        .order('created_at', { ascending: false })

      if (error) throw error
      
      // Filter by category/subcategory if provided
      let filtered = data || []
      if (category || subcategory) {
        filtered = filtered.filter(product => {
          const tags = product.tags || []
          if (category) {
            return tags.some((tag: string) => 
              tag.toLowerCase().includes(category.toLowerCase())
            )
          }
          return true
        })
      }
      
      setProducts(filtered)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const getTitle = () => {
    if (subcategory) {
      return subcategory.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    }
    if (category) {
      return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    }
    return 'All Products'
  }

  const getDescription = () => {
    if (category === 'women') return 'Curated vintage fashion for women'
    if (category === 'men') return 'Authentic vintage pieces for men'
    if (category === 'unisex') return 'Vintage finds for everyone'
    if (category === 'era') return 'Shop by decade - authentic vintage from every era'
    if (category === 'condition') return 'Quality-checked secondhand fashion'
    if (category === 'brands') return 'Iconic brands, authentic vintage'
    if (category === 'style') return 'Find your aesthetic'
    return 'Discover unique secondhand fashion treasures'
  }

  return (
    <EcommerceTemplate>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              {category && (
                <Badge variant="secondary">
                  {category}
                </Badge>
              )}
              {subcategory && (
                <Badge variant="outline">
                  {subcategory}
                </Badge>
              )}
            </div>
            <h1 className="text-4xl font-bold mb-2">{getTitle()}</h1>
            <p className="text-lg text-muted-foreground">{getDescription()}</p>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-square rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Check back soon for new arrivals in this category
              </p>
            </div>
          )}
        </div>
      </div>
    </EcommerceTemplate>
  )
}