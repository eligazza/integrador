import React from 'react';
import { Link } from 'react-router-dom'; 
import { Modal,ModalContent , useDisclosure} from '@nextui-org/react';
import { XIcon } from '../../utils/icons';

const FailAlert = ( open ) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Modal
    backdrop="transparent"
    isOpen={open}
    onOpenChange={onOpenChange}
    placement="top"
    isDismissable={false}
    radius="none"
    classNames={{
      body: "py-6",
      backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
      base: "border-[#292f46] bg-[#dc3545] dark:bg-[#19172c] text-[#a8b0d3]",
      //header: "bg-danger text-white",
      //footer: "border-t-[1px] border-[#292f46]",
      //closeButton: "hover:bg-white/5 active:bg-white/10",
    }}
  >
    <ModalContent>
      {(onClose) => (
        <>
       
            <div className="flex ">
              <div className="bg-[#dc3545] h-fill  w-1/12 text-white font-black border border-[#dc3545] flex items-center justify-center">
               <XIcon className="p-auto" />
              </div>
              <div className="bg-[#fff1f1] w-11/12 border border-[#dc3545] text-[#dc3545] p-2">
                <h1>Ups!</h1>
                <p className="text-sm">Parece que tuvimos un problema</p>
              </div>
            </div>
      
        </>
      )}
    </ModalContent>
  </Modal>
  );
};

export default FailAlert;