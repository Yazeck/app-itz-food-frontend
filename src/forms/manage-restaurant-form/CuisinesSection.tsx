import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useFormContext } from 'react-hook-form'
import CuisineCheckBox from './CusineCheckbox'
import { cuisineList } from "@/config/restaurant-options-config";


export default function CuisinesSection() {
    const {control }= useFormContext();
  return (
    <div className="space-y-2">
        <div>
            <h2 className="text-2x1 font-bold">Cocinas </h2>
            <FormDescription>
                Selecciona el tipo de cocina que el restaurante servirá
            </FormDescription>
        </div>
        <FormField control={control}
        name="cuisines"
        render={
            ({field})=> (
                <FormItem>
                    <div>
                        {
                            cuisineList.map(
                                (cuisineItem)=>(
                                    <CuisineCheckBox
                                    cuisine={cuisineItem}
                                    field={field}
                                    />
                                )
                            )
                        }

                    </div>
                    <FormMessage className='text-red-500'/>
                </FormItem>
            )
        }
       />
    </div>
  )
}
