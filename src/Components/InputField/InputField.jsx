import React from 'react'

function InputField(props) {
  return (
    <>
 <div class="mb-5">
    <label for={props.for} class="block mb-2 text-sm font-medium text-gray-400 dark:text-white">{props.label} {props.isRequired && <i class="fa-solid fa-asterisk text-red-700"></i> }</label>
    <input type={props.type} id={props.id} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
 </div>
    </>
  )
}

export default InputField