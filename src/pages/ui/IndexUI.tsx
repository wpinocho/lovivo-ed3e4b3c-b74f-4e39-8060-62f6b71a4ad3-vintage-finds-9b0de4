import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Sparkles, ShoppingBag, Shield, Recycle } from 'lucide-react';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02ek0yNCA0MmMzLjMxMyAwIDYgMi42ODcgNiA2cy0yLjY4NyA2LTYgNi02LTIuNjg3LTYtNiAyLjY4Ny02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Curated Vintage Fashion</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Buy & Sell
              <span className="block text-secondary">Vintage Treasures</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Discover one-of-a-kind secondhand fashion. Sustainable style with character and history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8"
                onClick={handleShowAllProducts}
              >
                Explore Finds
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold text-lg px-8"
              >
                Sell Your Items
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 rounded-full p-4 mb-3">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Authenticated Items</h3>
              <p className="text-muted-foreground">Every piece is verified for authenticity and quality</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 rounded-full p-4 mb-3">
                <Recycle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sustainable Fashion</h3>
              <p className="text-muted-foreground">Reduce waste, embrace circular fashion</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 rounded-full p-4 mb-3">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Unique Finds</h3>
              <p className="text-muted-foreground">One-of-a-kind pieces you won't find anywhere else</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Curated Collections</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Handpicked vintage pieces organized by era, brand, and condition
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'}` 
                  : 'Latest Arrivals'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.description
                  : 'Fresh vintage finds added daily'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
              >
                View All
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-card rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products available in this collection yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Care Guide Section */}
      <section className="py-16 bg-background border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-medium text-primary">Vintage Care</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Care for Your Vintage Pieces
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vintage clothing requires special attention to maintain its beauty and longevity. 
                Our care guide helps you preserve your treasures for years to come.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Gentle Washing</h3>
                    <p className="text-muted-foreground">Hand wash or use delicate cycle with cold water</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Proper Storage</h3>
                    <p className="text-muted-foreground">Store in cool, dry place away from direct sunlight</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Air Dry</h3>
                    <p className="text-muted-foreground">Avoid tumble drying to preserve fabric integrity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=800&fit=crop" 
                  alt="Vintage clothing care" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                <p className="font-bold text-2xl">100%</p>
                <p className="text-sm">Sustainable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent/90 to-accent/80 text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Next Vintage Treasure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of fashion lovers embracing sustainable, unique style
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-12"
            onClick={handleShowAllProducts}
          >
            Explore Finds Now
          </Button>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};