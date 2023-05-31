import React from 'react'
import { PhoneIcon,MapPinIcon,EnvelopeIcon } from "@heroicons/react/24/solid"
import { Textarea, TextInput } from '@mantine/core'
import { Copy } from 'iconsax-react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { showNotification } from "@mantine/notifications";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    message: string,
    email: string,
    subject: string
  };

const Contact = (props: Inputs) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:oladejotoyyibolalekan@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10 mx-auto items-center justify-evenly'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500'>Contact</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl text-center font-semibold '>I have just got what you need.{" "}
            <span className='underline decoration-[#F7AB0A]/50'> Let's talk</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center justify-center space-x-5'>
                    <PhoneIcon className='animate-pulse h-7 w-7 text-[#F7AB0A]' />
                    <p className='text-2xl'>+2348160453642</p>
                    <CopyToClipboard
                    text={"+2348160453642"}
                    onCopy={() =>
                        showNotification({
                          title: "Success",
                          message: "Phone Number copied to clipboard",
                          color: "green",
                        })
                      }
                    >
                    <button>
                        <Copy
                          size="15"
                          color="#C1C2C6"
                          variant="Outline"
                        />
                      </button>
                    </CopyToClipboard>
                    
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <EnvelopeIcon className='animate-pulse h-7 w-7 text-[#F7AB0A]' />
                    <p className='text-2xl'>oladejotoyyibolalekan@gmail.com</p>
                    <CopyToClipboard
                    text={"oladejotoyyibolalekan@gmail.com"}
                    onCopy={() =>
                        showNotification({
                          title: "Success",
                          message: "Email copied to clipboard",
                          color: "green",
                        })
                      }
                    >
                    <button>
                        <Copy
                          size="15"
                          color="#C1C2C6"
                          variant="Outline"
                        />
                      </button>
                    </CopyToClipboard>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <MapPinIcon className='animate-pulse h-7 w-7 text-[#F7AB0A]' />
                    <p className='text-2xl'>Kute Community, Wofun Area, Ibadan, Oyo State, Nigeria</p>
                </div>
            </div>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto'>        
                <div className='flex space-x-2'>
                    <input {...register("name", { required: true })} type="text" placeholder='Enter Name' className='contactInput'  />
                    <input {...register("email", { required: true })} type="email" placeholder='Enter Email' className='contactInput' />
                </div>
                <input {...register("subject", { required: true })} placeholder='Subject' type="text" className='contactInput'  />
                <textarea {...register("message", { required: true })} required  className='contactInput' placeholder='Message' />
                <button type="submit" className='bg-[#F7AB0A] py-5 px-10 text-lg text-black rounded-md font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
