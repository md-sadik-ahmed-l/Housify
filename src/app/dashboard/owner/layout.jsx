import { ownerRole } from '@/lib/core/session';
import React from 'react';

const OwnerLayout = async({children}) => {

    await ownerRole('owner')

    return children;
};

export default OwnerLayout;