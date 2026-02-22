import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSubmitBooking } from '@/hooks/useQueries';
import { Calendar, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const services = [
  'Haircut & Styling',
  'Hair Coloring',
  'Hair Treatments',
  'Blow Dry',
  'Beauty Services',
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
  });

  const submitBookingMutation = useSubmitBooking();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.service || !formData.preferredDate || !formData.preferredTime) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await submitBookingMutation.mutateAsync(formData);
      toast.success('Booking submitted successfully! We will contact you soon to confirm.');
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
      });
    } catch (error) {
      toast.error('Failed to submit booking. Please try again or call us directly.');
    }
  };

  return (
    <section id="booking-form" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Book Your Appointment
            </h2>
            <p className="text-xl text-charcoal/70">
              Schedule your visit and let us take care of your beauty needs
            </p>
          </div>

          <Card className="border-2 border-rosegold/20 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-rosegold/10 to-cream">
              <CardTitle className="text-2xl font-serif text-charcoal flex items-center gap-2">
                <Calendar className="h-6 w-6 text-rosegold" />
                Appointment Details
              </CardTitle>
              <CardDescription className="text-charcoal/70">
                Fill in your information and we'll confirm your appointment shortly
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-charcoal font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="border-2 border-cream focus:border-rosegold"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="text-charcoal font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="border-2 border-cream focus:border-rosegold"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-charcoal font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-2 border-cream focus:border-rosegold"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-charcoal font-medium">
                    Select Service *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="border-2 border-cream focus:border-rosegold">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate" className="text-charcoal font-medium">
                      Preferred Date *
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="border-2 border-cream focus:border-rosegold"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime" className="text-charcoal font-medium">
                      Preferred Time *
                    </Label>
                    <Input
                      id="preferredTime"
                      type="time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="border-2 border-cream focus:border-rosegold"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitBookingMutation.isPending}
                  className="w-full bg-rosegold hover:bg-rosegold-dark text-white py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {submitBookingMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Booking Request'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
