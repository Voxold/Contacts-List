import { useState } from "react";

const ContactForm = ({}) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            firstName,
            lastName,
            email
        }
        const url = "http://127.0.0.1:5000/create_contact"
        const options = {
            method: "POST",
            headres: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
    }

    return (<form onSubmit={onSubmit}>

        {/* for fist name */}
        <div>
            <label htmlFor="firstName">Fist Name:</label>
            <input 
            type="text" 
            id="fistName" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        {/* for last name */}
        <div>
            <label htmlFor="lastName">Last Name:</label>
            <input 
            type="text" 
            id="lastName" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)}/>
        </div>

        {/* for email */}
        <div>
            <label htmlFor="email">Email:</label>
            <input 
            type="text" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        {/* for buttons */}
        <button type="submit">Create Contact</button>

    </form>);
};

export default ContactForm