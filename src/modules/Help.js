import React from 'react'

const Help = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <h1 className="text-3xl font-semibold mb-4 text-purple-600 w-full text-center">Help</h1>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2 text-purple-600">Frequently Asked Questions</h2>
                <div className="mb-2">
                    <h3 className="text-md font-semibold text-purple-600">How do I use the Todo App?</h3>
                    <p className="text-purple-600">
                        To use the Todo App, start by adding tasks you need to complete. You can add, edit, or delete tasks. Once a task is completed, mark it as done.
                    </p>
                </div>
                <div className="mb-2">
                    <h3 className="text-md font-semibold text-purple-600">How do I prioritize tasks?</h3>
                    <p className="text-purple-600">
                        You can prioritize tasks by setting due dates or using labels. Simply click on a task to edit its details.
                    </p>
                </div>
                <div className="mb-2">
                    <h3 className="text-md font-semibold text-purple-600">Can I share tasks with others?</h3>
                    <p className="text-purple-600">
                        Currently, the app doesn't support task sharing. However, you can share the task details with others manually.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Help