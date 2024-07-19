import React, { useRef } from 'react'
import Input from './Input'
import  Modal  from './Modal';

const NewProjects = ({onAdd,onCancel}) => {

  const modal=useRef();

  const title=useRef();
  const description=useRef();
  const dueDate=useRef();

  function handleSaveBtn(){
    const enteredTitle=title.current.value
    const enteredDescription=description.current.value
    const enteredDueDate=dueDate.current.value

    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() ===''){
      modal.current.open()
      return;
    }

    onAdd({
      title:enteredTitle,
      description:enteredDescription,
      dueDate:enteredDueDate})
  }

  return (
    <>
    <Modal ref={modal} btnCaption={'Got it!'}>
      <h2 className="text-xl font-bold text-stone-900 my-4">Invalid Input</h2>
      <p className="text-stone-800 mb-4">You have not provided every value!!</p>
      <p className="text-stone-800 mb-4">You need to fill every value given in the form.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-center gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
            <li><button onClick={handleSaveBtn} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>

        <div>
            <Input label={'Title'} ref={title}/>
            <Input label={'Description'} textarea={true} ref={description}/>
            <Input label={'Due Date'} ref={dueDate} type={'date'}/>

        </div>
    </div>
    </>

  )
}

export default NewProjects