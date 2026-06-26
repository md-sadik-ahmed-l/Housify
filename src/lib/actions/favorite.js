'use server'

import { serverDelete, serverMutation } from "../core/server";


export const createFavorite = async (newFavoriteData) => {
    return serverMutation('/api/add/favorites', newFavoriteData);
}


export const deleteFavorite = async (tenantUserId, propertyId) => {
    return serverDelete(`/api/favorites/remove?tenantUserId=${tenantUserId}&propertyId=${propertyId}`);
}
