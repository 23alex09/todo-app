import { useState } from "react";
//Con react-hook-form tenemos un hook ya creado por otra gente que maneja los formularios bastante bien

export const useForm = ( initialForm = {} ) => {


    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState( {
            ...formState,
            [ name ]: value, // cambiamos la propiedad con nombre name con el nuevo value
        } );
    };

    const onResetForm = () => {
        setFormState( initialForm )
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}