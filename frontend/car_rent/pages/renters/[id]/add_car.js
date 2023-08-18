import React,{useState} from 'react';
import { SideBar,BoolButton } from '@/components';
import {
    ImSad,
    ImNeutral,
    ImSmile,
    ImHappy,
} from  "react-icons/im"


export default function Add_Car(){

    const [carState, setCarState] = useState("average")

    return (
        <main className='flex flex-col gap-5'>
            <h1
            className='text-4xl font-bold w-full text-center mt-10'
            >Add a new Car</h1>

            <div
            className='grid grid-cols-2 gap-2 w-full px-10'
            >
                <span className='w-full px-[60px] flex flex-col gap-1'>
                    <label className='font-semibold pl-4'>
                        Brand :
                    </label>
                    <select 
                    className='border border-black rounded-md p-2'
                    type='text'
                    placeholder='Brand . . .'
                    >
                        <option value=''>Select a Brand</option>
                        <option value='wolkswagen' className='flex justify-between'>Wolkswagen</option>
                        <option value='renault' className='flex justify-between'>Renault</option>
                    </select>
                </span>

                <span className='w-full px-[60px] flex flex-col gap-1'>
                    <label className='font-semibold pl-4'>
                        Model :
                    </label>
                    <select 
                    className='border border-black rounded-md p-2'
                    type='text'
                    placeholder='Model . . .'
                    >
                        <option value=''>Select a Model</option>
                        <option value='wolkswagen' className='flex justify-between'>Golf</option>
                        <option value='renault' className='flex justify-between'>Symbol</option>
                    </select>
                </span>

                <span className='w-full px-[60px] flex flex-col gap-1'>
                    <label className='font-semibold pl-4'>
                        Year :
                    </label>
                    <input 
                    className='border border-black rounded-md p-2'
                    type='number'
                    placeholder='Year of manufacturing . . .'
                    />
                </span>

                <span className='w-full px-[60px] flex flex-col gap-1'>
                    <label className='font-semibold pl-4'>
                        Serial number :
                    </label>
                    <input 
                    className='border border-black rounded-md p-2'
                    type='text'
                    placeholder='Serial number of the car . . .'
                    />
                </span>

                <span className='w-full px-[60px] flex flex-col gap-1'>
                    <label className='font-semibold pl-4'>
                        Category :
                    </label>
                    <select 
                    className='border border-black rounded-md p-2'
                    type='text'
                    placeholder='Model . . .'
                    >
                        <option value=''>category</option>
                        <option value='wolkswagen' className='flex justify-between'>Golf</option>
                        <option value='renault' className='flex justify-between'>Symbol</option>
                    </select>
                </span>

                <span className='w-full px-[60px] flex flex-col gap-1'>
                    <label className='font-semibold pl-4'>
                        Car state :
                    </label>
                    <div
                    className='flex gap-2'
                    >
                        <div className={`flex gap-2 justify-center items-center p-5 rounded-xl font-semibold
                        cursor-pointer
                        ${carState==="bad" ? "bg-black text-white" : "border border-black"}
                        `}
                        onClick={()=>setCarState("bad")}
                        >
                            Bad <ImSad className='text-xl'/>
                        </div>
                        <div className={`flex gap-2 justify-center items-center p-5 rounded-xl font-semibold
                        cursor-pointer
                        ${carState==="average" ? "bg-black text-white" : "border border-black"}
                        `}
                        onClick={()=>setCarState("average")}
                        >
                            Average <ImNeutral className='text-xl'/>
                        </div>
                        <div className={`flex gap-2 justify-center items-center p-5 rounded-xl font-semibold
                        cursor-pointer
                        ${carState==="good" ? "bg-black text-white" : "border border-black"}
                        `}
                        onClick={()=>setCarState("good")}
                        >
                            Good <ImSmile className='text-xl'/>
                        </div>
                        <div className={`flex gap-2 justify-center items-center p-5 rounded-xl font-semibold
                        cursor-pointer
                        ${carState==="perfect" ? "bg-black text-white" : "border border-black"}
                        `}
                        onClick={()=>setCarState("perfect")}
                        >
                            Perfect <ImHappy className='text-xl'/>
                        </div>
                    </div>
                    
                </span>

                <span className='w-full px-[60px] flex flex-col gap-1'>
                    <label className='font-semibold pl-4'>
                        Description :
                    </label>
                    <textarea 
                    className='border border-black rounded-md p-2
                    h-[100px]'
                    type='number'
                    placeholder='Year of manufacturing . . .'
                    />
                </span>

                <span
                className='w-full px-[60px] flex flex-col gap-3'
                >
                    <BoolButton label="Active"/>

                    <div
                    className='flex gap-5 mt-5 items-center'
                    >
                        <label className='font-semibold pl-4'>Image: </label>
                        <input 
                        className='border border-black rounded-md p-2'
                        type='file'
                        placeholder='Image . . .'
                        />
                    </div>

                </span>
            </div>
            <div
            className='w-full flex justify-center items-center mt-10'
            >
                <button
                className='flex py-2 px-12 text-xl bg-black text-white rounded-lg font-semibold'
                >
                    Create
                </button>
            </div>

            <SideBar />
        </main>
    )
}  


// class CarCategory(models.Model):
//     name = models.CharField(max_length=50)
//     number_of_seats = models.IntegerField()
//     number_of_doors = models.IntegerField()

//     def __str__(self):
//         return self.name
    
// class CarState(models.Model):
//     name = models.CharField(max_length=50)

//     def __str__(self):
//         return self.name
    
// class CarBrand(models.Model):
//     name = models.CharField(max_length=50)
//     logo = models.ImageField(upload_to='cars/brands', blank=True, null=True)

//     def __str__(self):
//         return self.name

// class CarModel(models.Model):
//     name = models.CharField(max_length=50)
//     brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE)

//     def __str__(self):
//         return self.name

// class Car(models.Model):
//     description = models.CharField(max_length=200)
//     serial_number = models.CharField(max_length=50)
//     year = models.IntegerField()
//     images = models.ImageField(upload_to='cars/images', blank=True, null=True)
//     category = models.ForeignKey(CarCategory, on_delete=models.CASCADE)
//     model = models.ForeignKey(CarModel, on_delete=models.CASCADE)
//     state = models.ForeignKey(CarState, on_delete=models.CASCADE)
//     owner = models.ForeignKey('renters.Renter', on_delete=models.CASCADE)

//     def __str__(self):
//         return self.model.name + ' ' + str(self.year)
    