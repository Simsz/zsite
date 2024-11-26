import { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"


interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Show success message
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="bg-[#FFCC00] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black mb-4">Get In Touch</h2>
          <p className="text-black/80 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-black p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[#FFCC00] text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border-2 border-[#FFCC00]/30 rounded-xl 
                    focus:border-[#FFCC00] focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/20
                    text-[#FFCC00] placeholder:text-[#FFCC00]/50 transition-all duration-200"
                  placeholder="Your name"
                  disabled={isSending}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#FFCC00] text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border-2 border-[#FFCC00]/30 rounded-xl 
                    focus:border-[#FFCC00] focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/20
                    text-[#FFCC00] placeholder:text-[#FFCC00]/50 transition-all duration-200"
                  placeholder="your.email@example.com"
                  disabled={isSending}
                  required
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="message" className="block text-[#FFCC00] text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black border-2 border-[#FFCC00]/30 rounded-xl 
                    focus:border-[#FFCC00] focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/20
                    text-[#FFCC00] placeholder:text-[#FFCC00]/50 transition-all duration-200 resize-none"
                  placeholder="Your message..."
                  disabled={isSending}
                  required
                />
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full px-6 py-3 bg-[#FFCC00] text-black rounded-xl font-medium
                    hover:bg-[#FFCC00]/90 focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/50
                    disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200
                    flex items-center justify-center gap-2 group"
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;