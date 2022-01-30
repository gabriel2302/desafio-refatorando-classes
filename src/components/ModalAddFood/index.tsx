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
type IModalAddFoodProps = {
  setIsOpen: () => void;
  isOpen: boolean;
  handleAddFood: (food: FormData) => void;
}

function ModalAddFood({ setIsOpen, handleAddFood, isOpen }: IModalAddFoodProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async data => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}


export default ModalAddFood;
