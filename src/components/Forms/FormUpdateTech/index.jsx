import { yupResolver } from "@hookform/resolvers/yup"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../../providers/TechContext"
import Button from "../../../styles/button"
import { schemaUpdateTech } from "../../../utils/schema"
import Input from "../Input"
import Select from "../Select"
import StyledFormUpdateTech from "./formUpdateTech"
import spinner from "../../../assets/spinner.svg"

const FormUpdateTech = () => {

    const { editingTech, techsUpdate, statusOntech, deletingTech, setDeletingTech, setEditingTech, loading } = useContext(TechContext)

    const {register, handleSubmit, formState: { errors }} = useForm({
        mode: "onBlur",
        defaultValues: {
            title: editingTech.title,
            status: editingTech.status
        },
        resolver: yupResolver(schemaUpdateTech)
    })

    const submitUpdateTech = (data) => {
        const newStatus = {
           status: data.status
        }
        techsUpdate(newStatus, editingTech.id)
    }
    return(
        <StyledFormUpdateTech onSubmit={handleSubmit(submitUpdateTech)}>

            <Input 
            name="title"
            label="Nome"
            id="title"    
            {...register("title")}  
            value={editingTech.title}
            />

            <Select 
            label="Status"
            name="status"
            {...register("status")}
            array={statusOntech}
            error={errors.status?.message}
            />

           <div className="boxButton">
                <Button className="btnEditingTech" type="submit">{loading ? <img className="loading" src={spinner}/> : "Salvar"}</Button>
                <Button className="btnRemoveTech" type="button" onClick={() => setDeletingTech(editingTech.id)}>Deletar</Button>
           </div>
        </StyledFormUpdateTech>
    )
}


export default FormUpdateTech