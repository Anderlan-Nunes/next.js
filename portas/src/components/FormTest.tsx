import { useState } from "react";

export default function Login() {

    const [form, setForm] = useState([
        { typeInput: "input", type: "text", placeholder: "Nome", value: "" },
        { typeInput: "input", type: "email", placeholder: "Sobrenome", value: "" },
        { typeInput: "input", type: "email", placeholder: "Email", value: "" },
        { typeInput: "input", type: "email", placeholder: "Telefone", value: "" },
    ])

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...form];
        list[index][name] = value;
        setForm(list);
        console.log('form', form)
    };

    return (
        {
            form.map((item, index) => (
                <div key={index} >
                    <Input type={item.type} placeholder={item.placeholder}
                        value={item.value} id={item.value}
                        onChange={(e) => handleInputChange(e, index)} />
                </div>
            ))
        }

    )
}