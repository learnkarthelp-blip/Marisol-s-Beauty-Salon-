import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Booking } from '../backend';

interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
}

export function useSubmitBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: BookingFormData) => {
      if (!actor) throw new Error('Actor not initialized');
      
      const bookingId = await actor.submitBooking(
        formData.fullName,
        formData.phoneNumber,
        formData.email,
        formData.service,
        formData.preferredDate,
        formData.preferredTime
      );
      
      return bookingId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
}

export function useGetAllBookings() {
  const { actor, isFetching } = useActor();

  return useQuery<Booking[]>({
    queryKey: ['bookings'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBookings();
    },
    enabled: !!actor && !isFetching,
  });
}
