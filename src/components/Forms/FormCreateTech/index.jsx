import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";
import Button from "../../../styles/button";
import { schemaCreateTech } from "../../../utils/schema";
import Input from "../Input";
import Select from "../Select";
import StyledFormCreateTech from "./formCreateTech";
import spinner from "../../../assets/spinner.svg"

const FormCreateTech = () => {

    const {techsCreate ,statusOntech, setIsOpen, loading } = useContext(TechContext)

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
        
    };
    return (
        <StyledFormCreateTech onSubmit={handleSubmit(submitNewTech)}>
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

        <Button className="btnCadaster" type="submit">
            {loading ? <img src={spinner} className="loading" color="black"/> : "Cadastrar Tecnologia"}
            </Button>
        </StyledFormCreateTech>
    );
};

export default FormCreateTech;
