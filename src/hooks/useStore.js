import create from 'zustand';

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
    window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
    cubes: getLocalStorage("world") || [{pos: [0, 0, 0], type: "wood" }, 
    {pos: [0, 0, 0], type: "dirt"},
    {pos: [0, 0, 0], type: "grass"},
    {pos: [0, 0, 0], type: "glass"},
    {pos: [0, 0, 0], type: "log"}, ],
    addCube: (x, y, z, type) =>
        set(state => ({
            cubes: [...state.cubes, {
                pos: [x, y, z],
                type
            }],
        })),
    removeCube: (x, y, z) => set((state) => state.cubes.filter(cube => cube.x !== x || cube.y || cube.z !== z)),
    texture: "wood",
    setTexture: (texture) => set(state => ({
        texture
    })),
    saveWorld: () => set((state => {
        setLocalStorage("world", state.cubes)
    })),
}))