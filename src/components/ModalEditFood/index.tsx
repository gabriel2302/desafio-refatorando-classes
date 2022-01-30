import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles, SubmitHandler } from '@unform/core';

type FormData = {
  image: string;
  name: string;
  description: string;
  price: number;
}
interface IFoodProps extends FormData {
  id: number;
}
type IModalEditFoodProps = {
  setIsOpen: () => void;
  handleUpdateFood: (food: FormData) => void;
  isOpen: boolean;
  editingFood: IFoodProps;
}

function ModalEditFood({ setIsOpen, handleUpdateFood, isOpen, editingFood }: IModalEditFoodProps) {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;
