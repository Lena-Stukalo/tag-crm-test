import "./App.css";
import { FormComponent } from "./components/form/form.component";
import { ItemsList } from "./components/list/list.component";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Add, Remove, FromLocal } from "./redux/store";
import uniqid from "uniqid";
import { useToast } from "./utils/toast";

export default function App() {
  const items = useSelector((state) => state.contacts.items);
  const isFirstTime = useRef(true);

  const dispatch = useDispatch();
  const toast = useToast();
  const showToast = (message) => toast.open(message);

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem("items"));
    if (localContacts) {
      dispatch(FromLocal([...localContacts]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }
    localStorage.setItem("contacts", JSON.stringify(items));
  }, [items]);

  const checkEmail = (email) => {
    return items.find((item) => item.email === email);
  };

  const onHendlerSubmit = ({ name, email, phone, adresses }) => {
    if (checkEmail(email)) {
      showToast(`${email} is alredy exist`);
      return;
    }
    const contact = {
      name: name,
      email: email,
      phone: phone,
      adresses: adresses,
      id: uniqid(),
    };
    dispatch(Add(contact));
    //setContacts(prevState => [contact, ...prevState]);
  };

  const onDeleteClick = (id) => {
    dispatch(Remove(id));
    //setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <div className="App">
      <FormComponent onSubmit={onHendlerSubmit} number={items.length + 2} />
      <ItemsList items={items} onDelete={onDeleteClick} />
    </div>
  );
}
