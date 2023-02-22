import { createContext, useEffect, useState } from "react"
import api from "../services/api"

export const TechContext = createContext([])

const TechProvider = ({ children }) => {

  const [techs, setTechs] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingTech, setEditingTech] = useState(null)
  const [deletingTech, setDeletingTech] = useState(null)

  const statusOntech = [
    { value: "Iniciante" },
    { value: "Intermediário" },
    { value: "Avançado" },
];

  useEffect(() => {
    const token = localStorage.getItem("@token")
    if (token) {
      const getTechs = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setTechs(response.data.techs)
        } catch (error) {
          console.log(error)
        }
      };
      getTechs();
    }
  }, [])

  const techsCreate = async (dataTech) => {
     const token = localStorage.getItem("@token")
        try{
            const response = await api.post("/users/techs", dataTech, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(response)
            setTechs([...techs, response.data])
        }
        catch(error){
            console.log(error)
        }
  }

  const techsDelete = async (idTech) => {
    const token = localStorage.getItem("@token")
    try{
        const response = await api.delete(`/users/techs/${idTech}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        const newTechsList = techs.filter((tech) => tech.id !== idTech)
        setTechs(newTechsList)
        return response
    }
    catch(error){
        console.log(error)
    }
  }

  const techsUpdate = async (dataTech, idTech) => {
    const token = localStorage.getItem("@token")
    try{
        const response = await api.put(`/users/techs/${idTech}`, dataTech, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        const newTechs = techs.map((tech) => {
            if(idTech === tech.id){
                return {...tech, ...dataTech}
            }
            else{
                return tech
            }
        })
        setTechs(newTechs)

        return response
    }
    catch(error){
        console.log(error)
    }
  }
  return(
    <TechContext.Provider value={{
        techsCreate, 
        techsDelete,   
        techsUpdate,
        setIsOpen,
        isOpen,
        techs,
        editingTech,
        setEditingTech,
        statusOntech,
        deletingTech,
        setDeletingTech

    }}>
        {children}
    </TechContext.Provider>  
  )
}
export default TechProvider
