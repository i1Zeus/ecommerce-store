"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import NoResults from "@/components/ui/no-results";

interface SummaryProps {}

const Summary: React.FC<SummaryProps> = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    //? return total + Number(item.price) * item.quantity in future update
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: items.map((item) => item.id) }
    );

    window.location = response.data.url;
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment was successful");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams, removeAll]);

  return (
    <div
      className="
      mt-16
      rounded-lg
      bg-gray-50
      px-4
      py-6
      sm:py-6
      lg:col-span-5
      lg:mt-0
      lg:p-8
      
    "
    >
      <h2 className="text-lg font-medium text-gray-900 first-letter:font-bold first-letter:text-2xl">
        Order Summery
      </h2>
      {items.length !== 0 ? (
        <>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-t-[2px] border-gray-200 pt-4">
              <div className="text-base font-medium text-gray-900">
                Order Total
              </div>
              <Currency value={totalPrice} />
            </div>
          </div>
          <Button className="w-full mt-6" onClick={onCheckout}>
            Check Out
          </Button>
        </>
      ) : (
        <>
          <NoResults />
        </>
      )}
    </div>
  );
};

export default Summary;
