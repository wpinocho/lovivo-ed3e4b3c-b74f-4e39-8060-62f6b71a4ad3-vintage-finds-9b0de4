import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Package, DollarSign, Truck, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export const SellUI = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    brand: '',
    condition: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('¡Gracias! Nos pondremos en contacto pronto', {
      description: 'Revisaremos tu solicitud y te contactaremos en 24-48 horas'
    })
    setFormData({ name: '', email: '', description: '', brand: '', condition: '' })
  }

  return (
    <EcommerceTemplate>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Sell Your Vintage</h1>
            <p className="text-xl mb-8 text-white/90">
              Turn your closet into cash. We buy quality vintage and designer pieces.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Submit Items</h3>
              <p className="text-muted-foreground text-sm">
                Fill out the form with details about your vintage pieces
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">2. Get Approved</h3>
              <p className="text-muted-foreground text-sm">
                We review your items and send you an offer within 48 hours
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">3. Ship Free</h3>
              <p className="text-muted-foreground text-sm">
                We provide a prepaid shipping label - just pack and ship
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">4. Get Paid</h3>
              <p className="text-muted-foreground text-sm">
                Receive payment within 3 days of items arrival
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Submit Your Items</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="brand">Brand(s)</Label>
                  <Input
                    id="brand"
                    placeholder="e.g., Levi's, Carhartt, Nike"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="condition">Condition</Label>
                  <Input
                    id="condition"
                    placeholder="e.g., Excellent, Very Good, Good"
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Item Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your items - what they are, sizes, colors, any flaws, etc."
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Submit for Review
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Buy */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Buy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">We Love</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Designer vintage pieces</li>
                  <li>✓ 70s-90s authentic vintage</li>
                  <li>✓ Quality denim (Levi's, etc.)</li>
                  <li>✓ Leather jackets</li>
                  <li>✓ Band & graphic tees</li>
                  <li>✓ Vintage sportswear</li>
                  <li>✓ Workwear (Carhartt, Dickies)</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-destructive">We Don't Accept</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✗ Fast fashion brands</li>
                  <li>✗ Items with major damage</li>
                  <li>✗ Heavily stained pieces</li>
                  <li>✗ Replica/counterfeit items</li>
                  <li>✗ Modern mall brands</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  )
}