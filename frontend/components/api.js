import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signIn = (credentials) => API.post("/auth/signin", credentials);
export const fetchExercises = () => API.get("/exercises");
