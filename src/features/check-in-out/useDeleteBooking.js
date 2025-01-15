import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookingFunction } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBookingFunction(bookingId),
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("There was an error while deleting the booking");
    },
  });

  return { deleteBooking, isDeleting };
}
