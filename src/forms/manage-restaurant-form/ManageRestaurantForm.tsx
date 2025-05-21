import { z } from 'zod';
import { formSchema } from './RestaurantFormSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from 'react-router-dom';
import DetailSection from './DetailSection';

type Props = {
    onSave: (restaurnatFromData: FormData) => void;
    isLoading: boolean;
}

export type restaurantFormData = z.infer<typeof formSchema>;

export default function ManageRestaurantForm({ onSave, isLoading }: Props) {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues:{
        cuisines: [],
        menuItems: [{name: "", price: 0}]
    }
})
const onSubmit =(formData: restaurantFormData) => {
    console.log(formData);
}
return(
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 bg-gray-50 p-10 rounded-lg'
        >
          <DetailSection />
        </form>
    </Form>
)
}