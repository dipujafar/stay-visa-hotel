/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calendar from "./Calendar";

const RoomReservation = ({room}) => {
    // const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(" ")[0])
    // const totalPrice = totalDays * room?.price;
    return (
        <div className="border-xl border border-neutral-200 overflow-hidden bg-white ">
            <div className="flex item-center gap-1 p-4">
                <p className="text-2xl font-semibold">$ {room?.price}</p>
                <p className="font-light text-neutral-600">night</p>
                <hr />
            </div>
            <div className="flex justify-center">
            <Calendar></Calendar>
            </div>
            <hr />
            <div className="p-4">
                <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="p-4 flex item-center justify-between font-semibold text-lg">
                <p>Total</p>
                <p>$ {room?.price}</p>
            </div>
        </div>
    );
};

export default RoomReservation;