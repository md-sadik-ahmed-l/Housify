import { ownerRole } from '@/lib/core/session';
import React from 'react';
export const dynamic = 'force-dynamic';

const TenantLayout = async({children}) => {

    await ownerRole('tenant')

    return children;
};

export default TenantLayout;