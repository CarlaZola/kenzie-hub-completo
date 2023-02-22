import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";
import { schemaCreateTech } from "../../../utils/schema";
import Input from "../Input";
import Select from "../Select";

const FormCreateTech = () => {

    const {techsCreate ,statusOntech, setIsOpen } = useContext(TechContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schemaCreateTech),
    });

    const submitNewTech = (data) => {
        techsCreate(data)
        reset()
        setIsOpen(false)
    };
    return (
        <form onSubmit={handleSubmit(submitNewTech)}>
        <Input
            name="title"
            id="title"
            label="Nome"
            placeholder="escreva aqui a tecnologia..."
            {...register("title")}
            error={errors.title?.message}
        />

        <Select
            label="Selecionar status"
            name="status"
            id="status"
            {...register("status")}
            array={statusOntech}
            error={errors.status?.message}
        />

        <button type="submit">Cadastrar tecnologia</button>
        </form>
    );
};

export default FormCreateTech;
