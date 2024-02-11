/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import Calendar from "./Calendar";



const RoomReservation = ({room}) => {
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
        </div>
    );
};

export default RoomReservation;