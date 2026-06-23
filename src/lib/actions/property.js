'use server'

import { serverMutation } from "../core/server";


export const createProperty = async (newPropertyData) => {
    return serverMutation('/api/property', newPropertyData);
}