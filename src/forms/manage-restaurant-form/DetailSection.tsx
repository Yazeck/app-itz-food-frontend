import { FormDescription, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export default function DetailSection() {
    const { control } = useFormContext();
    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Detalles </h2>
            <FormDescription>
                Detalles del restaurante
            </FormDescription>
            </div>
            <FormField control ={control}
            name="RestaurantName"
            render={(
                {field})=> (
                <FormItem>
                    <FormLabel>Nombre del restaurante</FormLabel>
                    <FormControl>
                        <Input {...field} className="bg-white" />
                    </FormControl>
                    
                </FormItem>
            )}
            />
            
                <FormField control={control}
                name="city"
                render={(
                    {field})=>(
                        <FormItem>
                            <FormLabel>
                                Ciudad
                            </FormLabel>
                            <FormControl>
                                <Input {...field}
                                className="bg-white"
                                />
                            </FormControl>
                        </FormItem>

                    )}
                
                />
                
                <FormField control={control}
                name="coutry"
                render={(
                    {field})=>(
                        <FormItem>
                            <FormLabel>
                                País
                            </FormLabel>
                            <FormControl>
                                <Input {...field}
                                className="bg-white"
                                />
                            </FormControl>
                        </FormItem>

                    )}
                
                />

                <FormField control={control}
                name="deliveryPrice"
                render={(
                    {field})=>(
                        <FormItem className="max-w-[25%]">
                            <FormLabel>
                                Precio de entrega ($ pesos)
                            </FormLabel>
                            <FormControl>
                                <Input {...field}
                                className="bg-white"
                                placeholder="100.00"
                                />
                            </FormControl>
                        </FormItem>

                    )}
                
                />

                <FormField control={control}
                name="estimatedDeliveryTime"
                render={(
                    {field})=>(
                        <FormItem className="max-w-[25%]">
                            <FormLabel>
                                Tiempo de estimado de entrega (minutos)
                            </FormLabel>
                            <FormControl>
                                <Input {...field}
                                className="bg-white"
                                placeholder="30"
                                />
                            </FormControl>
                        </FormItem>

                    )}
                
                />
           
            
        </div>
    )
}