import {z} from 'zod';

export const formSchema =z.object({
    restaurnteName: z.string({
        required_error: 'el nombre del restaurante es requerido',
    }), 
    city: z.string({
        required_error: 'la ciudad es requerida',
    }),
    country: z.string({
        required_error: 'el pais es requerido',
    }),
    deliveryPrice: z.coerce.number({
        required_error: 'el precio de entrega es requerido',
        invalid_type_error: 'el precio de entrega debe ser un numero valido'
    }),
    estimatedDeliveryTime: z.coerce.number({
        required_error: 'el tiempo estimado de entrega es requerido',
        invalid_type_error: 'el tiempo estimado de entrega debe ser un numero valido'
    }),
    cuisines: z.array(z.string()).nonempty({
        message: 'Por favor selecciona un item de cocina'
    }),
    menuItems: z.array(
        z.object({
            name: z.string({ required_error:"el nombre del platillo es requerido" })
            .min(1, {message: 'el nombre debe tener al menos un caracter'}),
            price: z.coerce.number({
                required_error: 'el precio del platillo es requerido',
                invalid_type_error: 'el precio del platillo debe ser un numero valido'
            })
        })
    ),
    imageFile: z.instanceof(File, {message: 'la imagen es requerida'})
});