import { ownerRole } from '@/lib/core/session';
import React from 'react';

const TenantLayout = async({children}) => {

    await ownerRole('tenant')

    return children;
};

export default TenantLayout;