import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

type ContactInfo = {
  name: string;
  position: string;
  phone: string;
  email: string;
  address: string;
  avatarUrl?: string;
};

interface ContactCardProps {
  contact: ContactInfo;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const initials = contact.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="pb-2 flex flex-col items-center">
        <Avatar className="h-24 w-24 mb-3">
          <AvatarImage src={contact.avatarUrl || ""} alt={contact.name} />
          <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-2xl font-bold text-center">
          {contact.name}
        </CardTitle>
        <p className="text-muted-foreground text-center">{contact.position}</p>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4 space-y-4">
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
      </CardContent>
    </Card>
  );
}
