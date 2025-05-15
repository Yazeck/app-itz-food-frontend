const API_BASE_URL =import.meta.env.VITE_API_BASE_URL;
import{ User, UpdateUser, BackEndUser} from'./types';
import { useMutation, useQueryClient, useQuery} from '@tanstack/react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { toast} from "sonner";

export function useCreateUser(){
    const queryClient = useQueryClient();
    const {getAccessTokenSilently} = useAuth0();
    
    //Función para crear un usuario en el backend
    const createUserRequest = async (user: User) =>{
        const accessToken = await getAccessTokenSilently();
    const res = await fetch(API_BASE_URL + '/api/user', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json'
},
    body: JSON. stringify(user)
    }) ;
    if (!res.ok){
    throw new Error("Error al crear el usuario")
}
    return res. json ()
    } //find e create userRequest
    return useMutation({
        mutationFn: (user: User)=> createUserRequest(user),
        onError: (err)=>{
            console.log(err);
            toast.error(err.toString())
            throw new Error("Error al crear el usuario")
        }, onSuccess:(user)=>{
            console.log(user)
            queryClient.invalidateQueries({ queryKey:['user']});
        },
    })//fin de return useMutation
    } //fin de useCreateUser
    export function useUpdateUser(){
        const queryClient= useQueryClient();
        const {getAccessTokenSilently} = useAuth0();

        //Función para actualizar un usuario en el backend
        const updateUserRequest = async (formData: UpdateUser) => {
            const accessToken = await getAccessTokenSilently();
            const res = await fetch(API_BASE_URL + '/api/user', {
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            
            });
            if (!res.ok) {
                throw new Error("Error al actualizar el usuario")
            }
            return res.json()
        } //fin de updateUserRequest

        return useMutation({
            mutationFn: (formData: UpdateUser) =>updateUserRequest(formData),
            onError:(err)=> {
                console.log(err);
                toast.error(err.toString())
                throw new Error("Error al actualizar el usuario")
            },
            onSuccess: () => {

             toast.success("Perfil de usuario actualizado")
                queryClient.invalidateQueries({ queryKey: ['user'] });
            },
        })//fin del return useMutation

    }//fin de useUpdateUser
    export function useGetUser(){
        const { getAccessTokenSilently } = useAuth0();
        const getUserRequest = async ():Promise<BackEndUser> => {
            const accessToken = await getAccessTokenSilently();
            const res = await fetch(API_BASE_URL + '/api/user', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                    'Content-Type': 'application/json'
                }
            });
            if (!res.ok) {
                throw new Error("Error al obtener el usuario")
            }
            return res.json()
        } //fin de getUserRequest
        return useQuery({
            queryKey: ['users'],
            queryFn: getUserRequest,
        })//fin de return useQuery
    }