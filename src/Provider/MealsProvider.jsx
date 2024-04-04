import React,{useState} from 'react'


const MealsContext = React.createContext();
const todaysMeals = ["Eggs with yogurt", "Chicken with rice","Snack"]
const MealsProvider = ({children}) => {
    const [meals, setMeals] = React.useState(todaysMeals);

return (

<MealsContext.Provider value={{meals}}>
    {children}
</MealsContext.Provider>
);
};

export const useMealsListContext = () => {
    const context = React.useContext(MealsContext);
    if (!context){
        throw new Error("useMealsListContext must be used within a MealsProvider");
    }
    return context;
    };

    export default MealsProvider;




