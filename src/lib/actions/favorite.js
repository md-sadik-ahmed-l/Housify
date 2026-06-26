'use server'

import { serverMutation } from "../core/server";


export const createFavorite = async (newFavoriteData) => {
    return serverMutation('/api/add/favorites', newFavoriteData);
}
