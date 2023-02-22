import { yupResolver } from "@hookform/resolvers/yup"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../../providers/TechContext"
import Input from "../Input"
import Select from "../Select"

const FormUpdateTech = () => {

    const { editingTech, techsUpdate, statusOntech, deletingTech, setDeletingTech, setEditingTech } = useContext(TechContext)

    const {register, handleSubmit} = useForm({
        mode: "onBlur",
        defaultValues: {
            title: editingTech.title,
            status: editingTech.status
        }
    })

    const submitUpdateTech = (data) => {
        const newStatus = {
           status: data.status
        }
        techsUpdate(newStatus, editingTech.id)
        setEditingTech(null)
    }
    return(
        <form onSubmit={handleSubmit(submitUpdateTech)}>

            <Input 
            name="title"
            label="Nome"
            id="title"    
            {...register("title")}       
            disable="true"
            />

            <Select 
            label="Status"
            name="status"
            {...register("status")}
            array={statusOntech}
            />

            <button type="submit">Salvar alterações</button>
            <button type="button" onClick={() => setDeletingTech(editingTech.id)}>Deletar</button>
        </form>
    )
}


export default FormUpdateTech