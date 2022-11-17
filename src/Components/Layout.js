import React, { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";


const Layout = () => {

    const [editFormLayout, seteditFormLayout] = useState(false)

    const handleEdit = () => {
        seteditFormLayout(true)
    }


    return (
        <div>
            <AddTask editFormLayout={editFormLayout}/>
            <ListTask handleEdit={handleEdit} editFormLayout={editFormLayout}/>
        </div>
    )
}


export default Layout