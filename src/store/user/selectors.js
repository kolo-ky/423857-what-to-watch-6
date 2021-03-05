import {nameSpace} from "../root-reducer";

export const getAuth = (state) => state[nameSpace.USER].authorizationStatus;
export const getUser = (state) => state[nameSpace.USER].user;
