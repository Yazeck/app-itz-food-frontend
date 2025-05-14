
import {z} from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormDescription, FormItem, 
    FormMessage,FormControl, FormLabel, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BackEndUser } from '@/api/types';
import { useEffect } from 'react';

 const formSchema = z.object({
    email: z.string().optional(),
    name: z.string({ required_error:"el nombre debe ser requerido"})
    .min(3,{message: "elnombre debe tener al menos 3 caracteres"}),
    address: z.string({ required_error:"la direccion es requerida"}),
    city: z.string({ required_error:"la ciudad es requerida"}),
    country: z.string({ required_error:"el pais es requerido"}),
}

);
export type UserFormData = z.infer<typeof formSchema>;
type Props = {
    onSave: (userProfileData: UserFormData)=>void;
getUser: BackEndUser 
}
export default function UserProfileForm ({onSave, getUser}: Props) {
    const form = useForm<UserFormData>({
        defaultValues: getUser,
        resolver: zodResolver(formSchema)

    })
    useEffect(()=>{
        form.reset(getUser);
    },[getUser, form]);
return(
   <Form{...form}>
   <form onSubmit={form.handleSubmit(onSave)}
   className='space-y-4 bg-grey-50 rounded-lg md:p-10'>
       <div>
        <h2 className='text-2xl font-bold '>Perfil de usuario
        </h2>
        <FormDescription>
            Consulta la informacion de tu perfil aqui.
        </FormDescription>
       </div>
        <FormField control={form.control}
        name="email"
        render={({ field })=>(
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input {...field}  className= 'bg-white' />
                </FormControl>
                <FormMessage className='text-red-500' />
            </FormItem>
        )}></FormField>

<FormField control={form.control}
        name="name"
        render={({ field })=>(
            <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                    <Input {...field}  className= 'bg-white' />
                </FormControl>
                <FormMessage className='text-red-500' />
            </FormItem>
        )}></FormField>

<FormField control={form.control}
        name="address"
        render={({ field })=>(
            <FormItem>
                <FormLabel>Direccion</FormLabel>
                <FormControl>
                    <Input {...field}  className= 'bg-white' />
                </FormControl>
                <FormMessage className='text-red-500' />
            </FormItem>
        )}></FormField>
        <FormField control={form.control}
        name="city"
        render={({ field })=>(
            <FormItem>
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                    <Input {...field}  className= 'bg-white' />
                </FormControl>
                <FormMessage className='text-red-500' />
            </FormItem>
        )}></FormField>
        <FormField control={form.control}
        name="country"
        render={({ field })=>(
            <FormItem>
                <FormLabel>Pais</FormLabel>
                <FormControl>
                    <Input {...field}  className= 'bg-white' />
                </FormControl>
                <FormMessage className='text-red-500' />
            </FormItem>
        )}></FormField>
<div className='flex flex-col md:flex-row gap-4'>

</div>
<Button type="submit" 
className= 'bg-orange-500 text-white'>
    Actualizar
</Button>
   </form>
   </Form>
)
}