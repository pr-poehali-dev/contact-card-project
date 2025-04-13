import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function VisitCard() {
  // Данные контакта
  const contact = {
    name: "Иван Иванов",
    position: "Старший разработчик",
    phone: "+7 (999) 123-45-67",
    email: "ivan@example.com",
    address: "г. Москва, ул. Примерная, д. 123",
    website: "www.example.com",
    github: "github.com/ivanivanov",
    linkedin: "linkedin.com/in/ivanivanov",
    avatarUrl: "/placeholder.svg",
  };

  const initials = contact.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-primary/20">
      <CardHeader className="pb-2 flex flex-col items-center">
        <Avatar className="h-32 w-32 mb-4 border-2 border-primary">
          <AvatarImage src={contact.avatarUrl} alt={contact.name} />
          <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-3xl font-bold text-center">
          {contact.name}
        </CardTitle>
        <p className="text-muted-foreground text-center text-lg mt-1">{contact.position}</p>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6 space-y-5">
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-primary" />
          <a href={`tel:${contact.phone}`} className="hover:underline">
            {contact.phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-primary" />
          <a href={`mailto:${contact.email}`} className="hover:underline">
            {contact.email}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <span>{contact.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Globe className="h-5 w-5 text-primary" />
          <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {contact.website}
          </a>
        </div>

        <Separator className="my-2" />
        
        <div className="flex justify-center gap-4 pt-2">
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
