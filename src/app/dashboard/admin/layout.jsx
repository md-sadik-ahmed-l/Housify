import { ownerRole } from '@/lib/core/session';
import React from 'react';
export const dynamic = 'force-dynamic';

const OwnerLayout = async({children}) => {

    await ownerRole('admin')

    return children;
};

export default OwnerLayout;