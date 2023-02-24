import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext([]);

const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingTech, setEditingTech] = useState(null);
  const [deletingTech, setDeletingTech] = useState(null);
  const [loading, setLoading] = useState(false);

  const statusOntech = [
    { value: "Iniciante" },
    { value: "Intermediário" },
    { value: "Avançado" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (token) {
      const getTechs = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setTechs(response.data.techs);
        } catch (error) {
          console.log(error);
        }
      };
      getTechs();
    }
  }, []);

  const techsCreate = async (dataTech) => {
    setLoading(true);
    const token = localStorage.getItem("@token");
    try {
      const response = await api.post("/users/techs", dataTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tech criada com sucesso!", {
        hideProgressBar: true,
        autoClose: 1000,
      });
      setTechs([...techs, response.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  };

  const techsDelete = async (idTech) => {
    const token = localStorage.getItem("@token");
    try {
      const response = await api.delete(`/users/techs/${idTech}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tech Deletada!", {
        hideProgressBar: true,
        autoClose: 1000,
      });
      const newTechsList = techs.filter((tech) => tech.id !== idTech);
      setTechs(newTechsList);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const techsUpdate = async (dataTech, idTech) => {
    setLoading(true);
    const token = localStorage.getItem("@token");
    try {
      const response = await api.put(`/users/techs/${idTech}`, dataTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechs = techs.map((tech) => {
        if (idTech === tech.id) {
          return { ...tech, ...dataTech };
        } else {
          return tech;
        }
      });
      toast.success("Tech alterada com sucesso!", {
        hideProgressBar: true,
        autoClose: 1000,
      });
      setTechs(newTechs);
      return response;

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setEditingTech(null);
    }
  };
  return (
    <TechContext.Provider
      value={{
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
        setDeletingTech,
        loading,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
export default TechProvider;
