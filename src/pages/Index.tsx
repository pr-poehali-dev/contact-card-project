import ContactCard from "@/components/ContactCard";

export default function Index() {
  // Данные контакта (в реальном приложении можно получать из API)
  const contactInfo = {
    name: "Иван Иванов",
    position: "Старший разработчик",
    phone: "+7 (999) 123-45-67",
    email: "ivan@example.com",
    address: "г. Москва, ул. Примерная, д. 123, офис 456",
    avatarUrl: "/placeholder.svg", // Используем плейсхолдер из проекта
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-black p-4">
      <ContactCard contact={contactInfo} />
    </div>
  );
}
