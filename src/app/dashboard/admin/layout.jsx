import { ownerRole } from '@/lib/core/session';
import React from 'react';

const OwnerLayout = async({children}) => {

    await ownerRole('admin')

    return children;
};

export default OwnerLayout;