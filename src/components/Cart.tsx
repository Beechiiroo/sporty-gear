
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, CreditCard } from "lucide-react";
import { useCart } from '@/stores/CartStore';
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Cart = () => {
  const { items, removeItem, updateQuantity, total } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const { toast } = useToast();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };
  
  const handleCompleteOrder = () => {
    // Simulating order processing
    setTimeout(() => {
      setIsOrderComplete(true);
      toast({
        title: "Commande confirmée!",
        description: "Merci pour votre achat. Vous recevrez bientôt un email de confirmation.",
      });
    }, 1500);
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle>Votre Panier</SheetTitle>
          </SheetHeader>
          
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
              <div className="bg-gray-100 p-6 rounded-full">
                <ShoppingCart className="h-12 w-12 text-gray-400" />
              </div>
              <p className="text-center text-gray-500">Votre panier est vide</p>
              <Button variant="outline" asChild>
                <SheetTrigger>Continuer vos achats</SheetTrigger>
              </Button>
            </div>
          ) : (
            <>
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-6 py-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{item.name}</h3>
                        <p className="text-sm text-gray-500">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 w-7 p-0"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            -
                          </Button>
                          <span className="text-sm w-5 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 w-7 p-0"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <SheetFooter className="border-t pt-4">
                <div className="w-full space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold text-xl">{formatPrice(total)}</span>
                  </div>
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleCheckout}
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Passer à la caisse
                  </Button>
                </div>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* Checkout Dialog */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Finaliser votre commande</DialogTitle>
          </DialogHeader>
          
          {!isOrderComplete ? (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" placeholder="Entrez votre nom" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Input id="address" placeholder="Votre adresse de livraison" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="card">Numéro de carte</Label>
                  <Input id="card" placeholder="4242 4242 4242 4242" />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Date exp.</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  className="w-full" 
                  onClick={handleCompleteOrder}
                >
                  Payer {formatPrice(total)}
                </Button>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium">Commande confirmée!</h3>
                <p className="text-gray-500 mt-2">
                  Merci pour votre achat. Vous recevrez bientôt un email de confirmation.
                </p>
              </div>
              <Button onClick={() => {
                setIsOrderComplete(false);
                setIsCheckoutOpen(false);
              }}>
                Retourner à la boutique
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Cart;
