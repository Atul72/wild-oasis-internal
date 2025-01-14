import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export const useBookings = () => {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");

  // const filterValues = [
  //   {
  //     field: "totalPrice",
  //     value: 2000,
  //     method: "gte",
  //   },
  //   {
  //     field: "status",
  //     value: "unconfirmed",
  //     method: "eq",
  //   },
  // ];

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  // Sorting
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  if (error) throw new Error("Bookings could not get loaded");

  return { isLoading, bookings, count };
};
