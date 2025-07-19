
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Check, Zap, Code, Rocket, Star, Instagram, Youtube } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">My Awesome App</h1>
        <nav>
          <Button variant="ghost">Sign In</Button>
          <Button>Get Started</Button>
        </nav>
      </header>

      <main className="flex-grow">
        <section id="hero" className="text-center py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              The Future of Awesome is Here
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover a new way to be more productive and creative. Our platform provides the tools you need to succeed and stand out.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Start Your Free Trial</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">Features You'll Love</h3>
              <p className="text-muted-foreground mt-2">Everything you need to boost your workflow.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Experience unparalleled speed and performance that keeps you in the flow.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Developer Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Easy-to-use APIs and documentation that developers will adore.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Ready to Launch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Get started in minutes and deploy your projects with a single click.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">What Our Users Say</h3>
              <p className="text-muted-foreground mt-2">Real stories from happy customers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <Star /><Star /><Star /><Star /><Star />
                    </div>
                  </div>
                  <blockquote className="text-lg italic">"This app has revolutionized my workflow. I can't imagine working without it now. Highly recommended!"</blockquote>
                  <p className="text-right font-semibold mt-4">- Alex Johnson</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                   <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <Star /><Star /><Star /><Star /><Star />
                    </div>
                  </div>
                  <blockquote className="text-lg italic">"An essential tool for any serious professional. The features are top-notch and the support is incredible."</blockquote>
                  <p className="text-right font-semibold mt-4">- Samantha Lee</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h3>
              <p className="text-muted-foreground mt-2">Choose the plan that's right for you.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <Card className="flex-1 max-w-md">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For individuals and small teams</CardDescription>
                  <p className="text-4xl font-bold pt-4">$10<span className="text-lg font-normal text-muted-foreground">/mo</span></p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> 5 Projects</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> Basic Analytics</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> Community Support</li>
                  </ul>
                  <Button className="w-full mt-6">Choose Basic</Button>
                </CardContent>
              </Card>
              <Card className="flex-1 max-w-md border-primary shadow-lg">
                 <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For growing businesses and power users</CardDescription>
                  <p className="text-4xl font-bold pt-4">$25<span className="text-lg font-normal text-muted-foreground">/mo</span></p>
                </CardHeader>
                <CardContent>
                   <ul className="space-y-4">
                    <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> Unlimited Projects</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> Advanced Analytics</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> Priority Support</li>
                  </ul>
                  <Button className="w-full mt-6">Choose Pro</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-xl font-bold mb-2">My Awesome App</h2>
              <p className="text-muted-foreground text-sm">The future of awesome is here. Build faster, better, and more beautifully than ever before.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} My Awesome App. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
