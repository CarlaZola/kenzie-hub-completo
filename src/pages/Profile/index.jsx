import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListTechs from "../../components/ListTechs";
import ModalCreate from "../../components/Modal/ModalCreate";
import ModalDelete from "../../components/Modal/ModalDelete";
import ModalUpdate from "../../components/Modal/ModalUpdate";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import Home from "./profile";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const { isOpen, setIsOpen, techs, editingTech, deletingTech } =
    useContext(TechContext);

    const navigate = useNavigate()

    const exitProfile = () => {
      localStorage.removeItem("@token")
      setUser(null)
      navigate("/")
  }

  return (
    <Home>
      <header>
        <h1>Kenzie Hub</h1>
        <button type="button" onClick={() => exitProfile()}>
          Sair
        </button>
      </header>
      
      <p onClick={() => setIsOpen(true)}>+</p>
      {user.name}

      {isOpen ? <ModalCreate /> : null}

      {editingTech ? <ModalUpdate /> : null}

      {deletingTech ? <ModalDelete /> : null}

      <ListTechs />
    </Home>
  );
};

export default Profile;
