import React from 'react'

const Contacts = () => {
    const contacts = [
        { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "567-890-1234" },
        { id: 4, name: "Alice Brown", email: "alice@example.com", phone: "234-567-8901" },
        { id: 5, name: "hans shah", email: "hans@example.com", phone: "123-456-7890" },
        { id: 6, name: "shan Smith", email: "shan@example.com", phone: "987-654-3210" },
        { id: 7, name: "Usama Johnson", email: "usama@example.com", phone: "567-890-1234" },
        { id: 8, name: "ali Brown", email: "ali@example.com", phone: "234-567-8901" },

    ];

    return (
        <div>


            <div className="bg-gray-100 min-h-screen p-4 ">
                <h1 className="text-3xl font-semibold mb-4 w-full text-center text-purple-600">Contacts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg text-purple-600"
                        >
                            <h2 className="text-lg font-semibold text-purple-600">{contact.name}</h2>
                            <p className=" text-purple-600">Email: {contact.email}</p>
                            <p className=" text-purple-600">Phone: {contact.phone}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Contacts