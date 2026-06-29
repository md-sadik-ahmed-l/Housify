import { ownerRole } from '@/lib/core/session';
import React from 'react';
export const dynamic = 'force-dynamic';

const OwnerLayout = async({children}) => {

    await ownerRole('owner')

    return children;
};

export default OwnerLayout;