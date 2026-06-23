import React from 'react';
import AddPropertyForm from './AddPropertyForm';
import { getUserSession } from '@/lib/core/session';

const AddNewPropertyPage = async() => {

    const user = await getUserSession();

    // console.log(user?.id)
    return (
        <div>
            <AddPropertyForm user={user} ></AddPropertyForm>
        </div>
    );
};

export default AddNewPropertyPage;