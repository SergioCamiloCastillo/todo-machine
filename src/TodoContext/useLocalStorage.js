import React,{useEffect, useState} from "react";
function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    //no hay datos en localstorage
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = [];
                } else {
                    //Nuestro localstaorage tiene datos registrados antes
                    parsedItem = JSON.parse(localStorageItem);
                }
                setItem(parsedItem);
                setLoading(false);
            } catch (err) {
                setError(err);
            }

        }, 1000);

    })




    const saveItem = (newTodos) => {

        try {
            const stringifyTodos = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifyTodos);
            setItem(newTodos);
        } catch (err) {
            setItem(err);
        }
    }
    return {
        item, saveItem, loading, error
    }
}
export {useLocalStorage}