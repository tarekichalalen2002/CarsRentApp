import React from 'react'
import {Menu , Transition} from '@headlessui/react'
import {DotsVerticalIcon} from '@heroicons/react/outline'
import {ChevronLeftIcon , ChevronRightIcon} from '@heroicons/react/solid'
import {
    add,
    compareAsc,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    isWithinInterval,
    parse,
    parseISO,
    startOfToday,
} from "date-fns";
import { Fragment , useState,useEffect } from 'react';
import { BookedOffers } from '@/utils/data';
import {AiFillPhone,AiOutlineMail} from 'react-icons/ai' 


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Calendar() {
    let today = startOfToday();
    let [selectedDay , setSelectedDay] = useState(today);
    let [currentMonth , setCurrentMonth] = useState(format(today,'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth)
    })

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, {months: -1})
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, {months: 1})
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    let [selectedDayBooking , setSelectedDayBooking] = useState(null)

    useEffect(() => {
        let selectedDayBookingInstance = BookedOffers.find((offer) => isWithinInterval(selectedDay, {start: parseISO(offer.start_day), end: parseISO(offer.end_day)}) )
        setSelectedDayBooking(selectedDayBookingInstance)
    }, [selectedDay])

    let [currentOffer , setCurrentOffer] = useState(null)
    
    useEffect(() => {
        let currentOfferInstance = BookedOffers.find((offer) => isWithinInterval(today, {start: parseISO(offer.start_day), end: parseISO(offer.end_day)}))
        setCurrentOffer(currentOfferInstance)
    },[])
    return (
        <div
        className='pt-16'
        >
            <div
            className='max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6'
            >
                <div
                className='md:grid md:grid-cols-2 md:divide-x md:divide-gray-200'
                >
                    <div
                    className='md:pr-14'
                    >
                        <div
                        className='flex items-center'
                        >
                            <h2
                            className='flex-auto font-semibold text-gray-900'
                            >
                                {format(firstDayCurrentMonth, "MMMM yyyy")}
                            </h2>
                            <button
                            type="button"
                            onClick={previousMonth}
                            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className='sr-only'>Previous month</span>
                                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                            <button
                            type="button"
                            onClick={nextMonth}
                            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className='sr-only'>Next month</span>
                                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                        <div
                        className='grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500'
                        >
                            <div>S</div>
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>T</div>
                            <div>F</div>
                            <div>S</div>
                        </div>
                        <div
                        className='grid grid-cols-7 mt-2 text-sm'
                        >
                            {days.map((day,dayIdx) => (
                                <div
                                key={day.toString()}
                                className = {classNames(
                                    dayIdx === 0 && colStartClasses[getDay(day)],
                                    "py-1.5"
                                )}
                                >
                                    <button
                                    type='button'
                                    onClick={() => setSelectedDay(day)}
                                    className={classNames(
                                        isEqual(day,selectedDay) && "text-white",
                                        !isEqual(day, selectedDay) && isToday(day) && "text-red-500",
                                        !isEqual(day,selectedDay) && !isToday(day) && isSameMonth(day,firstDayCurrentMonth) && "text-gray-900",
                                        !isEqual(day,selectedDay) && !isToday(day) && !isSameMonth(day,firstDayCurrentMonth) && "text-gray-400",
                                        isEqual(day,selectedDay) && isToday(day) && "bg-red-500",
                                        isEqual(day,selectedDay) && !isToday(day) && "bg-gray-900",
                                        !isEqual(day,selectedDay) && 'hover:bg-gray-200',
                                        (isEqual(day,selectedDay) || isToday(day)) && 'font-semibold',
                                        "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                                    )}
                                    >
                                        <time
                                        dateTime={format(day, "yyyy-MM-dd")}
                                        >
                                            {format(day, "d")}
                                        </time>
                                    </button>
                                    <div
                                    className='w-1 h-1 mx-auto mt-1'
                                    >
                                        {BookedOffers.map((offer)=> 
                                            eachDayOfInterval({
                                                start: parseISO(offer.start_day),
                                                end: parseISO(offer.end_day)
                                            }).map((Oday) => isSameDay(Oday,day)
                                                && (
                                                <div className={`rounded-full
                                                    ${isSameDay(parseISO(offer.start_day),Oday) && compareAsc(Oday,today) === -1 && 'bg-sky-500 w-2 h-2'}
                                                    ${!isSameDay(parseISO(offer.start_day),Oday) && compareAsc(Oday,today) === -1 && 'bg-gray-500 w-1 h-1'}
                                                    ${isSameDay(parseISO(offer.start_day),Oday) && compareAsc(Oday,today) >= 0 && 'bg-green-500 w-2 h-2'}
                                                    ${!isSameDay(parseISO(offer.start_day),Oday) && compareAsc(Oday,today) >= 0 && 'bg-black w-1 h-1'}
                                                `}></div>)
                                            ))
                                        }
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <section 
                    className='mt-12 md:mt-0 md:pl-14'
                    >
                        <h2
                        className='font-semibold text-gray-900'
                        >
                            Schedule for {' '}
                            <time
                            dateTime={format(selectedDay, "yyyy-MM-dd")}
                            >
                                {format(selectedDay, "MMMM dd, yyyy")}
                            </time>
                        </h2>
                        <ol
                        className='mt-4 space-y-1 text-sm leading-6 text-gray-800'
                        >
                            {selectedDayBooking ? (
                                <>
                                    <p className='font-semibold'>{selectedDayBooking.title}</p>
                                    <p className='flex items-center gap-2'><AiFillPhone /> {selectedDayBooking.client_phone}</p>
                                    <p className='flex items-center gap-2'><AiOutlineMail /> {selectedDayBooking.client_email}</p>
                                    <p className='flex items-center gap-2'>From: {selectedDayBooking.start_day}</p>
                                    <p className='flex items-center gap-2'>To: {selectedDayBooking.end_day}</p>
                                    {
                                        compareAsc(today,selectedDay) === 1 && selectedDayBooking !== currentOffer &&(
                                            <p className='text-sky-500 font-semibold'>Closed</p>
                                        )
                                    }
                                    {
                                        currentOffer === selectedDayBooking && (
                                            <div className='flex flex-col gap-7'>
                                                <p className='font-semibold text-green-500'>Current</p>
                                                <span
                                                className='w-full flex justify-end'
                                                >
                                                    <button className='bg-red-500 text-white font-semibold py-1 px-4 rounded-lg'>Cancel</button>
                                                </span>
                                            </div>
                                        )
                                    }
                                    {
                                        compareAsc(today,selectedDay ) === -1 && selectedDayBooking !== currentOffer && (
                                            <div className='flex flex-col gap-7'>
                                                <p className='font-semibold text-gray-600'>Comming</p>
                                                <span
                                                className='w-full flex justify-end'
                                                >
                                                    <button className='bg-red-500 text-white font-semibold py-1 px-4 rounded-lg'>Cancel</button>
                                                </span>
                                            </div>
                                        )
                                    }
                                </>
                            ) : (
                                <p>No Booking for today</p>
                            )}
                        </ol>

                    </section>
                </div>
            </div>
        </div>
    )
}

let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
    ]

export default Calendar