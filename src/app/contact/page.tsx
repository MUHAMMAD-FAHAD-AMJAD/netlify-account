
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Breadcrumbs from "@/components/products/Breadcrumbs";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["Chak No 27 SB,", "Tehsil and District Sargodha,", "Punjab, Pakistan"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+92 345 2902229"],
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["maherzaraimarkaz2727@gmail.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
  },
];

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    e.currentTarget.reset();
  };

  return (
    <div className="bg-gray-50/50">
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                     <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">Contact Us</h1>
                     <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We're here to help! Whether you have a question about our products, need assistance with an order, or just want to give feedback, we'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {contactDetails.map((detail, index) => (
                        <Card key={index} className="text-center border-none shadow-lg rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-2">
                             <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                                <detail.icon className="h-8 w-8 text-primary" />
                             </div>
                            <CardHeader className="p-0">
                                <CardTitle className="text-xl font-bold text-gray-800">{detail.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                {detail.lines.map((line, i) => (
                                    <p key={i} className="text-muted-foreground">{line}</p>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="shadow-xl rounded-2xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold">Send Us a Message</CardTitle>
                         <p className="text-muted-foreground pt-2">
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Your Name</Label>
                                    <Input id="name" name="name" required className="h-12 rounded-lg" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Your Email</Label>
                                    <Input id="email" name="email" type="email" required className="h-12 rounded-lg" placeholder="you@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" name="subject" required className="h-12 rounded-lg" placeholder="e.g., Question about an order" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" name="message" required className="min-h-[150px] rounded-lg" placeholder="Write your message here..." />
                            </div>
                            <div className="text-center">
                                <Button type="submit" size="lg" className="h-14 px-10 text-lg rounded-full w-full sm:w-auto bg-black text-white hover:bg-gray-800">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
