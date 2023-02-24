import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListTechs from "../../components/ListTechs";
import ModalCreate from "../../components/Modal/ModalCreate";
import ModalDelete from "../../components/Modal/ModalDelete";
import ModalUpdate from "../../components/Modal/ModalUpdate";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import Home from "./profile";
import { ToastContainer } from "react-toastify"

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const { isOpen, setIsOpen, techs, editingTech, deletingTech } =
    useContext(TechContext);

  const navigate = useNavigate();

  const exitProfile = () => {
    localStorage.removeItem("@token");
    setUser(null);
    navigate("/");
  };

  return (
    <Home>
      <ToastContainer />
      <header>
        <div className="boxHeader">
          <h1>Kenzie Hub</h1>
          <button type="button" onClick={() => exitProfile()}>
            Sair
          </button>
        </div>
      </header>

      <main>
        <section className="contentProfileInfo">
          <h2>{user.name}</h2>
          <p>{user.course_module}</p>
        </section>

        {isOpen ? <ModalCreate /> : null}

        {editingTech ? <ModalUpdate /> : null}

        {deletingTech ? <ModalDelete /> : null}

        <section className="contentTechs">
          <div className="boxCreateTech">
            <h2>Tecnologias</h2>
            <p onClick={() => setIsOpen(true)}>+</p>
          </div>
          <div className="boxTechsCard">
            <ListTechs />
          </div>
        </section>
      </main>
    </Home>
  );
};

export default Profile;
