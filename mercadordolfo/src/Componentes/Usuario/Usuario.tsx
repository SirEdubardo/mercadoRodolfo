import { useFieldArray, useForm } from "react-hook-form";
import { CriarUsuario } from "../../Servicos/MercadoFacilAPI";

const Usuario = () => {
    const { register, handleSubmit, control } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "addresses"
    });

    const onSubmit = async (data: any) => {
        console.log(data);
        try {
            await CriarUsuario(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Dados de Acesso */}
                <fieldset className="border p-4 rounded-lg">
                    <legend className="text-lg font-semibold">Dados de Acesso do Usuário</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block mb-1">Nome</label>
                            <input id="name" {...register("name")} className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1">Email</label>
                            <input id="email" {...register("email")} className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-1">Senha</label>
                            <input id="password" {...register("password")} type="password" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label htmlFor="role" className="block mb-1">Role</label>
                            <input id="role" {...register("role")} className="w-full p-2 border rounded" />
                        </div>
                    </div>
                </fieldset>

                {/* Endereços */}
                <div className="border p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Endereços</h2>
                    {fields.map((field, index) => (
                        <div key={field.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor={`street-${index}`} className="block mb-1">Rua</label>
                                <input id={`street-${index}`} {...register(`addresses[${index}].street`)} className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label htmlFor={`number-${index}`} className="block mb-1">Número</label>
                                <input id={`number-${index}`} {...register(`addresses[${index}].number`)} className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label htmlFor={`complement-${index}`} className="block mb-1">Complemento</label>
                                <input id={`complement-${index}`} {...register(`addresses[${index}].complement`)} className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label htmlFor={`neighborhood-${index}`} className="block mb-1">Vizinhança</label>
                                <input id={`neighborhood-${index}`} {...register(`addresses[${index}].neighborhood`)} className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label htmlFor={`city-${index}`} className="block mb-1">Cidade</label>
                                <input id={`city-${index}`} {...register(`addresses[${index}].city`)} className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label htmlFor={`state-${index}`} className="block mb-1">Estado</label>
                                <input id={`state-${index}`} {...register(`addresses[${index}].state`)} className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label htmlFor={`country-${index}`} className="block mb-1">País</label>
                                <input id={`country-${index}`} {...register(`addresses[${index}].country`)} className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label htmlFor={`zipCode-${index}`} className="block mb-1">CEP</label>
                                <input id={`zipCode-${index}`} {...register(`addresses[${index}].zipCode`)} className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label htmlFor={`district-${index}`} className="block mb-1">Bairro</label>
                                <input id={`district-${index}`} {...register(`addresses[${index}].district`)} className="w-full p-2 border rounded" />
                            </div>
                            <button type="button" className="mt-2 bg-red-600 text-white rounded px-4 py-2" onClick={() => remove(index)}>
                                Remover Endereço
                            </button>
                        </div>
                    ))}
                    <button type="button" className="bg-gray-600 text-white rounded px-4 py-2" onClick={() => append({})}>
                        Adicionar Endereço
                    </button>
                </div>

                <button type="submit" className="bg-green-600 text-white rounded px-4 py-2 mt-4">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Usuario;