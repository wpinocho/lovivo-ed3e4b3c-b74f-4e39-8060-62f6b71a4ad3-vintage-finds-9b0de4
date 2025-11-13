import { ReactNode, useState } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Menu, ChevronDown } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const header = (
    <div className={`py-4 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <BrandLogoLeft />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center space-x-1">
              {/* Women Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium">
                  Women
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[600px] p-6" align="start">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-primary">By Category</h3>
                      <div className="space-y-2">
                        <Link to="/shop/women/tops" className="block text-sm hover:text-primary transition-colors">Tops & Tees</Link>
                        <Link to="/shop/women/bottoms" className="block text-sm hover:text-primary transition-colors">Bottoms</Link>
                        <Link to="/shop/women/dresses" className="block text-sm hover:text-primary transition-colors">Dresses</Link>
                        <Link to="/shop/women/outerwear" className="block text-sm hover:text-primary transition-colors">Outerwear</Link>
                        <Link to="/shop/women/shoes" className="block text-sm hover:text-primary transition-colors">Shoes</Link>
                        <Link to="/shop/women/accessories" className="block text-sm hover:text-primary transition-colors">Accessories</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-primary">By Era</h3>
                      <div className="space-y-2">
                        <Link to="/shop/era/70s" className="block text-sm hover:text-primary transition-colors">70s Vintage</Link>
                        <Link to="/shop/era/80s" className="block text-sm hover:text-primary transition-colors">80s Retro</Link>
                        <Link to="/shop/era/90s" className="block text-sm hover:text-primary transition-colors">90s Grunge</Link>
                        <Link to="/shop/era/y2k" className="block text-sm hover:text-primary transition-colors">Y2K</Link>
                        <Link to="/shop/era/2000s" className="block text-sm hover:text-primary transition-colors">Early 2000s</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-primary">By Brand</h3>
                      <div className="space-y-2">
                        <Link to="/shop/brands/designer" className="block text-sm hover:text-primary transition-colors">Designer</Link>
                        <Link to="/shop/brands/levis" className="block text-sm hover:text-primary transition-colors">Levi's</Link>
                        <Link to="/shop/brands/carhartt" className="block text-sm hover:text-primary transition-colors">Carhartt</Link>
                        <Link to="/shop/brands/nike" className="block text-sm hover:text-primary transition-colors">Nike Vintage</Link>
                        <Link to="/shop/brands/band-tees" className="block text-sm hover:text-primary transition-colors">Band Tees</Link>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Men Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium">
                  Men
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[600px] p-6" align="start">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-primary">By Category</h3>
                      <div className="space-y-2">
                        <Link to="/shop/men/tops" className="block text-sm hover:text-primary transition-colors">Shirts & Tees</Link>
                        <Link to="/shop/men/bottoms" className="block text-sm hover:text-primary transition-colors">Pants & Jeans</Link>
                        <Link to="/shop/men/outerwear" className="block text-sm hover:text-primary transition-colors">Jackets & Coats</Link>
                        <Link to="/shop/men/shoes" className="block text-sm hover:text-primary transition-colors">Footwear</Link>
                        <Link to="/shop/men/accessories" className="block text-sm hover:text-primary transition-colors">Accessories</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-primary">By Style</h3>
                      <div className="space-y-2">
                        <Link to="/shop/style/workwear" className="block text-sm hover:text-primary transition-colors">Workwear</Link>
                        <Link to="/shop/style/streetwear" className="block text-sm hover:text-primary transition-colors">Streetwear</Link>
                        <Link to="/shop/style/preppy" className="block text-sm hover:text-primary transition-colors">Preppy</Link>
                        <Link to="/shop/style/grunge" className="block text-sm hover:text-primary transition-colors">Grunge</Link>
                        <Link to="/shop/style/athletic" className="block text-sm hover:text-primary transition-colors">Athletic</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-sm text-primary">Featured</h3>
                      <div className="space-y-2">
                        <Link to="/shop/new-arrivals" className="block text-sm hover:text-primary transition-colors font-semibold">New Arrivals</Link>
                        <Link to="/shop/under-50" className="block text-sm hover:text-primary transition-colors">Under $50</Link>
                        <Link to="/shop/rare-finds" className="block text-sm hover:text-primary transition-colors">Rare Finds</Link>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Unisex Link */}
              <Link 
                to="/shop/unisex" 
                className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Unisex
              </Link>

              {/* Shop by Condition Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium">
                  Condition
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[280px] p-4" align="start">
                  <div className="space-y-3">
                    <Link to="/shop/condition/excellent" className="block">
                      <div className="p-3 rounded-lg hover:bg-accent transition-colors">
                        <div className="font-semibold text-sm mb-1">Excellent</div>
                        <div className="text-xs text-muted-foreground">Like new, minimal wear</div>
                      </div>
                    </Link>
                    <Link to="/shop/condition/very-good" className="block">
                      <div className="p-3 rounded-lg hover:bg-accent transition-colors">
                        <div className="font-semibold text-sm mb-1">Very Good</div>
                        <div className="text-xs text-muted-foreground">Gently used, great shape</div>
                      </div>
                    </Link>
                    <Link to="/shop/condition/good" className="block">
                      <div className="p-3 rounded-lg hover:bg-accent transition-colors">
                        <div className="font-semibold text-sm mb-1">Good</div>
                        <div className="text-xs text-muted-foreground">Normal wear, authentic vintage</div>
                      </div>
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Sell Link */}
              <Link 
                to="/sell" 
                className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Sell
              </Link>

              {/* Blog Link */}
              <Link 
                to="/blog" 
                className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Mobile Menu & Profile & Cart */}
          <div className="flex items-center space-x-2">
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  
                  <div className="mt-6 space-y-1">
                    {/* Women Section */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left font-medium hover:bg-accent rounded-lg">
                        Women
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 space-y-1">
                        <div className="py-2">
                          <p className="text-xs font-semibold text-primary mb-2 px-4">By Category</p>
                          <Link to="/shop/women/tops" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Tops & Tees</Link>
                          <Link to="/shop/women/bottoms" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Bottoms</Link>
                          <Link to="/shop/women/dresses" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Dresses</Link>
                          <Link to="/shop/women/outerwear" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Outerwear</Link>
                        </div>
                        <div className="py-2">
                          <p className="text-xs font-semibold text-primary mb-2 px-4">By Era</p>
                          <Link to="/shop/era/70s" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>70s Vintage</Link>
                          <Link to="/shop/era/80s" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>80s Retro</Link>
                          <Link to="/shop/era/90s" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>90s Grunge</Link>
                          <Link to="/shop/era/y2k" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Y2K</Link>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Men Section */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left font-medium hover:bg-accent rounded-lg">
                        Men
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 space-y-1">
                        <div className="py-2">
                          <p className="text-xs font-semibold text-primary mb-2 px-4">By Category</p>
                          <Link to="/shop/men/tops" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Shirts & Tees</Link>
                          <Link to="/shop/men/bottoms" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Pants & Jeans</Link>
                          <Link to="/shop/men/outerwear" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Jackets & Coats</Link>
                        </div>
                        <div className="py-2">
                          <p className="text-xs font-semibold text-primary mb-2 px-4">By Style</p>
                          <Link to="/shop/style/workwear" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Workwear</Link>
                          <Link to="/shop/style/streetwear" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Streetwear</Link>
                          <Link to="/shop/style/grunge" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Grunge</Link>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Unisex Link */}
                    <Link 
                      to="/shop/unisex" 
                      className="block px-4 py-3 font-medium hover:bg-accent rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Unisex
                    </Link>

                    {/* Condition Section */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left font-medium hover:bg-accent rounded-lg">
                        Condition
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 space-y-1">
                        <Link to="/shop/condition/excellent" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Excellent</Link>
                        <Link to="/shop/condition/very-good" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Very Good</Link>
                        <Link to="/shop/condition/good" className="block px-4 py-2 text-sm hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Good</Link>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Sell Link */}
                    <Link 
                      to="/sell" 
                      className="block px-4 py-3 font-medium hover:bg-accent rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sell
                    </Link>

                    {/* Blog Link */}
                    <Link 
                      to="/blog" 
                      className="block px-4 py-3 font-medium hover:bg-accent rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-foreground text-background py-12 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-2">Vintage Market</div>
            <p className="text-background/70">
              Sustainable secondhand fashion for the conscious shopper
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-background/70 hover:text-background transition-colors"
              >
                Shop
              </Link>
              <Link 
                to="/sell" 
                className="block text-background/70 hover:text-background transition-colors"
              >
                Sell With Us
              </Link>
              <Link 
                to="/blog" 
                className="block text-background/70 hover:text-background transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-background/70">
          <p>&copy; 2024 Vintage Market. Sustainable fashion, timeless style.</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}